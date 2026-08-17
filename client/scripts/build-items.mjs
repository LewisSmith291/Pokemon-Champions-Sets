// Generates src/data/itemDetails.ts and downloads public/sprites/items/{slug}.png
// from Serebii's Champions itemdex.
//
// Run manually:  node scripts/build-items.mjs
//
// PokeAPI is not a usable source here. It has no endpoint at all for the
// Champions-original mega stones (barbaracite, glimmoranite, raichunite-x, ...),
// and no sprite for 35 of the 147 slugs in itemData.ts - so items sourced from it
// fall back to a grey placeholder and can never show a real icon. Serebii has the
// lot, plus the effect text, so both come from one scrape.
//
// Keyed by the slugs in src/data/itemData.ts, which stay the source of truth for
// what is selectable - run this after adding a slug there, not before.

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { HELD_ITEMS, BERRIES, MEGA_STONES } from "../src/data/itemData.ts";

const PAGE = "https://www.serebii.net/pokemonchampions/items.shtml";
const SPRITE_BASE = "https://www.serebii.net";
// Someone else's server, and only ~150 small files - no reason to hammer it
const CONCURRENCY = 3;
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64)";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = resolve(ROOT, "public/sprites/items");
const OUT_FILE = resolve(ROOT, "src/data/itemDetails.ts");

// The page lists four tables in this order. Miscellaneous is Poke Balls, tickets
// and other things that are never held in battle, so it is not scraped.
const TABLES = ["held", "mega-stone", "berry"];

const CATEGORY_SLUGS = {
  held: HELD_ITEMS,
  berry: BERRIES,
  "mega-stone": MEGA_STONES,
};

const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

function decodeEntities(text) {
  const named = {
    amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ",
    eacute: "é", Eacute: "É", rsquo: "’", lsquo: "‘",
    ldquo: "“", rdquo: "”", hellip: "…", mdash: "—", ndash: "–",
  };
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name] ?? match);
}

function toText(html) {
  return decodeEntities(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}

// Serebii strips punctuation from its filenames ("bigroot"), itemData.ts keeps
// PokeAPI's hyphens ("big-root") - compare them with everything but a-z0-9 gone.
const norm = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

async function get(url, as) {
  const response = await fetch(url, {
    headers: { "User-Agent": USER_AGENT },
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return as === "buffer" ? Buffer.from(await response.arrayBuffer()) : response.text();
}

// Runs worker over items with at most `limit` running concurrently
async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;

  async function run() {
    while (next < items.length) {
      const index = next++;
      results[index] = await worker(items[index]);
      await sleep(100);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

console.log(`Fetching ${PAGE} ...`);
const html = await get(PAGE);

// Each row is: sprite cell, linked name, effect text, location. Location is the
// shop/reward the item comes from, which the set builder has no use for.
const rows = [];
const tables = html.split(/<table class="dextable"/).slice(1);

TABLES.forEach((category, index) => {
  const table = tables[index];
  if (!table) throw new Error(`Expected a table at index ${index} for "${category}"`);

  // Skip the header row as well as the split's leading fragment
  for (const row of table.split(/<tr/).slice(2)) {
    const sprite = row.match(/<img src="(\/itemdex\/sprites\/([^"]+)\.png)"/);
    const name = row.match(/<td class="fooinfo"><a href="[^"]*">([^<]+)<\/a><\/td>/);
    const cells = row.match(/<td class="fooinfo">([\s\S]*?)<\/td>/g) ?? [];
    if (!sprite || !name) continue;

    rows.push({
      category,
      file: sprite[2],
      spriteUrl: SPRITE_BASE + sprite[1],
      label: toText(name[1]),
      // cells[0] is the name, cells[1] the effect
      description: cells[1] ? toText(cells[1].replace(/<td class="fooinfo">/, "")) : "",
    });
  }
});

console.log(`Parsed ${rows.length} rows from ${TABLES.length} tables`);

// Match each curated slug to a scraped row, by filename first then display name
const matched = [];
const unmatched = [];

for (const [category, slugs] of Object.entries(CATEGORY_SLUGS)) {
  for (const slug of slugs) {
    const row = rows.find(
      (candidate) =>
        candidate.category === category &&
        (norm(candidate.file) === norm(slug) || norm(candidate.label) === norm(slug)),
    ) ?? rows.find(
      (candidate) => norm(candidate.file) === norm(slug) || norm(candidate.label) === norm(slug),
    );

    if (row) matched.push({ slug, ...row });
    else unmatched.push(`${category}: ${slug}`);
  }
}

const claimed = new Set(matched.map((item) => item.file));
const unlisted = rows.filter((row) => !claimed.has(row.file));

await mkdir(OUT_DIR, { recursive: true });

console.log(`Downloading ${matched.length} item sprites...`);

let done = 0;
const failedSprites = [];

await pool(matched, CONCURRENCY, async (item) => {
  try {
    const bytes = await get(item.spriteUrl, "buffer");
    await writeFile(resolve(OUT_DIR, `${item.slug}.png`), bytes);
    done++;
    if (done % 25 === 0 || done === matched.length) console.log(`  ${done}/${matched.length}`);
  } catch (error) {
    failedSprites.push(`${item.slug}: ${error.message}`);
  }
});

// Sorted so a re-scrape produces a diffable file rather than a reordered one
const details = Object.fromEntries(
  matched
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((item) => [item.slug, {
      label: item.label,
      description: item.description,
      category: item.category,
    }]),
);

const file = `// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-items.mjs
//
// Display names and effect text for every selectable item, scraped from Serebii's
// Champions itemdex. Keyed by the same slugs as itemData.ts, so a selection can be
// looked up directly. Sprites for these slugs live in public/sprites/items.

export type ItemCategory = ${TABLES.map((c) => `"${c}"`).join(" | ")};

export interface ItemDetail {
  /** Display name, e.g. "Big Root" */
  label: string;
  /** Effect text as shown in the itemdex */
  description: string;
  category: ItemCategory;
}

export const ITEM_DETAILS: Record<string, ItemDetail> = ${JSON.stringify(details, null, 2)};

/** Path to an item's sprite. Champions-original stones have one; PokeAPI does not. */
export function itemSpritePath(slug: string): string {
  return \`/sprites/items/\${slug}.png\`;
}
`;

await writeFile(OUT_FILE, file, "utf8");

console.log(`\nWrote ${matched.length} items to src/data/itemDetails.ts`);
console.log(`Wrote ${done} sprites to public/sprites/items`);

if (failedSprites.length) {
  console.log(`\n${failedSprites.length} sprites failed:`);
  for (const failure of failedSprites) console.log(`  ${failure}`);
}
if (unmatched.length) {
  console.log(`\n${unmatched.length} slugs in itemData.ts had no row on the page:`);
  for (const slug of unmatched) console.log(`  ${slug}`);
}
if (unlisted.length) {
  console.log(`\n${unlisted.length} items on the page are not in itemData.ts (add them there if wanted):`);
  for (const row of unlisted) console.log(`  ${row.category}: ${row.label} (${row.file})`);
}
