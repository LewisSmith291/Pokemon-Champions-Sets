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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
};

/** undefined for a slug that isn't a selectable form - callers must handle it */
export function formData(slug: string): FormData | undefined {
  return FORM_DATA[slug];
}
