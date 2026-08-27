// Downloads every selectable Champions sprite into public/sprites/{id}.png.
//
// Run manually:  node scripts/build-sprites.mjs
//
// The files are committed so the app serves them from its own origin. Hotlinking
// raw.githubusercontent.com for 200+ images trips GitHub's abuse protection,
// which responds 404/429 - so the sprites appear to be missing when they aren't.
// The download itself goes through jsDelivr's mirror of the same repo for the
// same reason: it is a CDN, so it does not rate limit a bulk run.
//
// Covers every form the picker can reach, not just the default one - selecting a
// mega in CreateSet asks for that form's own dex id (venusaur-mega is 10033), so
// downloading only default ids leaves every mega with a broken image.
//
// Depends on src/data/species.ts, so run build-species.mjs first.

import { writeFile, mkdir, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { SPECIES } from "../src/data/species.ts";

const API = "https://pokeapi.co/api/v2";
const SPRITE_BASE = "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon";
const CONCURRENCY = 4;
const ATTEMPTS = 5;

const OUT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "../public/sprites");

const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

// jsDelivr throttles a bulk run with 403s, and answers 404 for a file that does
// exist while its edge cache is cold - both clear on a retry, so treat every
// failure as transient and back off. A genuine 404 just burns the attempts.
async function fetchWithRetry(url, attempts = ATTEMPTS) {
  for (let attempt = 1; ; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (response.ok) return response;
      if (attempt === attempts) throw new Error(`${response.status} ${url}`);
    } catch (error) {
      if (attempt === attempts) throw error;
    }
    await sleep(500 * 2 ** (attempt - 1));
  }
}

async function getJson(url) {
  const response = await fetchWithRetry(url);
  return response.json();
}

// A variety's url ends in its dex id: ".../pokemon/10033/" -> 10033
function idFromUrl(url) {
  return Number(url.split("/").filter(Boolean).pop());
}

// Every form CreateSet can switch to. Mirrors the -gmax filter it applies to the
// form list, so we don't download sprites the app will never ask for.
async function selectableIds(species) {
  const data = await getJson(`${API}/pokemon-species/${species.name}`);
  return data.varieties
    .filter((variety) => !variety.pokemon.name.includes("-gmax"))
    .map((variety) => idFromUrl(variety.pokemon.url));
}

async function download(id) {
  const response = await fetchWithRetry(`${SPRITE_BASE}/${id}.png`);
  const bytes = Buffer.from(await response.arrayBuffer());
  await writeFile(resolve(OUT_DIR, `${id}.png`), bytes);
  return bytes.length;
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

await mkdir(OUT_DIR, { recursive: true });

console.log(`Resolving forms for ${SPECIES.length} species...`);

const failed = [];

const idsPerSpecies = await pool(SPECIES, CONCURRENCY, async (species) => {
  try {
    return await selectableIds(species);
  } catch (error) {
    failed.push(`forms for ${species.name}: ${error.message}`);
    // Fall back to the default form so a species is never dropped entirely
    return [species.id];
  }
});

const ids = [...new Set(idsPerSpecies.flat())].sort((a, b) => a - b);

// jsDelivr throttles harder the longer a run goes, so a cold run usually leaves a
// handful of ids behind. Skipping what is already on disk lets a re-run pick up
// only those instead of re-fetching everything. Pass --force to refresh them all.
const force = process.argv.includes("--force");
const onDisk = new Set(await readdir(OUT_DIR));
const wanted = force ? ids : ids.filter((id) => !onDisk.has(`${id}.png`));

if (wanted.length) {
  console.log(`Downloading ${wanted.length} sprites (${ids.length - wanted.length} already on disk)...`);
} else {
  console.log(`\nAll ${ids.length} sprites already in public/sprites.`);
}

let done = 0;

// Not an early exit even when there is nothing to fetch: the female pass below
// still has to run, and on a re-run that is usually the only phase with work.
const sizes = await pool(wanted, CONCURRENCY, async (id) => {
  try {
    const size = await download(id);
    done++;
    if (done % 25 === 0 || done === wanted.length) console.log(`  ${done}/${wanted.length}`);
    return size;
  } catch (error) {
    failed.push(`id ${id}: ${error.message}`);
    return 0;
  }
});

// --- female sprites ---------------------------------------------------------
// Some species look different by gender without being a separate variety
// (Pikachu's tail, Venusaur's flower). Those need a second file, served from
// sprites/female/{id}.png. Meowstic and Basculegion are excluded: their genders
// are separate varieties with their own dex ids, so the loop above already has
// them - and the repo has no sprites/female entry for those ids.
//
// Coverage is patchy for the rarer forms (Mega Venusaur has one, most megas
// don't), so a 404 here is expected rather than a failure. Fewer attempts,
// because the retry/backoff exists for jsDelivr throttling, not for real 404s -
// and CreateSet falls back to the shared sprite when a file is missing.
const FEMALE_DIR = resolve(OUT_DIR, "female");
await mkdir(FEMALE_DIR, { recursive: true });

const femaleIds = [...new Set(
  idsPerSpecies
    .filter((_, index) => SPECIES[index].hasGenderDifferences && !SPECIES[index].hasGenderForms)
    .flat()
)].sort((a, b) => a - b);

const femaleOnDisk = new Set(await readdir(FEMALE_DIR));
const femaleWanted = force ? femaleIds : femaleIds.filter((id) => !femaleOnDisk.has(`${id}.png`));

console.log(`\nProbing ${femaleWanted.length} female sprites...`);

let femaleFound = 0;
const femaleSizes = await pool(femaleWanted, CONCURRENCY, async (id) => {
  try {
    const response = await fetchWithRetry(`${SPRITE_BASE}/female/${id}.png`, 2);
    const bytes = Buffer.from(await response.arrayBuffer());
    await writeFile(resolve(FEMALE_DIR, `${id}.png`), bytes);
    femaleFound++;
    return bytes.length;
  } catch {
    return 0; // no female variant for this form - expected, not an error
  }
});

console.log(`  ${femaleFound}/${femaleWanted.length} had a female variant`);

const total = [...sizes, ...femaleSizes].reduce((sum, size) => sum + size, 0);
const written = (await readdir(OUT_DIR)).length;

console.log(`\nWrote ${written} files to public/sprites (${(total / 1024 / 1024).toFixed(2)} MB)`);
if (failed.length) {
  console.log(`\n${failed.length} failed:`);
  for (const failure of failed) console.log(`  ${failure}`);
}
