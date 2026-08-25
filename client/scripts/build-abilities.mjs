// Generates src/data/abilities.ts from PokeAPI.
//
// Run manually:  node scripts/build-abilities.mjs
//
// The output is committed, so the ability picker can show descriptions straight
// from the bundle instead of making a request every time the modal opens.
// Re-run this when the Champions pokedex changes.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const API = "https://pokeapi.co/api/v2";
const POKEDEX = "champions";
// Keep a modest number of requests in flight rather than firing all of them at once
const CONCURRENCY = 8;

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/abilities.ts");

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

// Last-resort display label if PokeAPI has no English name. "solar-power" -> "Solar Power"
function toLabel(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function englishName(json) {
  return json.names.find((n) => n.language.name === "en")?.name ?? toLabel(json.name);
}

// effect_entries carries the mechanical wording but is empty for a lot of newer
// abilities, so fall back to the most recent English flavour text. Both arrive
// with hard line breaks and form feeds baked in from the games' text boxes.
function description(json) {
  const effect = json.effect_entries.find((e) => e.language.name === "en");
  if (effect) return tidy(effect.short_effect || effect.effect);

  const flavour = json.flavor_text_entries.filter((f) => f.language.name === "en");
  const latest = flavour[flavour.length - 1];
  return latest ? tidy(latest.flavor_text) : "";
}

function tidy(text) {
  return text.replace(/[\n\f­]/g, " ").replace(/\s+/g, " ").trim();
}

// Runs worker over items with at most `limit` running concurrently
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

const dex = await getJson(`${API}/pokedex/${POKEDEX}`);
const names = dex.pokemon_entries.map((entry) => entry.pokemon_species.name);

// Every variety, not just the playable ones. Regional forms have abilities the
// default form doesn't (Alolan Ninetales gets Snow Cloak), and letting a couple
// of unreachable gmax abilities ride along is cheaper than duplicating the form
// suffix rules from src/data/forms.ts here and having the two drift apart.
console.log(`Collecting ability slugs from ${names.length} species...`);

let speciesDone = 0;
const slugsPerSpecies = await pool(names, CONCURRENCY, async (name) => {
  const species = await getJson(`${API}/pokemon-species/${name}`);
  const forms = await Promise.all(
    species.varieties.map((v) => getJson(v.pokemon.url))
  );

  speciesDone++;
  if (speciesDone % 25 === 0 || speciesDone === names.length) {
    console.log(`  ${speciesDone}/${names.length}`);
  }

  return forms.flatMap((form) => form.abilities.map((a) => a.ability.name));
});

const slugs = [...new Set(slugsPerSpecies.flat())].sort();

console.log(`\nFetching ${slugs.length} abilities...`);

let done = 0;
const abilities = await pool(slugs, CONCURRENCY, async (slug) => {
  const json = await getJson(`${API}/ability/${slug}`);
  done++;
  if (done % 25 === 0 || done === slugs.length) console.log(`  ${done}/${slugs.length}`);

  return {
    name: slug,
    label: englishName(json),
    description: description(json),
  };
});

abilities.sort((a, b) => a.label.localeCompare(b.label));

const file = `// GENERATED FILE - do not edit by hand
// Rebuild with: node scripts/build-abilities.mjs
//
// Every ability reachable from the Champions dex, bundled so the ability picker
// can show descriptions without a request per ability. Sorted by label

export interface AbilitySummary {
  /** PokeAPI slug - this is what gets submitted as \`ability\` */
  name: string;
  /** Display name, e.g. "Solar Power" */
  label: string;
  /** PokeAPI's short_effect, falling back to the latest English flavour text */
  description: string;
}

export const ABILITIES: AbilitySummary[] = ${JSON.stringify(abilities, null, 2)};
`;

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, file, "utf8");

console.log(`\nWrote ${abilities.length} abilities to src/data/abilities.ts`);
