// Slugs are what get stored in the database
// labels are what the UI shows
//
// This list is the enforcement point: createSetSchema turns it into a z.enum, so
// anything not here is a 400. client/src/data/tags.ts mirrors it for display and
// for the picker - keep the two in step, and a drift shows up as a rejected
// submit rather than silently storing something the UI can't label.

export const TAG_SLUGS = [
  // --- what the set does with its damage ---
  "physical-attacker",
  "special-attacker",
  "wallbreaker",        // raw power through bulk, as opposed to boosting first
  "setup-sweeper",
  "revenge-killer",     // priority or high speed, cleaning up a weakened target

  // --- what the set does instead of attacking ---
  "wall",
  "pivot",
  "cleric",             // Heal Bell, Wish, Healing Wish
  "status-spreader",    // Toxic, Will-O-Wisp, Thunder Wave, Spore, Glare
  "support",

  // --- what the set does to the field ---
  "hazard-setter",
  "hazard-removal",     // Rapid Spin, Defog, Tidy Up, Mortal Spin
  "screens",            // Light Screen, Reflect, Aurora Veil
  "weather-setter",
  "terrain-setter",

  // Split because they are opposite jobs: one spends a turn setting the room up,
  // the other is the slow attacker that only works while it is up
  "trick-room-setter",
  "trick-room-abuser",
] as const; // as const converts from string[] to enum for z.enum() in ../schemas/set.ts

// The union type "physical-attacker" | "special-attacker" | ... derived from the list above
export type TagSlug = (typeof TAG_SLUGS)[number];

// Uses display names for each slug so no string manipulation is needed
export const TAG_LABELS: Record<TagSlug, string> = {
  "physical-attacker": "Physical Attacker",
  "special-attacker": "Special Attacker",
  "wallbreaker": "Wallbreaker",
  "setup-sweeper": "Setup Sweeper",
  "revenge-killer": "Revenge Killer",

  "wall": "Wall",
  "pivot": "Pivot",
  "cleric": "Cleric",
  "status-spreader": "Status Spreader",
  "support": "Support",

  "hazard-setter": "Hazard Setter",
  "hazard-removal": "Hazard Removal",
  "screens": "Screens",
  "weather-setter": "Weather Setter",
  "terrain-setter": "Terrain Setter",

  "trick-room-setter": "Trick Room Setter",
  "trick-room-abuser": "Trick Room Abuser",
};

// Most tags a single set can carry. Without a cap, tagging everything makes them
// useless for the filtering that browse and search will want later.
export const MAX_TAGS = 7;

// Shape served by GET /api/tags, for the tag picker to render
export const TAGS = TAG_SLUGS.map((slug) => ({ slug, label: TAG_LABELS[slug] }));
