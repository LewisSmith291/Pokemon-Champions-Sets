// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-forms.mjs
//
// Every selectable form's dex id, typing and base stats, keyed by the same slug
// a set stores in its `form` column. species.ts only covers default forms, so
// this is what lets a stored set be rendered - sprite, types and all - without a
// PokeAPI round trip per card.

export interface FormData {
  /** The form's own dex id: venusaur-mega is 10033. Names public/sprites/{id}.png */
  id: number;
  /** Mega and regional forms often re-type, so this is not the species' typing */
  types: string[];
  /** Keyed by PokeAPI stat slug - same shape as Species.stats and baseStats in CreateSet */
  stats: Record<string, number>;
  /** Regular abilities, as slugs. A Mega has exactly one. */
  abilities: string[];
  hiddenAbility: string | null;
}

export const FORM_DATA: Record<string, FormData> = {
  "abomasnow": {
    "id": 460,
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "special-attack": 92,
      "special-defense": 85,
      "speed": 60
    },
    "abilities": [
      "snow-warning"
    ],
    "hiddenAbility": "soundproof"
  },
  "abomasnow-mega": {
    "id": 10060,
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 132,
      "defense": 105,
      "special-attack": 132,
      "special-defense": 105,
      "speed": 30
    },
    "abilities": [
      "snow-warning"
    ],
    "hiddenAbility": null
  },
  "absol": {
    "id": 359,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special-attack": 75,
      "special-defense": 60,
      "speed": 75
    },
    "abilities": [
      "pressure",
      "super-luck"
    ],
    "hiddenAbility": "justified"
  },
  "absol-mega": {
    "id": 10057,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 65,
      "attack": 150,
      "defense": 60,
      "special-attack": 115,
      "special-defense": 60,
      "speed": 115
    },
    "abilities": [
      "magic-bounce"
    ],
    "hiddenAbility": null
  },
  "absol-mega-z": {
    "id": 10307,
    "types": [
      "dark",
      "ghost"
    ],
    "stats": {
      "hp": 65,
      "attack": 154,
      "defense": 60,
      "special-attack": 75,
      "special-defense": 60,
      "speed": 151
    },
    "abilities": [
      "sharpness"
    ],
    "hiddenAbility": null
  },
  "aegislash-blade": {
    "id": 10026,
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 140,
      "defense": 50,
      "special-attack": 140,
      "special-defense": 50,
      "speed": 60
    },
    "abilities": [
      "stance-change"
    ],
    "hiddenAbility": null
  },
  "aegislash-shield": {
    "id": 681,
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "special-attack": 50,
      "special-defense": 140,
      "speed": 60
    },
    "abilities": [
      "stance-change"
    ],
    "hiddenAbility": null
  },
  "aerodactyl": {
    "id": 142,
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special-attack": 60,
      "special-defense": 75,
      "speed": 130
    },
    "abilities": [
      "rock-head",
      "pressure"
    ],
    "hiddenAbility": "unnerve"
  },
  "aerodactyl-mega": {
    "id": 10042,
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 135,
      "defense": 85,
      "special-attack": 70,
      "special-defense": 95,
      "speed": 150
    },
    "abilities": [
      "tough-claws"
    ],
    "hiddenAbility": null
  },
  "aggron": {
    "id": 306,
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 50
    },
    "abilities": [
      "sturdy",
      "rock-head"
    ],
    "hiddenAbility": "heavy-metal"
  },
  "aggron-mega": {
    "id": 10053,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 140,
      "defense": 230,
      "special-attack": 60,
      "special-defense": 80,
      "speed": 50
    },
    "abilities": [
      "filter"
    ],
    "hiddenAbility": null
  },
  "alakazam": {
    "id": 65,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "special-attack": 135,
      "special-defense": 95,
      "speed": 120
    },
    "abilities": [
      "synchronize",
      "inner-focus"
    ],
    "hiddenAbility": "magic-guard"
  },
  "alakazam-mega": {
    "id": 10037,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 65,
      "special-attack": 175,
      "special-defense": 105,
      "speed": 150
    },
    "abilities": [
      "trace"
    ],
    "hiddenAbility": null
  },
  "alcremie": {
    "id": 869,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "special-attack": 110,
      "special-defense": 121,
      "speed": 64
    },
    "abilities": [
      "sweet-veil"
    ],
    "hiddenAbility": "aroma-veil"
  },
  "altaria": {
    "id": 334,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "special-attack": 70,
      "special-defense": 105,
      "speed": 80
    },
    "abilities": [
      "natural-cure"
    ],
    "hiddenAbility": "cloud-nine"
  },
  "altaria-mega": {
    "id": 10067,
    "types": [
      "dragon",
      "fairy"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 110,
      "special-attack": 110,
      "special-defense": 105,
      "speed": 80
    },
    "abilities": [
      "pixilate"
    ],
    "hiddenAbility": null
  },
  "ampharos": {
    "id": 181,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "special-attack": 115,
      "special-defense": 90,
      "speed": 55
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "plus"
  },
  "ampharos-mega": {
    "id": 10045,
    "types": [
      "electric",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 105,
      "special-attack": 165,
      "special-defense": 110,
      "speed": 45
    },
    "abilities": [
      "mold-breaker"
    ],
    "hiddenAbility": null
  },
  "annihilape": {
    "id": 979,
    "types": [
      "fighting",
      "ghost"
    ],
    "stats": {
      "hp": 110,
      "attack": 115,
      "defense": 80,
      "special-attack": 50,
      "special-defense": 90,
      "speed": 90
    },
    "abilities": [
      "vital-spirit",
      "inner-focus"
    ],
    "hiddenAbility": "defiant"
  },
  "appletun": {
    "id": 842,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 30
    },
    "abilities": [
      "ripen",
      "gluttony"
    ],
    "hiddenAbility": "thick-fat"
  },
  "araquanid": {
    "id": 752,
    "types": [
      "water",
      "bug"
    ],
    "stats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "special-attack": 50,
      "special-defense": 132,
      "speed": 42
    },
    "abilities": [
      "water-bubble"
    ],
    "hiddenAbility": "water-absorb"
  },
  "araquanid-totem": {
    "id": 10153,
    "types": [
      "water",
      "bug"
    ],
    "stats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "special-attack": 50,
      "special-defense": 132,
      "speed": 42
    },
    "abilities": [
      "water-bubble"
    ],
    "hiddenAbility": "water-absorb"
  },
  "arbok": {
    "id": 24,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "special-attack": 65,
      "special-defense": 79,
      "speed": 80
    },
    "abilities": [
      "intimidate",
      "shed-skin"
    ],
    "hiddenAbility": "unnerve"
  },
  "arboliva": {
    "id": 930,
    "types": [
      "grass",
      "normal"
    ],
    "stats": {
      "hp": 78,
      "attack": 69,
      "defense": 90,
      "special-attack": 125,
      "special-defense": 109,
      "speed": 39
    },
    "abilities": [
      "seed-sower"
    ],
    "hiddenAbility": "harvest"
  },
  "arcanine": {
    "id": 59,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 95
    },
    "abilities": [
      "intimidate",
      "flash-fire"
    ],
    "hiddenAbility": "justified"
  },
  "arcanine-hisui": {
    "id": 10230,
    "types": [
      "fire",
      "rock"
    ],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 80,
      "special-attack": 95,
      "special-defense": 80,
      "speed": 90
    },
    "abilities": [
      "intimidate",
      "flash-fire"
    ],
    "hiddenAbility": "rock-head"
  },
  "archaludon": {
    "id": 1018,
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 105,
      "defense": 130,
      "special-attack": 125,
      "special-defense": 65,
      "speed": 85
    },
    "abilities": [
      "stamina",
      "sturdy"
    ],
    "hiddenAbility": "stalwart"
  },
  "ariados": {
    "id": 168,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 40
    },
    "abilities": [
      "swarm",
      "insomnia"
    ],
    "hiddenAbility": "sniper"
  },
  "armarouge": {
    "id": 936,
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 100,
      "special-attack": 125,
      "special-defense": 80,
      "speed": 75
    },
    "abilities": [
      "flash-fire"
    ],
    "hiddenAbility": "weak-armor"
  },
  "aromatisse": {
    "id": 683,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "special-attack": 99,
      "special-defense": 89,
      "speed": 29
    },
    "abilities": [
      "healer"
    ],
    "hiddenAbility": "aroma-veil"
  },
  "audino": {
    "id": 531,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "special-attack": 60,
      "special-defense": 86,
      "speed": 50
    },
    "abilities": [
      "healer",
      "regenerator"
    ],
    "hiddenAbility": "klutz"
  },
  "audino-mega": {
    "id": 10069,
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 126,
      "special-attack": 80,
      "special-defense": 126,
      "speed": 50
    },
    "abilities": [
      "healer"
    ],
    "hiddenAbility": null
  },
  "aurorus": {
    "id": 699,
    "types": [
      "rock",
      "ice"
    ],
    "stats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "special-attack": 99,
      "special-defense": 92,
      "speed": 58
    },
    "abilities": [
      "refrigerate"
    ],
    "hiddenAbility": "snow-warning"
  },
  "avalugg": {
    "id": 713,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "special-attack": 44,
      "special-defense": 46,
      "speed": 28
    },
    "abilities": [
      "own-tempo",
      "ice-body"
    ],
    "hiddenAbility": "sturdy"
  },
  "avalugg-hisui": {
    "id": 10243,
    "types": [
      "ice",
      "rock"
    ],
    "stats": {
      "hp": 95,
      "attack": 127,
      "defense": 184,
      "special-attack": 34,
      "special-defense": 36,
      "speed": 38
    },
    "abilities": [
      "strong-jaw",
      "ice-body"
    ],
    "hiddenAbility": "sturdy"
  },
  "azumarill": {
    "id": 184,
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "special-attack": 60,
      "special-defense": 80,
      "speed": 50
    },
    "abilities": [
      "thick-fat",
      "huge-power"
    ],
    "hiddenAbility": "sap-sipper"
  },
  "banette": {
    "id": 354,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "special-attack": 83,
      "special-defense": 63,
      "speed": 65
    },
    "abilities": [
      "insomnia",
      "frisk"
    ],
    "hiddenAbility": "cursed-body"
  },
  "banette-mega": {
    "id": 10056,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 64,
      "attack": 165,
      "defense": 75,
      "special-attack": 93,
      "special-defense": 83,
      "speed": 75
    },
    "abilities": [
      "prankster"
    ],
    "hiddenAbility": null
  },
  "barbaracle": {
    "id": 689,
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "special-attack": 54,
      "special-defense": 86,
      "speed": 68
    },
    "abilities": [
      "tough-claws",
      "sniper"
    ],
    "hiddenAbility": "pickpocket"
  },
  "barbaracle-mega": {
    "id": 10298,
    "types": [
      "rock",
      "fighting"
    ],
    "stats": {
      "hp": 72,
      "attack": 140,
      "defense": 130,
      "special-attack": 64,
      "special-defense": 106,
      "speed": 88
    },
    "abilities": [
      "tough-claws"
    ],
    "hiddenAbility": null
  },
  "basculegion-female": {
    "id": 10248,
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 120,
      "attack": 92,
      "defense": 65,
      "special-attack": 100,
      "special-defense": 75,
      "speed": 78
    },
    "abilities": [
      "swift-swim",
      "adaptability"
    ],
    "hiddenAbility": "mold-breaker"
  },
  "basculegion-male": {
    "id": 902,
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 120,
      "attack": 112,
      "defense": 65,
      "special-attack": 80,
      "special-defense": 75,
      "speed": 78
    },
    "abilities": [
      "swift-swim",
      "adaptability"
    ],
    "hiddenAbility": "mold-breaker"
  },
  "bastiodon": {
    "id": 411,
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "special-attack": 47,
      "special-defense": 138,
      "speed": 30
    },
    "abilities": [
      "sturdy"
    ],
    "hiddenAbility": "soundproof"
  },
  "baxcalibur": {
    "id": 998,
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 115,
      "attack": 145,
      "defense": 92,
      "special-attack": 75,
      "special-defense": 86,
      "speed": 87
    },
    "abilities": [
      "thermal-exchange"
    ],
    "hiddenAbility": "ice-body"
  },
  "baxcalibur-mega": {
    "id": 10325,
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 115,
      "attack": 175,
      "defense": 117,
      "special-attack": 105,
      "special-defense": 101,
      "speed": 87
    },
    "abilities": [
      "thermal-exchange"
    ],
    "hiddenAbility": null
  },
  "beartic": {
    "id": 614,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 80,
      "speed": 50
    },
    "abilities": [
      "snow-cloak",
      "slush-rush"
    ],
    "hiddenAbility": "swift-swim"
  },
  "beedrill": {
    "id": 15,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "special-attack": 45,
      "special-defense": 80,
      "speed": 75
    },
    "abilities": [
      "swarm"
    ],
    "hiddenAbility": "sniper"
  },
  "beedrill-mega": {
    "id": 10090,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 150,
      "defense": 40,
      "special-attack": 15,
      "special-defense": 80,
      "speed": 145
    },
    "abilities": [
      "adaptability"
    ],
    "hiddenAbility": null
  },
  "bellibolt": {
    "id": 939,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 109,
      "attack": 64,
      "defense": 91,
      "special-attack": 103,
      "special-defense": 83,
      "speed": 45
    },
    "abilities": [
      "electromorphosis",
      "static"
    ],
    "hiddenAbility": "damp"
  },
  "blastoise": {
    "id": 9,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "special-attack": 85,
      "special-defense": 105,
      "speed": 78
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "rain-dish"
  },
  "blastoise-mega": {
    "id": 10036,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 103,
      "defense": 120,
      "special-attack": 135,
      "special-defense": 115,
      "speed": 78
    },
    "abilities": [
      "mega-launcher"
    ],
    "hiddenAbility": null
  },
  "blaziken": {
    "id": 257,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "special-attack": 110,
      "special-defense": 70,
      "speed": 80
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "speed-boost"
  },
  "blaziken-mega": {
    "id": 10050,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 160,
      "defense": 80,
      "special-attack": 130,
      "special-defense": 80,
      "speed": 100
    },
    "abilities": [
      "speed-boost"
    ],
    "hiddenAbility": null
  },
  "camerupt": {
    "id": 323,
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "special-attack": 105,
      "special-defense": 75,
      "speed": 40
    },
    "abilities": [
      "magma-armor",
      "solid-rock"
    ],
    "hiddenAbility": "anger-point"
  },
  "camerupt-mega": {
    "id": 10087,
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 100,
      "special-attack": 145,
      "special-defense": 105,
      "speed": 20
    },
    "abilities": [
      "sheer-force"
    ],
    "hiddenAbility": null
  },
  "castform": {
    "id": 351,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 70
    },
    "abilities": [
      "forecast"
    ],
    "hiddenAbility": null
  },
  "castform-rainy": {
    "id": 10014,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 70
    },
    "abilities": [
      "forecast"
    ],
    "hiddenAbility": null
  },
  "castform-snowy": {
    "id": 10015,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 70
    },
    "abilities": [
      "forecast"
    ],
    "hiddenAbility": null
  },
  "castform-sunny": {
    "id": 10013,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 70
    },
    "abilities": [
      "forecast"
    ],
    "hiddenAbility": null
  },
  "ceruledge": {
    "id": 937,
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 80,
      "special-attack": 60,
      "special-defense": 100,
      "speed": 85
    },
    "abilities": [
      "flash-fire"
    ],
    "hiddenAbility": "weak-armor"
  },
  "chandelure": {
    "id": 609,
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "special-attack": 145,
      "special-defense": 90,
      "speed": 80
    },
    "abilities": [
      "flash-fire",
      "flame-body"
    ],
    "hiddenAbility": "infiltrator"
  },
  "chandelure-mega": {
    "id": 10291,
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 110,
      "special-attack": 175,
      "special-defense": 110,
      "speed": 90
    },
    "abilities": [
      "infiltrator"
    ],
    "hiddenAbility": null
  },
  "charizard": {
    "id": 6,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special-attack": 109,
      "special-defense": 85,
      "speed": 100
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "solar-power"
  },
  "charizard-mega-x": {
    "id": 10034,
    "types": [
      "fire",
      "dragon"
    ],
    "stats": {
      "hp": 78,
      "attack": 130,
      "defense": 111,
      "special-attack": 130,
      "special-defense": 85,
      "speed": 100
    },
    "abilities": [
      "tough-claws"
    ],
    "hiddenAbility": null
  },
  "charizard-mega-y": {
    "id": 10035,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 104,
      "defense": 78,
      "special-attack": 159,
      "special-defense": 115,
      "speed": 100
    },
    "abilities": [
      "drought"
    ],
    "hiddenAbility": null
  },
  "chesnaught": {
    "id": 652,
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "special-attack": 74,
      "special-defense": 75,
      "speed": 64
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "bulletproof"
  },
  "chesnaught-mega": {
    "id": 10292,
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 137,
      "defense": 172,
      "special-attack": 74,
      "special-defense": 115,
      "speed": 44
    },
    "abilities": [
      "bulletproof"
    ],
    "hiddenAbility": null
  },
  "chimecho": {
    "id": 358,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 65
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "chimecho-mega": {
    "id": 10306,
    "types": [
      "psychic",
      "steel"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 110,
      "special-attack": 135,
      "special-defense": 120,
      "speed": 65
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "cinderace": {
    "id": 815,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "special-attack": 65,
      "special-defense": 75,
      "speed": 119
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "libero"
  },
  "clawitzer": {
    "id": 693,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "special-attack": 120,
      "special-defense": 89,
      "speed": 59
    },
    "abilities": [
      "mega-launcher"
    ],
    "hiddenAbility": null
  },
  "clefable": {
    "id": 36,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 60
    },
    "abilities": [
      "cute-charm",
      "magic-guard"
    ],
    "hiddenAbility": "unaware"
  },
  "clefable-mega": {
    "id": 10278,
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 93,
      "special-attack": 135,
      "special-defense": 110,
      "speed": 70
    },
    "abilities": [
      "magic-bounce"
    ],
    "hiddenAbility": null
  },
  "cofagrigus": {
    "id": 563,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "special-attack": 95,
      "special-defense": 105,
      "speed": 30
    },
    "abilities": [
      "mummy"
    ],
    "hiddenAbility": null
  },
  "conkeldurr": {
    "id": 534,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 45
    },
    "abilities": [
      "guts",
      "sheer-force"
    ],
    "hiddenAbility": "iron-fist"
  },
  "corviknight": {
    "id": 823,
    "types": [
      "flying",
      "steel"
    ],
    "stats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "special-attack": 53,
      "special-defense": 85,
      "speed": 67
    },
    "abilities": [
      "pressure",
      "unnerve"
    ],
    "hiddenAbility": "mirror-armor"
  },
  "crabominable": {
    "id": 740,
    "types": [
      "fighting",
      "ice"
    ],
    "stats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "special-attack": 62,
      "special-defense": 67,
      "speed": 43
    },
    "abilities": [
      "hyper-cutter",
      "iron-fist"
    ],
    "hiddenAbility": "anger-point"
  },
  "crabominable-mega": {
    "id": 10315,
    "types": [
      "fighting",
      "ice"
    ],
    "stats": {
      "hp": 97,
      "attack": 157,
      "defense": 122,
      "special-attack": 62,
      "special-defense": 107,
      "speed": 33
    },
    "abilities": [
      "iron-fist"
    ],
    "hiddenAbility": null
  },
  "decidueye": {
    "id": 724,
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 70
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "long-reach"
  },
  "decidueye-hisui": {
    "id": 10244,
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 112,
      "defense": 80,
      "special-attack": 95,
      "special-defense": 95,
      "speed": 60
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "scrappy"
  },
  "dedenne": {
    "id": 702,
    "types": [
      "electric",
      "fairy"
    ],
    "stats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "special-attack": 81,
      "special-defense": 67,
      "speed": 101
    },
    "abilities": [
      "cheek-pouch",
      "pickup"
    ],
    "hiddenAbility": "plus"
  },
  "delphox": {
    "id": 655,
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "special-attack": 114,
      "special-defense": 100,
      "speed": 104
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "magician"
  },
  "delphox-mega": {
    "id": 10293,
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "special-attack": 159,
      "special-defense": 125,
      "speed": 134
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "diggersby": {
    "id": 660,
    "types": [
      "normal",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "special-attack": 50,
      "special-defense": 77,
      "speed": 78
    },
    "abilities": [
      "pickup",
      "cheek-pouch"
    ],
    "hiddenAbility": "huge-power"
  },
  "ditto": {
    "id": 132,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "special-attack": 48,
      "special-defense": 48,
      "speed": 48
    },
    "abilities": [
      "limber"
    ],
    "hiddenAbility": "imposter"
  },
  "dragalge": {
    "id": 691,
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "special-attack": 97,
      "special-defense": 123,
      "speed": 44
    },
    "abilities": [
      "poison-point",
      "poison-touch"
    ],
    "hiddenAbility": "adaptability"
  },
  "dragalge-mega": {
    "id": 10299,
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 105,
      "special-attack": 132,
      "special-defense": 163,
      "speed": 44
    },
    "abilities": [
      "regenerator"
    ],
    "hiddenAbility": null
  },
  "dragapult": {
    "id": 887,
    "types": [
      "dragon",
      "ghost"
    ],
    "stats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "special-attack": 100,
      "special-defense": 75,
      "speed": 142
    },
    "abilities": [
      "clear-body",
      "infiltrator"
    ],
    "hiddenAbility": "cursed-body"
  },
  "dragonite": {
    "id": 149,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 80
    },
    "abilities": [
      "inner-focus"
    ],
    "hiddenAbility": "multiscale"
  },
  "dragonite-mega": {
    "id": 10281,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 91,
      "attack": 124,
      "defense": 115,
      "special-attack": 145,
      "special-defense": 125,
      "speed": 100
    },
    "abilities": [
      "multiscale"
    ],
    "hiddenAbility": null
  },
  "drampa": {
    "id": 780,
    "types": [
      "normal",
      "dragon"
    ],
    "stats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "special-attack": 135,
      "special-defense": 91,
      "speed": 36
    },
    "abilities": [
      "berserk",
      "sap-sipper"
    ],
    "hiddenAbility": "cloud-nine"
  },
  "drampa-mega": {
    "id": 10302,
    "types": [
      "normal",
      "dragon"
    ],
    "stats": {
      "hp": 78,
      "attack": 85,
      "defense": 110,
      "special-attack": 160,
      "special-defense": 116,
      "speed": 36
    },
    "abilities": [
      "berserk"
    ],
    "hiddenAbility": null
  },
  "eelektross": {
    "id": 604,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "special-attack": 105,
      "special-defense": 80,
      "speed": 50
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "eelektross-mega": {
    "id": 10290,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 85,
      "attack": 145,
      "defense": 80,
      "special-attack": 135,
      "special-defense": 90,
      "speed": 80
    },
    "abilities": [
      "eelevate"
    ],
    "hiddenAbility": null
  },
  "emboar": {
    "id": 500,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "special-attack": 100,
      "special-defense": 65,
      "speed": 65
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "reckless"
  },
  "emboar-mega": {
    "id": 10286,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 110,
      "attack": 148,
      "defense": 75,
      "special-attack": 110,
      "special-defense": 110,
      "speed": 75
    },
    "abilities": [
      "mold-breaker"
    ],
    "hiddenAbility": null
  },
  "emolga": {
    "id": 587,
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "special-attack": 75,
      "special-defense": 60,
      "speed": 103
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "motor-drive"
  },
  "empoleon": {
    "id": 395,
    "types": [
      "water",
      "steel"
    ],
    "stats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "special-attack": 111,
      "special-defense": 101,
      "speed": 60
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "competitive"
  },
  "espathra": {
    "id": 956,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 60,
      "special-attack": 101,
      "special-defense": 60,
      "speed": 105
    },
    "abilities": [
      "opportunist",
      "frisk"
    ],
    "hiddenAbility": "speed-boost"
  },
  "espeon": {
    "id": 196,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special-attack": 130,
      "special-defense": 95,
      "speed": 110
    },
    "abilities": [
      "synchronize"
    ],
    "hiddenAbility": "magic-bounce"
  },
  "excadrill": {
    "id": 530,
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "special-attack": 50,
      "special-defense": 65,
      "speed": 88
    },
    "abilities": [
      "sand-rush",
      "sand-force"
    ],
    "hiddenAbility": "mold-breaker"
  },
  "excadrill-mega": {
    "id": 10287,
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 110,
      "attack": 165,
      "defense": 100,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 103
    },
    "abilities": [
      "piercing-drill"
    ],
    "hiddenAbility": null
  },
  "falinks": {
    "id": 870,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 100,
      "special-attack": 70,
      "special-defense": 60,
      "speed": 75
    },
    "abilities": [
      "battle-armor"
    ],
    "hiddenAbility": "defiant"
  },
  "falinks-mega": {
    "id": 10303,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 135,
      "defense": 135,
      "special-attack": 70,
      "special-defense": 65,
      "speed": 100
    },
    "abilities": [
      "defiant"
    ],
    "hiddenAbility": null
  },
  "farfetchd": {
    "id": 83,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "special-attack": 58,
      "special-defense": 62,
      "speed": 60
    },
    "abilities": [
      "keen-eye",
      "inner-focus"
    ],
    "hiddenAbility": "defiant"
  },
  "farfetchd-galar": {
    "id": 10166,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 52,
      "attack": 95,
      "defense": 55,
      "special-attack": 58,
      "special-defense": 62,
      "speed": 55
    },
    "abilities": [
      "steadfast"
    ],
    "hiddenAbility": "scrappy"
  },
  "farigiraf": {
    "id": 981,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 120,
      "attack": 90,
      "defense": 70,
      "special-attack": 110,
      "special-defense": 70,
      "speed": 60
    },
    "abilities": [
      "cud-chew",
      "armor-tail"
    ],
    "hiddenAbility": "sap-sipper"
  },
  "feraligatr": {
    "id": 160,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "special-attack": 79,
      "special-defense": 83,
      "speed": 78
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "sheer-force"
  },
  "feraligatr-mega": {
    "id": 10283,
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 85,
      "attack": 160,
      "defense": 125,
      "special-attack": 89,
      "special-defense": 93,
      "speed": 78
    },
    "abilities": [
      "dragonize"
    ],
    "hiddenAbility": null
  },
  "flapple": {
    "id": 841,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "special-attack": 95,
      "special-defense": 60,
      "speed": 70
    },
    "abilities": [
      "ripen",
      "gluttony"
    ],
    "hiddenAbility": "hustle"
  },
  "flareon": {
    "id": 136,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special-attack": 95,
      "special-defense": 110,
      "speed": 65
    },
    "abilities": [
      "flash-fire"
    ],
    "hiddenAbility": "guts"
  },
  "floette": {
    "id": 670,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "special-attack": 75,
      "special-defense": 98,
      "speed": 52
    },
    "abilities": [
      "flower-veil"
    ],
    "hiddenAbility": "symbiosis"
  },
  "floette-eternal": {
    "id": 10061,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 74,
      "attack": 65,
      "defense": 67,
      "special-attack": 125,
      "special-defense": 128,
      "speed": 92
    },
    "abilities": [
      "flower-veil"
    ],
    "hiddenAbility": "symbiosis"
  },
  "floette-mega": {
    "id": 10296,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 74,
      "attack": 85,
      "defense": 87,
      "special-attack": 155,
      "special-defense": 148,
      "speed": 102
    },
    "abilities": [
      "fairy-aura"
    ],
    "hiddenAbility": null
  },
  "florges": {
    "id": 671,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "special-attack": 112,
      "special-defense": 154,
      "speed": 75
    },
    "abilities": [
      "flower-veil"
    ],
    "hiddenAbility": "symbiosis"
  },
  "forretress": {
    "id": 205,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 40
    },
    "abilities": [
      "sturdy"
    ],
    "hiddenAbility": "overcoat"
  },
  "froslass": {
    "id": 478,
    "types": [
      "ice",
      "ghost"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "special-attack": 80,
      "special-defense": 70,
      "speed": 110
    },
    "abilities": [
      "snow-cloak"
    ],
    "hiddenAbility": "cursed-body"
  },
  "froslass-mega": {
    "id": 10285,
    "types": [
      "ice",
      "ghost"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "special-attack": 140,
      "special-defense": 100,
      "speed": 120
    },
    "abilities": [
      "snow-warning"
    ],
    "hiddenAbility": null
  },
  "furfrou": {
    "id": 676,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "special-attack": 65,
      "special-defense": 90,
      "speed": 102
    },
    "abilities": [
      "fur-coat"
    ],
    "hiddenAbility": null
  },
  "gallade": {
    "id": 475,
    "types": [
      "psychic",
      "fighting"
    ],
    "stats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "special-attack": 65,
      "special-defense": 115,
      "speed": 80
    },
    "abilities": [
      "steadfast",
      "sharpness"
    ],
    "hiddenAbility": "justified"
  },
  "gallade-mega": {
    "id": 10068,
    "types": [
      "psychic",
      "fighting"
    ],
    "stats": {
      "hp": 68,
      "attack": 165,
      "defense": 95,
      "special-attack": 65,
      "special-defense": 115,
      "speed": 110
    },
    "abilities": [
      "inner-focus"
    ],
    "hiddenAbility": null
  },
  "garbodor": {
    "id": 569,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "special-attack": 60,
      "special-defense": 82,
      "speed": 75
    },
    "abilities": [
      "stench",
      "weak-armor"
    ],
    "hiddenAbility": "aftermath"
  },
  "garchomp": {
    "id": 445,
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "special-attack": 80,
      "special-defense": 85,
      "speed": 102
    },
    "abilities": [
      "sand-veil"
    ],
    "hiddenAbility": "rough-skin"
  },
  "garchomp-mega": {
    "id": 10058,
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 170,
      "defense": 115,
      "special-attack": 120,
      "special-defense": 95,
      "speed": 92
    },
    "abilities": [
      "sand-force"
    ],
    "hiddenAbility": null
  },
  "garchomp-mega-z": {
    "id": 10309,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 108,
      "attack": 130,
      "defense": 85,
      "special-attack": 141,
      "special-defense": 85,
      "speed": 151
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "gardevoir": {
    "id": 282,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "special-attack": 125,
      "special-defense": 115,
      "speed": 80
    },
    "abilities": [
      "synchronize",
      "trace"
    ],
    "hiddenAbility": "telepathy"
  },
  "gardevoir-mega": {
    "id": 10051,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 68,
      "attack": 85,
      "defense": 65,
      "special-attack": 165,
      "special-defense": 135,
      "speed": 100
    },
    "abilities": [
      "pixilate"
    ],
    "hiddenAbility": null
  },
  "garganacl": {
    "id": 934,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 130,
      "special-attack": 45,
      "special-defense": 90,
      "speed": 35
    },
    "abilities": [
      "purifying-salt",
      "sturdy"
    ],
    "hiddenAbility": "clear-body"
  },
  "gengar": {
    "id": 94,
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "special-attack": 130,
      "special-defense": 75,
      "speed": 110
    },
    "abilities": [
      "cursed-body"
    ],
    "hiddenAbility": null
  },
  "gengar-mega": {
    "id": 10038,
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 80,
      "special-attack": 170,
      "special-defense": 95,
      "speed": 130
    },
    "abilities": [
      "shadow-tag"
    ],
    "hiddenAbility": null
  },
  "gholdengo": {
    "id": 1000,
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 87,
      "attack": 60,
      "defense": 95,
      "special-attack": 133,
      "special-defense": 91,
      "speed": 84
    },
    "abilities": [
      "good-as-gold"
    ],
    "hiddenAbility": null
  },
  "glaceon": {
    "id": 471,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "special-attack": 130,
      "special-defense": 95,
      "speed": 65
    },
    "abilities": [
      "snow-cloak"
    ],
    "hiddenAbility": "ice-body"
  },
  "glalie": {
    "id": 362,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special-attack": 80,
      "special-defense": 80,
      "speed": 80
    },
    "abilities": [
      "inner-focus",
      "ice-body"
    ],
    "hiddenAbility": "moody"
  },
  "glalie-mega": {
    "id": 10074,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 80,
      "special-attack": 120,
      "special-defense": 80,
      "speed": 100
    },
    "abilities": [
      "refrigerate"
    ],
    "hiddenAbility": null
  },
  "glimmora": {
    "id": 970,
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 83,
      "attack": 55,
      "defense": 90,
      "special-attack": 130,
      "special-defense": 81,
      "speed": 86
    },
    "abilities": [
      "toxic-debris"
    ],
    "hiddenAbility": "corrosion"
  },
  "glimmora-mega": {
    "id": 10321,
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 83,
      "attack": 90,
      "defense": 105,
      "special-attack": 150,
      "special-defense": 96,
      "speed": 101
    },
    "abilities": [
      "adaptability"
    ],
    "hiddenAbility": null
  },
  "gliscor": {
    "id": 472,
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "special-attack": 45,
      "special-defense": 75,
      "speed": 95
    },
    "abilities": [
      "hyper-cutter",
      "sand-veil"
    ],
    "hiddenAbility": "poison-heal"
  },
  "gogoat": {
    "id": 673,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 123,
      "attack": 100,
      "defense": 62,
      "special-attack": 97,
      "special-defense": 81,
      "speed": 68
    },
    "abilities": [
      "sap-sipper"
    ],
    "hiddenAbility": "grass-pelt"
  },
  "golisopod": {
    "id": 768,
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 140,
      "special-attack": 60,
      "special-defense": 90,
      "speed": 40
    },
    "abilities": [
      "emergency-exit"
    ],
    "hiddenAbility": null
  },
  "golisopod-mega": {
    "id": 10316,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 75,
      "attack": 150,
      "defense": 175,
      "special-attack": 70,
      "special-defense": 120,
      "speed": 40
    },
    "abilities": [
      "tough-claws"
    ],
    "hiddenAbility": null
  },
  "golurk": {
    "id": 623,
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "special-attack": 55,
      "special-defense": 80,
      "speed": 55
    },
    "abilities": [
      "iron-fist",
      "klutz"
    ],
    "hiddenAbility": "no-guard"
  },
  "golurk-mega": {
    "id": 10313,
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 89,
      "attack": 159,
      "defense": 105,
      "special-attack": 70,
      "special-defense": 105,
      "speed": 55
    },
    "abilities": [
      "unseen-fist"
    ],
    "hiddenAbility": null
  },
  "goodra": {
    "id": 706,
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "special-attack": 110,
      "special-defense": 150,
      "speed": 80
    },
    "abilities": [
      "sap-sipper",
      "hydration"
    ],
    "hiddenAbility": "gooey"
  },
  "goodra-hisui": {
    "id": 10242,
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 100,
      "special-attack": 110,
      "special-defense": 150,
      "speed": 60
    },
    "abilities": [
      "sap-sipper",
      "shell-armor"
    ],
    "hiddenAbility": "gooey"
  },
  "gourgeist-average": {
    "id": 711,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "special-attack": 58,
      "special-defense": 75,
      "speed": 84
    },
    "abilities": [
      "pickup",
      "frisk"
    ],
    "hiddenAbility": "insomnia"
  },
  "gourgeist-large": {
    "id": 10031,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 122,
      "special-attack": 58,
      "special-defense": 75,
      "speed": 69
    },
    "abilities": [
      "pickup",
      "frisk"
    ],
    "hiddenAbility": "insomnia"
  },
  "gourgeist-small": {
    "id": 10030,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 122,
      "special-attack": 58,
      "special-defense": 75,
      "speed": 99
    },
    "abilities": [
      "pickup",
      "frisk"
    ],
    "hiddenAbility": "insomnia"
  },
  "gourgeist-super": {
    "id": 10032,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 85,
      "attack": 100,
      "defense": 122,
      "special-attack": 58,
      "special-defense": 75,
      "speed": 54
    },
    "abilities": [
      "pickup",
      "frisk"
    ],
    "hiddenAbility": "insomnia"
  },
  "grapploct": {
    "id": 853,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 118,
      "defense": 90,
      "special-attack": 70,
      "special-defense": 80,
      "speed": 42
    },
    "abilities": [
      "limber"
    ],
    "hiddenAbility": "technician"
  },
  "greninja": {
    "id": 658,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "special-attack": 103,
      "special-defense": 71,
      "speed": 122
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "protean"
  },
  "greninja-ash": {
    "id": 10117,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 72,
      "attack": 145,
      "defense": 67,
      "special-attack": 153,
      "special-defense": 71,
      "speed": 132
    },
    "abilities": [
      "battle-bond"
    ],
    "hiddenAbility": null
  },
  "greninja-battle-bond": {
    "id": 10116,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "special-attack": 103,
      "special-defense": 71,
      "speed": 122
    },
    "abilities": [
      "battle-bond"
    ],
    "hiddenAbility": null
  },
  "greninja-mega": {
    "id": 10294,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 72,
      "attack": 125,
      "defense": 77,
      "special-attack": 133,
      "special-defense": 81,
      "speed": 142
    },
    "abilities": [
      "protean"
    ],
    "hiddenAbility": null
  },
  "grimmsnarl": {
    "id": 861,
    "types": [
      "dark",
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "special-attack": 95,
      "special-defense": 75,
      "speed": 60
    },
    "abilities": [
      "prankster",
      "frisk"
    ],
    "hiddenAbility": "pickpocket"
  },
  "gyarados": {
    "id": 130,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "special-attack": 60,
      "special-defense": 100,
      "speed": 81
    },
    "abilities": [
      "intimidate"
    ],
    "hiddenAbility": "moxie"
  },
  "gyarados-mega": {
    "id": 10041,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 155,
      "defense": 109,
      "special-attack": 70,
      "special-defense": 130,
      "speed": 81
    },
    "abilities": [
      "mold-breaker"
    ],
    "hiddenAbility": null
  },
  "hatterene": {
    "id": 858,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "special-attack": 136,
      "special-defense": 103,
      "speed": 29
    },
    "abilities": [
      "healer",
      "anticipation"
    ],
    "hiddenAbility": "magic-bounce"
  },
  "hawlucha": {
    "id": 701,
    "types": [
      "fighting",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "special-attack": 74,
      "special-defense": 63,
      "speed": 118
    },
    "abilities": [
      "limber",
      "unburden"
    ],
    "hiddenAbility": "mold-breaker"
  },
  "hawlucha-mega": {
    "id": 10300,
    "types": [
      "fighting",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 137,
      "defense": 100,
      "special-attack": 74,
      "special-defense": 93,
      "speed": 118
    },
    "abilities": [
      "no-guard"
    ],
    "hiddenAbility": null
  },
  "heliolisk": {
    "id": 695,
    "types": [
      "electric",
      "normal"
    ],
    "stats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "special-attack": 109,
      "special-defense": 94,
      "speed": 109
    },
    "abilities": [
      "dry-skin",
      "sand-veil"
    ],
    "hiddenAbility": "solar-power"
  },
  "heracross": {
    "id": 214,
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "special-attack": 40,
      "special-defense": 95,
      "speed": 85
    },
    "abilities": [
      "swarm",
      "guts"
    ],
    "hiddenAbility": "moxie"
  },
  "heracross-mega": {
    "id": 10047,
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 185,
      "defense": 115,
      "special-attack": 40,
      "special-defense": 105,
      "speed": 75
    },
    "abilities": [
      "skill-link"
    ],
    "hiddenAbility": null
  },
  "hippowdon": {
    "id": 450,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "special-attack": 68,
      "special-defense": 72,
      "speed": 47
    },
    "abilities": [
      "sand-stream"
    ],
    "hiddenAbility": "sand-force"
  },
  "houndoom": {
    "id": 229,
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "special-attack": 110,
      "special-defense": 80,
      "speed": 95
    },
    "abilities": [
      "early-bird",
      "flash-fire"
    ],
    "hiddenAbility": "unnerve"
  },
  "houndoom-mega": {
    "id": 10048,
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 90,
      "special-attack": 140,
      "special-defense": 90,
      "speed": 115
    },
    "abilities": [
      "solar-power"
    ],
    "hiddenAbility": null
  },
  "houndstone": {
    "id": 972,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 72,
      "attack": 101,
      "defense": 100,
      "special-attack": 50,
      "special-defense": 97,
      "speed": 68
    },
    "abilities": [
      "sand-rush"
    ],
    "hiddenAbility": "fluffy"
  },
  "hydrapple": {
    "id": 1019,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 106,
      "attack": 80,
      "defense": 110,
      "special-attack": 120,
      "special-defense": 80,
      "speed": 44
    },
    "abilities": [
      "supersweet-syrup",
      "regenerator"
    ],
    "hiddenAbility": "sticky-hold"
  },
  "hydreigon": {
    "id": 635,
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "special-attack": 125,
      "special-defense": 90,
      "speed": 98
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "incineroar": {
    "id": 727,
    "types": [
      "fire",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "special-attack": 80,
      "special-defense": 90,
      "speed": 60
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "intimidate"
  },
  "indeedee-female": {
    "id": 10186,
    "types": [
      "psychic",
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 65,
      "special-attack": 95,
      "special-defense": 105,
      "speed": 85
    },
    "abilities": [
      "own-tempo",
      "synchronize"
    ],
    "hiddenAbility": "psychic-surge"
  },
  "indeedee-male": {
    "id": 876,
    "types": [
      "psychic",
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 55,
      "special-attack": 105,
      "special-defense": 95,
      "speed": 95
    },
    "abilities": [
      "inner-focus",
      "synchronize"
    ],
    "hiddenAbility": "psychic-surge"
  },
  "infernape": {
    "id": 392,
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "special-attack": 104,
      "special-defense": 71,
      "speed": 108
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "iron-fist"
  },
  "inteleon": {
    "id": 818,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special-attack": 125,
      "special-defense": 65,
      "speed": 120
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "sniper"
  },
  "jolteon": {
    "id": 135,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special-attack": 110,
      "special-defense": 95,
      "speed": 130
    },
    "abilities": [
      "volt-absorb"
    ],
    "hiddenAbility": "quick-feet"
  },
  "kangaskhan": {
    "id": 115,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "special-attack": 40,
      "special-defense": 80,
      "speed": 90
    },
    "abilities": [
      "early-bird",
      "scrappy"
    ],
    "hiddenAbility": "inner-focus"
  },
  "kangaskhan-mega": {
    "id": 10039,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 105,
      "attack": 125,
      "defense": 100,
      "special-attack": 60,
      "special-defense": 100,
      "speed": 100
    },
    "abilities": [
      "parental-bond"
    ],
    "hiddenAbility": null
  },
  "kingambit": {
    "id": 983,
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 100,
      "attack": 135,
      "defense": 120,
      "special-attack": 60,
      "special-defense": 85,
      "speed": 50
    },
    "abilities": [
      "defiant",
      "supreme-overlord"
    ],
    "hiddenAbility": "pressure"
  },
  "kleavor": {
    "id": 900,
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "special-attack": 45,
      "special-defense": 70,
      "speed": 85
    },
    "abilities": [
      "swarm",
      "sheer-force"
    ],
    "hiddenAbility": "sharpness"
  },
  "klefki": {
    "id": 707,
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "special-attack": 80,
      "special-defense": 87,
      "speed": 75
    },
    "abilities": [
      "prankster"
    ],
    "hiddenAbility": "magician"
  },
  "kommo-o": {
    "id": 784,
    "types": [
      "dragon",
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "special-attack": 100,
      "special-defense": 105,
      "speed": 85
    },
    "abilities": [
      "bulletproof",
      "soundproof"
    ],
    "hiddenAbility": "overcoat"
  },
  "kommo-o-totem": {
    "id": 10146,
    "types": [
      "dragon",
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "special-attack": 100,
      "special-defense": 105,
      "speed": 85
    },
    "abilities": [
      "bulletproof",
      "soundproof"
    ],
    "hiddenAbility": "overcoat"
  },
  "krookodile": {
    "id": 553,
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 92
    },
    "abilities": [
      "intimidate",
      "moxie"
    ],
    "hiddenAbility": "anger-point"
  },
  "leafeon": {
    "id": 470,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "special-attack": 60,
      "special-defense": 65,
      "speed": 95
    },
    "abilities": [
      "leaf-guard"
    ],
    "hiddenAbility": "chlorophyll"
  },
  "liepard": {
    "id": 510,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "special-attack": 88,
      "special-defense": 50,
      "speed": 106
    },
    "abilities": [
      "limber",
      "unburden"
    ],
    "hiddenAbility": "prankster"
  },
  "lopunny": {
    "id": 428,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "special-attack": 54,
      "special-defense": 96,
      "speed": 105
    },
    "abilities": [
      "cute-charm",
      "klutz"
    ],
    "hiddenAbility": "limber"
  },
  "lopunny-mega": {
    "id": 10088,
    "types": [
      "normal",
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 136,
      "defense": 94,
      "special-attack": 54,
      "special-defense": 96,
      "speed": 135
    },
    "abilities": [
      "scrappy"
    ],
    "hiddenAbility": null
  },
  "lucario": {
    "id": 448,
    "types": [
      "fighting",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "special-attack": 115,
      "special-defense": 70,
      "speed": 90
    },
    "abilities": [
      "steadfast",
      "inner-focus"
    ],
    "hiddenAbility": "justified"
  },
  "lucario-mega": {
    "id": 10059,
    "types": [
      "fighting",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 145,
      "defense": 88,
      "special-attack": 140,
      "special-defense": 70,
      "speed": 112
    },
    "abilities": [
      "adaptability"
    ],
    "hiddenAbility": null
  },
  "lucario-mega-z": {
    "id": 10310,
    "types": [
      "fighting",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "special-attack": 164,
      "special-defense": 70,
      "speed": 151
    },
    "abilities": [
      "aura-guard"
    ],
    "hiddenAbility": null
  },
  "luxray": {
    "id": 405,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "special-attack": 95,
      "special-defense": 79,
      "speed": 70
    },
    "abilities": [
      "rivalry",
      "intimidate"
    ],
    "hiddenAbility": "guts"
  },
  "lycanroc-dusk": {
    "id": 10152,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 75,
      "attack": 117,
      "defense": 65,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 110
    },
    "abilities": [
      "tough-claws"
    ],
    "hiddenAbility": null
  },
  "lycanroc-midday": {
    "id": 745,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 112
    },
    "abilities": [
      "keen-eye",
      "sand-rush"
    ],
    "hiddenAbility": "steadfast"
  },
  "lycanroc-midnight": {
    "id": 10126,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 75,
      "special-attack": 55,
      "special-defense": 75,
      "speed": 82
    },
    "abilities": [
      "keen-eye",
      "vital-spirit"
    ],
    "hiddenAbility": "no-guard"
  },
  "mabosstiff": {
    "id": 943,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 90,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 85
    },
    "abilities": [
      "intimidate",
      "guard-dog"
    ],
    "hiddenAbility": "stakeout"
  },
  "machamp": {
    "id": 68,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "special-attack": 65,
      "special-defense": 85,
      "speed": 55
    },
    "abilities": [
      "guts",
      "no-guard"
    ],
    "hiddenAbility": "steadfast"
  },
  "malamar": {
    "id": 687,
    "types": [
      "dark",
      "psychic"
    ],
    "stats": {
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "special-attack": 68,
      "special-defense": 75,
      "speed": 73
    },
    "abilities": [
      "contrary",
      "suction-cups"
    ],
    "hiddenAbility": "infiltrator"
  },
  "malamar-mega": {
    "id": 10297,
    "types": [
      "dark",
      "psychic"
    ],
    "stats": {
      "hp": 86,
      "attack": 102,
      "defense": 88,
      "special-attack": 98,
      "special-defense": 120,
      "speed": 88
    },
    "abilities": [
      "contrary"
    ],
    "hiddenAbility": null
  },
  "mamoswine": {
    "id": 473,
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 60,
      "speed": 80
    },
    "abilities": [
      "oblivious",
      "snow-cloak"
    ],
    "hiddenAbility": "thick-fat"
  },
  "manectric": {
    "id": 310,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "special-attack": 105,
      "special-defense": 60,
      "speed": 105
    },
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "hiddenAbility": "minus"
  },
  "manectric-mega": {
    "id": 10055,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 80,
      "special-attack": 135,
      "special-defense": 80,
      "speed": 135
    },
    "abilities": [
      "intimidate"
    ],
    "hiddenAbility": null
  },
  "maushold-family-of-four": {
    "id": 925,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "special-attack": 65,
      "special-defense": 75,
      "speed": 111
    },
    "abilities": [
      "friend-guard",
      "cheek-pouch"
    ],
    "hiddenAbility": "technician"
  },
  "maushold-family-of-three": {
    "id": 10257,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 74,
      "attack": 75,
      "defense": 70,
      "special-attack": 65,
      "special-defense": 75,
      "speed": 111
    },
    "abilities": [
      "friend-guard",
      "cheek-pouch"
    ],
    "hiddenAbility": "technician"
  },
  "mawile": {
    "id": 303,
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 50
    },
    "abilities": [
      "hyper-cutter",
      "intimidate"
    ],
    "hiddenAbility": "sheer-force"
  },
  "mawile-mega": {
    "id": 10052,
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 105,
      "defense": 125,
      "special-attack": 55,
      "special-defense": 95,
      "speed": 50
    },
    "abilities": [
      "huge-power"
    ],
    "hiddenAbility": null
  },
  "medicham": {
    "id": 308,
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "special-attack": 60,
      "special-defense": 75,
      "speed": 80
    },
    "abilities": [
      "pure-power"
    ],
    "hiddenAbility": "telepathy"
  },
  "medicham-mega": {
    "id": 10054,
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 85,
      "special-attack": 80,
      "special-defense": 85,
      "speed": 100
    },
    "abilities": [
      "pure-power"
    ],
    "hiddenAbility": null
  },
  "meganium": {
    "id": 154,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "special-attack": 83,
      "special-defense": 100,
      "speed": 80
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "leaf-guard"
  },
  "meganium-mega": {
    "id": 10282,
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 115,
      "special-attack": 143,
      "special-defense": 115,
      "speed": 80
    },
    "abilities": [
      "mega-sol"
    ],
    "hiddenAbility": null
  },
  "meowscarada": {
    "id": 908,
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 76,
      "attack": 110,
      "defense": 70,
      "special-attack": 81,
      "special-defense": 70,
      "speed": 123
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "protean"
  },
  "meowstic-female": {
    "id": 10025,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "special-attack": 83,
      "special-defense": 81,
      "speed": 104
    },
    "abilities": [
      "keen-eye",
      "infiltrator"
    ],
    "hiddenAbility": "competitive"
  },
  "meowstic-female-mega": {
    "id": 10326,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "special-attack": 143,
      "special-defense": 101,
      "speed": 124
    },
    "abilities": [
      "trace"
    ],
    "hiddenAbility": null
  },
  "meowstic-male": {
    "id": 678,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "special-attack": 83,
      "special-defense": 81,
      "speed": 104
    },
    "abilities": [
      "keen-eye",
      "infiltrator"
    ],
    "hiddenAbility": "prankster"
  },
  "meowstic-male-mega": {
    "id": 10314,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "special-attack": 143,
      "special-defense": 101,
      "speed": 124
    },
    "abilities": [
      "trace"
    ],
    "hiddenAbility": null
  },
  "metagross": {
    "id": 376,
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 70
    },
    "abilities": [
      "clear-body"
    ],
    "hiddenAbility": "light-metal"
  },
  "metagross-mega": {
    "id": 10076,
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 145,
      "defense": 150,
      "special-attack": 105,
      "special-defense": 110,
      "speed": 110
    },
    "abilities": [
      "tough-claws"
    ],
    "hiddenAbility": null
  },
  "milotic": {
    "id": 350,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "special-attack": 100,
      "special-defense": 125,
      "speed": 81
    },
    "abilities": [
      "marvel-scale",
      "competitive"
    ],
    "hiddenAbility": "cute-charm"
  },
  "mimikyu-busted": {
    "id": 10143,
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "special-attack": 50,
      "special-defense": 105,
      "speed": 96
    },
    "abilities": [
      "disguise"
    ],
    "hiddenAbility": null
  },
  "mimikyu-disguised": {
    "id": 778,
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "special-attack": 50,
      "special-defense": 105,
      "speed": 96
    },
    "abilities": [
      "disguise"
    ],
    "hiddenAbility": null
  },
  "mimikyu-totem-busted": {
    "id": 10145,
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "special-attack": 50,
      "special-defense": 105,
      "speed": 96
    },
    "abilities": [
      "disguise"
    ],
    "hiddenAbility": null
  },
  "mimikyu-totem-disguised": {
    "id": 10144,
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "special-attack": 50,
      "special-defense": 105,
      "speed": 96
    },
    "abilities": [
      "disguise"
    ],
    "hiddenAbility": null
  },
  "morpeko-full-belly": {
    "id": 877,
    "types": [
      "electric",
      "dark"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "special-attack": 70,
      "special-defense": 58,
      "speed": 97
    },
    "abilities": [
      "hunger-switch"
    ],
    "hiddenAbility": null
  },
  "morpeko-hangry": {
    "id": 10187,
    "types": [
      "electric",
      "dark"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "special-attack": 70,
      "special-defense": 58,
      "speed": 97
    },
    "abilities": [
      "hunger-switch"
    ],
    "hiddenAbility": null
  },
  "mr-mime": {
    "id": 122,
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "special-attack": 100,
      "special-defense": 120,
      "speed": 90
    },
    "abilities": [
      "soundproof",
      "filter"
    ],
    "hiddenAbility": "technician"
  },
  "mr-mime-galar": {
    "id": 10168,
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 65,
      "special-attack": 90,
      "special-defense": 90,
      "speed": 100
    },
    "abilities": [
      "vital-spirit",
      "screen-cleaner"
    ],
    "hiddenAbility": "ice-body"
  },
  "mr-rime": {
    "id": 866,
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "special-attack": 110,
      "special-defense": 100,
      "speed": 70
    },
    "abilities": [
      "tangled-feet",
      "screen-cleaner"
    ],
    "hiddenAbility": "ice-body"
  },
  "mudsdale": {
    "id": 750,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 85,
      "speed": 35
    },
    "abilities": [
      "own-tempo",
      "stamina"
    ],
    "hiddenAbility": "inner-focus"
  },
  "musharna": {
    "id": 518,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "special-attack": 107,
      "special-defense": 95,
      "speed": 29
    },
    "abilities": [
      "forewarn",
      "synchronize"
    ],
    "hiddenAbility": "telepathy"
  },
  "ninetales": {
    "id": 38,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "special-attack": 81,
      "special-defense": 100,
      "speed": 100
    },
    "abilities": [
      "flash-fire"
    ],
    "hiddenAbility": "drought"
  },
  "ninetales-alola": {
    "id": 10104,
    "types": [
      "ice",
      "fairy"
    ],
    "stats": {
      "hp": 73,
      "attack": 67,
      "defense": 75,
      "special-attack": 81,
      "special-defense": 100,
      "speed": 109
    },
    "abilities": [
      "snow-cloak"
    ],
    "hiddenAbility": "snow-warning"
  },
  "noivern": {
    "id": 715,
    "types": [
      "flying",
      "dragon"
    ],
    "stats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "special-attack": 97,
      "special-defense": 80,
      "speed": 123
    },
    "abilities": [
      "frisk",
      "infiltrator"
    ],
    "hiddenAbility": "telepathy"
  },
  "oranguru": {
    "id": 765,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "special-attack": 90,
      "special-defense": 110,
      "speed": 60
    },
    "abilities": [
      "inner-focus",
      "telepathy"
    ],
    "hiddenAbility": "symbiosis"
  },
  "orthworm": {
    "id": 968,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 145,
      "special-attack": 60,
      "special-defense": 55,
      "speed": 65
    },
    "abilities": [
      "earth-eater"
    ],
    "hiddenAbility": "sand-veil"
  },
  "overqwil": {
    "id": 904,
    "types": [
      "dark",
      "poison"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 95,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 85
    },
    "abilities": [
      "poison-point",
      "swift-swim"
    ],
    "hiddenAbility": "intimidate"
  },
  "palafin-hero": {
    "id": 10256,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 160,
      "defense": 97,
      "special-attack": 106,
      "special-defense": 87,
      "speed": 100
    },
    "abilities": [
      "zero-to-hero"
    ],
    "hiddenAbility": null
  },
  "palafin-zero": {
    "id": 964,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 72,
      "special-attack": 53,
      "special-defense": 62,
      "speed": 100
    },
    "abilities": [
      "zero-to-hero"
    ],
    "hiddenAbility": null
  },
  "pangoro": {
    "id": 675,
    "types": [
      "fighting",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "special-attack": 69,
      "special-defense": 71,
      "speed": 58
    },
    "abilities": [
      "iron-fist",
      "mold-breaker"
    ],
    "hiddenAbility": "scrappy"
  },
  "passimian": {
    "id": 766,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "special-attack": 40,
      "special-defense": 60,
      "speed": 80
    },
    "abilities": [
      "receiver"
    ],
    "hiddenAbility": "defiant"
  },
  "pawmot": {
    "id": 923,
    "types": [
      "electric",
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 70,
      "special-attack": 70,
      "special-defense": 60,
      "speed": 105
    },
    "abilities": [
      "volt-absorb",
      "natural-cure"
    ],
    "hiddenAbility": "iron-fist"
  },
  "pelipper": {
    "id": 279,
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "special-attack": 95,
      "special-defense": 70,
      "speed": 65
    },
    "abilities": [
      "keen-eye",
      "drizzle"
    ],
    "hiddenAbility": "rain-dish"
  },
  "perrserker": {
    "id": 863,
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 100,
      "special-attack": 50,
      "special-defense": 60,
      "speed": 50
    },
    "abilities": [
      "battle-armor",
      "tough-claws"
    ],
    "hiddenAbility": "steely-spirit"
  },
  "persian": {
    "id": 53,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 115
    },
    "abilities": [
      "limber",
      "technician"
    ],
    "hiddenAbility": "unnerve"
  },
  "persian-alola": {
    "id": 10108,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 60,
      "special-attack": 75,
      "special-defense": 65,
      "speed": 115
    },
    "abilities": [
      "fur-coat",
      "technician"
    ],
    "hiddenAbility": "rattled"
  },
  "pidgeot": {
    "id": 18,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 101
    },
    "abilities": [
      "keen-eye",
      "tangled-feet"
    ],
    "hiddenAbility": "big-pecks"
  },
  "pidgeot-mega": {
    "id": 10073,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 80,
      "special-attack": 135,
      "special-defense": 80,
      "speed": 121
    },
    "abilities": [
      "no-guard"
    ],
    "hiddenAbility": null
  },
  "pikachu": {
    "id": 25,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-alola-cap": {
    "id": 10099,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-belle": {
    "id": 10081,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-cosplay": {
    "id": 10085,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-hoenn-cap": {
    "id": 10095,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-kalos-cap": {
    "id": 10098,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-libre": {
    "id": 10084,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-original-cap": {
    "id": 10094,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-partner-cap": {
    "id": 10148,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-phd": {
    "id": 10083,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-pop-star": {
    "id": 10082,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-rock-star": {
    "id": 10080,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-sinnoh-cap": {
    "id": 10096,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-starter": {
    "id": 10158,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 80,
      "defense": 50,
      "special-attack": 75,
      "special-defense": 60,
      "speed": 120
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-unova-cap": {
    "id": 10097,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pikachu-world-cap": {
    "id": 10160,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "pincurchin": {
    "id": 871,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 48,
      "attack": 101,
      "defense": 95,
      "special-attack": 91,
      "special-defense": 85,
      "speed": 15
    },
    "abilities": [
      "lightning-rod"
    ],
    "hiddenAbility": "electric-surge"
  },
  "pinsir": {
    "id": 127,
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 70,
      "speed": 85
    },
    "abilities": [
      "hyper-cutter",
      "mold-breaker"
    ],
    "hiddenAbility": "moxie"
  },
  "pinsir-mega": {
    "id": 10040,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 155,
      "defense": 120,
      "special-attack": 65,
      "special-defense": 90,
      "speed": 105
    },
    "abilities": [
      "aerilate"
    ],
    "hiddenAbility": null
  },
  "politoed": {
    "id": 186,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "special-attack": 90,
      "special-defense": 100,
      "speed": 70
    },
    "abilities": [
      "water-absorb",
      "damp"
    ],
    "hiddenAbility": "drizzle"
  },
  "polteageist": {
    "id": 855,
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "special-attack": 134,
      "special-defense": 114,
      "speed": 70
    },
    "abilities": [
      "weak-armor"
    ],
    "hiddenAbility": "cursed-body"
  },
  "primarina": {
    "id": 730,
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "special-attack": 126,
      "special-defense": 116,
      "speed": 60
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "liquid-voice"
  },
  "pyroar-male": {
    "id": 668,
    "types": [
      "fire",
      "normal"
    ],
    "stats": {
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "special-attack": 109,
      "special-defense": 66,
      "speed": 106
    },
    "abilities": [
      "rivalry",
      "unnerve"
    ],
    "hiddenAbility": "moxie"
  },
  "pyroar-mega": {
    "id": 10295,
    "types": [
      "fire",
      "normal"
    ],
    "stats": {
      "hp": 86,
      "attack": 88,
      "defense": 92,
      "special-attack": 129,
      "special-defense": 86,
      "speed": 126
    },
    "abilities": [
      "fire-mane"
    ],
    "hiddenAbility": null
  },
  "quaquaval": {
    "id": 914,
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 80,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 85
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "moxie"
  },
  "qwilfish": {
    "id": 211,
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 85
    },
    "abilities": [
      "poison-point",
      "swift-swim"
    ],
    "hiddenAbility": "intimidate"
  },
  "qwilfish-hisui": {
    "id": 10234,
    "types": [
      "dark",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 85
    },
    "abilities": [
      "poison-point",
      "swift-swim"
    ],
    "hiddenAbility": "intimidate"
  },
  "raichu": {
    "id": 26,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "special-attack": 90,
      "special-defense": 80,
      "speed": 110
    },
    "abilities": [
      "static"
    ],
    "hiddenAbility": "lightning-rod"
  },
  "raichu-alola": {
    "id": 10100,
    "types": [
      "electric",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 50,
      "special-attack": 95,
      "special-defense": 85,
      "speed": 110
    },
    "abilities": [
      "surge-surfer"
    ],
    "hiddenAbility": null
  },
  "raichu-mega-x": {
    "id": 10304,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 135,
      "defense": 95,
      "special-attack": 90,
      "special-defense": 95,
      "speed": 110
    },
    "abilities": [
      "electric-surge"
    ],
    "hiddenAbility": null
  },
  "raichu-mega-y": {
    "id": 10305,
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 55,
      "special-attack": 160,
      "special-defense": 80,
      "speed": 130
    },
    "abilities": [
      "no-guard"
    ],
    "hiddenAbility": null
  },
  "rampardos": {
    "id": 409,
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "special-attack": 65,
      "special-defense": 50,
      "speed": 58
    },
    "abilities": [
      "mold-breaker"
    ],
    "hiddenAbility": "sheer-force"
  },
  "reuniclus": {
    "id": 579,
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "special-attack": 125,
      "special-defense": 85,
      "speed": 30
    },
    "abilities": [
      "overcoat",
      "magic-guard"
    ],
    "hiddenAbility": "regenerator"
  },
  "rhyperior": {
    "id": 464,
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 40
    },
    "abilities": [
      "lightning-rod",
      "solid-rock"
    ],
    "hiddenAbility": "reckless"
  },
  "rillaboom": {
    "id": 812,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 85
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "grassy-surge"
  },
  "roserade": {
    "id": 407,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "special-attack": 125,
      "special-defense": 105,
      "speed": 90
    },
    "abilities": [
      "natural-cure",
      "poison-point"
    ],
    "hiddenAbility": "technician"
  },
  "rotom": {
    "id": 479,
    "types": [
      "electric",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "special-attack": 95,
      "special-defense": 77,
      "speed": 91
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "rotom-fan": {
    "id": 10011,
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "special-attack": 105,
      "special-defense": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "rotom-frost": {
    "id": 10010,
    "types": [
      "electric",
      "ice"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "special-attack": 105,
      "special-defense": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "rotom-heat": {
    "id": 10008,
    "types": [
      "electric",
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "special-attack": 105,
      "special-defense": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "rotom-mow": {
    "id": 10012,
    "types": [
      "electric",
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "special-attack": 105,
      "special-defense": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "rotom-wash": {
    "id": 10009,
    "types": [
      "electric",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 107,
      "special-attack": 105,
      "special-defense": 107,
      "speed": 86
    },
    "abilities": [
      "levitate"
    ],
    "hiddenAbility": null
  },
  "runerigus": {
    "id": 867,
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "special-attack": 50,
      "special-defense": 105,
      "speed": 30
    },
    "abilities": [
      "wandering-spirit"
    ],
    "hiddenAbility": null
  },
  "sableye": {
    "id": 302,
    "types": [
      "dark",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 50
    },
    "abilities": [
      "keen-eye",
      "stall"
    ],
    "hiddenAbility": "prankster"
  },
  "sableye-mega": {
    "id": 10066,
    "types": [
      "dark",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 125,
      "special-attack": 85,
      "special-defense": 115,
      "speed": 20
    },
    "abilities": [
      "magic-bounce"
    ],
    "hiddenAbility": null
  },
  "salamence": {
    "id": 373,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "special-attack": 110,
      "special-defense": 80,
      "speed": 100
    },
    "abilities": [
      "intimidate"
    ],
    "hiddenAbility": "moxie"
  },
  "salamence-mega": {
    "id": 10089,
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 145,
      "defense": 130,
      "special-attack": 120,
      "special-defense": 90,
      "speed": 120
    },
    "abilities": [
      "aerilate"
    ],
    "hiddenAbility": null
  },
  "salazzle": {
    "id": 758,
    "types": [
      "poison",
      "fire"
    ],
    "stats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "special-attack": 111,
      "special-defense": 60,
      "speed": 117
    },
    "abilities": [
      "corrosion"
    ],
    "hiddenAbility": "oblivious"
  },
  "salazzle-totem": {
    "id": 10129,
    "types": [
      "poison",
      "fire"
    ],
    "stats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "special-attack": 111,
      "special-defense": 60,
      "speed": 117
    },
    "abilities": [
      "corrosion"
    ],
    "hiddenAbility": "oblivious"
  },
  "samurott": {
    "id": 503,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "special-attack": 108,
      "special-defense": 70,
      "speed": 70
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "shell-armor"
  },
  "samurott-hisui": {
    "id": 10236,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 90,
      "attack": 108,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 65,
      "speed": 85
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "sharpness"
  },
  "sandaconda": {
    "id": 844,
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 71
    },
    "abilities": [
      "sand-spit",
      "shed-skin"
    ],
    "hiddenAbility": "sand-veil"
  },
  "sceptile": {
    "id": 254,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special-attack": 105,
      "special-defense": 85,
      "speed": 120
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "unburden"
  },
  "sceptile-mega": {
    "id": 10065,
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 75,
      "special-attack": 145,
      "special-defense": 85,
      "speed": 145
    },
    "abilities": [
      "lightning-rod"
    ],
    "hiddenAbility": null
  },
  "scizor": {
    "id": 212,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 80,
      "speed": 65
    },
    "abilities": [
      "swarm",
      "technician"
    ],
    "hiddenAbility": "light-metal"
  },
  "scizor-mega": {
    "id": 10046,
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 150,
      "defense": 140,
      "special-attack": 65,
      "special-defense": 100,
      "speed": 75
    },
    "abilities": [
      "technician"
    ],
    "hiddenAbility": null
  },
  "scolipede": {
    "id": 545,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "special-attack": 55,
      "special-defense": 69,
      "speed": 112
    },
    "abilities": [
      "poison-point",
      "swarm"
    ],
    "hiddenAbility": "speed-boost"
  },
  "scolipede-mega": {
    "id": 10288,
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 140,
      "defense": 149,
      "special-attack": 75,
      "special-defense": 99,
      "speed": 62
    },
    "abilities": [
      "shell-armor"
    ],
    "hiddenAbility": null
  },
  "scovillain": {
    "id": 952,
    "types": [
      "grass",
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 108,
      "defense": 65,
      "special-attack": 108,
      "special-defense": 65,
      "speed": 75
    },
    "abilities": [
      "chlorophyll",
      "insomnia"
    ],
    "hiddenAbility": "moody"
  },
  "scovillain-mega": {
    "id": 10320,
    "types": [
      "grass",
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 138,
      "defense": 85,
      "special-attack": 138,
      "special-defense": 85,
      "speed": 75
    },
    "abilities": [
      "spicy-spray"
    ],
    "hiddenAbility": null
  },
  "scrafty": {
    "id": 560,
    "types": [
      "dark",
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "special-attack": 45,
      "special-defense": 115,
      "speed": 58
    },
    "abilities": [
      "shed-skin",
      "moxie"
    ],
    "hiddenAbility": "intimidate"
  },
  "scrafty-mega": {
    "id": 10289,
    "types": [
      "dark",
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 135,
      "special-attack": 55,
      "special-defense": 135,
      "speed": 68
    },
    "abilities": [
      "intimidate"
    ],
    "hiddenAbility": null
  },
  "serperior": {
    "id": 497,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "special-attack": 75,
      "special-defense": 95,
      "speed": 113
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "contrary"
  },
  "sharpedo": {
    "id": 319,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "special-attack": 95,
      "special-defense": 40,
      "speed": 95
    },
    "abilities": [
      "rough-skin"
    ],
    "hiddenAbility": "speed-boost"
  },
  "sharpedo-mega": {
    "id": 10070,
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 140,
      "defense": 70,
      "special-attack": 110,
      "special-defense": 65,
      "speed": 105
    },
    "abilities": [
      "strong-jaw"
    ],
    "hiddenAbility": null
  },
  "simipour": {
    "id": 516,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special-attack": 98,
      "special-defense": 63,
      "speed": 101
    },
    "abilities": [
      "gluttony"
    ],
    "hiddenAbility": "torrent"
  },
  "simisage": {
    "id": 512,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special-attack": 98,
      "special-defense": 63,
      "speed": 101
    },
    "abilities": [
      "gluttony"
    ],
    "hiddenAbility": "overgrow"
  },
  "simisear": {
    "id": 514,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special-attack": 98,
      "special-defense": 63,
      "speed": 101
    },
    "abilities": [
      "gluttony"
    ],
    "hiddenAbility": "blaze"
  },
  "sinistcha": {
    "id": 1013,
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 71,
      "attack": 60,
      "defense": 106,
      "special-attack": 121,
      "special-defense": 80,
      "speed": 70
    },
    "abilities": [
      "hospitality"
    ],
    "hiddenAbility": "heatproof"
  },
  "sirfetchd": {
    "id": 865,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 62,
      "attack": 135,
      "defense": 95,
      "special-attack": 68,
      "special-defense": 82,
      "speed": 65
    },
    "abilities": [
      "steadfast"
    ],
    "hiddenAbility": "scrappy"
  },
  "skarmory": {
    "id": 227,
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "special-attack": 40,
      "special-defense": 70,
      "speed": 70
    },
    "abilities": [
      "keen-eye",
      "sturdy"
    ],
    "hiddenAbility": "weak-armor"
  },
  "skarmory-mega": {
    "id": 10284,
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 140,
      "defense": 110,
      "special-attack": 40,
      "special-defense": 100,
      "speed": 110
    },
    "abilities": [
      "stalwart"
    ],
    "hiddenAbility": null
  },
  "skeledirge": {
    "id": 911,
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 104,
      "attack": 75,
      "defense": 100,
      "special-attack": 110,
      "special-defense": 75,
      "speed": 66
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "unaware"
  },
  "slowbro": {
    "id": 80,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 30
    },
    "abilities": [
      "oblivious",
      "own-tempo"
    ],
    "hiddenAbility": "regenerator"
  },
  "slowbro-galar": {
    "id": 10165,
    "types": [
      "poison",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 95,
      "special-attack": 100,
      "special-defense": 70,
      "speed": 30
    },
    "abilities": [
      "quick-draw",
      "own-tempo"
    ],
    "hiddenAbility": "regenerator"
  },
  "slowbro-mega": {
    "id": 10071,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 180,
      "special-attack": 130,
      "special-defense": 80,
      "speed": 30
    },
    "abilities": [
      "shell-armor"
    ],
    "hiddenAbility": null
  },
  "slowking": {
    "id": 199,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 110,
      "speed": 30
    },
    "abilities": [
      "oblivious",
      "own-tempo"
    ],
    "hiddenAbility": "regenerator"
  },
  "slowking-galar": {
    "id": 10172,
    "types": [
      "poison",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 80,
      "special-attack": 110,
      "special-defense": 110,
      "speed": 30
    },
    "abilities": [
      "curious-medicine",
      "own-tempo"
    ],
    "hiddenAbility": "regenerator"
  },
  "slurpuff": {
    "id": 685,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 72
    },
    "abilities": [
      "sweet-veil"
    ],
    "hiddenAbility": "unburden"
  },
  "sneasler": {
    "id": 903,
    "types": [
      "fighting",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 130,
      "defense": 60,
      "special-attack": 40,
      "special-defense": 80,
      "speed": 120
    },
    "abilities": [
      "pressure",
      "unburden"
    ],
    "hiddenAbility": "poison-touch"
  },
  "snorlax": {
    "id": 143,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "special-attack": 65,
      "special-defense": 110,
      "speed": 30
    },
    "abilities": [
      "immunity",
      "thick-fat"
    ],
    "hiddenAbility": "gluttony"
  },
  "spiritomb": {
    "id": 442,
    "types": [
      "ghost",
      "dark"
    ],
    "stats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "special-attack": 92,
      "special-defense": 108,
      "speed": 35
    },
    "abilities": [
      "pressure"
    ],
    "hiddenAbility": "infiltrator"
  },
  "squawkabilly-blue-plumage": {
    "id": 10260,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "special-attack": 45,
      "special-defense": 51,
      "speed": 92
    },
    "abilities": [
      "intimidate",
      "hustle"
    ],
    "hiddenAbility": "guts"
  },
  "squawkabilly-green-plumage": {
    "id": 931,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "special-attack": 45,
      "special-defense": 51,
      "speed": 92
    },
    "abilities": [
      "intimidate",
      "hustle"
    ],
    "hiddenAbility": "guts"
  },
  "squawkabilly-white-plumage": {
    "id": 10262,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "special-attack": 45,
      "special-defense": 51,
      "speed": 92
    },
    "abilities": [
      "intimidate",
      "hustle"
    ],
    "hiddenAbility": "sheer-force"
  },
  "squawkabilly-yellow-plumage": {
    "id": 10261,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 82,
      "attack": 96,
      "defense": 51,
      "special-attack": 45,
      "special-defense": 51,
      "speed": 92
    },
    "abilities": [
      "intimidate",
      "hustle"
    ],
    "hiddenAbility": "sheer-force"
  },
  "staraptor": {
    "id": 398,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "special-attack": 50,
      "special-defense": 60,
      "speed": 100
    },
    "abilities": [
      "intimidate"
    ],
    "hiddenAbility": "reckless"
  },
  "staraptor-mega": {
    "id": 10308,
    "types": [
      "fighting",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 140,
      "defense": 100,
      "special-attack": 60,
      "special-defense": 90,
      "speed": 110
    },
    "abilities": [
      "contrary"
    ],
    "hiddenAbility": null
  },
  "starmie": {
    "id": 121,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "special-attack": 100,
      "special-defense": 85,
      "speed": 115
    },
    "abilities": [
      "illuminate",
      "natural-cure"
    ],
    "hiddenAbility": "analytic"
  },
  "starmie-mega": {
    "id": 10280,
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 105,
      "special-attack": 130,
      "special-defense": 105,
      "speed": 120
    },
    "abilities": [
      "huge-power"
    ],
    "hiddenAbility": null
  },
  "steelix": {
    "id": 208,
    "types": [
      "steel",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 30
    },
    "abilities": [
      "rock-head",
      "sturdy"
    ],
    "hiddenAbility": "sheer-force"
  },
  "steelix-mega": {
    "id": 10072,
    "types": [
      "steel",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 230,
      "special-attack": 55,
      "special-defense": 95,
      "speed": 30
    },
    "abilities": [
      "sand-force"
    ],
    "hiddenAbility": null
  },
  "stunfisk": {
    "id": 618,
    "types": [
      "ground",
      "electric"
    ],
    "stats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "special-attack": 81,
      "special-defense": 99,
      "speed": 32
    },
    "abilities": [
      "static",
      "limber"
    ],
    "hiddenAbility": "sand-veil"
  },
  "stunfisk-galar": {
    "id": 10180,
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 109,
      "attack": 81,
      "defense": 99,
      "special-attack": 66,
      "special-defense": 84,
      "speed": 32
    },
    "abilities": [
      "mimicry"
    ],
    "hiddenAbility": null
  },
  "swalot": {
    "id": 317,
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "special-attack": 73,
      "special-defense": 83,
      "speed": 55
    },
    "abilities": [
      "liquid-ooze",
      "sticky-hold"
    ],
    "hiddenAbility": "gluttony"
  },
  "swampert": {
    "id": 260,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "special-attack": 85,
      "special-defense": 90,
      "speed": 60
    },
    "abilities": [
      "torrent"
    ],
    "hiddenAbility": "damp"
  },
  "swampert-mega": {
    "id": 10064,
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 110,
      "special-attack": 95,
      "special-defense": 110,
      "speed": 70
    },
    "abilities": [
      "swift-swim"
    ],
    "hiddenAbility": null
  },
  "sylveon": {
    "id": 700,
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "special-attack": 110,
      "special-defense": 130,
      "speed": 60
    },
    "abilities": [
      "cute-charm"
    ],
    "hiddenAbility": "pixilate"
  },
  "talonflame": {
    "id": 663,
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "special-attack": 74,
      "special-defense": 69,
      "speed": 126
    },
    "abilities": [
      "flame-body"
    ],
    "hiddenAbility": "gale-wings"
  },
  "tauros": {
    "id": 128,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "special-attack": 40,
      "special-defense": 70,
      "speed": 110
    },
    "abilities": [
      "intimidate",
      "anger-point"
    ],
    "hiddenAbility": "sheer-force"
  },
  "tauros-paldea-aqua-breed": {
    "id": 10252,
    "types": [
      "fighting",
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "special-attack": 30,
      "special-defense": 70,
      "speed": 100
    },
    "abilities": [
      "intimidate",
      "anger-point"
    ],
    "hiddenAbility": "cud-chew"
  },
  "tauros-paldea-blaze-breed": {
    "id": 10251,
    "types": [
      "fighting",
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "special-attack": 30,
      "special-defense": 70,
      "speed": 100
    },
    "abilities": [
      "intimidate",
      "anger-point"
    ],
    "hiddenAbility": "cud-chew"
  },
  "tauros-paldea-combat-breed": {
    "id": 10250,
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 105,
      "special-attack": 30,
      "special-defense": 70,
      "speed": 100
    },
    "abilities": [
      "intimidate",
      "anger-point"
    ],
    "hiddenAbility": "cud-chew"
  },
  "thievul": {
    "id": 828,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 58,
      "defense": 58,
      "special-attack": 87,
      "special-defense": 92,
      "speed": 90
    },
    "abilities": [
      "run-away",
      "unburden"
    ],
    "hiddenAbility": "stakeout"
  },
  "tinkaton": {
    "id": 959,
    "types": [
      "fairy",
      "steel"
    ],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 77,
      "special-attack": 70,
      "special-defense": 105,
      "speed": 94
    },
    "abilities": [
      "mold-breaker",
      "own-tempo"
    ],
    "hiddenAbility": "pickpocket"
  },
  "torkoal": {
    "id": 324,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "special-attack": 85,
      "special-defense": 70,
      "speed": 20
    },
    "abilities": [
      "white-smoke",
      "drought"
    ],
    "hiddenAbility": "shell-armor"
  },
  "torterra": {
    "id": 389,
    "types": [
      "grass",
      "ground"
    ],
    "stats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "special-attack": 75,
      "special-defense": 85,
      "speed": 56
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "shell-armor"
  },
  "toucannon": {
    "id": 733,
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "special-attack": 75,
      "special-defense": 75,
      "speed": 60
    },
    "abilities": [
      "keen-eye",
      "skill-link"
    ],
    "hiddenAbility": "sheer-force"
  },
  "toxapex": {
    "id": 748,
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "special-attack": 53,
      "special-defense": 142,
      "speed": 35
    },
    "abilities": [
      "merciless",
      "limber"
    ],
    "hiddenAbility": "regenerator"
  },
  "toxicroak": {
    "id": 454,
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "special-attack": 86,
      "special-defense": 65,
      "speed": 85
    },
    "abilities": [
      "anticipation",
      "dry-skin"
    ],
    "hiddenAbility": "poison-touch"
  },
  "toxtricity-amped": {
    "id": 849,
    "types": [
      "electric",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "special-attack": 114,
      "special-defense": 70,
      "speed": 75
    },
    "abilities": [
      "punk-rock",
      "plus"
    ],
    "hiddenAbility": "technician"
  },
  "toxtricity-low-key": {
    "id": 10184,
    "types": [
      "electric",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "special-attack": 114,
      "special-defense": 70,
      "speed": 75
    },
    "abilities": [
      "punk-rock",
      "minus"
    ],
    "hiddenAbility": "technician"
  },
  "trevenant": {
    "id": 709,
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "special-attack": 65,
      "special-defense": 82,
      "speed": 56
    },
    "abilities": [
      "natural-cure",
      "frisk"
    ],
    "hiddenAbility": "harvest"
  },
  "tsareena": {
    "id": 763,
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "special-attack": 50,
      "special-defense": 98,
      "speed": 72
    },
    "abilities": [
      "leaf-guard",
      "queenly-majesty"
    ],
    "hiddenAbility": "sweet-veil"
  },
  "typhlosion": {
    "id": 157,
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special-attack": 109,
      "special-defense": 85,
      "speed": 100
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "flash-fire"
  },
  "typhlosion-hisui": {
    "id": 10233,
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 73,
      "attack": 84,
      "defense": 78,
      "special-attack": 119,
      "special-defense": 85,
      "speed": 95
    },
    "abilities": [
      "blaze"
    ],
    "hiddenAbility": "frisk"
  },
  "tyranitar": {
    "id": 248,
    "types": [
      "rock",
      "dark"
    ],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "special-attack": 95,
      "special-defense": 100,
      "speed": 61
    },
    "abilities": [
      "sand-stream"
    ],
    "hiddenAbility": "unnerve"
  },
  "tyranitar-mega": {
    "id": 10049,
    "types": [
      "rock",
      "dark"
    ],
    "stats": {
      "hp": 100,
      "attack": 164,
      "defense": 150,
      "special-attack": 95,
      "special-defense": 120,
      "speed": 71
    },
    "abilities": [
      "sand-stream"
    ],
    "hiddenAbility": null
  },
  "tyrantrum": {
    "id": 697,
    "types": [
      "rock",
      "dragon"
    ],
    "stats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "special-attack": 69,
      "special-defense": 59,
      "speed": 71
    },
    "abilities": [
      "strong-jaw"
    ],
    "hiddenAbility": "rock-head"
  },
  "umbreon": {
    "id": 197,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "special-attack": 60,
      "special-defense": 130,
      "speed": 65
    },
    "abilities": [
      "synchronize"
    ],
    "hiddenAbility": "inner-focus"
  },
  "vanilluxe": {
    "id": 584,
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "special-attack": 110,
      "special-defense": 95,
      "speed": 79
    },
    "abilities": [
      "ice-body",
      "snow-warning"
    ],
    "hiddenAbility": "weak-armor"
  },
  "vaporeon": {
    "id": 134,
    "types": [
      "water"
    ],
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "special-attack": 110,
      "special-defense": 95,
      "speed": 65
    },
    "abilities": [
      "water-absorb"
    ],
    "hiddenAbility": "hydration"
  },
  "venusaur": {
    "id": 3,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 80
    },
    "abilities": [
      "overgrow"
    ],
    "hiddenAbility": "chlorophyll"
  },
  "venusaur-mega": {
    "id": 10033,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 123,
      "special-attack": 122,
      "special-defense": 120,
      "speed": 80
    },
    "abilities": [
      "thick-fat"
    ],
    "hiddenAbility": null
  },
  "victreebel": {
    "id": 71,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special-attack": 100,
      "special-defense": 70,
      "speed": 70
    },
    "abilities": [
      "chlorophyll"
    ],
    "hiddenAbility": "gluttony"
  },
  "victreebel-mega": {
    "id": 10279,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 85,
      "special-attack": 135,
      "special-defense": 95,
      "speed": 70
    },
    "abilities": [
      "innards-out"
    ],
    "hiddenAbility": null
  },
  "vileplume": {
    "id": 45,
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "special-attack": 110,
      "special-defense": 90,
      "speed": 50
    },
    "abilities": [
      "chlorophyll"
    ],
    "hiddenAbility": "effect-spore"
  },
  "vivillon": {
    "id": 666,
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "special-attack": 90,
      "special-defense": 50,
      "speed": 89
    },
    "abilities": [
      "shield-dust",
      "compound-eyes"
    ],
    "hiddenAbility": "friend-guard"
  },
  "volcarona": {
    "id": 637,
    "types": [
      "bug",
      "fire"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "special-attack": 135,
      "special-defense": 105,
      "speed": 100
    },
    "abilities": [
      "flame-body"
    ],
    "hiddenAbility": "swarm"
  },
  "watchog": {
    "id": 505,
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "special-attack": 60,
      "special-defense": 69,
      "speed": 77
    },
    "abilities": [
      "illuminate",
      "keen-eye"
    ],
    "hiddenAbility": "analytic"
  },
  "weavile": {
    "id": 461,
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "special-attack": 45,
      "special-defense": 85,
      "speed": 125
    },
    "abilities": [
      "pressure"
    ],
    "hiddenAbility": "pickpocket"
  },
  "whimsicott": {
    "id": 547,
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "special-attack": 77,
      "special-defense": 75,
      "speed": 116
    },
    "abilities": [
      "prankster",
      "infiltrator"
    ],
    "hiddenAbility": "chlorophyll"
  },
  "wigglytuff": {
    "id": 40,
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "special-attack": 85,
      "special-defense": 50,
      "speed": 45
    },
    "abilities": [
      "cute-charm",
      "competitive"
    ],
    "hiddenAbility": "frisk"
  },
  "wyrdeer": {
    "id": 899,
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "special-attack": 105,
      "special-defense": 75,
      "speed": 65
    },
    "abilities": [
      "intimidate",
      "frisk"
    ],
    "hiddenAbility": "sap-sipper"
  },
  "zoroark": {
    "id": 571,
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "special-attack": 120,
      "special-defense": 60,
      "speed": 105
    },
    "abilities": [
      "illusion"
    ],
    "hiddenAbility": null
  },
  "zoroark-hisui": {
    "id": 10239,
    "types": [
      "normal",
      "ghost"
    ],
    "stats": {
      "hp": 55,
      "attack": 100,
      "defense": 60,
      "special-attack": 125,
      "special-defense": 60,
      "speed": 110
    },
    "abilities": [
      "illusion"
    ],
    "hiddenAbility": null
  }
};

/** undefined for a slug that isn't a selectable form - callers must handle it */
export function formData(slug: string): FormData | undefined {
  return FORM_DATA[slug];
}
