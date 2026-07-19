interface Props {
  value: string;
  onSelect: (item: string) => void;
}

// Curated list of competitively relevant held items (PokeAPI slugs).
// PokeAPI has no Champions-specific item list, so this is maintained by hand.
// Add/remove slugs here as needed — each must match an /item/{name} endpoint.
const HELD_ITEMS: string[] = [
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
  "zoom-lens",
  "sablenite",
  "greninjite"
];

const BERRIES: string[] = [

]

// Full Pokemon Champions Mega Stone list (source: serebii.net/pokemonchampions/items.shtml).
// NOTE: entries marked "no sprite in PokeAPI" are Champions-original megas. Their
// /item/{slug} endpoint exists (HTTP 200) but sprites.default is null, so the UI
// falls back to a placeholder image for them.
const MEGA_STONES: string[] = [
  "abomasite",
  "absolite",
  "aerodactylite",
  "aggronite",
  "alakazite",
  "altarianite",
  "ampharosite",
  "audinite",
  "banettite",
  "barbaracite",       // no sprite in PokeAPI
  "beedrillite",
  "blastoisinite",
  "blazikenite",
  "cameruptite",
  "chandelurite",      // no sprite in PokeAPI
  "charizardite-x",
  "charizardite-y",
  "chesnaughtite",     // no sprite in PokeAPI
  "chimechite",        // no sprite in PokeAPI
  "clefablite",        // no sprite in PokeAPI
  "crabominite",       // no sprite in PokeAPI
  "delphoxite",        // no sprite in PokeAPI
  "dragalgite",        // no sprite in PokeAPI
  "dragoninite",       // no sprite in PokeAPI
  "drampanite",        // no sprite in PokeAPI
  "eelektrossite",     // no sprite in PokeAPI
  "emboarite",         // no sprite in PokeAPI
  "excadrite",         // no sprite in PokeAPI
  "falinksite",        // no sprite in PokeAPI
  "feraligite",        // no sprite in PokeAPI
  "floettite",         // no sprite in PokeAPI
  "froslassite",       // no sprite in PokeAPI
  "galladite",
  "garchompite",
  "gardevoirite",
  "gengarite",
  "glalitite",
  "glimmoranite",      // no sprite in PokeAPI
  "golurkite",         // no sprite in PokeAPI
  "greninjite",        // no sprite in PokeAPI
  "gyaradosite",
  "hawluchanite",      // no sprite in PokeAPI
  "heracronite",
  "houndoominite",
  "kangaskhanite",
  "lopunnite",
  "lucarionite",
  "malamarite",        // no sprite in PokeAPI
  "manectite",
  "mawilite",
  "medichamite",
  "meganiumite",       // no sprite in PokeAPI
  "meowsticite",       // no sprite in PokeAPI
  "metagrossite",
  "pidgeotite",
  "pinsirite",
  "pyroarite",         // no sprite in PokeAPI
  "raichunite-x",      // no sprite in PokeAPI
  "raichunite-y",      // no sprite in PokeAPI
  "sablenite",
  "sceptilite",
  "scizorite",
  "scolipite",         // no sprite in PokeAPI
  "scovillainite",     // no sprite in PokeAPI
  "scraftinite",       // no sprite in PokeAPI
  "sharpedonite",
  "skarmorite",        // no sprite in PokeAPI
  "slowbronite",
  "staraptite",        // no sprite in PokeAPI
  "starminite",        // no sprite in PokeAPI
  "steelixite",
  "swampertite",
  "tyranitarite",
  "venusaurite",
  "victreebelite",     // no sprite in PokeAPI
]

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
      {HELD_ITEMS.map((item: string) => (
        <option key={item} value={item}>{toLabel(item)}</option>
      ))}
    </select>
  )
}
