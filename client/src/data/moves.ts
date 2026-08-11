// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-moves.mjs
//
// Every selectable move, bundled so the move picker can filter locally instead of
// making a request per move. Sorted by label. Max Moves, Z-moves, Shadow moves and
// Struggle are excluded — none of them can go in one of a set's four slots.

export interface MoveSummary {
  /** PokeAPI slug - this is what gets submitted in a set's `moves` array */
  name: string;
  /** Display name, e.g. "Double-Edge" */
  label: string;
  /** Elemental type slug - same vocabulary as Species.types, so TypeDisplay takes it as-is */
  type: string;
  /** "physical" | "special" | "status" */
  damageClass: string;
  /** null for status moves */
  power: number | null;
  /** null for moves that never miss */
  accuracy: number | null;
  pp: number | null;
}

export const MOVES: MoveSummary[] = [
  {
    "name": "absorb",
    "label": "Absorb",
    "type": "grass",
    "damageClass": "special",
    "power": 20,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "accelerock",
    "label": "Accelerock",
    "type": "rock",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "acid",
    "label": "Acid",
    "type": "poison",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "acid-armor",
    "label": "Acid Armor",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "acid-spray",
    "label": "Acid Spray",
    "type": "poison",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "acrobatics",
    "label": "Acrobatics",
    "type": "flying",
    "damageClass": "physical",
    "power": 55,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "acupressure",
    "label": "Acupressure",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "aerial-ace",
    "label": "Aerial Ace",
    "type": "flying",
    "damageClass": "physical",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "aeroblast",
    "label": "Aeroblast",
    "type": "flying",
    "damageClass": "special",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "name": "after-you",
    "label": "After You",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "agility",
    "label": "Agility",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "air-cutter",
    "label": "Air Cutter",
    "type": "flying",
    "damageClass": "special",
    "power": 60,
    "accuracy": 95,
    "pp": 25
  },
  {
    "name": "air-slash",
    "label": "Air Slash",
    "type": "flying",
    "damageClass": "special",
    "power": 75,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "alluring-voice",
    "label": "Alluring Voice",
    "type": "fairy",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "ally-switch",
    "label": "Ally Switch",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "amnesia",
    "label": "Amnesia",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "anchor-shot",
    "label": "Anchor Shot",
    "type": "steel",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "ancient-power",
    "label": "Ancient Power",
    "type": "rock",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "apple-acid",
    "label": "Apple Acid",
    "type": "grass",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "aqua-cutter",
    "label": "Aqua Cutter",
    "type": "water",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "aqua-jet",
    "label": "Aqua Jet",
    "type": "water",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "aqua-ring",
    "label": "Aqua Ring",
    "type": "water",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "aqua-step",
    "label": "Aqua Step",
    "type": "water",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "aqua-tail",
    "label": "Aqua Tail",
    "type": "water",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "arm-thrust",
    "label": "Arm Thrust",
    "type": "fighting",
    "damageClass": "physical",
    "power": 15,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "armor-cannon",
    "label": "Armor Cannon",
    "type": "fire",
    "damageClass": "special",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "aromatherapy",
    "label": "Aromatherapy",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "aromatic-mist",
    "label": "Aromatic Mist",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "assist",
    "label": "Assist",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "assurance",
    "label": "Assurance",
    "type": "dark",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "astonish",
    "label": "Astonish",
    "type": "ghost",
    "damageClass": "physical",
    "power": 30,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "astral-barrage",
    "label": "Astral Barrage",
    "type": "ghost",
    "damageClass": "special",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "attack-order",
    "label": "Attack Order",
    "type": "bug",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "attract",
    "label": "Attract",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "aura-sphere",
    "label": "Aura Sphere",
    "type": "fighting",
    "damageClass": "special",
    "power": 80,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "aura-wheel",
    "label": "Aura Wheel",
    "type": "electric",
    "damageClass": "physical",
    "power": 110,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "aurora-beam",
    "label": "Aurora Beam",
    "type": "ice",
    "damageClass": "special",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "aurora-veil",
    "label": "Aurora Veil",
    "type": "ice",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "autotomize",
    "label": "Autotomize",
    "type": "steel",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "avalanche",
    "label": "Avalanche",
    "type": "ice",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "axe-kick",
    "label": "Axe Kick",
    "type": "fighting",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "baby-doll-eyes",
    "label": "Baby-Doll Eyes",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "baddy-bad",
    "label": "Baddy Bad",
    "type": "dark",
    "damageClass": "special",
    "power": 80,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "baneful-bunker",
    "label": "Baneful Bunker",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "barb-barrage",
    "label": "Barb Barrage",
    "type": "poison",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "barrage",
    "label": "Barrage",
    "type": "normal",
    "damageClass": "physical",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "barrier",
    "label": "Barrier",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "baton-pass",
    "label": "Baton Pass",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "beak-blast",
    "label": "Beak Blast",
    "type": "flying",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "beat-up",
    "label": "Beat Up",
    "type": "dark",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "behemoth-bash",
    "label": "Behemoth Bash",
    "type": "steel",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "behemoth-blade",
    "label": "Behemoth Blade",
    "type": "steel",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "belch",
    "label": "Belch",
    "type": "poison",
    "damageClass": "special",
    "power": 120,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "belly-drum",
    "label": "Belly Drum",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "bestow",
    "label": "Bestow",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "bide",
    "label": "Bide",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "bind",
    "label": "Bind",
    "type": "normal",
    "damageClass": "physical",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "bite",
    "label": "Bite",
    "type": "dark",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "bitter-blade",
    "label": "Bitter Blade",
    "type": "fire",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "bitter-malice",
    "label": "Bitter Malice",
    "type": "ghost",
    "damageClass": "special",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "blast-burn",
    "label": "Blast Burn",
    "type": "fire",
    "damageClass": "special",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "blaze-kick",
    "label": "Blaze Kick",
    "type": "fire",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "blazing-torque",
    "label": "Blazing Torque",
    "type": "fire",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "bleakwind-storm",
    "label": "Bleakwind Storm",
    "type": "flying",
    "damageClass": "special",
    "power": 100,
    "accuracy": 80,
    "pp": 10
  },
  {
    "name": "blizzard",
    "label": "Blizzard",
    "type": "ice",
    "damageClass": "special",
    "power": 110,
    "accuracy": 70,
    "pp": 5
  },
  {
    "name": "block",
    "label": "Block",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "blood-moon",
    "label": "Blood Moon",
    "type": "normal",
    "damageClass": "special",
    "power": 140,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "blue-flare",
    "label": "Blue Flare",
    "type": "fire",
    "damageClass": "special",
    "power": 130,
    "accuracy": 85,
    "pp": 5
  },
  {
    "name": "body-press",
    "label": "Body Press",
    "type": "fighting",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "body-slam",
    "label": "Body Slam",
    "type": "normal",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "bolt-beak",
    "label": "Bolt Beak",
    "type": "electric",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "bolt-strike",
    "label": "Bolt Strike",
    "type": "electric",
    "damageClass": "physical",
    "power": 130,
    "accuracy": 85,
    "pp": 5
  },
  {
    "name": "bone-club",
    "label": "Bone Club",
    "type": "ground",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "bone-rush",
    "label": "Bone Rush",
    "type": "ground",
    "damageClass": "physical",
    "power": 25,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "bonemerang",
    "label": "Bonemerang",
    "type": "ground",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "boomburst",
    "label": "Boomburst",
    "type": "normal",
    "damageClass": "special",
    "power": 140,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "bounce",
    "label": "Bounce",
    "type": "flying",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 85,
    "pp": 5
  },
  {
    "name": "bouncy-bubble",
    "label": "Bouncy Bubble",
    "type": "water",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "branch-poke",
    "label": "Branch Poke",
    "type": "grass",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 40
  },
  {
    "name": "brave-bird",
    "label": "Brave Bird",
    "type": "flying",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "breaking-swipe",
    "label": "Breaking Swipe",
    "type": "dragon",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "brick-break",
    "label": "Brick Break",
    "type": "fighting",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "brine",
    "label": "Brine",
    "type": "water",
    "damageClass": "special",
    "power": 65,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "brutal-swing",
    "label": "Brutal Swing",
    "type": "dark",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "bubble",
    "label": "Bubble",
    "type": "water",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "bubble-beam",
    "label": "Bubble Beam",
    "type": "water",
    "damageClass": "special",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "bug-bite",
    "label": "Bug Bite",
    "type": "bug",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "bug-buzz",
    "label": "Bug Buzz",
    "type": "bug",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "bulk-up",
    "label": "Bulk Up",
    "type": "fighting",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "bulldoze",
    "label": "Bulldoze",
    "type": "ground",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "bullet-punch",
    "label": "Bullet Punch",
    "type": "steel",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "bullet-seed",
    "label": "Bullet Seed",
    "type": "grass",
    "damageClass": "physical",
    "power": 25,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "burn-up",
    "label": "Burn Up",
    "type": "fire",
    "damageClass": "special",
    "power": 130,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "burning-bulwark",
    "label": "Burning Bulwark",
    "type": "fire",
    "damageClass": "status",
    "power": 0,
    "accuracy": 0,
    "pp": 10
  },
  {
    "name": "burning-jealousy",
    "label": "Burning Jealousy",
    "type": "fire",
    "damageClass": "special",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "buzzy-buzz",
    "label": "Buzzy Buzz",
    "type": "electric",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "calm-mind",
    "label": "Calm Mind",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "camouflage",
    "label": "Camouflage",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "captivate",
    "label": "Captivate",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "ceaseless-edge",
    "label": "Ceaseless Edge",
    "type": "dark",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "celebrate",
    "label": "Celebrate",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "charge",
    "label": "Charge",
    "type": "electric",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "charge-beam",
    "label": "Charge Beam",
    "type": "electric",
    "damageClass": "special",
    "power": 50,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "charm",
    "label": "Charm",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "chatter",
    "label": "Chatter",
    "type": "flying",
    "damageClass": "special",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "chilling-water",
    "label": "Chilling Water",
    "type": "water",
    "damageClass": "special",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "chilly-reception",
    "label": "Chilly Reception",
    "type": "ice",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "chip-away",
    "label": "Chip Away",
    "type": "normal",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "chloroblast",
    "label": "Chloroblast",
    "type": "grass",
    "damageClass": "special",
    "power": 150,
    "accuracy": 95,
    "pp": 5
  },
  {
    "name": "circle-throw",
    "label": "Circle Throw",
    "type": "fighting",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "clamp",
    "label": "Clamp",
    "type": "water",
    "damageClass": "physical",
    "power": 35,
    "accuracy": 85,
    "pp": 15
  },
  {
    "name": "clanging-scales",
    "label": "Clanging Scales",
    "type": "dragon",
    "damageClass": "special",
    "power": 110,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "clangorous-soul",
    "label": "Clangorous Soul",
    "type": "dragon",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "clear-smog",
    "label": "Clear Smog",
    "type": "poison",
    "damageClass": "special",
    "power": 50,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "close-combat",
    "label": "Close Combat",
    "type": "fighting",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "coaching",
    "label": "Coaching",
    "type": "fighting",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "coil",
    "label": "Coil",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "collision-course",
    "label": "Collision Course",
    "type": "fighting",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "combat-torque",
    "label": "Combat Torque",
    "type": "fighting",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "comet-punch",
    "label": "Comet Punch",
    "type": "normal",
    "damageClass": "physical",
    "power": 18,
    "accuracy": 85,
    "pp": 15
  },
  {
    "name": "comeuppance",
    "label": "Comeuppance",
    "type": "dark",
    "damageClass": "physical",
    "power": 1,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "confide",
    "label": "Confide",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "confuse-ray",
    "label": "Confuse Ray",
    "type": "ghost",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "confusion",
    "label": "Confusion",
    "type": "psychic",
    "damageClass": "special",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "constrict",
    "label": "Constrict",
    "type": "normal",
    "damageClass": "physical",
    "power": 10,
    "accuracy": 100,
    "pp": 35
  },
  {
    "name": "conversion",
    "label": "Conversion",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "conversion-2",
    "label": "Conversion 2",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "copycat",
    "label": "Copycat",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "core-enforcer",
    "label": "Core Enforcer",
    "type": "dragon",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "corrosive-gas",
    "label": "Corrosive Gas",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 40
  },
  {
    "name": "cosmic-power",
    "label": "Cosmic Power",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "cotton-guard",
    "label": "Cotton Guard",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "cotton-spore",
    "label": "Cotton Spore",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 40
  },
  {
    "name": "counter",
    "label": "Counter",
    "type": "fighting",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "court-change",
    "label": "Court Change",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "covet",
    "label": "Covet",
    "type": "normal",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "crabhammer",
    "label": "Crabhammer",
    "type": "water",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "crafty-shield",
    "label": "Crafty Shield",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "cross-chop",
    "label": "Cross Chop",
    "type": "fighting",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 80,
    "pp": 5
  },
  {
    "name": "cross-poison",
    "label": "Cross Poison",
    "type": "poison",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "crunch",
    "label": "Crunch",
    "type": "dark",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "crush-claw",
    "label": "Crush Claw",
    "type": "normal",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "crush-grip",
    "label": "Crush Grip",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "curse",
    "label": "Curse",
    "type": "ghost",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "cut",
    "label": "Cut",
    "type": "normal",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 95,
    "pp": 30
  },
  {
    "name": "dark-pulse",
    "label": "Dark Pulse",
    "type": "dark",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "dark-void",
    "label": "Dark Void",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 50,
    "pp": 10
  },
  {
    "name": "darkest-lariat",
    "label": "Darkest Lariat",
    "type": "dark",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "dazzling-gleam",
    "label": "Dazzling Gleam",
    "type": "fairy",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "decorate",
    "label": "Decorate",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "defend-order",
    "label": "Defend Order",
    "type": "bug",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "defense-curl",
    "label": "Defense Curl",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "defog",
    "label": "Defog",
    "type": "flying",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "destiny-bond",
    "label": "Destiny Bond",
    "type": "ghost",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "detect",
    "label": "Detect",
    "type": "fighting",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "diamond-storm",
    "label": "Diamond Storm",
    "type": "rock",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "name": "dig",
    "label": "Dig",
    "type": "ground",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "dire-claw",
    "label": "Dire Claw",
    "type": "poison",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "disable",
    "label": "Disable",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "disarming-voice",
    "label": "Disarming Voice",
    "type": "fairy",
    "damageClass": "special",
    "power": 40,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "discharge",
    "label": "Discharge",
    "type": "electric",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "dive",
    "label": "Dive",
    "type": "water",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "dizzy-punch",
    "label": "Dizzy Punch",
    "type": "normal",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "doodle",
    "label": "Doodle",
    "type": "normal",
    "damageClass": "status",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "doom-desire",
    "label": "Doom Desire",
    "type": "steel",
    "damageClass": "special",
    "power": 140,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "double-hit",
    "label": "Double Hit",
    "type": "normal",
    "damageClass": "physical",
    "power": 35,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "double-iron-bash",
    "label": "Double Iron Bash",
    "type": "steel",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "double-kick",
    "label": "Double Kick",
    "type": "fighting",
    "damageClass": "physical",
    "power": 30,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "double-shock",
    "label": "Double Shock",
    "type": "electric",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "double-slap",
    "label": "Double Slap",
    "type": "normal",
    "damageClass": "physical",
    "power": 15,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "double-team",
    "label": "Double Team",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "double-edge",
    "label": "Double-Edge",
    "type": "normal",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "draco-meteor",
    "label": "Draco Meteor",
    "type": "dragon",
    "damageClass": "special",
    "power": 130,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "dragon-ascent",
    "label": "Dragon Ascent",
    "type": "flying",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "dragon-breath",
    "label": "Dragon Breath",
    "type": "dragon",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "dragon-cheer",
    "label": "Dragon Cheer",
    "type": "dragon",
    "damageClass": "status",
    "power": 0,
    "accuracy": 0,
    "pp": 15
  },
  {
    "name": "dragon-claw",
    "label": "Dragon Claw",
    "type": "dragon",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "dragon-dance",
    "label": "Dragon Dance",
    "type": "dragon",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "dragon-darts",
    "label": "Dragon Darts",
    "type": "dragon",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "dragon-energy",
    "label": "Dragon Energy",
    "type": "dragon",
    "damageClass": "special",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "dragon-hammer",
    "label": "Dragon Hammer",
    "type": "dragon",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "dragon-pulse",
    "label": "Dragon Pulse",
    "type": "dragon",
    "damageClass": "special",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "dragon-rage",
    "label": "Dragon Rage",
    "type": "dragon",
    "damageClass": "special",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "dragon-rush",
    "label": "Dragon Rush",
    "type": "dragon",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 75,
    "pp": 10
  },
  {
    "name": "dragon-tail",
    "label": "Dragon Tail",
    "type": "dragon",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "drain-punch",
    "label": "Drain Punch",
    "type": "fighting",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "draining-kiss",
    "label": "Draining Kiss",
    "type": "fairy",
    "damageClass": "special",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "dream-eater",
    "label": "Dream Eater",
    "type": "psychic",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "drill-peck",
    "label": "Drill Peck",
    "type": "flying",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "drill-run",
    "label": "Drill Run",
    "type": "ground",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "drum-beating",
    "label": "Drum Beating",
    "type": "grass",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "dual-chop",
    "label": "Dual Chop",
    "type": "dragon",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "dual-wingbeat",
    "label": "Dual Wingbeat",
    "type": "flying",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "dynamax-cannon",
    "label": "Dynamax Cannon",
    "type": "dragon",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "dynamic-punch",
    "label": "Dynamic Punch",
    "type": "fighting",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 50,
    "pp": 5
  },
  {
    "name": "earth-power",
    "label": "Earth Power",
    "type": "ground",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "earthquake",
    "label": "Earthquake",
    "type": "ground",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "echoed-voice",
    "label": "Echoed Voice",
    "type": "normal",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "eerie-impulse",
    "label": "Eerie Impulse",
    "type": "electric",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "eerie-spell",
    "label": "Eerie Spell",
    "type": "psychic",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "egg-bomb",
    "label": "Egg Bomb",
    "type": "normal",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 75,
    "pp": 10
  },
  {
    "name": "electric-terrain",
    "label": "Electric Terrain",
    "type": "electric",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "electrify",
    "label": "Electrify",
    "type": "electric",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "electro-ball",
    "label": "Electro Ball",
    "type": "electric",
    "damageClass": "special",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "electro-drift",
    "label": "Electro Drift",
    "type": "electric",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "electro-shot",
    "label": "Electro Shot",
    "type": "electric",
    "damageClass": "special",
    "power": 130,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "electroweb",
    "label": "Electroweb",
    "type": "electric",
    "damageClass": "special",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "embargo",
    "label": "Embargo",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "ember",
    "label": "Ember",
    "type": "fire",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "encore",
    "label": "Encore",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "endeavor",
    "label": "Endeavor",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "endure",
    "label": "Endure",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "energy-ball",
    "label": "Energy Ball",
    "type": "grass",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "entrainment",
    "label": "Entrainment",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "eruption",
    "label": "Eruption",
    "type": "fire",
    "damageClass": "special",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "esper-wing",
    "label": "Esper Wing",
    "type": "psychic",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "eternabeam",
    "label": "Eternabeam",
    "type": "dragon",
    "damageClass": "special",
    "power": 160,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "expanding-force",
    "label": "Expanding Force",
    "type": "psychic",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "explosion",
    "label": "Explosion",
    "type": "normal",
    "damageClass": "physical",
    "power": 250,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "extrasensory",
    "label": "Extrasensory",
    "type": "psychic",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "extreme-speed",
    "label": "Extreme Speed",
    "type": "normal",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "facade",
    "label": "Facade",
    "type": "normal",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "fairy-lock",
    "label": "Fairy Lock",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "fairy-wind",
    "label": "Fairy Wind",
    "type": "fairy",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "fake-out",
    "label": "Fake Out",
    "type": "normal",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "fake-tears",
    "label": "Fake Tears",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "false-surrender",
    "label": "False Surrender",
    "type": "dark",
    "damageClass": "physical",
    "power": 80,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "false-swipe",
    "label": "False Swipe",
    "type": "normal",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 40
  },
  {
    "name": "feather-dance",
    "label": "Feather Dance",
    "type": "flying",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "feint",
    "label": "Feint",
    "type": "normal",
    "damageClass": "physical",
    "power": 30,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "feint-attack",
    "label": "Feint Attack",
    "type": "dark",
    "damageClass": "physical",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "fell-stinger",
    "label": "Fell Stinger",
    "type": "bug",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "fickle-beam",
    "label": "Fickle Beam",
    "type": "dragon",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "fiery-dance",
    "label": "Fiery Dance",
    "type": "fire",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "fiery-wrath",
    "label": "Fiery Wrath",
    "type": "dark",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "fillet-away",
    "label": "Fillet Away",
    "type": "normal",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "final-gambit",
    "label": "Final Gambit",
    "type": "fighting",
    "damageClass": "special",
    "power": null,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "fire-blast",
    "label": "Fire Blast",
    "type": "fire",
    "damageClass": "special",
    "power": 110,
    "accuracy": 85,
    "pp": 5
  },
  {
    "name": "fire-fang",
    "label": "Fire Fang",
    "type": "fire",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "fire-lash",
    "label": "Fire Lash",
    "type": "fire",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "fire-pledge",
    "label": "Fire Pledge",
    "type": "fire",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "fire-punch",
    "label": "Fire Punch",
    "type": "fire",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "fire-spin",
    "label": "Fire Spin",
    "type": "fire",
    "damageClass": "special",
    "power": 35,
    "accuracy": 85,
    "pp": 15
  },
  {
    "name": "first-impression",
    "label": "First Impression",
    "type": "bug",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "fishious-rend",
    "label": "Fishious Rend",
    "type": "water",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "fissure",
    "label": "Fissure",
    "type": "ground",
    "damageClass": "physical",
    "power": null,
    "accuracy": 30,
    "pp": 5
  },
  {
    "name": "flail",
    "label": "Flail",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "flame-burst",
    "label": "Flame Burst",
    "type": "fire",
    "damageClass": "special",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "flame-charge",
    "label": "Flame Charge",
    "type": "fire",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "flame-wheel",
    "label": "Flame Wheel",
    "type": "fire",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "flamethrower",
    "label": "Flamethrower",
    "type": "fire",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "flare-blitz",
    "label": "Flare Blitz",
    "type": "fire",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "flash",
    "label": "Flash",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "flash-cannon",
    "label": "Flash Cannon",
    "type": "steel",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "flatter",
    "label": "Flatter",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "fleur-cannon",
    "label": "Fleur Cannon",
    "type": "fairy",
    "damageClass": "special",
    "power": 130,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "fling",
    "label": "Fling",
    "type": "dark",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "flip-turn",
    "label": "Flip Turn",
    "type": "water",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "floaty-fall",
    "label": "Floaty Fall",
    "type": "flying",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "floral-healing",
    "label": "Floral Healing",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "flower-shield",
    "label": "Flower Shield",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "flower-trick",
    "label": "Flower Trick",
    "type": "grass",
    "damageClass": "physical",
    "power": 70,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "fly",
    "label": "Fly",
    "type": "flying",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "flying-press",
    "label": "Flying Press",
    "type": "fighting",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "focus-blast",
    "label": "Focus Blast",
    "type": "fighting",
    "damageClass": "special",
    "power": 120,
    "accuracy": 70,
    "pp": 5
  },
  {
    "name": "focus-energy",
    "label": "Focus Energy",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "focus-punch",
    "label": "Focus Punch",
    "type": "fighting",
    "damageClass": "physical",
    "power": 150,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "follow-me",
    "label": "Follow Me",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "force-palm",
    "label": "Force Palm",
    "type": "fighting",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "foresight",
    "label": "Foresight",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "forests-curse",
    "label": "Forest’s Curse",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "foul-play",
    "label": "Foul Play",
    "type": "dark",
    "damageClass": "physical",
    "power": 95,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "freeze-shock",
    "label": "Freeze Shock",
    "type": "ice",
    "damageClass": "physical",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "freeze-dry",
    "label": "Freeze-Dry",
    "type": "ice",
    "damageClass": "special",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "freezing-glare",
    "label": "Freezing Glare",
    "type": "psychic",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "freezy-frost",
    "label": "Freezy Frost",
    "type": "ice",
    "damageClass": "special",
    "power": 100,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "frenzy-plant",
    "label": "Frenzy Plant",
    "type": "grass",
    "damageClass": "special",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "frost-breath",
    "label": "Frost Breath",
    "type": "ice",
    "damageClass": "special",
    "power": 60,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "frustration",
    "label": "Frustration",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "fury-attack",
    "label": "Fury Attack",
    "type": "normal",
    "damageClass": "physical",
    "power": 15,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "fury-cutter",
    "label": "Fury Cutter",
    "type": "bug",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 95,
    "pp": 20
  },
  {
    "name": "fury-swipes",
    "label": "Fury Swipes",
    "type": "normal",
    "damageClass": "physical",
    "power": 18,
    "accuracy": 80,
    "pp": 15
  },
  {
    "name": "fusion-bolt",
    "label": "Fusion Bolt",
    "type": "electric",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "fusion-flare",
    "label": "Fusion Flare",
    "type": "fire",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "future-sight",
    "label": "Future Sight",
    "type": "psychic",
    "damageClass": "special",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "gastro-acid",
    "label": "Gastro Acid",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "gear-grind",
    "label": "Gear Grind",
    "type": "steel",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 85,
    "pp": 15
  },
  {
    "name": "gear-up",
    "label": "Gear Up",
    "type": "steel",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "geomancy",
    "label": "Geomancy",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "giga-drain",
    "label": "Giga Drain",
    "type": "grass",
    "damageClass": "special",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "giga-impact",
    "label": "Giga Impact",
    "type": "normal",
    "damageClass": "physical",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "gigaton-hammer",
    "label": "Gigaton Hammer",
    "type": "steel",
    "damageClass": "physical",
    "power": 160,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "glacial-lance",
    "label": "Glacial Lance",
    "type": "ice",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "glaciate",
    "label": "Glaciate",
    "type": "ice",
    "damageClass": "special",
    "power": 65,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "glaive-rush",
    "label": "Glaive Rush",
    "type": "dragon",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "glare",
    "label": "Glare",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "glitzy-glow",
    "label": "Glitzy Glow",
    "type": "psychic",
    "damageClass": "special",
    "power": 80,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "grass-knot",
    "label": "Grass Knot",
    "type": "grass",
    "damageClass": "special",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "grass-pledge",
    "label": "Grass Pledge",
    "type": "grass",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "grass-whistle",
    "label": "Grass Whistle",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": 55,
    "pp": 15
  },
  {
    "name": "grassy-glide",
    "label": "Grassy Glide",
    "type": "grass",
    "damageClass": "physical",
    "power": 55,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "grassy-terrain",
    "label": "Grassy Terrain",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "grav-apple",
    "label": "Grav Apple",
    "type": "grass",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "gravity",
    "label": "Gravity",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "growl",
    "label": "Growl",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 40
  },
  {
    "name": "growth",
    "label": "Growth",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "grudge",
    "label": "Grudge",
    "type": "ghost",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "guard-split",
    "label": "Guard Split",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "guard-swap",
    "label": "Guard Swap",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "guillotine",
    "label": "Guillotine",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 30,
    "pp": 5
  },
  {
    "name": "gunk-shot",
    "label": "Gunk Shot",
    "type": "poison",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 80,
    "pp": 5
  },
  {
    "name": "gust",
    "label": "Gust",
    "type": "flying",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "name": "gyro-ball",
    "label": "Gyro Ball",
    "type": "steel",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "hail",
    "label": "Hail",
    "type": "ice",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "hammer-arm",
    "label": "Hammer Arm",
    "type": "fighting",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "happy-hour",
    "label": "Happy Hour",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "hard-press",
    "label": "Hard Press",
    "type": "steel",
    "damageClass": "physical",
    "power": 0,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "harden",
    "label": "Harden",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "haze",
    "label": "Haze",
    "type": "ice",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "head-charge",
    "label": "Head Charge",
    "type": "normal",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "head-smash",
    "label": "Head Smash",
    "type": "rock",
    "damageClass": "physical",
    "power": 150,
    "accuracy": 80,
    "pp": 5
  },
  {
    "name": "headbutt",
    "label": "Headbutt",
    "type": "normal",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "headlong-rush",
    "label": "Headlong Rush",
    "type": "ground",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "heal-bell",
    "label": "Heal Bell",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "heal-block",
    "label": "Heal Block",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "heal-order",
    "label": "Heal Order",
    "type": "bug",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "heal-pulse",
    "label": "Heal Pulse",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "healing-wish",
    "label": "Healing Wish",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "heart-stamp",
    "label": "Heart Stamp",
    "type": "psychic",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "heart-swap",
    "label": "Heart Swap",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "heat-crash",
    "label": "Heat Crash",
    "type": "fire",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "heat-wave",
    "label": "Heat Wave",
    "type": "fire",
    "damageClass": "special",
    "power": 95,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "heavy-slam",
    "label": "Heavy Slam",
    "type": "steel",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "helping-hand",
    "label": "Helping Hand",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "hex",
    "label": "Hex",
    "type": "ghost",
    "damageClass": "special",
    "power": 65,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "hidden-power",
    "label": "Hidden Power",
    "type": "normal",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "high-horsepower",
    "label": "High Horsepower",
    "type": "ground",
    "damageClass": "physical",
    "power": 95,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "high-jump-kick",
    "label": "High Jump Kick",
    "type": "fighting",
    "damageClass": "physical",
    "power": 130,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "hold-back",
    "label": "Hold Back",
    "type": "normal",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 40
  },
  {
    "name": "hold-hands",
    "label": "Hold Hands",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "hone-claws",
    "label": "Hone Claws",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "horn-attack",
    "label": "Horn Attack",
    "type": "normal",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "horn-drill",
    "label": "Horn Drill",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 30,
    "pp": 5
  },
  {
    "name": "horn-leech",
    "label": "Horn Leech",
    "type": "grass",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "howl",
    "label": "Howl",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "hurricane",
    "label": "Hurricane",
    "type": "flying",
    "damageClass": "special",
    "power": 110,
    "accuracy": 70,
    "pp": 10
  },
  {
    "name": "hydro-cannon",
    "label": "Hydro Cannon",
    "type": "water",
    "damageClass": "special",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "hydro-pump",
    "label": "Hydro Pump",
    "type": "water",
    "damageClass": "special",
    "power": 110,
    "accuracy": 80,
    "pp": 5
  },
  {
    "name": "hydro-steam",
    "label": "Hydro Steam",
    "type": "water",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "hyper-beam",
    "label": "Hyper Beam",
    "type": "normal",
    "damageClass": "special",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "hyper-drill",
    "label": "Hyper Drill",
    "type": "normal",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "hyper-fang",
    "label": "Hyper Fang",
    "type": "normal",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "hyper-voice",
    "label": "Hyper Voice",
    "type": "normal",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "hyperspace-fury",
    "label": "Hyperspace Fury",
    "type": "dark",
    "damageClass": "physical",
    "power": 100,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "hyperspace-hole",
    "label": "Hyperspace Hole",
    "type": "psychic",
    "damageClass": "special",
    "power": 80,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "hypnosis",
    "label": "Hypnosis",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": 60,
    "pp": 20
  },
  {
    "name": "ice-ball",
    "label": "Ice Ball",
    "type": "ice",
    "damageClass": "physical",
    "power": 30,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "ice-beam",
    "label": "Ice Beam",
    "type": "ice",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "ice-burn",
    "label": "Ice Burn",
    "type": "ice",
    "damageClass": "special",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "ice-fang",
    "label": "Ice Fang",
    "type": "ice",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "ice-hammer",
    "label": "Ice Hammer",
    "type": "ice",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "ice-punch",
    "label": "Ice Punch",
    "type": "ice",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "ice-shard",
    "label": "Ice Shard",
    "type": "ice",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "ice-spinner",
    "label": "Ice Spinner",
    "type": "ice",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "icicle-crash",
    "label": "Icicle Crash",
    "type": "ice",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "icicle-spear",
    "label": "Icicle Spear",
    "type": "ice",
    "damageClass": "physical",
    "power": 25,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "icy-wind",
    "label": "Icy Wind",
    "type": "ice",
    "damageClass": "special",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "imprison",
    "label": "Imprison",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "incinerate",
    "label": "Incinerate",
    "type": "fire",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "infernal-parade",
    "label": "Infernal Parade",
    "type": "ghost",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "inferno",
    "label": "Inferno",
    "type": "fire",
    "damageClass": "special",
    "power": 100,
    "accuracy": 50,
    "pp": 5
  },
  {
    "name": "infestation",
    "label": "Infestation",
    "type": "bug",
    "damageClass": "special",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "ingrain",
    "label": "Ingrain",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "instruct",
    "label": "Instruct",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "ion-deluge",
    "label": "Ion Deluge",
    "type": "electric",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 25
  },
  {
    "name": "iron-defense",
    "label": "Iron Defense",
    "type": "steel",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "iron-head",
    "label": "Iron Head",
    "type": "steel",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "iron-tail",
    "label": "Iron Tail",
    "type": "steel",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 75,
    "pp": 15
  },
  {
    "name": "ivy-cudgel",
    "label": "Ivy Cudgel",
    "type": "grass",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "jaw-lock",
    "label": "Jaw Lock",
    "type": "dark",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "jet-punch",
    "label": "Jet Punch",
    "type": "water",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "judgment",
    "label": "Judgment",
    "type": "normal",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "jump-kick",
    "label": "Jump Kick",
    "type": "fighting",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "jungle-healing",
    "label": "Jungle Healing",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "karate-chop",
    "label": "Karate Chop",
    "type": "fighting",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "kinesis",
    "label": "Kinesis",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": 80,
    "pp": 15
  },
  {
    "name": "kings-shield",
    "label": "King’s Shield",
    "type": "steel",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "knock-off",
    "label": "Knock Off",
    "type": "dark",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "kowtow-cleave",
    "label": "Kowtow Cleave",
    "type": "dark",
    "damageClass": "physical",
    "power": 85,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "lands-wrath",
    "label": "Land’s Wrath",
    "type": "ground",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "laser-focus",
    "label": "Laser Focus",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "lash-out",
    "label": "Lash Out",
    "type": "dark",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "last-resort",
    "label": "Last Resort",
    "type": "normal",
    "damageClass": "physical",
    "power": 140,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "last-respects",
    "label": "Last Respects",
    "type": "ghost",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "lava-plume",
    "label": "Lava Plume",
    "type": "fire",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "leaf-blade",
    "label": "Leaf Blade",
    "type": "grass",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "leaf-storm",
    "label": "Leaf Storm",
    "type": "grass",
    "damageClass": "special",
    "power": 130,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "leaf-tornado",
    "label": "Leaf Tornado",
    "type": "grass",
    "damageClass": "special",
    "power": 65,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "leafage",
    "label": "Leafage",
    "type": "grass",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 40
  },
  {
    "name": "leech-life",
    "label": "Leech Life",
    "type": "bug",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "leech-seed",
    "label": "Leech Seed",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "leer",
    "label": "Leer",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "lick",
    "label": "Lick",
    "type": "ghost",
    "damageClass": "physical",
    "power": 30,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "life-dew",
    "label": "Life Dew",
    "type": "water",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "light-of-ruin",
    "label": "Light of Ruin",
    "type": "fairy",
    "damageClass": "special",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "light-screen",
    "label": "Light Screen",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "liquidation",
    "label": "Liquidation",
    "type": "water",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "lock-on",
    "label": "Lock-On",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "lovely-kiss",
    "label": "Lovely Kiss",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 75,
    "pp": 10
  },
  {
    "name": "low-kick",
    "label": "Low Kick",
    "type": "fighting",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "low-sweep",
    "label": "Low Sweep",
    "type": "fighting",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "lucky-chant",
    "label": "Lucky Chant",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "lumina-crash",
    "label": "Lumina Crash",
    "type": "psychic",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "lunar-blessing",
    "label": "Lunar Blessing",
    "type": "psychic",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "lunar-dance",
    "label": "Lunar Dance",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "lunge",
    "label": "Lunge",
    "type": "bug",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "luster-purge",
    "label": "Luster Purge",
    "type": "psychic",
    "damageClass": "special",
    "power": 95,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "mach-punch",
    "label": "Mach Punch",
    "type": "fighting",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "magic-coat",
    "label": "Magic Coat",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "magic-powder",
    "label": "Magic Powder",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "magic-room",
    "label": "Magic Room",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "magical-leaf",
    "label": "Magical Leaf",
    "type": "grass",
    "damageClass": "special",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "magical-torque",
    "label": "Magical Torque",
    "type": "fairy",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "magma-storm",
    "label": "Magma Storm",
    "type": "fire",
    "damageClass": "special",
    "power": 100,
    "accuracy": 75,
    "pp": 5
  },
  {
    "name": "magnet-bomb",
    "label": "Magnet Bomb",
    "type": "steel",
    "damageClass": "physical",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "magnet-rise",
    "label": "Magnet Rise",
    "type": "electric",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "magnetic-flux",
    "label": "Magnetic Flux",
    "type": "electric",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "magnitude",
    "label": "Magnitude",
    "type": "ground",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "make-it-rain",
    "label": "Make It Rain",
    "type": "steel",
    "damageClass": "special",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "malignant-chain",
    "label": "Malignant Chain",
    "type": "poison",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "mat-block",
    "label": "Mat Block",
    "type": "fighting",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "matcha-gotcha",
    "label": "Matcha Gotcha",
    "type": "grass",
    "damageClass": "special",
    "power": 80,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "me-first",
    "label": "Me First",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "mean-look",
    "label": "Mean Look",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "meditate",
    "label": "Meditate",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "mega-drain",
    "label": "Mega Drain",
    "type": "grass",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "mega-kick",
    "label": "Mega Kick",
    "type": "normal",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 75,
    "pp": 5
  },
  {
    "name": "mega-punch",
    "label": "Mega Punch",
    "type": "normal",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "megahorn",
    "label": "Megahorn",
    "type": "bug",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "memento",
    "label": "Memento",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "metal-burst",
    "label": "Metal Burst",
    "type": "steel",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "metal-claw",
    "label": "Metal Claw",
    "type": "steel",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 95,
    "pp": 35
  },
  {
    "name": "metal-sound",
    "label": "Metal Sound",
    "type": "steel",
    "damageClass": "status",
    "power": null,
    "accuracy": 85,
    "pp": 40
  },
  {
    "name": "meteor-assault",
    "label": "Meteor Assault",
    "type": "fighting",
    "damageClass": "physical",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "meteor-beam",
    "label": "Meteor Beam",
    "type": "rock",
    "damageClass": "special",
    "power": 120,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "meteor-mash",
    "label": "Meteor Mash",
    "type": "steel",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "metronome",
    "label": "Metronome",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "mighty-cleave",
    "label": "Mighty Cleave",
    "type": "rock",
    "damageClass": "physical",
    "power": 95,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "milk-drink",
    "label": "Milk Drink",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "mimic",
    "label": "Mimic",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "mind-blown",
    "label": "Mind Blown",
    "type": "fire",
    "damageClass": "special",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "mind-reader",
    "label": "Mind Reader",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "minimize",
    "label": "Minimize",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "miracle-eye",
    "label": "Miracle Eye",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "mirror-coat",
    "label": "Mirror Coat",
    "type": "psychic",
    "damageClass": "special",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "mirror-move",
    "label": "Mirror Move",
    "type": "flying",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "mirror-shot",
    "label": "Mirror Shot",
    "type": "steel",
    "damageClass": "special",
    "power": 65,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "mist",
    "label": "Mist",
    "type": "ice",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "mist-ball",
    "label": "Mist Ball",
    "type": "psychic",
    "damageClass": "special",
    "power": 95,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "misty-explosion",
    "label": "Misty Explosion",
    "type": "fairy",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "misty-terrain",
    "label": "Misty Terrain",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "moonblast",
    "label": "Moonblast",
    "type": "fairy",
    "damageClass": "special",
    "power": 95,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "moongeist-beam",
    "label": "Moongeist Beam",
    "type": "ghost",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "moonlight",
    "label": "Moonlight",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "morning-sun",
    "label": "Morning Sun",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "mortal-spin",
    "label": "Mortal Spin",
    "type": "poison",
    "damageClass": "physical",
    "power": 30,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "mountain-gale",
    "label": "Mountain Gale",
    "type": "ice",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "mud-bomb",
    "label": "Mud Bomb",
    "type": "ground",
    "damageClass": "special",
    "power": 65,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "mud-shot",
    "label": "Mud Shot",
    "type": "ground",
    "damageClass": "special",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "mud-sport",
    "label": "Mud Sport",
    "type": "ground",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "mud-slap",
    "label": "Mud-Slap",
    "type": "ground",
    "damageClass": "special",
    "power": 20,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "muddy-water",
    "label": "Muddy Water",
    "type": "water",
    "damageClass": "special",
    "power": 90,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "multi-attack",
    "label": "Multi-Attack",
    "type": "normal",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "mystical-fire",
    "label": "Mystical Fire",
    "type": "fire",
    "damageClass": "special",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "mystical-power",
    "label": "Mystical Power",
    "type": "psychic",
    "damageClass": "special",
    "power": 70,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "nasty-plot",
    "label": "Nasty Plot",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "natural-gift",
    "label": "Natural Gift",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "nature-power",
    "label": "Nature Power",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "natures-madness",
    "label": "Nature’s Madness",
    "type": "fairy",
    "damageClass": "special",
    "power": null,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "needle-arm",
    "label": "Needle Arm",
    "type": "grass",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "night-daze",
    "label": "Night Daze",
    "type": "dark",
    "damageClass": "special",
    "power": 85,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "night-shade",
    "label": "Night Shade",
    "type": "ghost",
    "damageClass": "special",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "night-slash",
    "label": "Night Slash",
    "type": "dark",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "nightmare",
    "label": "Nightmare",
    "type": "ghost",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "no-retreat",
    "label": "No Retreat",
    "type": "fighting",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "noble-roar",
    "label": "Noble Roar",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "noxious-torque",
    "label": "Noxious Torque",
    "type": "poison",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "nuzzle",
    "label": "Nuzzle",
    "type": "electric",
    "damageClass": "physical",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "oblivion-wing",
    "label": "Oblivion Wing",
    "type": "flying",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "obstruct",
    "label": "Obstruct",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "octazooka",
    "label": "Octazooka",
    "type": "water",
    "damageClass": "special",
    "power": 65,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "octolock",
    "label": "Octolock",
    "type": "fighting",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "odor-sleuth",
    "label": "Odor Sleuth",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "ominous-wind",
    "label": "Ominous Wind",
    "type": "ghost",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "order-up",
    "label": "Order Up",
    "type": "dragon",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "origin-pulse",
    "label": "Origin Pulse",
    "type": "water",
    "damageClass": "special",
    "power": 110,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "outrage",
    "label": "Outrage",
    "type": "dragon",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "overdrive",
    "label": "Overdrive",
    "type": "electric",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "overheat",
    "label": "Overheat",
    "type": "fire",
    "damageClass": "special",
    "power": 130,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "pain-split",
    "label": "Pain Split",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "parabolic-charge",
    "label": "Parabolic Charge",
    "type": "electric",
    "damageClass": "special",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "parting-shot",
    "label": "Parting Shot",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "pay-day",
    "label": "Pay Day",
    "type": "normal",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "payback",
    "label": "Payback",
    "type": "dark",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "peck",
    "label": "Peck",
    "type": "flying",
    "damageClass": "physical",
    "power": 35,
    "accuracy": 100,
    "pp": 35
  },
  {
    "name": "perish-song",
    "label": "Perish Song",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "petal-blizzard",
    "label": "Petal Blizzard",
    "type": "grass",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "petal-dance",
    "label": "Petal Dance",
    "type": "grass",
    "damageClass": "special",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "phantom-force",
    "label": "Phantom Force",
    "type": "ghost",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "photon-geyser",
    "label": "Photon Geyser",
    "type": "psychic",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "pika-papow",
    "label": "Pika Papow",
    "type": "electric",
    "damageClass": "special",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "pin-missile",
    "label": "Pin Missile",
    "type": "bug",
    "damageClass": "physical",
    "power": 25,
    "accuracy": 95,
    "pp": 20
  },
  {
    "name": "plasma-fists",
    "label": "Plasma Fists",
    "type": "electric",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "play-nice",
    "label": "Play Nice",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "play-rough",
    "label": "Play Rough",
    "type": "fairy",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "pluck",
    "label": "Pluck",
    "type": "flying",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "poison-fang",
    "label": "Poison Fang",
    "type": "poison",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "poison-gas",
    "label": "Poison Gas",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": 90,
    "pp": 40
  },
  {
    "name": "poison-jab",
    "label": "Poison Jab",
    "type": "poison",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "poison-powder",
    "label": "Poison Powder",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": 75,
    "pp": 35
  },
  {
    "name": "poison-sting",
    "label": "Poison Sting",
    "type": "poison",
    "damageClass": "physical",
    "power": 15,
    "accuracy": 100,
    "pp": 35
  },
  {
    "name": "poison-tail",
    "label": "Poison Tail",
    "type": "poison",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "pollen-puff",
    "label": "Pollen Puff",
    "type": "bug",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "poltergeist",
    "label": "Poltergeist",
    "type": "ghost",
    "damageClass": "physical",
    "power": 110,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "population-bomb",
    "label": "Population Bomb",
    "type": "normal",
    "damageClass": "physical",
    "power": 20,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "pounce",
    "label": "Pounce",
    "type": "bug",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "pound",
    "label": "Pound",
    "type": "normal",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "name": "powder",
    "label": "Powder",
    "type": "bug",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "powder-snow",
    "label": "Powder Snow",
    "type": "ice",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "power-gem",
    "label": "Power Gem",
    "type": "rock",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "power-shift",
    "label": "Power Shift",
    "type": "normal",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "power-split",
    "label": "Power Split",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "power-swap",
    "label": "Power Swap",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "power-trick",
    "label": "Power Trick",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "power-trip",
    "label": "Power Trip",
    "type": "dark",
    "damageClass": "physical",
    "power": 20,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "power-whip",
    "label": "Power Whip",
    "type": "grass",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "power-up-punch",
    "label": "Power-Up Punch",
    "type": "fighting",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "precipice-blades",
    "label": "Precipice Blades",
    "type": "ground",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "present",
    "label": "Present",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "prismatic-laser",
    "label": "Prismatic Laser",
    "type": "psychic",
    "damageClass": "special",
    "power": 160,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "protect",
    "label": "Protect",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "psybeam",
    "label": "Psybeam",
    "type": "psychic",
    "damageClass": "special",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "psyblade",
    "label": "Psyblade",
    "type": "psychic",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "psych-up",
    "label": "Psych Up",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "psychic",
    "label": "Psychic",
    "type": "psychic",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "psychic-fangs",
    "label": "Psychic Fangs",
    "type": "psychic",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "psychic-noise",
    "label": "Psychic Noise",
    "type": "psychic",
    "damageClass": "special",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "psychic-terrain",
    "label": "Psychic Terrain",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "psycho-boost",
    "label": "Psycho Boost",
    "type": "psychic",
    "damageClass": "special",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "psycho-cut",
    "label": "Psycho Cut",
    "type": "psychic",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "psycho-shift",
    "label": "Psycho Shift",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "psyshield-bash",
    "label": "Psyshield Bash",
    "type": "psychic",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "psyshock",
    "label": "Psyshock",
    "type": "psychic",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "psystrike",
    "label": "Psystrike",
    "type": "psychic",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "psywave",
    "label": "Psywave",
    "type": "psychic",
    "damageClass": "special",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "punishment",
    "label": "Punishment",
    "type": "dark",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "purify",
    "label": "Purify",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "pursuit",
    "label": "Pursuit",
    "type": "dark",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "pyro-ball",
    "label": "Pyro Ball",
    "type": "fire",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "quash",
    "label": "Quash",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "quick-attack",
    "label": "Quick Attack",
    "type": "normal",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "quick-guard",
    "label": "Quick Guard",
    "type": "fighting",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "quiver-dance",
    "label": "Quiver Dance",
    "type": "bug",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "rage",
    "label": "Rage",
    "type": "normal",
    "damageClass": "physical",
    "power": 20,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "rage-fist",
    "label": "Rage Fist",
    "type": "ghost",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "rage-powder",
    "label": "Rage Powder",
    "type": "bug",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "raging-bull",
    "label": "Raging Bull",
    "type": "normal",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "raging-fury",
    "label": "Raging Fury",
    "type": "fire",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "rain-dance",
    "label": "Rain Dance",
    "type": "water",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "rapid-spin",
    "label": "Rapid Spin",
    "type": "normal",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 40
  },
  {
    "name": "razor-leaf",
    "label": "Razor Leaf",
    "type": "grass",
    "damageClass": "physical",
    "power": 55,
    "accuracy": 95,
    "pp": 25
  },
  {
    "name": "razor-shell",
    "label": "Razor Shell",
    "type": "water",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "razor-wind",
    "label": "Razor Wind",
    "type": "normal",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "recover",
    "label": "Recover",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "recycle",
    "label": "Recycle",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "reflect",
    "label": "Reflect",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "reflect-type",
    "label": "Reflect Type",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "refresh",
    "label": "Refresh",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "relic-song",
    "label": "Relic Song",
    "type": "normal",
    "damageClass": "special",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "rest",
    "label": "Rest",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "retaliate",
    "label": "Retaliate",
    "type": "normal",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "return",
    "label": "Return",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "revelation-dance",
    "label": "Revelation Dance",
    "type": "normal",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "revenge",
    "label": "Revenge",
    "type": "fighting",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "reversal",
    "label": "Reversal",
    "type": "fighting",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "revival-blessing",
    "label": "Revival Blessing",
    "type": "normal",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "rising-voltage",
    "label": "Rising Voltage",
    "type": "electric",
    "damageClass": "special",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "roar",
    "label": "Roar",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "roar-of-time",
    "label": "Roar of Time",
    "type": "dragon",
    "damageClass": "special",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "rock-blast",
    "label": "Rock Blast",
    "type": "rock",
    "damageClass": "physical",
    "power": 25,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "rock-climb",
    "label": "Rock Climb",
    "type": "normal",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "rock-polish",
    "label": "Rock Polish",
    "type": "rock",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "rock-slide",
    "label": "Rock Slide",
    "type": "rock",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "rock-smash",
    "label": "Rock Smash",
    "type": "fighting",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "rock-throw",
    "label": "Rock Throw",
    "type": "rock",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "rock-tomb",
    "label": "Rock Tomb",
    "type": "rock",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "rock-wrecker",
    "label": "Rock Wrecker",
    "type": "rock",
    "damageClass": "physical",
    "power": 150,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "role-play",
    "label": "Role Play",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "rolling-kick",
    "label": "Rolling Kick",
    "type": "fighting",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 85,
    "pp": 15
  },
  {
    "name": "rollout",
    "label": "Rollout",
    "type": "rock",
    "damageClass": "physical",
    "power": 30,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "roost",
    "label": "Roost",
    "type": "flying",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "rototiller",
    "label": "Rototiller",
    "type": "ground",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "round",
    "label": "Round",
    "type": "normal",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "ruination",
    "label": "Ruination",
    "type": "dark",
    "damageClass": "special",
    "power": 1,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "sacred-fire",
    "label": "Sacred Fire",
    "type": "fire",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "name": "sacred-sword",
    "label": "Sacred Sword",
    "type": "fighting",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "safeguard",
    "label": "Safeguard",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 25
  },
  {
    "name": "salt-cure",
    "label": "Salt Cure",
    "type": "rock",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "sand-attack",
    "label": "Sand Attack",
    "type": "ground",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "sand-tomb",
    "label": "Sand Tomb",
    "type": "ground",
    "damageClass": "physical",
    "power": 35,
    "accuracy": 85,
    "pp": 15
  },
  {
    "name": "sandsear-storm",
    "label": "Sandsear Storm",
    "type": "ground",
    "damageClass": "special",
    "power": 100,
    "accuracy": 80,
    "pp": 10
  },
  {
    "name": "sandstorm",
    "label": "Sandstorm",
    "type": "rock",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "sappy-seed",
    "label": "Sappy Seed",
    "type": "grass",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "scald",
    "label": "Scald",
    "type": "water",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "scale-shot",
    "label": "Scale Shot",
    "type": "dragon",
    "damageClass": "physical",
    "power": 25,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "scary-face",
    "label": "Scary Face",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "scorching-sands",
    "label": "Scorching Sands",
    "type": "ground",
    "damageClass": "special",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "scratch",
    "label": "Scratch",
    "type": "normal",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "name": "screech",
    "label": "Screech",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 85,
    "pp": 40
  },
  {
    "name": "searing-shot",
    "label": "Searing Shot",
    "type": "fire",
    "damageClass": "special",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "secret-power",
    "label": "Secret Power",
    "type": "normal",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "secret-sword",
    "label": "Secret Sword",
    "type": "fighting",
    "damageClass": "special",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "seed-bomb",
    "label": "Seed Bomb",
    "type": "grass",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "seed-flare",
    "label": "Seed Flare",
    "type": "grass",
    "damageClass": "special",
    "power": 120,
    "accuracy": 85,
    "pp": 5
  },
  {
    "name": "seismic-toss",
    "label": "Seismic Toss",
    "type": "fighting",
    "damageClass": "physical",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "self-destruct",
    "label": "Self-Destruct",
    "type": "normal",
    "damageClass": "physical",
    "power": 200,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "shadow-ball",
    "label": "Shadow Ball",
    "type": "ghost",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "shadow-bone",
    "label": "Shadow Bone",
    "type": "ghost",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "shadow-claw",
    "label": "Shadow Claw",
    "type": "ghost",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "shadow-force",
    "label": "Shadow Force",
    "type": "ghost",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "shadow-punch",
    "label": "Shadow Punch",
    "type": "ghost",
    "damageClass": "physical",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "shadow-sneak",
    "label": "Shadow Sneak",
    "type": "ghost",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "sharpen",
    "label": "Sharpen",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "shed-tail",
    "label": "Shed Tail",
    "type": "normal",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "sheer-cold",
    "label": "Sheer Cold",
    "type": "ice",
    "damageClass": "special",
    "power": null,
    "accuracy": 30,
    "pp": 5
  },
  {
    "name": "shell-side-arm",
    "label": "Shell Side Arm",
    "type": "poison",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "shell-smash",
    "label": "Shell Smash",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "shell-trap",
    "label": "Shell Trap",
    "type": "fire",
    "damageClass": "special",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "shelter",
    "label": "Shelter",
    "type": "steel",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "shift-gear",
    "label": "Shift Gear",
    "type": "steel",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "shock-wave",
    "label": "Shock Wave",
    "type": "electric",
    "damageClass": "special",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "shore-up",
    "label": "Shore Up",
    "type": "ground",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "signal-beam",
    "label": "Signal Beam",
    "type": "bug",
    "damageClass": "special",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "silk-trap",
    "label": "Silk Trap",
    "type": "bug",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "silver-wind",
    "label": "Silver Wind",
    "type": "bug",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "simple-beam",
    "label": "Simple Beam",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "sing",
    "label": "Sing",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 55,
    "pp": 15
  },
  {
    "name": "sizzly-slide",
    "label": "Sizzly Slide",
    "type": "fire",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "sketch",
    "label": "Sketch",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 1
  },
  {
    "name": "skill-swap",
    "label": "Skill Swap",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "skitter-smack",
    "label": "Skitter Smack",
    "type": "bug",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "skull-bash",
    "label": "Skull Bash",
    "type": "normal",
    "damageClass": "physical",
    "power": 130,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "sky-attack",
    "label": "Sky Attack",
    "type": "flying",
    "damageClass": "physical",
    "power": 140,
    "accuracy": 90,
    "pp": 5
  },
  {
    "name": "sky-drop",
    "label": "Sky Drop",
    "type": "flying",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "sky-uppercut",
    "label": "Sky Uppercut",
    "type": "fighting",
    "damageClass": "physical",
    "power": 85,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "slack-off",
    "label": "Slack Off",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "slam",
    "label": "Slam",
    "type": "normal",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 75,
    "pp": 20
  },
  {
    "name": "slash",
    "label": "Slash",
    "type": "normal",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "sleep-powder",
    "label": "Sleep Powder",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": 75,
    "pp": 15
  },
  {
    "name": "sleep-talk",
    "label": "Sleep Talk",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "sludge",
    "label": "Sludge",
    "type": "poison",
    "damageClass": "special",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "sludge-bomb",
    "label": "Sludge Bomb",
    "type": "poison",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "sludge-wave",
    "label": "Sludge Wave",
    "type": "poison",
    "damageClass": "special",
    "power": 95,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "smack-down",
    "label": "Smack Down",
    "type": "rock",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "smart-strike",
    "label": "Smart Strike",
    "type": "steel",
    "damageClass": "physical",
    "power": 70,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "smelling-salts",
    "label": "Smelling Salts",
    "type": "normal",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "smog",
    "label": "Smog",
    "type": "poison",
    "damageClass": "special",
    "power": 30,
    "accuracy": 70,
    "pp": 20
  },
  {
    "name": "smokescreen",
    "label": "Smokescreen",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "snap-trap",
    "label": "Snap Trap",
    "type": "grass",
    "damageClass": "physical",
    "power": 35,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "snarl",
    "label": "Snarl",
    "type": "dark",
    "damageClass": "special",
    "power": 55,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "snatch",
    "label": "Snatch",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "snipe-shot",
    "label": "Snipe Shot",
    "type": "water",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "snore",
    "label": "Snore",
    "type": "normal",
    "damageClass": "special",
    "power": 50,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "snowscape",
    "label": "Snowscape",
    "type": "ice",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "soak",
    "label": "Soak",
    "type": "water",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "soft-boiled",
    "label": "Soft-Boiled",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "solar-beam",
    "label": "Solar Beam",
    "type": "grass",
    "damageClass": "special",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "solar-blade",
    "label": "Solar Blade",
    "type": "grass",
    "damageClass": "physical",
    "power": 125,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "sonic-boom",
    "label": "Sonic Boom",
    "type": "normal",
    "damageClass": "special",
    "power": null,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "spacial-rend",
    "label": "Spacial Rend",
    "type": "dragon",
    "damageClass": "special",
    "power": 100,
    "accuracy": 95,
    "pp": 5
  },
  {
    "name": "spark",
    "label": "Spark",
    "type": "electric",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "sparkling-aria",
    "label": "Sparkling Aria",
    "type": "water",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "sparkly-swirl",
    "label": "Sparkly Swirl",
    "type": "fairy",
    "damageClass": "special",
    "power": 120,
    "accuracy": 85,
    "pp": 5
  },
  {
    "name": "spectral-thief",
    "label": "Spectral Thief",
    "type": "ghost",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "speed-swap",
    "label": "Speed Swap",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "spicy-extract",
    "label": "Spicy Extract",
    "type": "grass",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "spider-web",
    "label": "Spider Web",
    "type": "bug",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "spike-cannon",
    "label": "Spike Cannon",
    "type": "normal",
    "damageClass": "physical",
    "power": 20,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "spikes",
    "label": "Spikes",
    "type": "ground",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "spiky-shield",
    "label": "Spiky Shield",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "spin-out",
    "label": "Spin Out",
    "type": "steel",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "spirit-break",
    "label": "Spirit Break",
    "type": "fairy",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "spirit-shackle",
    "label": "Spirit Shackle",
    "type": "ghost",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "spit-up",
    "label": "Spit Up",
    "type": "normal",
    "damageClass": "special",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "spite",
    "label": "Spite",
    "type": "ghost",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "splash",
    "label": "Splash",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "splishy-splash",
    "label": "Splishy Splash",
    "type": "water",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "spore",
    "label": "Spore",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "spotlight",
    "label": "Spotlight",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "springtide-storm",
    "label": "Springtide Storm",
    "type": "fairy",
    "damageClass": "special",
    "power": 100,
    "accuracy": 80,
    "pp": 5
  },
  {
    "name": "stealth-rock",
    "label": "Stealth Rock",
    "type": "rock",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "steam-eruption",
    "label": "Steam Eruption",
    "type": "water",
    "damageClass": "special",
    "power": 110,
    "accuracy": 95,
    "pp": 5
  },
  {
    "name": "steamroller",
    "label": "Steamroller",
    "type": "bug",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "steel-beam",
    "label": "Steel Beam",
    "type": "steel",
    "damageClass": "special",
    "power": 140,
    "accuracy": 95,
    "pp": 5
  },
  {
    "name": "steel-roller",
    "label": "Steel Roller",
    "type": "steel",
    "damageClass": "physical",
    "power": 130,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "steel-wing",
    "label": "Steel Wing",
    "type": "steel",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 90,
    "pp": 25
  },
  {
    "name": "sticky-web",
    "label": "Sticky Web",
    "type": "bug",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "stockpile",
    "label": "Stockpile",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "stomp",
    "label": "Stomp",
    "type": "normal",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "stomping-tantrum",
    "label": "Stomping Tantrum",
    "type": "ground",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "stone-axe",
    "label": "Stone Axe",
    "type": "rock",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "stone-edge",
    "label": "Stone Edge",
    "type": "rock",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 80,
    "pp": 5
  },
  {
    "name": "stored-power",
    "label": "Stored Power",
    "type": "psychic",
    "damageClass": "special",
    "power": 20,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "storm-throw",
    "label": "Storm Throw",
    "type": "fighting",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "strange-steam",
    "label": "Strange Steam",
    "type": "fairy",
    "damageClass": "special",
    "power": 90,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "strength",
    "label": "Strength",
    "type": "normal",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "strength-sap",
    "label": "Strength Sap",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "string-shot",
    "label": "String Shot",
    "type": "bug",
    "damageClass": "status",
    "power": null,
    "accuracy": 95,
    "pp": 40
  },
  {
    "name": "struggle-bug",
    "label": "Struggle Bug",
    "type": "bug",
    "damageClass": "special",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "stuff-cheeks",
    "label": "Stuff Cheeks",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "stun-spore",
    "label": "Stun Spore",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": 75,
    "pp": 30
  },
  {
    "name": "submission",
    "label": "Submission",
    "type": "fighting",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 80,
    "pp": 20
  },
  {
    "name": "substitute",
    "label": "Substitute",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "sucker-punch",
    "label": "Sucker Punch",
    "type": "dark",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "sunny-day",
    "label": "Sunny Day",
    "type": "fire",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "sunsteel-strike",
    "label": "Sunsteel Strike",
    "type": "steel",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "super-fang",
    "label": "Super Fang",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "supercell-slam",
    "label": "Supercell Slam",
    "type": "electric",
    "damageClass": "physical",
    "power": 100,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "superpower",
    "label": "Superpower",
    "type": "fighting",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "supersonic",
    "label": "Supersonic",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 55,
    "pp": 20
  },
  {
    "name": "surf",
    "label": "Surf",
    "type": "water",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "surging-strikes",
    "label": "Surging Strikes",
    "type": "water",
    "damageClass": "physical",
    "power": 25,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "swagger",
    "label": "Swagger",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 85,
    "pp": 15
  },
  {
    "name": "swallow",
    "label": "Swallow",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "sweet-kiss",
    "label": "Sweet Kiss",
    "type": "fairy",
    "damageClass": "status",
    "power": null,
    "accuracy": 75,
    "pp": 10
  },
  {
    "name": "sweet-scent",
    "label": "Sweet Scent",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "swift",
    "label": "Swift",
    "type": "normal",
    "damageClass": "special",
    "power": 60,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "switcheroo",
    "label": "Switcheroo",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "swords-dance",
    "label": "Swords Dance",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "synchronoise",
    "label": "Synchronoise",
    "type": "psychic",
    "damageClass": "special",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "synthesis",
    "label": "Synthesis",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "syrup-bomb",
    "label": "Syrup Bomb",
    "type": "grass",
    "damageClass": "special",
    "power": 60,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "tachyon-cutter",
    "label": "Tachyon Cutter",
    "type": "steel",
    "damageClass": "special",
    "power": 50,
    "accuracy": 0,
    "pp": 10
  },
  {
    "name": "tackle",
    "label": "Tackle",
    "type": "normal",
    "damageClass": "physical",
    "power": 40,
    "accuracy": 100,
    "pp": 35
  },
  {
    "name": "tail-glow",
    "label": "Tail Glow",
    "type": "bug",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "tail-slap",
    "label": "Tail Slap",
    "type": "normal",
    "damageClass": "physical",
    "power": 25,
    "accuracy": 85,
    "pp": 10
  },
  {
    "name": "tail-whip",
    "label": "Tail Whip",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "tailwind",
    "label": "Tailwind",
    "type": "flying",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "take-down",
    "label": "Take Down",
    "type": "normal",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 85,
    "pp": 20
  },
  {
    "name": "take-heart",
    "label": "Take Heart",
    "type": "psychic",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "tar-shot",
    "label": "Tar Shot",
    "type": "rock",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "taunt",
    "label": "Taunt",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "tearful-look",
    "label": "Tearful Look",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "teatime",
    "label": "Teatime",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "techno-blast",
    "label": "Techno Blast",
    "type": "normal",
    "damageClass": "special",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "teeter-dance",
    "label": "Teeter Dance",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "telekinesis",
    "label": "Telekinesis",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "teleport",
    "label": "Teleport",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "temper-flare",
    "label": "Temper Flare",
    "type": "fire",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "tera-blast",
    "label": "Tera Blast",
    "type": "normal",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "tera-starstorm",
    "label": "Tera Starstorm",
    "type": "normal",
    "damageClass": "special",
    "power": 120,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "terrain-pulse",
    "label": "Terrain Pulse",
    "type": "normal",
    "damageClass": "special",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "thief",
    "label": "Thief",
    "type": "dark",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "thousand-arrows",
    "label": "Thousand Arrows",
    "type": "ground",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "thousand-waves",
    "label": "Thousand Waves",
    "type": "ground",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "thrash",
    "label": "Thrash",
    "type": "normal",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "throat-chop",
    "label": "Throat Chop",
    "type": "dark",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "thunder",
    "label": "Thunder",
    "type": "electric",
    "damageClass": "special",
    "power": 110,
    "accuracy": 70,
    "pp": 10
  },
  {
    "name": "thunder-cage",
    "label": "Thunder Cage",
    "type": "electric",
    "damageClass": "special",
    "power": 80,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "thunder-fang",
    "label": "Thunder Fang",
    "type": "electric",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 95,
    "pp": 15
  },
  {
    "name": "thunder-punch",
    "label": "Thunder Punch",
    "type": "electric",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "thunder-shock",
    "label": "Thunder Shock",
    "type": "electric",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "thunder-wave",
    "label": "Thunder Wave",
    "type": "electric",
    "damageClass": "status",
    "power": null,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "thunderbolt",
    "label": "Thunderbolt",
    "type": "electric",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "thunderclap",
    "label": "Thunderclap",
    "type": "electric",
    "damageClass": "special",
    "power": 70,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "thunderous-kick",
    "label": "Thunderous Kick",
    "type": "fighting",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "tickle",
    "label": "Tickle",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "tidy-up",
    "label": "Tidy Up",
    "type": "normal",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "topsy-turvy",
    "label": "Topsy-Turvy",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "torch-song",
    "label": "Torch Song",
    "type": "fire",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "torment",
    "label": "Torment",
    "type": "dark",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "toxic",
    "label": "Toxic",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "toxic-spikes",
    "label": "Toxic Spikes",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "toxic-thread",
    "label": "Toxic Thread",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "trailblaze",
    "label": "Trailblaze",
    "type": "grass",
    "damageClass": "physical",
    "power": 50,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "transform",
    "label": "Transform",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "tri-attack",
    "label": "Tri Attack",
    "type": "normal",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "trick",
    "label": "Trick",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "trick-room",
    "label": "Trick Room",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "trick-or-treat",
    "label": "Trick-or-Treat",
    "type": "ghost",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "triple-arrows",
    "label": "Triple Arrows",
    "type": "fighting",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "triple-axel",
    "label": "Triple Axel",
    "type": "ice",
    "damageClass": "physical",
    "power": 20,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "triple-dive",
    "label": "Triple Dive",
    "type": "water",
    "damageClass": "physical",
    "power": 30,
    "accuracy": 95,
    "pp": 10
  },
  {
    "name": "triple-kick",
    "label": "Triple Kick",
    "type": "fighting",
    "damageClass": "physical",
    "power": 10,
    "accuracy": 90,
    "pp": 10
  },
  {
    "name": "trop-kick",
    "label": "Trop Kick",
    "type": "grass",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "trump-card",
    "label": "Trump Card",
    "type": "normal",
    "damageClass": "special",
    "power": null,
    "accuracy": null,
    "pp": 5
  },
  {
    "name": "twin-beam",
    "label": "Twin Beam",
    "type": "psychic",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "twineedle",
    "label": "Twineedle",
    "type": "bug",
    "damageClass": "physical",
    "power": 25,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "twister",
    "label": "Twister",
    "type": "dragon",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "u-turn",
    "label": "U-turn",
    "type": "bug",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "upper-hand",
    "label": "Upper Hand",
    "type": "fighting",
    "damageClass": "physical",
    "power": 65,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "uproar",
    "label": "Uproar",
    "type": "normal",
    "damageClass": "special",
    "power": 90,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "v-create",
    "label": "V-create",
    "type": "fire",
    "damageClass": "physical",
    "power": 180,
    "accuracy": 95,
    "pp": 5
  },
  {
    "name": "vacuum-wave",
    "label": "Vacuum Wave",
    "type": "fighting",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "veevee-volley",
    "label": "Veevee Volley",
    "type": "normal",
    "damageClass": "physical",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "venom-drench",
    "label": "Venom Drench",
    "type": "poison",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "venoshock",
    "label": "Venoshock",
    "type": "poison",
    "damageClass": "special",
    "power": 65,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "victory-dance",
    "label": "Victory Dance",
    "type": "fighting",
    "damageClass": "status",
    "power": 0,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "vine-whip",
    "label": "Vine Whip",
    "type": "grass",
    "damageClass": "physical",
    "power": 45,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "vice-grip",
    "label": "Vise Grip",
    "type": "normal",
    "damageClass": "physical",
    "power": 55,
    "accuracy": 100,
    "pp": 30
  },
  {
    "name": "vital-throw",
    "label": "Vital Throw",
    "type": "fighting",
    "damageClass": "physical",
    "power": 70,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "volt-switch",
    "label": "Volt Switch",
    "type": "electric",
    "damageClass": "special",
    "power": 70,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "volt-tackle",
    "label": "Volt Tackle",
    "type": "electric",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "wake-up-slap",
    "label": "Wake-Up Slap",
    "type": "fighting",
    "damageClass": "physical",
    "power": 70,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "water-gun",
    "label": "Water Gun",
    "type": "water",
    "damageClass": "special",
    "power": 40,
    "accuracy": 100,
    "pp": 25
  },
  {
    "name": "water-pledge",
    "label": "Water Pledge",
    "type": "water",
    "damageClass": "special",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "water-pulse",
    "label": "Water Pulse",
    "type": "water",
    "damageClass": "special",
    "power": 60,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "water-shuriken",
    "label": "Water Shuriken",
    "type": "water",
    "damageClass": "special",
    "power": 15,
    "accuracy": 100,
    "pp": 20
  },
  {
    "name": "water-sport",
    "label": "Water Sport",
    "type": "water",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 15
  },
  {
    "name": "water-spout",
    "label": "Water Spout",
    "type": "water",
    "damageClass": "special",
    "power": 150,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "waterfall",
    "label": "Waterfall",
    "type": "water",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "wave-crash",
    "label": "Wave Crash",
    "type": "water",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "weather-ball",
    "label": "Weather Ball",
    "type": "normal",
    "damageClass": "special",
    "power": 50,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "whirlpool",
    "label": "Whirlpool",
    "type": "water",
    "damageClass": "special",
    "power": 35,
    "accuracy": 85,
    "pp": 15
  },
  {
    "name": "whirlwind",
    "label": "Whirlwind",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 20
  },
  {
    "name": "wicked-blow",
    "label": "Wicked Blow",
    "type": "dark",
    "damageClass": "physical",
    "power": 75,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "wicked-torque",
    "label": "Wicked Torque",
    "type": "dark",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "wide-guard",
    "label": "Wide Guard",
    "type": "rock",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "wild-charge",
    "label": "Wild Charge",
    "type": "electric",
    "damageClass": "physical",
    "power": 90,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "wildbolt-storm",
    "label": "Wildbolt Storm",
    "type": "electric",
    "damageClass": "special",
    "power": 100,
    "accuracy": 80,
    "pp": 10
  },
  {
    "name": "will-o-wisp",
    "label": "Will-O-Wisp",
    "type": "fire",
    "damageClass": "status",
    "power": null,
    "accuracy": 85,
    "pp": 15
  },
  {
    "name": "wing-attack",
    "label": "Wing Attack",
    "type": "flying",
    "damageClass": "physical",
    "power": 60,
    "accuracy": 100,
    "pp": 35
  },
  {
    "name": "wish",
    "label": "Wish",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "withdraw",
    "label": "Withdraw",
    "type": "water",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 40
  },
  {
    "name": "wonder-room",
    "label": "Wonder Room",
    "type": "psychic",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "wood-hammer",
    "label": "Wood Hammer",
    "type": "grass",
    "damageClass": "physical",
    "power": 120,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "work-up",
    "label": "Work Up",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 30
  },
  {
    "name": "worry-seed",
    "label": "Worry Seed",
    "type": "grass",
    "damageClass": "status",
    "power": null,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "wrap",
    "label": "Wrap",
    "type": "normal",
    "damageClass": "physical",
    "power": 15,
    "accuracy": 90,
    "pp": 20
  },
  {
    "name": "wring-out",
    "label": "Wring Out",
    "type": "normal",
    "damageClass": "special",
    "power": null,
    "accuracy": 100,
    "pp": 5
  },
  {
    "name": "x-scissor",
    "label": "X-Scissor",
    "type": "bug",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 15
  },
  {
    "name": "yawn",
    "label": "Yawn",
    "type": "normal",
    "damageClass": "status",
    "power": null,
    "accuracy": null,
    "pp": 10
  },
  {
    "name": "zap-cannon",
    "label": "Zap Cannon",
    "type": "electric",
    "damageClass": "special",
    "power": 120,
    "accuracy": 50,
    "pp": 5
  },
  {
    "name": "zen-headbutt",
    "label": "Zen Headbutt",
    "type": "psychic",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 90,
    "pp": 15
  },
  {
    "name": "zing-zap",
    "label": "Zing Zap",
    "type": "electric",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  },
  {
    "name": "zippy-zap",
    "label": "Zippy Zap",
    "type": "electric",
    "damageClass": "physical",
    "power": 80,
    "accuracy": 100,
    "pp": 10
  }
];
