// Generates src/data/moves.ts from Serebii's Champions move list.
//
// Run manually:  node scripts/build-moves.mjs
//
// Champions hand-picks its move pool and rebalances the numbers, so PokeAPI is the
// wrong source for everything except slugs — its PP disagrees with Champions on
// ~80% of moves. Serebii's Champions page is the authority here; PokeAPI is used
// only to validate the slugs we derive, and to fill the handful of blank effects.
//
// Slugs matter because they're the join key: learnsets come from PokeAPI's
// /pokemon/{form}.moves, so a slug that doesn't match theirs would silently never
// appear for any Pokémon. Hence the validation pass rather than trusting slugify().

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SEREBII = "https://www.serebii.net/pokemonchampions/moves.shtml";
const API = "https://pokeapi.co/api/v2";
const CONCURRENCY = 10;
// Serebii writes accuracy as 101 for moves that cannot miss
const NEVER_MISSES = "101";
// If the page ever changes shape, fail loudly instead of writing a stub file
const MIN_EXPECTED_MOVES = 400;

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/moves.ts");

async function getJson(url, attempt = 1) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status} ${url}`);
    return await response.json();
  } catch (error) {
    if (attempt >= 3) throw error;
    await new Promise((r) => setTimeout(r, 500 * attempt));
    return getJson(url, attempt + 1);
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

const NAMED_ENTITIES = {
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
  eacute: "é", egrave: "è", ntilde: "ñ", rsquo: "’", lsquo: "‘",
  ldquo: "“", rdquo: "”", mdash: "—", ndash: "–", hellip: "…",
};

function decodeEntities(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (whole, name) => NAMED_ENTITIES[name.toLowerCase()] ?? whole);
}

// A table cell's visible text: drop tags, decode entities, collapse whitespace.
function cellText(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

// "Will-O-Wisp" -> "will-o-wisp", "King's Shield" -> "kings-shield".
// Matches PokeAPI's slug scheme, which the validation pass below confirms.
function slugify(label) {
  return label
    .toLowerCase()
    .replace(/[.,'’]/g, "")
    .replace(/\s+/g, "-");
}

function parseNumber(value, sentinel) {
  if (value === "" || value === "--" || value === sentinel) return null;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? null : parsed;
}

console.log("Fetching Serebii's Champions move list...");
const response = await fetch(SEREBII, { headers: { "User-Agent": "Mozilla/5.0" } });
if (!response.ok) throw new Error(`${response.status} ${SEREBII}`);
// The page is served as ISO-8859-1, so decoding as UTF-8 would mangle "Pokémon"
const html = new TextDecoder("iso-8859-1").decode(await response.arrayBuffer());

// The move table is the last one on the page; the first is the article blurb.
const table = html.slice(html.lastIndexOf("<table"));

const scraped = [];
for (const row of table.split(/<tr[^>]*>/i).slice(1)) {
  const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map((m) => m[1]);
  // Header and layout rows have no move link in the first cell
  if (cells.length < 7 || !/attackdex-champions\//i.test(cells[0])) continue;

  const label = cellText(cells[0]);
  scraped.push({
    name: slugify(label),
    label,
    // Type and category are shown as sprites, so the filename is the value
    type: (cells[1].match(/type\/([a-z]+)\.gif/i) ?? [])[1] ?? "",
    // Serebii labels status moves "other"; keep PokeAPI's vocabulary
    damageClass: ((cells[2].match(/type\/([a-z]+)\.png/i) ?? [])[1] ?? "").replace("other", "status"),
    pp: parseNumber(cellText(cells[3])),
    power: parseNumber(cellText(cells[4])),
    accuracy: parseNumber(cellText(cells[5]), NEVER_MISSES),
    description: cellText(cells[6]),
  });
}

if (scraped.length < MIN_EXPECTED_MOVES) {
  throw new Error(`Only parsed ${scraped.length} moves — Serebii's markup has probably changed.`);
}
console.log(`Parsed ${scraped.length} moves.`);

// Validate every derived slug against PokeAPI, because a wrong one wouldn't throw —
// it would just quietly never match a learnset entry.
const index = await getJson(`${API}/move?limit=100000`);
const validSlugs = new Set(index.results.map((entry) => entry.name));
const unknown = scraped.filter((move) => !validSlugs.has(move.name));
if (unknown.length > 0) {
  console.log(`\nWARNING: ${unknown.length} slug(s) not found in PokeAPI — these will never`);
  console.log("match a learnset and need a manual alias:");
  unknown.forEach((move) => console.log(`  ${move.label} -> ${move.name}`));
}

// Serebii leaves the effect column blank for moves that just deal damage. Borrow
// PokeAPI's wording for those rather than shipping an empty string.
const blank = scraped.filter((move) => move.description === "" && validSlugs.has(move.name));
console.log(`\nFilling ${blank.length} blank description(s) from PokeAPI...`);
await pool(blank, CONCURRENCY, async (move) => {
  const detail = await getJson(`${API}/move/${move.name}`);
  const effect = detail.effect_entries.find((e) => e.language.name === "en");
  if (effect?.short_effect) {
    move.description = effect.short_effect.replaceAll("$effect_chance", String(detail.effect_chance));
  }
});

scraped.sort((a, b) => a.label.localeCompare(b.label));

const file = `// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-moves.mjs
//
// Champions' hand-picked move pool, scraped from Serebii and bundled so the move
// picker can filter locally instead of making a request per move. Sorted by label.
// Every number here is Champions', not mainline - the PP scale in particular is
// completely different.

export interface MoveSummary {
  /** PokeAPI slug - submitted in a set's \`moves\` array, and the join key for learnsets */
  name: string;
  /** Display name, e.g. "Double-Edge" */
  label: string;
  /** Elemental type slug - same vocabulary as Species.types, so TypeDisplay takes it as-is */
  type: string;
  /** "physical" | "special" | "status" */
  damageClass: string;
  /** null for status moves */
  power: number | null;
  /** null for moves that never miss */
  accuracy: number | null;
  pp: number | null;
  /** Serebii's effect text, or PokeAPI's short_effect for plain damaging moves */
  description: string;
}

export const MOVES: MoveSummary[] = ${JSON.stringify(scraped, null, 2)};
`;

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, file, "utf8");

console.log(`\nWrote ${scraped.length} moves to src/data/moves.ts`);
