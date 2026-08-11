// Generates src/data/moves.ts from PokeAPI.
//
// Run manually:  node scripts/build-moves.mjs

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const API = "https://pokeapi.co/api/v2";
// Keep a modest number of requests in flight rather than firing all ~900 at once
const CONCURRENCY = 10;
// Shadow moves (Colosseum/XD) live above this id and aren't in the mainline games
const MAX_MOVE_ID = 10000;

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../src/data/moves.ts");

// ~900 requests makes a transient failure far likelier than the 208 in
// build-species.mjs, so back off and retry rather than losing the whole run.
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

// PokeAPI slug -> display label. "thunder-punch" -> "Thunder Punch"
// Only a fallback: the API's own English name is better, because it knows
// "double-edge" is "Double-Edge" but "thunder-punch" is "Thunder Punch".
function toLabel(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// The list endpoint gives us /move/{id}/ urls, so the id is readable without
// fetching the move itself — that's enough to skip the shadow moves up front.
function idFromUrl(url) {
  return Number(url.split("/").filter(Boolean).pop());
}

// Max Moves only exist inside Dynamax, so they can never fill one of a set's four
// slots. PokeAPI has no flag for them, but the "max-" prefix is exact here: all 19
// matches are Max Moves, and no regular move's name begins with "Max".
// (G-Max moves aren't in PokeAPI at all, so there's nothing to filter for those.)
function isMaxMove(move) {
  return move.name.startsWith("max-");
}

// Z-moves are likewise unselectable. There's no flag for these either, and 1 PP
// alone is too broad — Sketch, Struggle and Revival Blessing share it. Pairing it
// with an empty learned_by_pokemon separates them: every Z-move is learnt by
// nobody, whereas Sketch and Revival Blessing have real learnsets.
//
// This also drops Struggle, which is correct for a set builder — it's the move you
// get when you have no moves left, not one you can pick.
function isZMove(move) {
  return move.pp === 1 && move.learned_by_pokemon.length === 0;
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

const index = await getJson(`${API}/move?limit=100000`);
const entries = index.results.filter((entry) => idFromUrl(entry.url) < MAX_MOVE_ID);

console.log(`Fetching ${entries.length} moves (skipped ${index.results.length - entries.length} shadow moves)...`);

let done = 0;
const fetched = await pool(entries, CONCURRENCY, async (entry) => {
  const move = await getJson(entry.url);
  done++;
  if (done % 100 === 0 || done === entries.length) console.log(`  ${done}/${entries.length}`);
  return move;
});

const excluded = fetched.filter((move) => isMaxMove(move) || isZMove(move));
console.log(`\nExcluded ${excluded.length} unselectable moves:`);
console.log(excluded.map((m) => `  ${m.name}`).sort().join("\n"));

const moves = fetched
  .filter((move) => !isMaxMove(move) && !isZMove(move))
  .map((move) => ({
    name: move.name,
    label: move.names.find((n) => n.language.name === "en")?.name ?? toLabel(move.name),
    type: move.type.name,
    damageClass: move.damage_class.name,
    power: move.power,
    accuracy: move.accuracy,
    pp: move.pp,
  }));

// Alphabetical, since that's how you browse a move list — unlike species, where
// dex order is meaningful. The picker can re-sort however it likes.
moves.sort((a, b) => a.label.localeCompare(b.label));

const file = `// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-moves.mjs
//
// Every selectable move, bundled so the move picker can filter locally instead of
// making a request per move. Sorted by label. Max Moves, Z-moves, Shadow moves and
// Struggle are excluded — none of them can go in one of a set's four slots.

export interface MoveSummary {
  /** PokeAPI slug - this is what gets submitted in a set's \`moves\` array */
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
}

export const MOVES: MoveSummary[] = ${JSON.stringify(moves, null, 2)};
`;

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, file, "utf8");

console.log(`\nWrote ${moves.length} moves to src/data/moves.ts`);
