import { ITEM_DETAILS } from "./itemDetails";

// Filters for the item picker. "mega-stone" and "berry" come straight from
// ITEM_DETAILS.category; the rest are editorial groupings of the held items.
export type ItemCategory =
  | "all"
  | "mega-stone"
  | "berry"
  | "power"
  | "defense"
  | "recovery"
  | "extension"
  | "other";

export const ITEM_CATEGORIES: { id: ItemCategory; label: string }[] = [
  { id: "all",        label: "All" },
  { id: "mega-stone", label: "Mega Stones" },
  { id: "berry",      label: "Berries" },
  { id: "power",      label: "Power" },
  { id: "defense",    label: "Defense" },
  { id: "recovery",   label: "Recovery" },
  { id: "extension",  label: "Extension" },
  { id: "other",      label: "Other" },
];

// Categories on top of the one ITEM_DETAILS already records, so every berry keeps
// its Berries membership and picks up a second home here.
//
// Written out rather than matched against description text on purpose: 17 of the
// resist berries say "supereffective", but Chilan Berry says "hit with a
// Normal-type move" and a text rule would file it under the wrong category.
const EXTRA_CATEGORIES: Record<string, ItemCategory[]> = {
  // --- berries: soak a hit of one type ---
  "babiri-berry": ["defense"],
  "charti-berry": ["defense"],
  "chilan-berry": ["defense"],
  "chople-berry": ["defense"],
  "coba-berry": ["defense"],
  "colbur-berry": ["defense"],
  "haban-berry": ["defense"],
  "kasib-berry": ["defense"],
  "kebia-berry": ["defense"],
  "occa-berry": ["defense"],
  "passho-berry": ["defense"],
  "payapa-berry": ["defense"],
  "rindo-berry": ["defense"],
  "roseli-berry": ["defense"],
  "shuca-berry": ["defense"],
  "tanga-berry": ["defense"],
  "wacan-berry": ["defense"],
  "yache-berry": ["defense"],

  // --- berries: undo a status or restore HP/PP ---
  "aspear-berry": ["recovery"],
  "cheri-berry": ["recovery"],
  "chesto-berry": ["recovery"],
  "leppa-berry": ["recovery"],
  "lum-berry": ["recovery"],
  "oran-berry": ["recovery"],
  "pecha-berry": ["recovery"],
  "persim-berry": ["recovery"],
  "rawst-berry": ["recovery"],
  "sitrus-berry": ["recovery"],

  // --- held: more damage, whether by type, category or crit ---
  "black-belt": ["power"],
  "black-glasses": ["power"],
  "charcoal": ["power"],
  "dragon-fang": ["power"],
  "expert-belt": ["power"],
  "fairy-feather": ["power"],
  "hard-stone": ["power"],
  "life-orb": ["power"],
  "light-ball": ["power"],
  "magnet": ["power"],
  "metal-coat": ["power"],
  "metronome": ["power"],
  "miracle-seed": ["power"],
  "muscle-band": ["power"],
  "mystic-water": ["power"],
  "never-melt-ice": ["power"],
  "poison-barb": ["power"],
  "scope-lens": ["power"],          // crit rate, so damage rather than accuracy
  "sharp-beak": ["power"],
  "silk-scarf": ["power"],
  "silver-powder": ["power"],
  "soft-sand": ["power"],
  "spell-tag": ["power"],
  "twisted-spoon": ["power"],
  "wise-glasses": ["power"],

  // --- held: survive a hit ---
  "bright-powder": ["defense"],
  "focus-sash": ["defense"],

  // --- held: restore HP or undo what was done to you ---
  "big-root": ["recovery"],         // boosts draining moves
  "leftovers": ["recovery"],
  "mental-herb": ["recovery"],
  "shell-bell": ["recovery"],
  "white-herb": ["recovery"],       // restores lowered stats

  // --- held: make a field effect last longer ---
  "damp-rock": ["extension"],
  "heat-rock": ["extension"],
  "icy-rock": ["extension"],
  "light-clay": ["extension"],
  "smooth-rock": ["extension"],

  // --- held: everything else ---
  "choice-scarf": ["other"],
  "iron-ball": ["other"],
  "kings-rock": ["other"],
  "quick-claw": ["other"],
  "shed-shell": ["other"],
  "wide-lens": ["other"],           // accuracy, not damage
  "zoom-lens": ["other"],
};

// Every category an item belongs to. Anything with no entry above and no base
// category of its own falls into Other, so nothing is unreachable in the picker.
export function itemCategories(slug: string): ItemCategory[] {
  const base = ITEM_DETAILS[slug]?.category;
  const categories: ItemCategory[] = [];

  if (base === "mega-stone") categories.push("mega-stone");
  if (base === "berry") categories.push("berry");
  categories.push(...(EXTRA_CATEGORIES[slug] ?? []));

  return categories.length > 0 ? categories : ["other"];
}
