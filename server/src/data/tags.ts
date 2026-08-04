// Slugs are what get stored in the database
// labels are what the UI shows

export const TAG_SLUGS = [
  "physical-attacker",
  "special-attacker",
  "wall",
  "setup-sweeper",
  "trick-room",
  "hazard-setter",
  "pivot",
  "support",
] as const; // as const converts from string[] to enum for z.enum() in ../schemas/set.ts

// The union type "physical-attacker" | "special-attacker" | ... derived from the list above
export type TagSlug = (typeof TAG_SLUGS)[number];

// Uses display names for each slug so no string manipulation is needed
export const TAG_LABELS: Record<TagSlug, string> = {
  "physical-attacker": "Physical Attacker",
  "special-attacker": "Special Attacker",
  "wall": "Wall",
  "setup-sweeper": "Setup Sweeper",
  "trick-room": "Trick Room",
  "hazard-setter": "Hazard Setter",
  "pivot": "Pivot",
  "support": "Support",
};

// Shape served by GET /api/tags, for the tag picker to render
export const TAGS = TAG_SLUGS.map((slug) => ({ slug, label: TAG_LABELS[slug] }));