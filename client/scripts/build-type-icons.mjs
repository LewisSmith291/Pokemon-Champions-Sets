// Builds public/types.svg — one sprite holding all 18 type icons as <symbol>s.
//
// Run manually:  node scripts/build-type-icons.mjs
//
// Source: https://github.com/partywhale/pokemon-type-icons (MIT)
//
// The upstream files can't just be concatenated. Each one colours itself through an
// internal <style> block using generic class names (.cls-1, .cls-2), and those names
// are reused across every file — so in a single document the last definition would
// win and all 18 icons would come out the same colour. This inlines each fill as a
// presentation attribute on the element, which survives being merged.
//
// Symbol ids are the PokeAPI type slugs, so TypeDisplay can build a reference
// straight from its `type` prop:  <use href="/types.svg#fire" />

import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const RAW = "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/main/icons";

// PokeAPI's 18 type slugs — the same vocabulary as Species.types and MoveSummary.type
const TYPES = [
  "normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison",
  "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark",
  "steel", "fairy",
];

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), "../public/types.svg");

async function fetchIcon(type) {
  const response = await fetch(`${RAW}/${type}.svg`, { headers: { "User-Agent": "champion-sets-build" } });
  if (!response.ok) throw new Error(`${response.status} ${type}.svg`);
  return response.text();
}

// ".cls-1 { fill: #fff; }" -> { "cls-1": "#fff" }
function readFills(svg) {
  const style = svg.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? "";
  const fills = {};
  for (const [, className, colour] of style.matchAll(/\.([\w-]+)\s*\{\s*fill:\s*([^;}\s]+)\s*;?\s*\}/g)) {
    fills[className] = colour;
  }
  return fills;
}

function toSymbol(type, svg) {
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1];
  if (!viewBox) throw new Error(`${type}.svg has no viewBox — it would not scale`);

  const fills = readFills(svg);

  const body = svg
    // The <defs> only holds the stylesheet we're about to inline
    .replace(/<defs>[\s\S]*?<\/defs>/g, "")
    // Everything outside the root <svg> element (xml declaration, comments)
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>[\s\S]*$/, "")
    // class="cls-2" -> fill="#e4613e"
    .replace(/\s*class="([\w-]+)"/g, (whole, className) =>
      fills[className] ? ` fill="${fills[className]}"` : whole
    )
    .trim();

  if (body.includes("class=")) {
    throw new Error(`${type}.svg has a class with no matching fill rule — it would render black`);
  }

  return `  <symbol id="${type}" viewBox="${viewBox}">\n    ${body.replace(/\n\s*/g, "\n    ")}\n  </symbol>`;
}

console.log(`Fetching ${TYPES.length} type icons...`);
const symbols = [];
for (const type of TYPES) {
  symbols.push(toSymbol(type, await fetchIcon(type)));
}

const sprite = `<svg xmlns="http://www.w3.org/2000/svg">
<!-- GENERATED FILE - do not edit by hand.
     Rebuild with: node scripts/build-type-icons.mjs
     Icons from https://github.com/partywhale/pokemon-type-icons (MIT).
     Reference a type with <use href="/types.svg#fire" />. -->
${symbols.join("\n")}
</svg>
`;

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, sprite, "utf8");

console.log(`Wrote ${TYPES.length} symbols to public/types.svg`);
