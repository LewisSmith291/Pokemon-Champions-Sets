// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-items.mjs
//
// Display names and effect text for every selectable item, scraped from Serebii's
// Champions itemdex. Keyed by the same slugs as itemData.ts, so a selection can be
// looked up directly. Sprites for these slugs live in public/sprites/items.

export type ItemCategory = "held" | "mega-stone" | "berry";

export interface ItemDetail {
  /** Display name, e.g. "Big Root" */
  label: string;
  /** Effect text as shown in the itemdex */
  description: string;
  category: ItemCategory;
}

export const ITEM_DETAILS: Record<string, ItemDetail> = {
  "abomasite": {
    "label": "Abomasite",
    "description": "One of a variety of mysterious Mega Stones. An Abomasnow holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "absolite": {
    "label": "Absolite",
    "description": "One of a variety of mysterious Mega Stones. An Absol holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "aerodactylite": {
    "label": "Aerodactylite",
    "description": "One of a variety of mysterious Mega Stones. An Aerodactyl holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "aggronite": {
    "label": "Aggronite",
    "description": "One of a variety of mysterious Mega Stones. An Aggron holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "alakazite": {
    "label": "Alakazite",
    "description": "One of a variety of mysterious Mega Stones. An Alakazam holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "altarianite": {
    "label": "Altarianite",
    "description": "One of a variety of mysterious Mega Stones. An Altaria holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "ampharosite": {
    "label": "Ampharosite",
    "description": "One of a variety of mysterious Mega Stones. An Ampharos holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "aspear-berry": {
    "label": "Aspear Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to thaw itself after being frozen.",
    "category": "berry"
  },
  "audinite": {
    "label": "Audinite",
    "description": "One of a variety of mysterious Mega Stones. An Audino holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "babiri-berry": {
    "label": "Babiri Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Steel-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "banettite": {
    "label": "Banettite",
    "description": "One of a variety of mysterious Mega Stones. A Banette holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "barbaracite": {
    "label": "Barbaracite",
    "description": "One of a variety of mysterious Mega Stones. A Barbaracle holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "beedrillite": {
    "label": "Beedrillite",
    "description": "One of a variety of mysterious Mega Stones. A Beedrill holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "big-root": {
    "label": "Big Root",
    "description": "An item to be held by a Pokémon. This root boosts the amount of HP the holder restores to itself when it uses HP-stealing moves.",
    "category": "held"
  },
  "black-belt": {
    "label": "Black Belt",
    "description": "An item to be held by a Pokémon. This belt helps with focus and boosts the power of the holder's Fighting-type moves.",
    "category": "held"
  },
  "black-glasses": {
    "label": "Black Glasses",
    "description": "An item to be held by a Pokémon. It's a pair of shady- looking glasses that boost the power of the holder's Dark-type moves.",
    "category": "held"
  },
  "blastoisinite": {
    "label": "Blastoisinite",
    "description": "One of a variety of mysterious Mega Stones. A Blastoise holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "blazikenite": {
    "label": "Blazikenite",
    "description": "One of a variety of mysterious Mega Stones. A Blaziken holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "bright-powder": {
    "label": "Bright Powder",
    "description": "An item to be held by a Pokémon. This glittery powder casts a tricky glare that lowers the accuracy of opposing Pokémon's moves.",
    "category": "held"
  },
  "cameruptite": {
    "label": "Cameruptite",
    "description": "One of a variety of mysterious Mega Stones. A Camerupt holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "chandelurite": {
    "label": "Chandelurite",
    "description": "One of a variety of mysterious Mega Stones. A Chandelure holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "charcoal": {
    "label": "Charcoal",
    "description": "An item to be held by a Pokémon. It's a combustible fuel that boosts the power of the holder's Fire-type moves.",
    "category": "held"
  },
  "charizardite-x": {
    "label": "Charizardite X",
    "description": "One of a variety of mysterious Mega Stones. A Charizard holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "charizardite-y": {
    "label": "Charizardite Y",
    "description": "One of a variety of mysterious Mega Stones. A Charizard holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "charti-berry": {
    "label": "Charti Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Rock-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "cheri-berry": {
    "label": "Cheri Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to free itself from paralysis.",
    "category": "berry"
  },
  "chesnaughtite": {
    "label": "Chesnaughtite",
    "description": "One of a variety of mysterious Mega Stones. A Chesnaught holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "chesto-berry": {
    "label": "Chesto Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to shake off its drowsiness.",
    "category": "berry"
  },
  "chilan-berry": {
    "label": "Chilan Berry",
    "description": "If a Pokémon holding this Berry is hit with a Normal-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "chimechite": {
    "label": "Chimechite",
    "description": "One of a variety of mysterious Mega Stones. A Chimecho holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "choice-scarf": {
    "label": "Choice Scarf",
    "description": "An item to be held by a Pokémon. This curious scarf boosts the holder's Speed stat but only allows the use of a single move.",
    "category": "held"
  },
  "chople-berry": {
    "label": "Chople Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Fighting-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "clefablite": {
    "label": "Clefablite",
    "description": "One of a variety of mysterious Mega Stones. A Clefable holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "coba-berry": {
    "label": "Coba Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Flying-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "colbur-berry": {
    "label": "Colbur Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Dark-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "crabominite": {
    "label": "Crabominite",
    "description": "One of a variety of mysterious Mega Stones. A Crabominable holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "damp-rock": {
    "label": "Damp Rock",
    "description": "An item to be held by a Pokémon. When the holder changes the weather to rain, the rain will persist for longer than usual.",
    "category": "held"
  },
  "delphoxite": {
    "label": "Delphoxite",
    "description": "One of a variety of mysterious Mega Stones. A Delphox holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "dragalgite": {
    "label": "Dragalgite",
    "description": "One of a variety of mysterious Mega Stones. A Dragalge holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "dragon-fang": {
    "label": "Dragon Fang",
    "description": "An item to be held by a Pokémon. This hard, sharp fang boosts the power of the holder's Dragon-type moves.",
    "category": "held"
  },
  "dragoninite": {
    "label": "Dragoninite",
    "description": "One of a variety of mysterious Mega Stones. A Dragonite holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "drampanite": {
    "label": "Drampanite",
    "description": "One of a variety of mysterious Mega Stones. A Drampa holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "eelektrossite": {
    "label": "Eelektrossite",
    "description": "One of a variety of mysterious Mega Stones. An Eelektross holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "emboarite": {
    "label": "Emboarite",
    "description": "One of a variety of mysterious Mega Stones. An Emboar holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "excadrite": {
    "label": "Excadrite",
    "description": "One of a variety of mysterious Mega Stones. An Excadrill holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "expert-belt": {
    "label": "Expert Belt",
    "description": "An item to be held by a Pokémon. It's a well-worn belt that slightly boosts the power of the holder's supereffective moves.",
    "category": "held"
  },
  "fairy-feather": {
    "label": "Fairy Feather",
    "description": "An item to be held by a Pokémon. This feather, which gleams faintly when hit by light, boosts the power of the holder's Fairy-type moves.",
    "category": "held"
  },
  "falinksite": {
    "label": "Falinksite",
    "description": "One of a variety of mysterious Mega Stones. A Falinks holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "feraligite": {
    "label": "Feraligite",
    "description": "One of a variety of mysterious Mega Stones. A Feraligatr holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "floettite": {
    "label": "Floettite",
    "description": "One of a variety of mysterious Mega Stones. A special Floette holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "focus-sash": {
    "label": "Focus Sash",
    "description": "An item to be held by a Pokémon. If the holder has full HP and it is hit with a move that should knock it out, it will endure with 1 HP—but only once.",
    "category": "held"
  },
  "froslassite": {
    "label": "Froslassite",
    "description": "One of a variety of mysterious Mega Stones. A Froslass holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "galladite": {
    "label": "Galladite",
    "description": "One of a variety of mysterious Mega Stones. A Gallade holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "garchompite": {
    "label": "Garchompite",
    "description": "One of a variety of mysterious Mega Stones. A Garchomp holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "gardevoirite": {
    "label": "Gardevoirite",
    "description": "One of a variety of mysterious Mega Stones. A Gardevoir holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "gengarite": {
    "label": "Gengarite",
    "description": "One of a variety of mysterious Mega Stones. A Gengar holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "glalitite": {
    "label": "Glalitite",
    "description": "One of a variety of mysterious Mega Stones. A Glalie holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "glimmoranite": {
    "label": "Glimmoranite",
    "description": "One of a variety of mysterious Mega Stones. A Glimmora holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "golurkite": {
    "label": "Golurkite",
    "description": "One of a variety of mysterious Mega Stones. A Golurk holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "greninjite": {
    "label": "Greninjite",
    "description": "One of a variety of mysterious Mega Stones. A Greninja holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "gyaradosite": {
    "label": "Gyaradosite",
    "description": "One of a variety of mysterious Mega Stones. A Gyarados holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "haban-berry": {
    "label": "Haban Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Dragon-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "hard-stone": {
    "label": "Hard Stone",
    "description": "An item to be held by a Pokémon. It's a durable stone that boosts the power of the holder's Rock-type moves.",
    "category": "held"
  },
  "hawluchanite": {
    "label": "Hawluchanite",
    "description": "One of a variety of mysterious Mega Stones. A Hawlucha holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "heat-rock": {
    "label": "Heat Rock",
    "description": "An item to be held by a Pokémon. When the holder changes the weather to harsh sunlight, the sunlight will persist for longer than usual.",
    "category": "held"
  },
  "heracronite": {
    "label": "Heracronite",
    "description": "One of a variety of mysterious Mega Stones. A Heracross holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "houndoominite": {
    "label": "Houndoominite",
    "description": "One of a variety of mysterious Mega Stones. A Houndoom holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "icy-rock": {
    "label": "Icy Rock",
    "description": "An item to be held by a Pokémon. When the holder changes the weather to snow, the snow will persist for longer than usual.",
    "category": "held"
  },
  "iron-ball": {
    "label": "Iron Ball",
    "description": "An item to be held by a Pokémon. It lowers the holder's Speed stat and makes the holder vulnerable to Ground- type moves even if it is a Flying type or is levitating.",
    "category": "held"
  },
  "kangaskhanite": {
    "label": "Kangaskhanite",
    "description": "One of a variety of mysterious Mega Stones. A Kangaskhan holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "kasib-berry": {
    "label": "Kasib Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Ghost-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "kebia-berry": {
    "label": "Kebia Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Poison-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "kings-rock": {
    "label": "King's Rock",
    "description": "An item to be held by a Pokémon. It may cause the target to flinch whenever the holder successfully inflicts damage on them with an attack.",
    "category": "held"
  },
  "leftovers": {
    "label": "Leftovers",
    "description": "An item to be held by a Pokémon. It slowly but steadily restores the holder's HP.",
    "category": "held"
  },
  "leppa-berry": {
    "label": "Leppa Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to restore 10 PP to a move.",
    "category": "berry"
  },
  "life-orb": {
    "label": "Life Orb",
    "description": "An item to be held by a Pokémon. It boosts the power of the holder's moves, but the holder also loses a small amount of HP upon landing an attack.",
    "category": "held"
  },
  "light-ball": {
    "label": "Light Ball",
    "description": "An item to be held by Pikachu. It's a mysterious orb that boosts Pikachu's Attack and Sp. Atk stats.",
    "category": "held"
  },
  "light-clay": {
    "label": "Light Clay",
    "description": "An item to be held by a Pokémon. When the holder uses protective moves like Light Screen or Reflect, their effects will last longer than usual.",
    "category": "held"
  },
  "lopunnite": {
    "label": "Lopunnite",
    "description": "One of a variety of mysterious Mega Stones. A Lopunny holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "lucarionite": {
    "label": "Lucarionite",
    "description": "One of a variety of mysterious Mega Stones. A Lucario holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "lum-berry": {
    "label": "Lum Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to cure itself of any status condition it may have.",
    "category": "berry"
  },
  "magnet": {
    "label": "Magnet",
    "description": "An item to be held by a Pokémon. It's a powerful magnet that boosts the power of the holder's Electric-type moves.",
    "category": "held"
  },
  "malamarite": {
    "label": "Malamarite",
    "description": "One of a variety of mysterious Mega Stones. A Malamar holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "manectite": {
    "label": "Manectite",
    "description": "One of a variety of mysterious Mega Stones. A Manectric holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "mawilite": {
    "label": "Mawilite",
    "description": "One of a variety of mysterious Mega Stones. A Mawile holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "medichamite": {
    "label": "Medichamite",
    "description": "One of a variety of mysterious Mega Stones. A Medicham holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "meganiumite": {
    "label": "Meganiumite",
    "description": "One of a variety of mysterious Mega Stones. A Meganium holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "mental-herb": {
    "label": "Mental Herb",
    "description": "An item to be held by a Pokémon. The holder will be able to shake off move-binding effects to move freely— but only once.",
    "category": "held"
  },
  "meowsticite": {
    "label": "Meowsticite",
    "description": "One of a variety of mysterious Mega Stones. A Meowstic holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "metagrossite": {
    "label": "Metagrossite",
    "description": "One of a variety of mysterious Mega Stones. A Metagross holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "metal-coat": {
    "label": "Metal Coat",
    "description": "An item to be held by a Pokémon. It's a special metallic coating that boosts the power of the holder's Steel-type moves.",
    "category": "held"
  },
  "metronome": {
    "label": "Metronome",
    "description": "An item to be held by a Pokémon. It boosts the power of a move that's used repeatedly. Once the chain is broken, the move's power returns to normal.",
    "category": "held"
  },
  "miracle-seed": {
    "label": "Miracle Seed",
    "description": "An item to be held by a Pokémon. It's a seed imbued with life force that boosts the power of the holder's Grass-type moves.",
    "category": "held"
  },
  "muscle-band": {
    "label": "Muscle Band",
    "description": "An item to be held by a Pokémon. This headband exudes strength, slightly boosting the power of the holder's physical moves.",
    "category": "held"
  },
  "mystic-water": {
    "label": "Mystic Water",
    "description": "An item to be held by a Pokémon. This teardrop-shaped gem boosts the power of the holder's Water-type moves.",
    "category": "held"
  },
  "never-melt-ice": {
    "label": "Never-Melt Ice",
    "description": "An item to be held by a Pokémon. It's a heat-repelling piece of ice that boosts the power of the holder's Ice- type moves.",
    "category": "held"
  },
  "occa-berry": {
    "label": "Occa Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Fire-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "oran-berry": {
    "label": "Oran Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to restore 10 HP to itself.",
    "category": "berry"
  },
  "passho-berry": {
    "label": "Passho Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Water-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "payapa-berry": {
    "label": "Payapa Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Psychic-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "pecha-berry": {
    "label": "Pecha Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to lift the effects of being poisoned from itself.",
    "category": "berry"
  },
  "persim-berry": {
    "label": "Persim Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to cure itself of confusion.",
    "category": "berry"
  },
  "pidgeotite": {
    "label": "Pidgeotite",
    "description": "One of a variety of mysterious Mega Stones. A Pidgeot holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "pinsirite": {
    "label": "Pinsirite",
    "description": "One of a variety of mysterious Mega Stones. A Pinsir holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "poison-barb": {
    "label": "Poison Barb",
    "description": "An item to be held by a Pokémon. This small poisonous barb boosts the power of the holder's Poison-type moves.",
    "category": "held"
  },
  "pyroarite": {
    "label": "Pyroarite",
    "description": "One of a variety of mysterious Mega Stones. A Pyroar holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "quick-claw": {
    "label": "Quick Claw",
    "description": "An item to be held by a Pokémon. This light, sharp claw lets the holder occasionally unleash a move faster than it usually would.",
    "category": "held"
  },
  "raichunite-x": {
    "label": "Raichunite X",
    "description": "One of a variety of mysterious Mega Stones. A Raichu holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "raichunite-y": {
    "label": "Raichunite Y",
    "description": "One of a variety of mysterious Mega Stones. A Raichu holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "rawst-berry": {
    "label": "Rawst Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to cure itself of a burn.",
    "category": "berry"
  },
  "rindo-berry": {
    "label": "Rindo Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Grass-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "roseli-berry": {
    "label": "Roseli Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Fairy-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "sablenite": {
    "label": "Sablenite",
    "description": "One of a variety of mysterious Mega Stones. A Sableye holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "sceptilite": {
    "label": "Sceptilite",
    "description": "One of a variety of mysterious Mega Stones. A Sceptile holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "scizorite": {
    "label": "Scizorite",
    "description": "One of a variety of mysterious Mega Stones. A Scizor holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "scolipite": {
    "label": "Scolipite",
    "description": "One of a variety of mysterious Mega Stones. A Scolipede holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "scope-lens": {
    "label": "Scope Lens",
    "description": "An item to be held by a Pokémon. It's a lens for scoping out weak points. It boosts the holder's critical-hit ratio.",
    "category": "held"
  },
  "scovillainite": {
    "label": "Scovillainite",
    "description": "One of a variety of mysterious Mega Stones. A Scovillain holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "scraftinite": {
    "label": "Scraftinite",
    "description": "One of a variety of mysterious Mega Stones. A Scrafty holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "sharp-beak": {
    "label": "Sharp Beak",
    "description": "An item to be held by a Pokémon. It's a long, sharp beak that boosts the power of the holder's Flying-type moves.",
    "category": "held"
  },
  "sharpedonite": {
    "label": "Sharpedonite",
    "description": "One of a variety of mysterious Mega Stones. A Sharpedo holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "shed-shell": {
    "label": "Shed Shell",
    "description": "An item to be held by a Pokémon. Hard and sturdy, this discarded carapace enables the holder to switch out of battle without fail.",
    "category": "held"
  },
  "shell-bell": {
    "label": "Shell Bell",
    "description": "An item to be held by a Pokémon. The holder restores a little HP to itself every time it inflicts damage with an attack.",
    "category": "held"
  },
  "shuca-berry": {
    "label": "Shuca Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Ground-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "silk-scarf": {
    "label": "Silk Scarf",
    "description": "An item to be held by a Pokémon. It's a sumptuous scarf that boosts the power of the holder's Normal-type moves.",
    "category": "held"
  },
  "silver-powder": {
    "label": "Silver Powder",
    "description": "An item to be held by a Pokémon. It's a shiny silver powder that boosts the power of the holder's Bug-type moves.",
    "category": "held"
  },
  "sitrus-berry": {
    "label": "Sitrus Berry",
    "description": "If a Pokémon holds one of these Berries, it will be able to restore a small amount of HP to itself.",
    "category": "berry"
  },
  "skarmorite": {
    "label": "Skarmorite",
    "description": "One of a variety of mysterious Mega Stones. A Skarmory holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "slowbronite": {
    "label": "Slowbronite",
    "description": "One of a variety of mysterious Mega Stones. A Slowbro holding this stone will be able to Mega Evolve during battle. It won't work for a Galarian Slowbro, however.",
    "category": "mega-stone"
  },
  "smooth-rock": {
    "label": "Smooth Rock",
    "description": "An item to be held by a Pokémon. When the holder changes the weather to a sandstorm, the storm will persist for longer than usual.",
    "category": "held"
  },
  "soft-sand": {
    "label": "Soft Sand",
    "description": "An item to be held by a Pokémon. This loose, silky sand boosts the power of the holder's Ground-type moves.",
    "category": "held"
  },
  "spell-tag": {
    "label": "Spell Tag",
    "description": "An item to be held by a Pokémon. It's a sinister, eerie tag that boosts the power of the holder's Ghost-type moves.",
    "category": "held"
  },
  "staraptite": {
    "label": "Staraptite",
    "description": "One of a variety of mysterious Mega Stones. A Staraptor holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "starminite": {
    "label": "Starminite",
    "description": "One of a variety of mysterious Mega Stones. A Starmie holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "steelixite": {
    "label": "Steelixite",
    "description": "One of a variety of mysterious Mega Stones. A Steelix holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "swampertite": {
    "label": "Swampertite",
    "description": "One of a variety of mysterious Mega Stones. A Swampert holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "tanga-berry": {
    "label": "Tanga Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Bug-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "twisted-spoon": {
    "label": "Twisted Spoon",
    "description": "An item to be held by a Pokémon. This spoon is imbued with telekinetic energy and boosts the power of the holder's Psychic-type moves.",
    "category": "held"
  },
  "tyranitarite": {
    "label": "Tyranitarite",
    "description": "One of a variety of mysterious Mega Stones. A Tyranitar holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "venusaurite": {
    "label": "Venusaurite",
    "description": "One of a variety of mysterious Mega Stones. A Venusaur holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "victreebelite": {
    "label": "Victreebelite",
    "description": "One of a variety of mysterious Mega Stones. A Victreebel holding this stone will be able to Mega Evolve during battle.",
    "category": "mega-stone"
  },
  "wacan-berry": {
    "label": "Wacan Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Electric-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "white-herb": {
    "label": "White Herb",
    "description": "An item to be held by a Pokémon. It will restore any lowered stat in battle—but only once.",
    "category": "held"
  },
  "wide-lens": {
    "label": "Wide Lens",
    "description": "An item to be held by a Pokémon. It's a magnifying lens that slightly boosts the accuracy of the holder's moves.",
    "category": "held"
  },
  "wise-glasses": {
    "label": "Wise Glasses",
    "description": "An item to be held by a Pokémon. This thick pair of glasses slightly boosts the power of the holder's special moves.",
    "category": "held"
  },
  "yache-berry": {
    "label": "Yache Berry",
    "description": "If a Pokémon holding this Berry is hit with a supereffective Ice-type move, the power of that move will be weakened.",
    "category": "berry"
  },
  "zoom-lens": {
    "label": "Zoom Lens",
    "description": "An item to be held by a Pokémon. When the holder acts after its target, its move will be more accurate than usual.",
    "category": "held"
  }
};

/** Path to an item's sprite. Champions-original stones have one; PokeAPI does not. */
export function itemSpritePath(slug: string): string {
  return `/sprites/items/${slug}.png`;
}
