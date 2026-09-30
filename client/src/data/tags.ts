// Display copy of the tag vocabulary, bundled the way species, moves, abilities
// and items are. The card, the set page and the picker all need labels before
// anything can render, so serving this would mean a request first.
//
// server/src/data/tags.ts is the source of truth - its list becomes the z.enum
// that createSetSchema validates against. Keep the two in step: a tag added here
// and not there comes back as a 400 on submit rather than failing quietly.

export const TAG_SLUGS = [
  // --- what the set does with its damage ---
  "physical-attacker",
  "special-attacker",
  "mixed-attacker",
  "wallbreaker",
  "setup-sweeper",
  "game-ender",
  "big-crits",

  // --- what the set does instead of attacking ---
  "wall",
  "pivot",
  "status-spreader",
  "support",
  "prankster",

  // --- what the set does to the field ---
  "hazard-setter",
  "hazard-removal",
  "screens",
  "weather-setter",
  "terrain-setter",
  "trick-room",

  // --- type of set ---
  "casual", 
  "competetive"
] as const;

export type TagSlug = (typeof TAG_SLUGS)[number];

export const TAG_LABELS: Record<TagSlug, string> = {
  "physical-attacker": "Physical Attacker",
  "special-attacker": "Special Attacker",
  "mixed-attacker": "Mixed Attacker",
  "wallbreaker": "Wallbreaker",
  "setup-sweeper": "Setup Sweeper",
  "game-ender": "Game Ender",
  "big-crits": "Big Crits",

  "wall": "Wall",
  "pivot": "Pivot",
  "prankster": "Prankster",
  "status-spreader": "Status Spreader",
  "support": "Support",

  "hazard-setter": "Hazard Setter",
  "hazard-removal": "Hazard Removal",
  "screens": "Screens",
  "weather-setter": "Weather Setter",
  "terrain-setter": "Terrain Setter",
  "trick-room": "Trick Room",

  "casual": "Casual",
  "competetive": "Competetive"
};

/** Mirrors MAX_TAGS in the server's copy, which is what actually rejects an 8th */
export const MAX_TAGS = 7;

export const TAGS: { slug: TagSlug; label: string }[] =
  TAG_SLUGS.map((slug) => ({ slug, label: TAG_LABELS[slug] }));

/** Falls back to the raw slug so a tag stored before a rename still renders */
export function tagLabel(slug: string): string {
  return TAG_LABELS[slug as TagSlug] ?? slug;
}
