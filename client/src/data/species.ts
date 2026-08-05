// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-species.mjs
//
// The full Champions dex, bundled so the species picker can filter locally
// instead of making a request per species.

export interface Species {
  /** PokeAPI slug - this is what gets submitted as `species` */
  name: string;
  /** Display name, e.g. "Ho-Oh" */
  label: string;
  /** Dex id of the default form, used to build the sprite URL */
  id: number;
  types: string[];
  abilities: string[];
  hiddenAbility: string | null;
  /** Keyed by PokeAPI stat slug - same shape as baseStats in CreateSet */
  stats: Record<string, number>;
}

export const SPECIES: Species[] = [
  {
    "name": "venusaur",
    "label": "Venusaur",
    "id": 3,
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "chlorophyll",
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 80
    }
  },
  {
    "name": "charizard",
    "label": "Charizard",
    "id": 6,
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "solar-power",
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special-attack": 109,
      "special-defense": 85,
      "speed": 100
    }
  },
  {
    "name": "blastoise",
    "label": "Blastoise",
    "id": 9,
    "types": [
      "water"
    ],
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "rain-dish",
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "special-attack": 85,
      "special-defense": 105,
      "speed": 78
    }
  },
  {
    "name": "beedrill",
    "label": "Beedrill",
    "id": 15,
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "swarm"
    ],
    "hiddenAbility": "sniper",
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "special-attack": 45,
      "special-defense": 80,
      "speed": 75
    }
  },
  {
    "name": "pidgeot",
    "label": "Pidgeot",
    "id": 18,
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "tangled-feet"
    ],
    "hiddenAbility": "big-pecks",
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 101
    }
  },
  {
    "name": "arbok",
    "label": "Arbok",
    "id": 24,
    "types": [
      "poison"
    ],
    "abilities": [
      "intimidate",
      "shed-skin"
    ],
    "hiddenAbility": "unnerve",
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "special-attack": 65,
      "special-defense": 79,
      "speed": 80
    }
  },
  {
    "name": "pikachu",
    "label": "Pikachu",
    "id": 25,
    "types": [
      "electric"
    ],
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod",
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    }
  },
  {
    "name": "raichu",
    "label": "Raichu",
    "id": 26,
    "types": [
      "electric"
    ],
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod",
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "special-attack": 90,
      "special-defense": 80,
      "speed": 110
    }
  },
  {
    "name": "clefable",
    "label": "Clefable",
    "id": 36,
    "types": [
      "fairy"
    ],
    "abilities": [
      "cute-charm",
      "magic-guard"
    ],
    "hiddenAbility": "unaware",
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 60
    }
  },
  {
    "name": "ninetales",
    "label": "Ninetales",
    "id": 38,
    "types": [
      "fire"
    ],
    "abilities": [
      "flash-fire"
    ],
    "hiddenAbility": "drought",
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "special-attack": 81,
      "special-defense": 100,
      "speed": 100
    }
  },
  {
    "name": "vileplume",
    "label": "Vileplume",
    "id": 45,
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "chlorophyll"
    ],
    "hiddenAbility": "effect-spore",
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "special-attack": 110,
      "special-defense": 90,
      "speed": 50
    }
  },
  {
    "name": "arcanine",
    "label": "Arcanine",
    "id": 59,
    "types": [
      "fire"
    ],
    "abilities": [
      "intimidate",
      "flash-fire"
    ],
    "hiddenAbility": "justified",
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 95
    }
  },
  {
    "name": "alakazam",
    "label": "Alakazam",
    "id": 65,
    "types": [
      "psychic"
    ],
    "abilities": [
      "synchronize",
      "inner-focus"
    ],
    "hiddenAbility": "magic-guard",
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "special-attack": 135,
      "special-defense": 95,
      "speed": 120
    }
  },
  {
    "name": "machamp",
    "label": "Machamp",
    "id": 68,
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "no-guard"
    ],
    "hiddenAbility": "steadfast",
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "special-attack": 65,
      "special-defense": 85,
      "speed": 55
    }
  },
  {
    "name": "victreebel",
    "label": "Victreebel",
    "id": 71,
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "chlorophyll"
    ],
    "hiddenAbility": "gluttony",
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special-attack": 100,
      "special-defense": 70,
      "speed": 70
    }
  },
  {
    "name": "slowbro",
    "label": "Slowbro",
    "id": 80,
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "oblivious",
      "own-tempo"
    ],
    "hiddenAbility": "regenerator",
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 30
    }
  },
  {
    "name": "gengar",
    "label": "Gengar",
    "id": 94,
    "types": [
      "ghost",
      "poison"
    ],
    "abilities": [
      "cursed-body"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "special-attack": 130,
      "special-defense": 75,
      "speed": 110
    }
  },
  {
    "name": "kangaskhan",
    "label": "Kangaskhan",
    "id": 115,
    "types": [
      "normal"
    ],
    "abilities": [
      "early-bird",
      "scrappy"
    ],
    "hiddenAbility": "inner-focus",
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "special-attack": 40,
      "special-defense": 80,
      "speed": 90
    }
  },
  {
    "name": "starmie",
    "label": "Starmie",
    "id": 121,
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "illuminate",
      "natural-cure"
    ],
    "hiddenAbility": "analytic",
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "special-attack": 100,
      "special-defense": 85,
      "speed": 115
    }
  },
  {
    "name": "pinsir",
    "label": "Pinsir",
    "id": 127,
    "types": [
      "bug"
    ],
    "abilities": [
      "hyper-cutter",
      "mold-breaker"
    ],
    "hiddenAbility": "moxie",
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 70,
      "speed": 85
    }
  },
  {
    "name": "tauros",
    "label": "Tauros",
    "id": 128,
    "types": [
      "normal"
    ],
    "abilities": [
      "intimidate",
      "anger-point"
    ],
    "hiddenAbility": "sheer-force",
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "special-attack": 40,
      "special-defense": 70,
      "speed": 110
    }
  },
  {
    "name": "gyarados",
    "label": "Gyarados",
    "id": 130,
    "types": [
      "water",
      "flying"
    ],
    "abilities": [
      "intimidate"
    ],
    "hiddenAbility": "moxie",
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "special-attack": 60,
      "special-defense": 100,
      "speed": 81
    }
  },
  {
    "name": "ditto",
    "label": "Ditto",
    "id": 132,
    "types": [
      "normal"
    ],
    "abilities": [
      "limber"
    ],
    "hiddenAbility": "imposter",
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "special-attack": 48,
      "special-defense": 48,
      "speed": 48
    }
  },
  {
    "name": "vaporeon",
    "label": "Vaporeon",
    "id": 134,
    "types": [
      "water"
    ],
    "abilities": [
      "water-absorb"
    ],
    "hiddenAbility": "hydration",
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "special-attack": 110,
      "special-defense": 95,
      "speed": 65
    }
  },
  {
    "name": "jolteon",
    "label": "Jolteon",
    "id": 135,
    "types": [
      "electric"
    ],
    "abilities": [
      "volt-absorb"
    ],
    "hiddenAbility": "quick-feet",
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special-attack": 110,
      "special-defense": 95,
      "speed": 130
    }
  },
  {
    "name": "flareon",
    "label": "Flareon",
    "id": 136,
    "types": [
      "fire"
    ],
    "abilities": [
      "flash-fire"
    ],
    "hiddenAbility": "guts",
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special-attack": 95,
      "special-defense": 110,
      "speed": 65
    }
  },
  {
    "name": "aerodactyl",
    "label": "Aerodactyl",
    "id": 142,
    "types": [
      "rock",
      "flying"
    ],
    "abilities": [
      "rock-head",
      "pressure"
    ],
    "hiddenAbility": "unnerve",
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special-attack": 60,
      "special-defense": 75,
      "speed": 130
    }
  },
  {
    "name": "snorlax",
    "label": "Snorlax",
    "id": 143,
    "types": [
      "normal"
    ],
    "abilities": [
      "immunity",
      "thick-fat"
    ],
    "hiddenAbility": "gluttony",
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "special-attack": 65,
      "special-defense": 110,
      "speed": 30
    }
  },
  {
    "name": "dragonite",
    "label": "Dragonite",
    "id": 149,
    "types": [
      "dragon",
      "flying"
    ],
    "abilities": [
      "inner-focus"
    ],
    "hiddenAbility": "multiscale",
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 80
    }
  },
  {
    "name": "meganium",
    "label": "Meganium",
    "id": 154,
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "leaf-guard",
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "special-attack": 83,
      "special-defense": 100,
      "speed": 80
    }
  },
  {
    "name": "typhlosion",
    "label": "Typhlosion",
    "id": 157,
    "types": [
      "fire"
    ],
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "flash-fire",
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special-attack": 109,
      "special-defense": 85,
      "speed": 100
    }
  },
  {
    "name": "feraligatr",
    "label": "Feraligatr",
    "id": 160,
    "types": [
      "water"
    ],
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "sheer-force",
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "special-attack": 79,
      "special-defense": 83,
      "speed": 78
    }
  },
  {
    "name": "ariados",
    "label": "Ariados",
    "id": 168,
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "swarm",
      "insomnia"
    ],
    "hiddenAbility": "sniper",
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 40
    }
  },
  {
    "name": "ampharos",
    "label": "Ampharos",
    "id": 181,
    "types": [
      "electric"
    ],
    "abilities": [
      "static"
    ],
    "hiddenAbility": "plus",
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "special-attack": 115,
      "special-defense": 90,
      "speed": 55
    }
  },
  {
    "name": "azumarill",
    "label": "Azumarill",
    "id": 184,
    "types": [
      "water",
      "fairy"
    ],
    "abilities": [
      "thick-fat",
      "huge-power"
    ],
    "hiddenAbility": "sap-sipper",
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "special-attack": 60,
      "special-defense": 80,
      "speed": 50
    }
  },
  {
    "name": "politoed",
    "label": "Politoed",
    "id": 186,
    "types": [
      "water"
    ],
    "abilities": [
      "water-absorb",
      "damp"
    ],
    "hiddenAbility": "drizzle",
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "special-attack": 90,
      "special-defense": 100,
      "speed": 70
    }
  },
  {
    "name": "espeon",
    "label": "Espeon",
    "id": 196,
    "types": [
      "psychic"
    ],
    "abilities": [
      "synchronize"
    ],
    "hiddenAbility": "magic-bounce",
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special-attack": 130,
      "special-defense": 95,
      "speed": 110
    }
  },
  {
    "name": "umbreon",
    "label": "Umbreon",
    "id": 197,
    "types": [
      "dark"
    ],
    "abilities": [
      "synchronize"
    ],
    "hiddenAbility": "inner-focus",
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "special-attack": 60,
      "special-defense": 130,
      "speed": 65
    }
  },
  {
    "name": "slowking",
    "label": "Slowking",
    "id": 199,
    "types": [
      "water",
      "psychic"
    ],
    "abilities": [
      "oblivious",
      "own-tempo"
    ],
    "hiddenAbility": "regenerator",
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 110,
      "speed": 30
    }
  },
  {
    "name": "forretress",
    "label": "Forretress",
    "id": 205,
    "types": [
      "bug",
      "steel"
    ],
    "abilities": [
      "sturdy"
    ],
    "hiddenAbility": "overcoat",
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 40
    }
  },
  {
    "name": "steelix",
    "label": "Steelix",
    "id": 208,
    "types": [
      "steel",
      "ground"
    ],
    "abilities": [
      "rock-head",
      "sturdy"
    ],
    "hiddenAbility": "sheer-force",
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 30
    }
  },
  {
    "name": "qwilfish",
    "label": "Qwilfish",
    "id": 211,
    "types": [
      "water",
      "poison"
    ],
    "abilities": [
      "poison-point",
      "swift-swim"
    ],
    "hiddenAbility": "intimidate",
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 85
    }
  },
  {
    "name": "scizor",
    "label": "Scizor",
    "id": 212,
    "types": [
      "bug",
      "steel"
    ],
    "abilities": [
      "swarm",
      "technician"
    ],
    "hiddenAbility": "light-metal",
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 80,
      "speed": 65
    }
  },
  {
    "name": "heracross",
    "label": "Heracross",
    "id": 214,
    "types": [
      "bug",
      "fighting"
    ],
    "abilities": [
      "swarm",
      "guts"
    ],
    "hiddenAbility": "moxie",
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "special-attack": 40,
      "special-defense": 95,
      "speed": 85
    }
  },
  {
    "name": "skarmory",
    "label": "Skarmory",
    "id": 227,
    "types": [
      "steel",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "sturdy"
    ],
    "hiddenAbility": "weak-armor",
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "special-attack": 40,
      "special-defense": 70,
      "speed": 70
    }
  },
  {
    "name": "houndoom",
    "label": "Houndoom",
    "id": 229,
    "types": [
      "dark",
      "fire"
    ],
    "abilities": [
      "early-bird",
      "flash-fire"
    ],
    "hiddenAbility": "unnerve",
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "special-attack": 110,
      "special-defense": 80,
      "speed": 95
    }
  },
  {
    "name": "tyranitar",
    "label": "Tyranitar",
    "id": 248,
    "types": [
      "rock",
      "dark"
    ],
    "abilities": [
      "sand-stream"
    ],
    "hiddenAbility": "unnerve",
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "special-attack": 95,
      "special-defense": 100,
      "speed": 61
    }
  },
  {
    "name": "sceptile",
    "label": "Sceptile",
    "id": 254,
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "unburden",
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special-attack": 105,
      "special-defense": 85,
      "speed": 120
    }
  },
  {
    "name": "blaziken",
    "label": "Blaziken",
    "id": 257,
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "speed-boost",
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "special-attack": 110,
      "special-defense": 70,
      "speed": 80
    }
  },
  {
    "name": "swampert",
    "label": "Swampert",
    "id": 260,
    "types": [
      "water",
      "ground"
    ],
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "damp",
    "stats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "special-attack": 85,
      "special-defense": 90,
      "speed": 60
    }
  },
  {
    "name": "pelipper",
    "label": "Pelipper",
    "id": 279,
    "types": [
      "water",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "drizzle"
    ],
    "hiddenAbility": "rain-dish",
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "special-attack": 95,
      "special-defense": 70,
      "speed": 65
    }
  },
  {
    "name": "gardevoir",
    "label": "Gardevoir",
    "id": 282,
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "synchronize",
      "trace"
    ],
    "hiddenAbility": "telepathy",
    "stats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "special-attack": 125,
      "special-defense": 115,
      "speed": 80
    }
  },
  {
    "name": "sableye",
    "label": "Sableye",
    "id": 302,
    "types": [
      "dark",
      "ghost"
    ],
    "abilities": [
      "keen-eye",
      "stall"
    ],
    "hiddenAbility": "prankster",
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 50
    }
  },
  {
    "name": "mawile",
    "label": "Mawile",
    "id": 303,
    "types": [
      "steel",
      "fairy"
    ],
    "abilities": [
      "hyper-cutter",
      "intimidate"
    ],
    "hiddenAbility": "sheer-force",
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 50
    }
  },
  {
    "name": "aggron",
    "label": "Aggron",
    "id": 306,
    "types": [
      "steel",
      "rock"
    ],
    "abilities": [
      "sturdy",
      "rock-head"
    ],
    "hiddenAbility": "heavy-metal",
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 50
    }
  },
  {
    "name": "medicham",
    "label": "Medicham",
    "id": 308,
    "types": [
      "fighting",
      "psychic"
    ],
    "abilities": [
      "pure-power"
    ],
    "hiddenAbility": "telepathy",
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "special-attack": 60,
      "special-defense": 75,
      "speed": 80
    }
  },
  {
    "name": "manectric",
    "label": "Manectric",
    "id": 310,
    "types": [
      "electric"
    ],
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "hiddenAbility": "minus",
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "special-attack": 105,
      "special-defense": 60,
      "speed": 105
    }
  },
  {
    "name": "sharpedo",
    "label": "Sharpedo",
    "id": 319,
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "rough-skin"
    ],
    "hiddenAbility": "speed-boost",
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "special-attack": 95,
      "special-defense": 40,
      "speed": 95
    }
  },
  {
    "name": "camerupt",
    "label": "Camerupt",
    "id": 323,
    "types": [
      "fire",
      "ground"
    ],
    "abilities": [
      "magma-armor",
      "solid-rock"
    ],
    "hiddenAbility": "anger-point",
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "special-attack": 105,
      "special-defense": 75,
      "speed": 40
    }
  },
  {
    "name": "torkoal",
    "label": "Torkoal",
    "id": 324,
    "types": [
      "fire"
    ],
    "abilities": [
      "white-smoke",
      "drought"
    ],
    "hiddenAbility": "shell-armor",
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "special-attack": 85,
      "special-defense": 70,
      "speed": 20
    }
  },
  {
    "name": "altaria",
    "label": "Altaria",
    "id": 334,
    "types": [
      "dragon",
      "flying"
    ],
    "abilities": [
      "natural-cure"
    ],
    "hiddenAbility": "cloud-nine",
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "special-attack": 70,
      "special-defense": 105,
      "speed": 80
    }
  },
  {
    "name": "milotic",
    "label": "Milotic",
    "id": 350,
    "types": [
      "water"
    ],
    "abilities": [
      "marvel-scale",
      "competitive"
    ],
    "hiddenAbility": "cute-charm",
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "special-attack": 100,
      "special-defense": 125,
      "speed": 81
    }
  },
  {
    "name": "castform",
    "label": "Castform",
    "id": 351,
    "types": [
      "normal"
    ],
    "abilities": [
      "forecast"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 70
    }
  },
  {
    "name": "banette",
    "label": "Banette",
    "id": 354,
    "types": [
      "ghost"
    ],
    "abilities": [
      "insomnia",
      "frisk"
    ],
    "hiddenAbility": "cursed-body",
    "stats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "special-attack": 83,
      "special-defense": 63,
      "speed": 65
    }
  },
  {
    "name": "chimecho",
    "label": "Chimecho",
    "id": 358,
    "types": [
      "psychic"
    ],
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 65
    }
  },
  {
    "name": "absol",
    "label": "Absol",
    "id": 359,
    "types": [
      "dark"
    ],
    "abilities": [
      "pressure",
      "super-luck"
    ],
    "hiddenAbility": "justified",
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special-attack": 75,
      "special-defense": 60,
      "speed": 75
    }
  },
  {
    "name": "glalie",
    "label": "Glalie",
    "id": 362,
    "types": [
      "ice"
    ],
    "abilities": [
      "inner-focus",
      "ice-body"
    ],
    "hiddenAbility": "moody",
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special-attack": 80,
      "special-defense": 80,
      "speed": 80
    }
  },
  {
    "name": "metagross",
    "label": "Metagross",
    "id": 376,
    "types": [
      "steel",
      "psychic"
    ],
    "abilities": [
      "clear-body"
    ],
    "hiddenAbility": "light-metal",
    "stats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 70
    }
  },
  {
    "name": "torterra",
    "label": "Torterra",
    "id": 389,
    "types": [
      "grass",
      "ground"
    ],
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "shell-armor",
    "stats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "special-attack": 75,
      "special-defense": 85,
      "speed": 56
    }
  },
  {
    "name": "infernape",
    "label": "Infernape",
    "id": 392,
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "iron-fist",
    "stats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "special-attack": 104,
      "special-defense": 71,
      "speed": 108
    }
  },
  {
    "name": "empoleon",
    "label": "Empoleon",
    "id": 395,
    "types": [
      "water",
      "steel"
    ],
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "competitive",
    "stats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "special-attack": 111,
      "special-defense": 101,
      "speed": 60
    }
  },
  {
    "name": "staraptor",
    "label": "Staraptor",
    "id": 398,
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "intimidate"
    ],
    "hiddenAbility": "reckless",
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "special-attack": 50,
      "special-defense": 60,
      "speed": 100
    }
  },
  {
    "name": "luxray",
    "label": "Luxray",
    "id": 405,
    "types": [
      "electric"
    ],
    "abilities": [
      "rivalry",
      "intimidate"
    ],
    "hiddenAbility": "guts",
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "special-attack": 95,
      "special-defense": 79,
      "speed": 70
    }
  },
  {
    "name": "roserade",
    "label": "Roserade",
    "id": 407,
    "types": [
      "grass",
      "poison"
    ],
    "abilities": [
      "natural-cure",
      "poison-point"
    ],
    "hiddenAbility": "technician",
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "special-attack": 125,
      "special-defense": 105,
      "speed": 90
    }
  },
  {
    "name": "rampardos",
    "label": "Rampardos",
    "id": 409,
    "types": [
      "rock"
    ],
    "abilities": [
      "mold-breaker"
    ],
    "hiddenAbility": "sheer-force",
    "stats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "special-attack": 65,
      "special-defense": 50,
      "speed": 58
    }
  },
  {
    "name": "bastiodon",
    "label": "Bastiodon",
    "id": 411,
    "types": [
      "rock",
      "steel"
    ],
    "abilities": [
      "sturdy"
    ],
    "hiddenAbility": "soundproof",
    "stats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "special-attack": 47,
      "special-defense": 138,
      "speed": 30
    }
  },
  {
    "name": "lopunny",
    "label": "Lopunny",
    "id": 428,
    "types": [
      "normal"
    ],
    "abilities": [
      "cute-charm",
      "klutz"
    ],
    "hiddenAbility": "limber",
    "stats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "special-attack": 54,
      "special-defense": 96,
      "speed": 105
    }
  },
  {
    "name": "spiritomb",
    "label": "Spiritomb",
    "id": 442,
    "types": [
      "ghost",
      "dark"
    ],
    "abilities": [
      "pressure"
    ],
    "hiddenAbility": "infiltrator",
    "stats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "special-attack": 92,
      "special-defense": 108,
      "speed": 35
    }
  },
  {
    "name": "garchomp",
    "label": "Garchomp",
    "id": 445,
    "types": [
      "dragon",
      "ground"
    ],
    "abilities": [
      "sand-veil"
    ],
    "hiddenAbility": "rough-skin",
    "stats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "special-attack": 80,
      "special-defense": 85,
      "speed": 102
    }
  },
  {
    "name": "lucario",
    "label": "Lucario",
    "id": 448,
    "types": [
      "fighting",
      "steel"
    ],
    "abilities": [
      "steadfast",
      "inner-focus"
    ],
    "hiddenAbility": "justified",
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "special-attack": 115,
      "special-defense": 70,
      "speed": 90
    }
  },
  {
    "name": "hippowdon",
    "label": "Hippowdon",
    "id": 450,
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-stream"
    ],
    "hiddenAbility": "sand-force",
    "stats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "special-attack": 68,
      "special-defense": 72,
      "speed": 47
    }
  },
  {
    "name": "toxicroak",
    "label": "Toxicroak",
    "id": 454,
    "types": [
      "poison",
      "fighting"
    ],
    "abilities": [
      "anticipation",
      "dry-skin"
    ],
    "hiddenAbility": "poison-touch",
    "stats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "special-attack": 86,
      "special-defense": 65,
      "speed": 85
    }
  },
  {
    "name": "abomasnow",
    "label": "Abomasnow",
    "id": 460,
    "types": [
      "grass",
      "ice"
    ],
    "abilities": [
      "snow-warning"
    ],
    "hiddenAbility": "soundproof",
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "special-attack": 92,
      "special-defense": 85,
      "speed": 60
    }
  },
  {
    "name": "weavile",
    "label": "Weavile",
    "id": 461,
    "types": [
      "dark",
      "ice"
    ],
    "abilities": [
      "pressure"
    ],
    "hiddenAbility": "pickpocket",
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "special-attack": 45,
      "special-defense": 85,
      "speed": 125
    }
  },
  {
    "name": "rhyperior",
    "label": "Rhyperior",
    "id": 464,
    "types": [
      "ground",
      "rock"
    ],
    "abilities": [
      "lightning-rod",
      "solid-rock"
    ],
    "hiddenAbility": "reckless",
    "stats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 40
    }
  },
  {
    "name": "leafeon",
    "label": "Leafeon",
    "id": 470,
    "types": [
      "grass"
    ],
    "abilities": [
      "leaf-guard"
    ],
    "hiddenAbility": "chlorophyll",
    "stats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "special-attack": 60,
      "special-defense": 65,
      "speed": 95
    }
  },
  {
    "name": "glaceon",
    "label": "Glaceon",
    "id": 471,
    "types": [
      "ice"
    ],
    "abilities": [
      "snow-cloak"
    ],
    "hiddenAbility": "ice-body",
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "special-attack": 130,
      "special-defense": 95,
      "speed": 65
    }
  },
  {
    "name": "gliscor",
    "label": "Gliscor",
    "id": 472,
    "types": [
      "ground",
      "flying"
    ],
    "abilities": [
      "hyper-cutter",
      "sand-veil"
    ],
    "hiddenAbility": "poison-heal",
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "special-attack": 45,
      "special-defense": 75,
      "speed": 95
    }
  },
  {
    "name": "mamoswine",
    "label": "Mamoswine",
    "id": 473,
    "types": [
      "ice",
      "ground"
    ],
    "abilities": [
      "oblivious",
      "snow-cloak"
    ],
    "hiddenAbility": "thick-fat",
    "stats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 60,
      "speed": 80
    }
  },
  {
    "name": "gallade",
    "label": "Gallade",
    "id": 475,
    "types": [
      "psychic",
      "fighting"
    ],
    "abilities": [
      "steadfast",
      "sharpness"
    ],
    "hiddenAbility": "justified",
    "stats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "special-attack": 65,
      "special-defense": 115,
      "speed": 80
    }
  },
  {
    "name": "froslass",
    "label": "Froslass",
    "id": 478,
    "types": [
      "ice",
      "ghost"
    ],
    "abilities": [
      "snow-cloak"
    ],
    "hiddenAbility": "cursed-body",
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "special-attack": 80,
      "special-defense": 70,
      "speed": 110
    }
  },
  {
    "name": "rotom",
    "label": "Rotom",
    "id": 479,
    "types": [
      "electric",
      "ghost"
    ],
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "special-attack": 95,
      "special-defense": 77,
      "speed": 91
    }
  },
  {
    "name": "serperior",
    "label": "Serperior",
    "id": 497,
    "types": [
      "grass"
    ],
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "contrary",
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "special-attack": 75,
      "special-defense": 95,
      "speed": 113
    }
  },
  {
    "name": "emboar",
    "label": "Emboar",
    "id": 500,
    "types": [
      "fire",
      "fighting"
    ],
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "reckless",
    "stats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "special-attack": 100,
      "special-defense": 65,
      "speed": 65
    }
  },
  {
    "name": "samurott",
    "label": "Samurott",
    "id": 503,
    "types": [
      "water"
    ],
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "shell-armor",
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "special-attack": 108,
      "special-defense": 70,
      "speed": 70
    }
  },
  {
    "name": "watchog",
    "label": "Watchog",
    "id": 505,
    "types": [
      "normal"
    ],
    "abilities": [
      "illuminate",
      "keen-eye"
    ],
    "hiddenAbility": "analytic",
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "special-attack": 60,
      "special-defense": 69,
      "speed": 77
    }
  },
  {
    "name": "liepard",
    "label": "Liepard",
    "id": 510,
    "types": [
      "dark"
    ],
    "abilities": [
      "limber",
      "unburden"
    ],
    "hiddenAbility": "prankster",
    "stats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "special-attack": 88,
      "special-defense": 50,
      "speed": 106
    }
  },
  {
    "name": "simisage",
    "label": "Simisage",
    "id": 512,
    "types": [
      "grass"
    ],
    "abilities": [
      "gluttony"
    ],
    "hiddenAbility": "overgrow",
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special-attack": 98,
      "special-defense": 63,
      "speed": 101
    }
  },
  {
    "name": "simisear",
    "label": "Simisear",
    "id": 514,
    "types": [
      "fire"
    ],
    "abilities": [
      "gluttony"
    ],
    "hiddenAbility": "blaze",
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special-attack": 98,
      "special-defense": 63,
      "speed": 101
    }
  },
  {
    "name": "simipour",
    "label": "Simipour",
    "id": 516,
    "types": [
      "water"
    ],
    "abilities": [
      "gluttony"
    ],
    "hiddenAbility": "torrent",
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special-attack": 98,
      "special-defense": 63,
      "speed": 101
    }
  },
  {
    "name": "musharna",
    "label": "Musharna",
    "id": 518,
    "types": [
      "psychic"
    ],
    "abilities": [
      "forewarn",
      "synchronize"
    ],
    "hiddenAbility": "telepathy",
    "stats": {
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "special-attack": 107,
      "special-defense": 95,
      "speed": 29
    }
  },
  {
    "name": "excadrill",
    "label": "Excadrill",
    "id": 530,
    "types": [
      "ground",
      "steel"
    ],
    "abilities": [
      "sand-rush",
      "sand-force"
    ],
    "hiddenAbility": "mold-breaker",
    "stats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "special-attack": 50,
      "special-defense": 65,
      "speed": 88
    }
  },
  {
    "name": "audino",
    "label": "Audino",
    "id": 531,
    "types": [
      "normal"
    ],
    "abilities": [
      "healer",
      "regenerator"
    ],
    "hiddenAbility": "klutz",
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "special-attack": 60,
      "special-defense": 86,
      "speed": 50
    }
  },
  {
    "name": "conkeldurr",
    "label": "Conkeldurr",
    "id": 534,
    "types": [
      "fighting"
    ],
    "abilities": [
      "guts",
      "sheer-force"
    ],
    "hiddenAbility": "iron-fist",
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 45
    }
  },
  {
    "name": "scolipede",
    "label": "Scolipede",
    "id": 545,
    "types": [
      "bug",
      "poison"
    ],
    "abilities": [
      "poison-point",
      "swarm"
    ],
    "hiddenAbility": "speed-boost",
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "special-attack": 55,
      "special-defense": 69,
      "speed": 112
    }
  },
  {
    "name": "whimsicott",
    "label": "Whimsicott",
    "id": 547,
    "types": [
      "grass",
      "fairy"
    ],
    "abilities": [
      "prankster",
      "infiltrator"
    ],
    "hiddenAbility": "chlorophyll",
    "stats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "special-attack": 77,
      "special-defense": 75,
      "speed": 116
    }
  },
  {
    "name": "krookodile",
    "label": "Krookodile",
    "id": 553,
    "types": [
      "ground",
      "dark"
    ],
    "abilities": [
      "intimidate",
      "moxie"
    ],
    "hiddenAbility": "anger-point",
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 92
    }
  },
  {
    "name": "scrafty",
    "label": "Scrafty",
    "id": 560,
    "types": [
      "dark",
      "fighting"
    ],
    "abilities": [
      "shed-skin",
      "moxie"
    ],
    "hiddenAbility": "intimidate",
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "special-attack": 45,
      "special-defense": 115,
      "speed": 58
    }
  },
  {
    "name": "cofagrigus",
    "label": "Cofagrigus",
    "id": 563,
    "types": [
      "ghost"
    ],
    "abilities": [
      "mummy"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "special-attack": 95,
      "special-defense": 105,
      "speed": 30
    }
  },
  {
    "name": "garbodor",
    "label": "Garbodor",
    "id": 569,
    "types": [
      "poison"
    ],
    "abilities": [
      "stench",
      "weak-armor"
    ],
    "hiddenAbility": "aftermath",
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "special-attack": 60,
      "special-defense": 82,
      "speed": 75
    }
  },
  {
    "name": "zoroark",
    "label": "Zoroark",
    "id": 571,
    "types": [
      "dark"
    ],
    "abilities": [
      "illusion"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "special-attack": 120,
      "special-defense": 60,
      "speed": 105
    }
  },
  {
    "name": "reuniclus",
    "label": "Reuniclus",
    "id": 579,
    "types": [
      "psychic"
    ],
    "abilities": [
      "overcoat",
      "magic-guard"
    ],
    "hiddenAbility": "regenerator",
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "special-attack": 125,
      "special-defense": 85,
      "speed": 30
    }
  },
  {
    "name": "vanilluxe",
    "label": "Vanilluxe",
    "id": 584,
    "types": [
      "ice"
    ],
    "abilities": [
      "ice-body",
      "snow-warning"
    ],
    "hiddenAbility": "weak-armor",
    "stats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "special-attack": 110,
      "special-defense": 95,
      "speed": 79
    }
  },
  {
    "name": "emolga",
    "label": "Emolga",
    "id": 587,
    "types": [
      "electric",
      "flying"
    ],
    "abilities": [
      "static"
    ],
    "hiddenAbility": "motor-drive",
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "special-attack": 75,
      "special-defense": 60,
      "speed": 103
    }
  },
  {
    "name": "eelektross",
    "label": "Eelektross",
    "id": 604,
    "types": [
      "electric"
    ],
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "special-attack": 105,
      "special-defense": 80,
      "speed": 50
    }
  },
  {
    "name": "chandelure",
    "label": "Chandelure",
    "id": 609,
    "types": [
      "ghost",
      "fire"
    ],
    "abilities": [
      "flash-fire",
      "flame-body"
    ],
    "hiddenAbility": "infiltrator",
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "special-attack": 145,
      "special-defense": 90,
      "speed": 80
    }
  },
  {
    "name": "beartic",
    "label": "Beartic",
    "id": 614,
    "types": [
      "ice"
    ],
    "abilities": [
      "snow-cloak",
      "slush-rush"
    ],
    "hiddenAbility": "swift-swim",
    "stats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 80,
      "speed": 50
    }
  },
  {
    "name": "stunfisk",
    "label": "Stunfisk",
    "id": 618,
    "types": [
      "ground",
      "electric"
    ],
    "abilities": [
      "static",
      "limber"
    ],
    "hiddenAbility": "sand-veil",
    "stats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "special-attack": 81,
      "special-defense": 99,
      "speed": 32
    }
  },
  {
    "name": "golurk",
    "label": "Golurk",
    "id": 623,
    "types": [
      "ground",
      "ghost"
    ],
    "abilities": [
      "iron-fist",
      "klutz"
    ],
    "hiddenAbility": "no-guard",
    "stats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "special-attack": 55,
      "special-defense": 80,
      "speed": 55
    }
  },
  {
    "name": "hydreigon",
    "label": "Hydreigon",
    "id": 635,
    "types": [
      "dark",
      "dragon"
    ],
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "special-attack": 125,
      "special-defense": 90,
      "speed": 98
    }
  },
  {
    "name": "volcarona",
    "label": "Volcarona",
    "id": 637,
    "types": [
      "bug",
      "fire"
    ],
    "abilities": [
      "flame-body"
    ],
    "hiddenAbility": "swarm",
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "special-attack": 135,
      "special-defense": 105,
      "speed": 100
    }
  },
  {
    "name": "chesnaught",
    "label": "Chesnaught",
    "id": 652,
    "types": [
      "grass",
      "fighting"
    ],
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "bulletproof",
    "stats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "special-attack": 74,
      "special-defense": 75,
      "speed": 64
    }
  },
  {
    "name": "delphox",
    "label": "Delphox",
    "id": 655,
    "types": [
      "fire",
      "psychic"
    ],
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "magician",
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "special-attack": 114,
      "special-defense": 100,
      "speed": 104
    }
  },
  {
    "name": "greninja",
    "label": "Greninja",
    "id": 658,
    "types": [
      "water",
      "dark"
    ],
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "protean",
    "stats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "special-attack": 103,
      "special-defense": 71,
      "speed": 122
    }
  },
  {
    "name": "diggersby",
    "label": "Diggersby",
    "id": 660,
    "types": [
      "normal",
      "ground"
    ],
    "abilities": [
      "pickup",
      "cheek-pouch"
    ],
    "hiddenAbility": "huge-power",
    "stats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "special-attack": 50,
      "special-defense": 77,
      "speed": 78
    }
  },
  {
    "name": "talonflame",
    "label": "Talonflame",
    "id": 663,
    "types": [
      "fire",
      "flying"
    ],
    "abilities": [
      "flame-body"
    ],
    "hiddenAbility": "gale-wings",
    "stats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "special-attack": 74,
      "special-defense": 69,
      "speed": 126
    }
  },
  {
    "name": "vivillon",
    "label": "Vivillon",
    "id": 666,
    "types": [
      "bug",
      "flying"
    ],
    "abilities": [
      "shield-dust",
      "compound-eyes"
    ],
    "hiddenAbility": "friend-guard",
    "stats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "special-attack": 90,
      "special-defense": 50,
      "speed": 89
    }
  },
  {
    "name": "pyroar",
    "label": "Pyroar",
    "id": 668,
    "types": [
      "fire",
      "normal"
    ],
    "abilities": [
      "rivalry",
      "unnerve"
    ],
    "hiddenAbility": "moxie",
    "stats": {
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "special-attack": 109,
      "special-defense": 66,
      "speed": 106
    }
  },
  {
    "name": "floette",
    "label": "Floette",
    "id": 670,
    "types": [
      "fairy"
    ],
    "abilities": [
      "flower-veil"
    ],
    "hiddenAbility": "symbiosis",
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "special-attack": 75,
      "special-defense": 98,
      "speed": 52
    }
  },
  {
    "name": "florges",
    "label": "Florges",
    "id": 671,
    "types": [
      "fairy"
    ],
    "abilities": [
      "flower-veil"
    ],
    "hiddenAbility": "symbiosis",
    "stats": {
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "special-attack": 112,
      "special-defense": 154,
      "speed": 75
    }
  },
  {
    "name": "pangoro",
    "label": "Pangoro",
    "id": 675,
    "types": [
      "fighting",
      "dark"
    ],
    "abilities": [
      "iron-fist",
      "mold-breaker"
    ],
    "hiddenAbility": "scrappy",
    "stats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "special-attack": 69,
      "special-defense": 71,
      "speed": 58
    }
  },
  {
    "name": "furfrou",
    "label": "Furfrou",
    "id": 676,
    "types": [
      "normal"
    ],
    "abilities": [
      "fur-coat"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "special-attack": 65,
      "special-defense": 90,
      "speed": 102
    }
  },
  {
    "name": "meowstic",
    "label": "Meowstic",
    "id": 678,
    "types": [
      "psychic"
    ],
    "abilities": [
      "keen-eye",
      "infiltrator"
    ],
    "hiddenAbility": "prankster",
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "special-attack": 83,
      "special-defense": 81,
      "speed": 104
    }
  },
  {
    "name": "aegislash",
    "label": "Aegislash",
    "id": 681,
    "types": [
      "steel",
      "ghost"
    ],
    "abilities": [
      "stance-change"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "special-attack": 50,
      "special-defense": 140,
      "speed": 60
    }
  },
  {
    "name": "aromatisse",
    "label": "Aromatisse",
    "id": 683,
    "types": [
      "fairy"
    ],
    "abilities": [
      "healer"
    ],
    "hiddenAbility": "aroma-veil",
    "stats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "special-attack": 99,
      "special-defense": 89,
      "speed": 29
    }
  },
  {
    "name": "slurpuff",
    "label": "Slurpuff",
    "id": 685,
    "types": [
      "fairy"
    ],
    "abilities": [
      "sweet-veil"
    ],
    "hiddenAbility": "unburden",
    "stats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 72
    }
  },
  {
    "name": "malamar",
    "label": "Malamar",
    "id": 687,
    "types": [
      "dark",
      "psychic"
    ],
    "abilities": [
      "contrary",
      "suction-cups"
    ],
    "hiddenAbility": "infiltrator",
    "stats": {
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "special-attack": 68,
      "special-defense": 75,
      "speed": 73
    }
  },
  {
    "name": "barbaracle",
    "label": "Barbaracle",
    "id": 689,
    "types": [
      "rock",
      "water"
    ],
    "abilities": [
      "tough-claws",
      "sniper"
    ],
    "hiddenAbility": "pickpocket",
    "stats": {
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "special-attack": 54,
      "special-defense": 86,
      "speed": 68
    }
  },
  {
    "name": "dragalge",
    "label": "Dragalge",
    "id": 691,
    "types": [
      "poison",
      "dragon"
    ],
    "abilities": [
      "poison-point",
      "poison-touch"
    ],
    "hiddenAbility": "adaptability",
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "special-attack": 97,
      "special-defense": 123,
      "speed": 44
    }
  },
  {
    "name": "clawitzer",
    "label": "Clawitzer",
    "id": 693,
    "types": [
      "water"
    ],
    "abilities": [
      "mega-launcher"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "special-attack": 120,
      "special-defense": 89,
      "speed": 59
    }
  },
  {
    "name": "heliolisk",
    "label": "Heliolisk",
    "id": 695,
    "types": [
      "electric",
      "normal"
    ],
    "abilities": [
      "dry-skin",
      "sand-veil"
    ],
    "hiddenAbility": "solar-power",
    "stats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "special-attack": 109,
      "special-defense": 94,
      "speed": 109
    }
  },
  {
    "name": "tyrantrum",
    "label": "Tyrantrum",
    "id": 697,
    "types": [
      "rock",
      "dragon"
    ],
    "abilities": [
      "strong-jaw"
    ],
    "hiddenAbility": "rock-head",
    "stats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "special-attack": 69,
      "special-defense": 59,
      "speed": 71
    }
  },
  {
    "name": "aurorus",
    "label": "Aurorus",
    "id": 699,
    "types": [
      "rock",
      "ice"
    ],
    "abilities": [
      "refrigerate"
    ],
    "hiddenAbility": "snow-warning",
    "stats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "special-attack": 99,
      "special-defense": 92,
      "speed": 58
    }
  },
  {
    "name": "sylveon",
    "label": "Sylveon",
    "id": 700,
    "types": [
      "fairy"
    ],
    "abilities": [
      "cute-charm"
    ],
    "hiddenAbility": "pixilate",
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "special-attack": 110,
      "special-defense": 130,
      "speed": 60
    }
  },
  {
    "name": "hawlucha",
    "label": "Hawlucha",
    "id": 701,
    "types": [
      "fighting",
      "flying"
    ],
    "abilities": [
      "limber",
      "unburden"
    ],
    "hiddenAbility": "mold-breaker",
    "stats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "special-attack": 74,
      "special-defense": 63,
      "speed": 118
    }
  },
  {
    "name": "dedenne",
    "label": "Dedenne",
    "id": 702,
    "types": [
      "electric",
      "fairy"
    ],
    "abilities": [
      "cheek-pouch",
      "pickup"
    ],
    "hiddenAbility": "plus",
    "stats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "special-attack": 81,
      "special-defense": 67,
      "speed": 101
    }
  },
  {
    "name": "goodra",
    "label": "Goodra",
    "id": 706,
    "types": [
      "dragon"
    ],
    "abilities": [
      "sap-sipper",
      "hydration"
    ],
    "hiddenAbility": "gooey",
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "special-attack": 110,
      "special-defense": 150,
      "speed": 80
    }
  },
  {
    "name": "klefki",
    "label": "Klefki",
    "id": 707,
    "types": [
      "steel",
      "fairy"
    ],
    "abilities": [
      "prankster"
    ],
    "hiddenAbility": "magician",
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "special-attack": 80,
      "special-defense": 87,
      "speed": 75
    }
  },
  {
    "name": "trevenant",
    "label": "Trevenant",
    "id": 709,
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "natural-cure",
      "frisk"
    ],
    "hiddenAbility": "harvest",
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "special-attack": 65,
      "special-defense": 82,
      "speed": 56
    }
  },
  {
    "name": "gourgeist",
    "label": "Gourgeist",
    "id": 711,
    "types": [
      "ghost",
      "grass"
    ],
    "abilities": [
      "pickup",
      "frisk"
    ],
    "hiddenAbility": "insomnia",
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "special-attack": 58,
      "special-defense": 75,
      "speed": 84
    }
  },
  {
    "name": "avalugg",
    "label": "Avalugg",
    "id": 713,
    "types": [
      "ice"
    ],
    "abilities": [
      "own-tempo",
      "ice-body"
    ],
    "hiddenAbility": "sturdy",
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "special-attack": 44,
      "special-defense": 46,
      "speed": 28
    }
  },
  {
    "name": "noivern",
    "label": "Noivern",
    "id": 715,
    "types": [
      "flying",
      "dragon"
    ],
    "abilities": [
      "frisk",
      "infiltrator"
    ],
    "hiddenAbility": "telepathy",
    "stats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "special-attack": 97,
      "special-defense": 80,
      "speed": 123
    }
  },
  {
    "name": "decidueye",
    "label": "Decidueye",
    "id": 724,
    "types": [
      "grass",
      "ghost"
    ],
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "long-reach",
    "stats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 70
    }
  },
  {
    "name": "incineroar",
    "label": "Incineroar",
    "id": 727,
    "types": [
      "fire",
      "dark"
    ],
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "intimidate",
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "special-attack": 80,
      "special-defense": 90,
      "speed": 60
    }
  },
  {
    "name": "primarina",
    "label": "Primarina",
    "id": 730,
    "types": [
      "water",
      "fairy"
    ],
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "liquid-voice",
    "stats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "special-attack": 126,
      "special-defense": 116,
      "speed": 60
    }
  },
  {
    "name": "toucannon",
    "label": "Toucannon",
    "id": 733,
    "types": [
      "normal",
      "flying"
    ],
    "abilities": [
      "keen-eye",
      "skill-link"
    ],
    "hiddenAbility": "sheer-force",
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "special-attack": 75,
      "special-defense": 75,
      "speed": 60
    }
  },
  {
    "name": "crabominable",
    "label": "Crabominable",
    "id": 740,
    "types": [
      "fighting",
      "ice"
    ],
    "abilities": [
      "hyper-cutter",
      "iron-fist"
    ],
    "hiddenAbility": "anger-point",
    "stats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "special-attack": 62,
      "special-defense": 67,
      "speed": 43
    }
  },
  {
    "name": "lycanroc",
    "label": "Lycanroc",
    "id": 745,
    "types": [
      "rock"
    ],
    "abilities": [
      "keen-eye",
      "sand-rush"
    ],
    "hiddenAbility": "steadfast",
    "stats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 112
    }
  },
  {
    "name": "toxapex",
    "label": "Toxapex",
    "id": 748,
    "types": [
      "poison",
      "water"
    ],
    "abilities": [
      "merciless",
      "limber"
    ],
    "hiddenAbility": "regenerator",
    "stats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "special-attack": 53,
      "special-defense": 142,
      "speed": 35
    }
  },
  {
    "name": "mudsdale",
    "label": "Mudsdale",
    "id": 750,
    "types": [
      "ground"
    ],
    "abilities": [
      "own-tempo",
      "stamina"
    ],
    "hiddenAbility": "inner-focus",
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 85,
      "speed": 35
    }
  },
  {
    "name": "araquanid",
    "label": "Araquanid",
    "id": 752,
    "types": [
      "water",
      "bug"
    ],
    "abilities": [
      "water-bubble"
    ],
    "hiddenAbility": "water-absorb",
    "stats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "special-attack": 50,
      "special-defense": 132,
      "speed": 42
    }
  },
  {
    "name": "salazzle",
    "label": "Salazzle",
    "id": 758,
    "types": [
      "poison",
      "fire"
    ],
    "abilities": [
      "corrosion"
    ],
    "hiddenAbility": "oblivious",
    "stats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "special-attack": 111,
      "special-defense": 60,
      "speed": 117
    }
  },
  {
    "name": "tsareena",
    "label": "Tsareena",
    "id": 763,
    "types": [
      "grass"
    ],
    "abilities": [
      "leaf-guard",
      "queenly-majesty"
    ],
    "hiddenAbility": "sweet-veil",
    "stats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "special-attack": 50,
      "special-defense": 98,
      "speed": 72
    }
  },
  {
    "name": "oranguru",
    "label": "Oranguru",
    "id": 765,
    "types": [
      "normal",
      "psychic"
    ],
    "abilities": [
      "inner-focus",
      "telepathy"
    ],
    "hiddenAbility": "symbiosis",
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "special-attack": 90,
      "special-defense": 110,
      "speed": 60
    }
  },
  {
    "name": "passimian",
    "label": "Passimian",
    "id": 766,
    "types": [
      "fighting"
    ],
    "abilities": [
      "receiver"
    ],
    "hiddenAbility": "defiant",
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "special-attack": 40,
      "special-defense": 60,
      "speed": 80
    }
  },
  {
    "name": "mimikyu",
    "label": "Mimikyu",
    "id": 778,
    "types": [
      "ghost",
      "fairy"
    ],
    "abilities": [
      "disguise"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "special-attack": 50,
      "special-defense": 105,
      "speed": 96
    }
  },
  {
    "name": "drampa",
    "label": "Drampa",
    "id": 780,
    "types": [
      "normal",
      "dragon"
    ],
    "abilities": [
      "berserk",
      "sap-sipper"
    ],
    "hiddenAbility": "cloud-nine",
    "stats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "special-attack": 135,
      "special-defense": 91,
      "speed": 36
    }
  },
  {
    "name": "kommo-o",
    "label": "Kommo-O",
    "id": 784,
    "types": [
      "dragon",
      "fighting"
    ],
    "abilities": [
      "bulletproof",
      "soundproof"
    ],
    "hiddenAbility": "overcoat",
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "special-attack": 100,
      "special-defense": 105,
      "speed": 85
    }
  },
  {
    "name": "corviknight",
    "label": "Corviknight",
    "id": 823,
    "types": [
      "flying",
      "steel"
    ],
    "abilities": [
      "pressure",
      "unnerve"
    ],
    "hiddenAbility": "mirror-armor",
    "stats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "special-attack": 53,
      "special-defense": 85,
      "speed": 67
    }
  },
  {
    "name": "flapple",
    "label": "Flapple",
    "id": 841,
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "ripen",
      "gluttony"
    ],
    "hiddenAbility": "hustle",
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "special-attack": 95,
      "special-defense": 60,
      "speed": 70
    }
  },
  {
    "name": "appletun",
    "label": "Appletun",
    "id": 842,
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "ripen",
      "gluttony"
    ],
    "hiddenAbility": "thick-fat",
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 30
    }
  },
  {
    "name": "sandaconda",
    "label": "Sandaconda",
    "id": 844,
    "types": [
      "ground"
    ],
    "abilities": [
      "sand-spit",
      "shed-skin"
    ],
    "hiddenAbility": "sand-veil",
    "stats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 71
    }
  },
  {
    "name": "polteageist",
    "label": "Polteageist",
    "id": 855,
    "types": [
      "ghost"
    ],
    "abilities": [
      "weak-armor"
    ],
    "hiddenAbility": "cursed-body",
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "special-attack": 134,
      "special-defense": 114,
      "speed": 70
    }
  },
  {
    "name": "hatterene",
    "label": "Hatterene",
    "id": 858,
    "types": [
      "psychic",
      "fairy"
    ],
    "abilities": [
      "healer",
      "anticipation"
    ],
    "hiddenAbility": "magic-bounce",
    "stats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "special-attack": 136,
      "special-defense": 103,
      "speed": 29
    }
  },
  {
    "name": "grimmsnarl",
    "label": "Grimmsnarl",
    "id": 861,
    "types": [
      "dark",
      "fairy"
    ],
    "abilities": [
      "prankster",
      "frisk"
    ],
    "hiddenAbility": "pickpocket",
    "stats": {
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "special-attack": 95,
      "special-defense": 75,
      "speed": 60
    }
  },
  {
    "name": "mr-rime",
    "label": "Mr-Rime",
    "id": 866,
    "types": [
      "ice",
      "psychic"
    ],
    "abilities": [
      "tangled-feet",
      "screen-cleaner"
    ],
    "hiddenAbility": "ice-body",
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "special-attack": 110,
      "special-defense": 100,
      "speed": 70
    }
  },
  {
    "name": "runerigus",
    "label": "Runerigus",
    "id": 867,
    "types": [
      "ground",
      "ghost"
    ],
    "abilities": [
      "wandering-spirit"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "special-attack": 50,
      "special-defense": 105,
      "speed": 30
    }
  },
  {
    "name": "alcremie",
    "label": "Alcremie",
    "id": 869,
    "types": [
      "fairy"
    ],
    "abilities": [
      "sweet-veil"
    ],
    "hiddenAbility": "aroma-veil",
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "special-attack": 110,
      "special-defense": 121,
      "speed": 64
    }
  },
  {
    "name": "falinks",
    "label": "Falinks",
    "id": 870,
    "types": [
      "fighting"
    ],
    "abilities": [
      "battle-armor"
    ],
    "hiddenAbility": "defiant",
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 100,
      "special-attack": 70,
      "special-defense": 60,
      "speed": 75
    }
  },
  {
    "name": "morpeko",
    "label": "Morpeko",
    "id": 877,
    "types": [
      "electric",
      "dark"
    ],
    "abilities": [
      "hunger-switch"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "special-attack": 70,
      "special-defense": 58,
      "speed": 97
    }
  },
  {
    "name": "dragapult",
    "label": "Dragapult",
    "id": 887,
    "types": [
      "dragon",
      "ghost"
    ],
    "abilities": [
      "clear-body",
      "infiltrator"
    ],
    "hiddenAbility": "cursed-body",
    "stats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "special-attack": 100,
      "special-defense": 75,
      "speed": 142
    }
  },
  {
    "name": "wyrdeer",
    "label": "Wyrdeer",
    "id": 899,
    "types": [
      "normal",
      "psychic"
    ],
    "abilities": [
      "intimidate",
      "frisk"
    ],
    "hiddenAbility": "sap-sipper",
    "stats": {
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "special-attack": 105,
      "special-defense": 75,
      "speed": 65
    }
  },
  {
    "name": "kleavor",
    "label": "Kleavor",
    "id": 900,
    "types": [
      "bug",
      "rock"
    ],
    "abilities": [
      "swarm",
      "sheer-force"
    ],
    "hiddenAbility": "sharpness",
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "special-attack": 45,
      "special-defense": 70,
      "speed": 85
    }
  },
  {
    "name": "basculegion",
    "label": "Basculegion",
    "id": 902,
    "types": [
      "water",
      "ghost"
    ],
    "abilities": [
      "swift-swim",
      "adaptability"
    ],
    "hiddenAbility": "mold-breaker",
    "stats": {
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "special-attack": 80,
      "special-defense": 75,
      "speed": 78
    }
  },
  {
    "name": "sneasler",
    "label": "Sneasler",
    "id": 903,
    "types": [
      "fighting",
      "poison"
    ],
    "abilities": [
      "pressure",
      "unburden"
    ],
    "hiddenAbility": "poison-touch",
    "stats": {
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "special-attack": 40,
      "special-defense": 80,
      "speed": 120
    }
  },
  {
    "name": "overqwil",
    "label": "Overqwil",
    "id": 904,
    "types": [
      "dark",
      "poison"
    ],
    "abilities": [
      "poison-point",
      "swift-swim"
    ],
    "hiddenAbility": "intimidate",
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 95,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 85
    }
  },
  {
    "name": "meowscarada",
    "label": "Meowscarada",
    "id": 908,
    "types": [
      "grass",
      "dark"
    ],
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "protean",
    "stats": {
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "special-attack": 81,
      "special-defense": 70,
      "speed": 123
    }
  },
  {
    "name": "skeledirge",
    "label": "Skeledirge",
    "id": 911,
    "types": [
      "fire",
      "ghost"
    ],
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "unaware",
    "stats": {
      "hp": 104,
      "attack": 75,
      "defense": 100,
      "special-attack": 110,
      "special-defense": 75,
      "speed": 66
    }
  },
  {
    "name": "quaquaval",
    "label": "Quaquaval",
    "id": 914,
    "types": [
      "water",
      "fighting"
    ],
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "moxie",
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 80,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 85
    }
  },
  {
    "name": "maushold",
    "label": "Maushold",
    "id": 925,
    "types": [
      "normal"
    ],
    "abilities": [
      "friend-guard",
      "cheek-pouch"
    ],
    "hiddenAbility": "technician",
    "stats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "special-attack": 65,
      "special-defense": 75,
      "speed": 111
    }
  },
  {
    "name": "garganacl",
    "label": "Garganacl",
    "id": 934,
    "types": [
      "rock"
    ],
    "abilities": [
      "purifying-salt",
      "sturdy"
    ],
    "hiddenAbility": "clear-body",
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 130,
      "special-attack": 45,
      "special-defense": 90,
      "speed": 35
    }
  },
  {
    "name": "armarouge",
    "label": "Armarouge",
    "id": 936,
    "types": [
      "fire",
      "psychic"
    ],
    "abilities": [
      "flash-fire"
    ],
    "hiddenAbility": "weak-armor",
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "special-attack": 125,
      "special-defense": 80,
      "speed": 75
    }
  },
  {
    "name": "ceruledge",
    "label": "Ceruledge",
    "id": 937,
    "types": [
      "fire",
      "ghost"
    ],
    "abilities": [
      "flash-fire"
    ],
    "hiddenAbility": "weak-armor",
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 80,
      "special-attack": 60,
      "special-defense": 100,
      "speed": 85
    }
  },
  {
    "name": "bellibolt",
    "label": "Bellibolt",
    "id": 939,
    "types": [
      "electric"
    ],
    "abilities": [
      "electromorphosis",
      "static"
    ],
    "hiddenAbility": "damp",
    "stats": {
      "hp": 109,
      "attack": 64,
      "defense": 91,
      "special-attack": 103,
      "special-defense": 83,
      "speed": 45
    }
  },
  {
    "name": "scovillain",
    "label": "Scovillain",
    "id": 952,
    "types": [
      "grass",
      "fire"
    ],
    "abilities": [
      "chlorophyll",
      "insomnia"
    ],
    "hiddenAbility": "moody",
    "stats": {
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "special-attack": 108,
      "special-defense": 65,
      "speed": 75
    }
  },
  {
    "name": "espathra",
    "label": "Espathra",
    "id": 956,
    "types": [
      "psychic"
    ],
    "abilities": [
      "opportunist",
      "frisk"
    ],
    "hiddenAbility": "speed-boost",
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 60,
      "special-attack": 101,
      "special-defense": 60,
      "speed": 105
    }
  },
  {
    "name": "tinkaton",
    "label": "Tinkaton",
    "id": 959,
    "types": [
      "fairy",
      "steel"
    ],
    "abilities": [
      "mold-breaker",
      "own-tempo"
    ],
    "hiddenAbility": "pickpocket",
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "special-attack": 70,
      "special-defense": 105,
      "speed": 94
    }
  },
  {
    "name": "palafin",
    "label": "Palafin",
    "id": 964,
    "types": [
      "water"
    ],
    "abilities": [
      "zero-to-hero"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "special-attack": 53,
      "special-defense": 62,
      "speed": 100
    }
  },
  {
    "name": "orthworm",
    "label": "Orthworm",
    "id": 968,
    "types": [
      "steel"
    ],
    "abilities": [
      "earth-eater"
    ],
    "hiddenAbility": "sand-veil",
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 145,
      "special-attack": 60,
      "special-defense": 55,
      "speed": 65
    }
  },
  {
    "name": "glimmora",
    "label": "Glimmora",
    "id": 970,
    "types": [
      "rock",
      "poison"
    ],
    "abilities": [
      "toxic-debris"
    ],
    "hiddenAbility": "corrosion",
    "stats": {
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "special-attack": 130,
      "special-defense": 81,
      "speed": 86
    }
  },
  {
    "name": "houndstone",
    "label": "Houndstone",
    "id": 972,
    "types": [
      "ghost"
    ],
    "abilities": [
      "sand-rush"
    ],
    "hiddenAbility": "fluffy",
    "stats": {
      "hp": 72,
      "attack": 101,
      "defense": 100,
      "special-attack": 50,
      "special-defense": 97,
      "speed": 68
    }
  },
  {
    "name": "annihilape",
    "label": "Annihilape",
    "id": 979,
    "types": [
      "fighting",
      "ghost"
    ],
    "abilities": [
      "vital-spirit",
      "inner-focus"
    ],
    "hiddenAbility": "defiant",
    "stats": {
      "hp": 110,
      "attack": 115,
      "defense": 80,
      "special-attack": 50,
      "special-defense": 90,
      "speed": 90
    }
  },
  {
    "name": "farigiraf",
    "label": "Farigiraf",
    "id": 981,
    "types": [
      "normal",
      "psychic"
    ],
    "abilities": [
      "cud-chew",
      "armor-tail"
    ],
    "hiddenAbility": "sap-sipper",
    "stats": {
      "hp": 120,
      "attack": 90,
      "defense": 70,
      "special-attack": 110,
      "special-defense": 70,
      "speed": 60
    }
  },
  {
    "name": "kingambit",
    "label": "Kingambit",
    "id": 983,
    "types": [
      "dark",
      "steel"
    ],
    "abilities": [
      "defiant",
      "supreme-overlord"
    ],
    "hiddenAbility": "pressure",
    "stats": {
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "special-attack": 60,
      "special-defense": 85,
      "speed": 50
    }
  },
  {
    "name": "gholdengo",
    "label": "Gholdengo",
    "id": 1000,
    "types": [
      "steel",
      "ghost"
    ],
    "abilities": [
      "good-as-gold"
    ],
    "hiddenAbility": null,
    "stats": {
      "hp": 87,
      "attack": 60,
      "defense": 95,
      "special-attack": 133,
      "special-defense": 91,
      "speed": 84
    }
  },
  {
    "name": "sinistcha",
    "label": "Sinistcha",
    "id": 1013,
    "types": [
      "grass",
      "ghost"
    ],
    "abilities": [
      "hospitality"
    ],
    "hiddenAbility": "heatproof",
    "stats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "special-attack": 121,
      "special-defense": 80,
      "speed": 70
    }
  },
  {
    "name": "archaludon",
    "label": "Archaludon",
    "id": 1018,
    "types": [
      "steel",
      "dragon"
    ],
    "abilities": [
      "stamina",
      "sturdy"
    ],
    "hiddenAbility": "stalwart",
    "stats": {
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "special-attack": 125,
      "special-defense": 65,
      "speed": 85
    }
  },
  {
    "name": "hydrapple",
    "label": "Hydrapple",
    "id": 1019,
    "types": [
      "grass",
      "dragon"
    ],
    "abilities": [
      "supersweet-syrup",
      "regenerator"
    ],
    "hiddenAbility": "sticky-hold",
    "stats": {
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "special-attack": 120,
      "special-defense": 80,
      "speed": 44
    }
  }
];
