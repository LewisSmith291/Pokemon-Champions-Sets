// Downloads every Champions-dex sprite into public/sprites/{id}.png.
//
// Run manually:  node scripts/build-sprites.mjs
//
// The files are committed so the app serves them from its own origin. Hotlinking
// raw.githubusercontent.com for 200+ images trips GitHub's abuse protection,
// which responds 404 - so the sprites appear to be missing when they aren't.
//
// Depends on src/data/species.ts, so run build-species.mjs first.

import { writeFile, mkdir, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { SPECIES } from "../src/data/species.ts";

const SPRITE_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
// Small enough to stay well clear of the rate limiting that broke the hotlinked version
const CONCURRENCY = 6;

const OUT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "../public/sprites");

async function download(id) {
  const response = await fetch(`${SPRITE_BASE}/${id}.png`);
  if (!response.ok) throw new Error(`${response.status} for id ${id}`);
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

console.log(`Downloading ${SPECIES.length} sprites...`);

let done = 0;
const failed = [];

const sizes = await pool(SPECIES, CONCURRENCY, async (species) => {
  try {
    const size = await download(species.id);
    done++;
    if (done % 25 === 0 || done === SPECIES.length) console.log(`  ${done}/${SPECIES.length}`);
    return size;
  } catch (error) {
    failed.push(`${species.name} (${species.id}): ${error.message}`);
    return 0;
  }
});

const total = sizes.reduce((sum, size) => sum + size, 0);
const written = (await readdir(OUT_DIR)).length;

console.log(`\nWrote ${written} files to public/sprites (${(total / 1024 / 1024).toFixed(2)} MB)`);
if (failed.length) {
  console.log(`\n${failed.length} failed:`);
  for (const failure of failed) console.log(`  ${failure}`);
}
