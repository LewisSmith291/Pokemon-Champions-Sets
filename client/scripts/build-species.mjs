// Generates src/data/species.ts from PokeAPI.
//
// Run manually:  node scripts/build-species.mjs
//
// The output is committed, so the app ships the whole Champions dex in its bundle
// and the species picker can filter in memory instead of making one request per
// species. Re-run this when the Champions pokedex changes.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const API = "https://pokeapi.co/api/v2";
const POKEDEX = "champions";
// Keep a modest number of requests in flight rather than firing all 208 at once
const CONCURRENCY = 8;

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/species.ts");

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

// PokeAPI slug -> display label. "ho-oh" -> "Ho-Oh"
function toLabel(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("-");
}

// Most species share a name with their default form, but some don't
// ("deoxys" has no /pokemon/deoxys — it's deoxys-normal). Fall back to asking
// the species which of its varieties is the default one.
async function getDefaultForm(name) {
  try {
    return await getJson(`${API}/pokemon/${name}`);
  } catch {
    const species = await getJson(`${API}/pokemon-species/${name}`);
    const fallback = species.varieties.find((v) => v.is_default) ?? species.varieties[0];
    return getJson(fallback.pokemon.url);
  }
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

console.log(`Fetching ${names.length} species from the "${POKEDEX}" pokedex...`);

let done = 0;
const species = await pool(names, CONCURRENCY, async (name) => {
  const form = await getDefaultForm(name);
  done++;
  if (done % 25 === 0 || done === names.length) console.log(`  ${done}/${names.length}`);

  return {
    name,
    label: toLabel(name),
    // The default form's id, which is what the sprite filename uses
    id: form.id,
    types: form.types.map((t) => t.type.name),
    abilities: form.abilities.filter((a) => !a.is_hidden).map((a) => a.ability.name),
    hiddenAbility: form.abilities.find((a) => a.is_hidden)?.ability.name ?? null,
    // Same shape as baseStats in CreateSet, so selecting a species needs no conversion
    stats: Object.fromEntries(form.stats.map((s) => [s.stat.name, s.base_stat])),
  };
});

species.sort((a, b) => a.id - b.id);

const file = `// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-species.mjs
//
// The full Champions dex, bundled so the species picker can filter locally
// instead of making a request per species.

export interface Species {
  /** PokeAPI slug - this is what gets submitted as \`species\` */
  name: string;
  /** Display name, e.g. "Ho-Oh" */
  label: string;
  /** Dex id of the default form, used to build the sprite URL */
  id: number;
  types: string[];
  abilities: string[];
  hiddenAbility: string | null;
  /** Keyed by PokeAPI stat slug - same shape as baseStats in CreateSet */
  stats: Record<string, number>;
}

export const SPECIES: Species[] = ${JSON.stringify(species, null, 2)};
`;

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, file, "utf8");

console.log(`\nWrote ${species.length} species to src/data/species.ts`);
