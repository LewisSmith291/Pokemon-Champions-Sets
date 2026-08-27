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
  /** PokeAPI gender_rate: -1 genderless, 0 always male, 8 always female, 1-7 either */
  genderRate: number;
  /** True when gender is a *form* here (Meowstic, Basculegion), not just a flag */
  hasGenderForms: boolean;
  /** True when the female sprite differs - served from public/sprites/female/ */
  hasGenderDifferences: boolean;
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 6,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 6,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 2,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 2,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 2,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 8,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 0,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 0,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 8,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 2,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 7,
    "hasGenderForms": false,
    "hasGenderDifferences": true,
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
    "genderRate": 8,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 8,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": true,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 8,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 8,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "label": "Kommo-o",
    "id": 784,
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 8,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 0,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "label": "Mr. Rime",
    "id": 866,
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 8,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": true,
    "hasGenderDifferences": true,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 8,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": -1,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
    "genderRate": 4,
    "hasGenderForms": false,
    "hasGenderDifferences": false,
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
