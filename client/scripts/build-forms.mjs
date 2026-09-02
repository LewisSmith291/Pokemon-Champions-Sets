// Generates src/data/formData.ts from PokeAPI.
//
// Run manually:  node scripts/build-forms.mjs
//
// species.ts carries an id, types and base stats for each species' DEFAULT form
// only. Mega Charizard X and Alolan Ninetales have their own dex ids, typings and
// stats, which CreateSet gets by fetching /pokemon/{form} whenever the form
// changes. That is fine for one set being edited, but the showcase renders
// several cards at once and a set page shouldn't wait on PokeAPI to draw a
// sprite - so every selectable form gets bundled here instead.
//
// Depends on src/data/species.ts, so run build-species.mjs first.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { SPECIES } from "../src/data/species.ts";

const API = "https://pokeapi.co/api/v2";
const CONCURRENCY = 8;

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/formData.ts");

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
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

console.log(`Resolving forms for ${SPECIES.length} species...`);

const failed = [];

// Only -gmax is dropped, the same filter build-sprites.mjs uses. Deliberately
// looser than the form picker's isValidForm allowlist: importing that here isn't
// possible (forms.ts imports "./species" extensionless, which Vite resolves and
// node does not), and copying its suffix list would be a second copy of a
// vocabulary that has already drifted once. A superset costs a few unused keys;
// a subset would mean a form the picker offers has no sprite or stats here.
const formsPerSpecies = await pool(SPECIES, CONCURRENCY, async (species) => {
  try {
    const data = await getJson(`${API}/pokemon-species/${species.name}`);
    return data.varieties
      .map((variety) => variety.pokemon.name)
      .filter((name) => !name.includes("-gmax"));
  } catch (error) {
    failed.push(`forms for ${species.name}: ${error.message}`);
    return [];
  }
});

const formNames = [...new Set(formsPerSpecies.flat())].sort();

console.log(`Fetching ${formNames.length} forms...`);

let done = 0;
const entries = await pool(formNames, CONCURRENCY, async (name) => {
  try {
    const form = await getJson(`${API}/pokemon/${name}`);
    done++;
    if (done % 50 === 0 || done === formNames.length) console.log(`  ${done}/${formNames.length}`);

    return [name, {
      // The FORM's dex id, which is what public/sprites/{id}.png is named after
      id: form.id,
      types: form.types.map((t) => t.type.name),
      // Same shape as species.stats and as baseStats in CreateSet
      stats: Object.fromEntries(form.stats.map((s) => [s.stat.name, s.base_stat])),
    }];
  } catch (error) {
    failed.push(`${name}: ${error.message}`);
    return null;
  }
});

const formData = Object.fromEntries(entries.filter(Boolean));

const file = `// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-forms.mjs
//
// Every selectable form's dex id, typing and base stats, keyed by the same slug
// a set stores in its \`form\` column. species.ts only covers default forms, so
// this is what lets a stored set be rendered - sprite, types and all - without a
// PokeAPI round trip per card.

export interface FormData {
  /** The form's own dex id: venusaur-mega is 10033. Names public/sprites/{id}.png */
  id: number;
  /** Mega and regional forms often re-type, so this is not the species' typing */
  types: string[];
  /** Keyed by PokeAPI stat slug - same shape as Species.stats and baseStats in CreateSet */
  stats: Record<string, number>;
}

export const FORM_DATA: Record<string, FormData> = ${JSON.stringify(formData, null, 2)};

/** undefined for a slug that isn't a selectable form - callers must handle it */
export function formData(slug: string): FormData | undefined {
  return FORM_DATA[slug];
}
`;

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, file, "utf8");

console.log(`\nWrote ${Object.keys(formData).length} forms to src/data/formData.ts`);
if (failed.length) {
  console.log(`\n${failed.length} failed:`);
  for (const failure of failed) console.log(`  ${failure}`);
}
