interface Props {
  value: string;
  onSelect: (item: string) => void;
}

// Curated list of competitively relevant held items (PokeAPI slugs).
// PokeAPI has no Champions-specific item list, so this is maintained by hand.
// Add/remove slugs here as needed — each must match an /item/{name} endpoint.
const CHAMPIONS_ITEMS: string[] = [
  "big-root",
  "black-belt",
  "black-glasses",
  "bright-powder",
  "charcoal",
  "choice-scarf",
  "damp-rock",
  "dragon-fang",
  "expert-belt",
  "fairy-feather",
  "foucs-band",
  "focus-sash",
  "hard-stone",
  "heat-rock",
  "icy-rock",
  "iron-ball",
  "kings-rock",
  "leftovers",
  "life-orb",
  "light-ball",
  "light-clay",
  "magnet",
  "mental-herb",
  "metal-coat",
  "metronome",
  "miracle-seed",
  "muscle-band",
  "mystic-water",
  "never-melt-ice",
  "poison-barb",
  "quick-claw",
  "scope-lens",
  "sharp-beak",
  "shed-shell",
  "shell-bell",
  "silk-scarf",
  "silver-powder",
  "smooth-rock",
  "soft-sand",
  "spell-tag",
  "twisted-spoon",
  "white-herb",
  "wide-lens",
  "wise-glasses",
  "zoom-lens"
];

// Turns an API slug like "life-orb" into a display label like "Life Orb".
function toLabel(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ItemSearch({ value, onSelect }: Props) {
  return (
    <select value={value} onChange={(e) => onSelect(e.target.value)}>
      <option value="">Empty</option>
      {CHAMPIONS_ITEMS.map((item: string) => (
        <option key={item} value={item}>{toLabel(item)}</option>
      ))}
    </select>
  )
}
