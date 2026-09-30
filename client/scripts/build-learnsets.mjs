// Generates src/data/learnsets.ts from Serebii's Champions Pokédex.
//
// Run manually:  node scripts/build-learnsets.mjs
//
// Champions hands out its own learnsets - Grapploct gets Mach Punch and Storm
// Throw, which it can't learn in any mainline game - so PokeAPI's /pokemon/{form}
// moves are the wrong source. Serebii's per-species Champions pages are the
// authority, the same site build-moves.mjs scrapes the move list from.
//
// Depends on src/data/species.ts, formData.ts and moves.ts, so run
// build-species.mjs, build-forms.mjs and build-moves.mjs first.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { SPECIES } from "../src/data/species.ts";
import { FORM_DATA } from "../src/data/formData.ts";
import { MOVES } from "../src/data/moves.ts";

const SEREBII = "https://www.serebii.net";
const INDEX = `${SEREBII}/pokemonchampions/pokemon.shtml`;
// Serebii is one site rather than an API, so go gently
const CONCURRENCY = 4;

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/learnsets.ts");

// Each move table on a species page is headed with which form it belongs to.
// The value is the suffix that heading adds to the species slug, and "" is the
// species itself. Every table is a complete learnset, not a list of extras on
// top of the first one.
//
// A heading missing from here stops the script - a new one means Serebii has
// added a form, and guessing which of ours it belongs to would be worse.
const HEADINGS = {
  "Standard Moves": "",
  "Alola Form Standard Moves": "-alola",
  "Galarian Form Standard Moves": "-galar",
  "Hisuian Form Standard Moves": "-hisui",
  // Tauros has no plain -paldea form; the Combat Breed is the unmarked one
  "Paldean Form Standard Moves": "-paldea-combat-breed",
  "Standard Moves - Blaze Breed": "-paldea-blaze-breed",
  "Standard Moves - Aqua Breed": "-paldea-aqua-breed",
  "Standard Moves - Male": "-male",
  "Standard Moves - Female": "-female",
  // Floette's only table - Mega Floette evolves from the Eternal Flower form
  "Standard Moves - Eternal Floette": "",
  "Standard Moves - Midnight Form": "-midnight",
  "Standard Moves - Dusk Form": "-dusk",
  "Standard Moves - Low Key Form": "-low-key",
};

// Rotom's appliance moves: one table listing each move with the form that
// learns it, on top of plain Rotom's full set
const SPECIAL_HEADING = "Special Moves";

async function getText(url, attempt = 1) {
  try {
    const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!response.ok) throw new Error(`${response.status} ${url}`);
    // Served as ISO-8859-1, same as the move list
    return new TextDecoder("iso-8859-1").decode(await response.arrayBuffer());
  } catch (error) {
    if (attempt >= 3) throw error;
    await new Promise((r) => setTimeout(r, 1000 * attempt));
    return getText(url, attempt + 1);
  }
}

async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  async function run() {
    while (next < items.length) {
      const index = next++;
      results[index] = await worker(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

// Letters and digits only. Serebii's URLs and ours disagree on punctuation -
// "farfetch'd" vs "farfetchd", "mr.mime" vs "mr-mime" - but agree once it's gone.
const squish = (text) => text.toLowerCase().replace(/[^a-z0-9]/g, "");

const cellText = (html) => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

// Serebii names moves by label; build-moves.mjs derived our slugs from those
// same labels, so the label is the join key
const SLUG_BY_LABEL = new Map(MOVES.map((move) => [move.label, move.name]));

// Map each of our species slugs to Serebii's URL slug for it
const indexHtml = await getText(INDEX);
const serebiiSlugs = [...new Set(
  [...indexHtml.matchAll(/href="\/pokedex-champions\/([^"/]+)\/"/g)].map((m) => m[1]),
)];
const serebiiBySquish = new Map(serebiiSlugs.map((slug) => [squish(slug), slug]));

const missingPages = SPECIES.filter((s) => !serebiiBySquish.has(squish(s.name)));
if (missingPages.length > 0) {
  throw new Error(`No Serebii page for: ${missingPages.map((s) => s.name).join(", ")}`);
}

const learnsets = {};
// form -> { species, moves } for Rotom-style special moves, merged in at the end
const specials = {};
const unknownMoves = new Set();

function slugsFrom(tableHtml) {
  const slugs = [];
  for (const [, label] of tableHtml.matchAll(/attackdex-champions\/[^"]+">([^<]+)</g)) {
    const slug = SLUG_BY_LABEL.get(label.trim());
    if (slug) slugs.push(slug);
    else unknownMoves.add(label.trim());
  }
  return slugs;
}

console.log(`Fetching ${SPECIES.length} Champions Pokédex pages from Serebii...`);
await pool(SPECIES, CONCURRENCY, async (species) => {
  const html = await getText(`${SEREBII}/pokedex-champions/${serebiiBySquish.get(squish(species.name))}/`);

  for (const table of html.split(/<table[^>]*class="dextable"/).slice(1)) {
    const headingCell = table.match(/class="fooevo"[^>]*>([\s\S]*?)<\/(?:td|th)>/);
    const heading = headingCell ? cellText(headingCell[1]) : "";
    if (!heading.includes("Moves")) continue;

    if (heading === SPECIAL_HEADING) {
      // Each row is one move, and the Form column's icon names who learns it:
      // "Heat Rotom" -> rotom-heat, added to the species' standard set below
      for (const row of table.split(/<tr><td rowspan="2"/).slice(1)) {
        const [slug] = slugsFrom(row);
        const owner = row.match(/icon\/[^"]+" [^>]*alt="([^"]+)"/)?.[1];
        if (!slug || !owner) continue;
        const form = `${species.name}-${squish(owner.replace(species.label, ""))}`;
        (specials[form] ??= { species: species.name, moves: [] }).moves.push(slug);
      }
      continue;
    }

    if (!(heading in HEADINGS)) {
      throw new Error(`${species.name}: unrecognised move table "${heading}" - add it to HEADINGS`);
    }
    learnsets[`${species.name}${HEADINGS[heading]}`] = slugsFrom(table);
  }
});

// Fold each special move into its form's copy of the standard set
for (const [form, { species, moves }] of Object.entries(specials)) {
  learnsets[form] = [...learnsets[species], ...moves];
}

// Every key has to be a form we actually carry, or it could never be looked up
const strays = Object.keys(learnsets).filter((key) => !(key in FORM_DATA) && !SPECIES.some((s) => s.name === key));
if (strays.length > 0) throw new Error(`Learnsets for unknown forms: ${strays.join(", ")}`);

const empty = SPECIES.filter((s) => !Object.keys(learnsets).some((k) => k === s.name || k.startsWith(`${s.name}-`)));
if (empty.length > 0) throw new Error(`No learnset found for: ${empty.map((s) => s.name).join(", ")}`);

if (unknownMoves.size > 0) {
  console.log(`\nWARNING: ${unknownMoves.size} move(s) on learnsets aren't in moves.ts, so they were`);
  console.log("left out - re-run build-moves.mjs if Champions added them:");
  [...unknownMoves].sort().forEach((label) => console.log(`  ${label}`));
}

// One line per form: a pretty-printed array would be one line per move, some
// fifteen thousand in all
const entries = Object.keys(learnsets)
  .sort()
  .map((key) => `  ${JSON.stringify(key)}: ${JSON.stringify([...new Set(learnsets[key])].sort())},`)
  .join("\n");

const file = `// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-learnsets.mjs
//
// Champions' own learnsets, scraped from Serebii's Champions Pokédex. Keyed by
// species slug, plus a form slug wherever that form learns a different set -
// regional forms, Meowstic's genders, the Tauros breeds, Rotom's appliances.
// Megas aren't listed: they learn what the form they evolve from learns.

export const LEARNSETS: Record<string, string[]> = {
${entries}
};
`;

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, file, "utf8");

console.log(`\nWrote ${Object.keys(learnsets).length} learnsets to src/data/learnsets.ts`);
