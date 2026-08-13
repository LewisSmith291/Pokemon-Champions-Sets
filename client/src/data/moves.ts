// GENERATED FILE - do not edit by hand.
// Rebuild with: node scripts/build-moves.mjs
//
// Champions' hand-picked move pool, scraped from Serebii and bundled so the move
// picker can filter locally instead of making a request per move. Sorted by label.
// Every number here is Champions', not mainline - the PP scale in particular is
// completely different.

export interface MoveSummary {
  /** PokeAPI slug - submitted in a set's `moves` array, and the join key for learnsets */
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
  /** Serebii's effect text, or PokeAPI's short_effect for plain damaging moves */
  description: string;
}

export const MOVES: MoveSummary[] = [
  {
    "name": "accelerock",
    "label": "Accelerock",
    "type": "rock",
    "damageClass": "physical",
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "acid-armor",
    "label": "Acid Armor",
    "type": "poison",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Defense stat by 2 stages."
  },
  {
    "name": "acid-spray",
    "label": "Acid Spray",
    "type": "poison",
    "damageClass": "special",
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "description": "Lowers the target's Sp. Def stat by 2 stages."
  },
  {
    "name": "acrobatics",
    "label": "Acrobatics",
    "type": "flying",
    "damageClass": "physical",
    "pp": 16,
    "power": 55,
    "accuracy": 100,
    "description": "This move's power is doubled if the user isn't holding an item."
  },
  {
    "name": "acupressure",
    "label": "Acupressure",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the Attack Defense Sp. Atk Sp. Def Speed accuracy or evasiveness of the user or an ally by 2 stages."
  },
  {
    "name": "aerial-ace",
    "label": "Aerial Ace",
    "type": "flying",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": null,
    "description": "This move never misses."
  },
  {
    "name": "after-you",
    "label": "After You",
    "type": "normal",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "Makes the target move immediately after the user."
  },
  {
    "name": "agility",
    "label": "Agility",
    "type": "psychic",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Speed stat by 2 stages."
  },
  {
    "name": "air-cutter",
    "label": "Air Cutter",
    "type": "flying",
    "damageClass": "special",
    "pp": 20,
    "power": 60,
    "accuracy": 95,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "air-slash",
    "label": "Air Slash",
    "type": "flying",
    "damageClass": "special",
    "pp": 16,
    "power": 75,
    "accuracy": 95,
    "description": "Has a 30% chance of making the target flinch."
  },
  {
    "name": "alluring-voice",
    "label": "Alluring Voice",
    "type": "fairy",
    "damageClass": "special",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "Confuses the target if its stats were boosted during the turn this move is used."
  },
  {
    "name": "ally-switch",
    "label": "Ally Switch",
    "type": "psychic",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "The user switches spots with one of its allies. With each consecutive use this move's chance of success becomes 1/3 of what it was before."
  },
  {
    "name": "amnesia",
    "label": "Amnesia",
    "type": "psychic",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Sp. Def stat by 2 stages."
  },
  {
    "name": "ancient-power",
    "label": "Ancient Power",
    "type": "rock",
    "damageClass": "special",
    "pp": 8,
    "power": 60,
    "accuracy": 100,
    "description": "Has a 10% chance of boosting the user's Attack Defense Sp. Atk Sp. Def and Speed stats by 1 stage."
  },
  {
    "name": "apple-acid",
    "label": "Apple Acid",
    "type": "grass",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Lowers the target's Sp. Def stat by 1 stage."
  },
  {
    "name": "aqua-cutter",
    "label": "Aqua Cutter",
    "type": "water",
    "damageClass": "physical",
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "aqua-jet",
    "label": "Aqua Jet",
    "type": "water",
    "damageClass": "physical",
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "aqua-ring",
    "label": "Aqua Ring",
    "type": "water",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "The user gains the Aqua Ring status."
  },
  {
    "name": "aqua-step",
    "label": "Aqua Step",
    "type": "water",
    "damageClass": "physical",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "Boosts the user's Speed stat by 1 stage."
  },
  {
    "name": "aqua-tail",
    "label": "Aqua Tail",
    "type": "water",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 90,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "armor-cannon",
    "label": "Armor Cannon",
    "type": "fire",
    "damageClass": "special",
    "pp": 8,
    "power": 120,
    "accuracy": 100,
    "description": "Lowers the user's Defense and Sp. Def stats by 1 stage."
  },
  {
    "name": "aromatic-mist",
    "label": "Aromatic Mist",
    "type": "fairy",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts an ally's Sp. Def stat by 1 stage."
  },
  {
    "name": "assurance",
    "label": "Assurance",
    "type": "dark",
    "damageClass": "physical",
    "pp": 12,
    "power": 60,
    "accuracy": 100,
    "description": "This move's power is doubled if the target has already taken damage during the turn this move is used."
  },
  {
    "name": "attract",
    "label": "Attract",
    "type": "normal",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Gives the target the Infatuated status. This move will fail against a target that is the same gender as the user or whose gender is unknown."
  },
  {
    "name": "aura-sphere",
    "label": "Aura Sphere",
    "type": "fighting",
    "damageClass": "special",
    "pp": 20,
    "power": 80,
    "accuracy": null,
    "description": "This move never misses."
  },
  {
    "name": "aura-wheel",
    "label": "Aura Wheel",
    "type": "electric",
    "damageClass": "physical",
    "pp": 12,
    "power": 110,
    "accuracy": 100,
    "description": "Boosts the user's Speed stat by 1 stage. This move's type depends on Morpeko's form."
  },
  {
    "name": "aurora-veil",
    "label": "Aurora Veil",
    "type": "ice",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Gives the user's side the Aurora Veil status for 5 turns. This move can be used only in snow."
  },
  {
    "name": "avalanche",
    "label": "Avalanche",
    "type": "ice",
    "damageClass": "physical",
    "pp": 12,
    "power": 60,
    "accuracy": 100,
    "description": "This move's power is doubled if the target has already dealt damage to the user with a move in the same turn."
  },
  {
    "name": "axe-kick",
    "label": "Axe Kick",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 12,
    "power": 120,
    "accuracy": 90,
    "description": "Has a 30% chance of confusing the target. If this move misses or fails the user takes damage equal to 1/2 of its max HP."
  },
  {
    "name": "baby-doll-eyes",
    "label": "Baby-Doll Eyes",
    "type": "fairy",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Attack stat by 1 stage."
  },
  {
    "name": "baneful-bunker",
    "label": "Baneful Bunker",
    "type": "poison",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "The user protects itself from incoming moves for the turn. Any attackers that use contact moves against the user during this turn become poisoned. With each consecutive use this move's chance of success becomes 1/3 of what it was before."
  },
  {
    "name": "barb-barrage",
    "label": "Barb Barrage",
    "type": "poison",
    "damageClass": "physical",
    "pp": 12,
    "power": 60,
    "accuracy": 100,
    "description": "Has a 50% chance of poisoning the target. This move's power is doubled if the target is poisoned or badly poisoned."
  },
  {
    "name": "baton-pass",
    "label": "Baton Pass",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "The user switches out of battle to be replaced by another party Pokémon. If the user had any stat changes a substitute or other such effects they will be passed on to the Pokémon switching in."
  },
  {
    "name": "beak-blast",
    "label": "Beak Blast",
    "type": "flying",
    "damageClass": "physical",
    "pp": 8,
    "power": 120,
    "accuracy": 100,
    "description": "If the user is hit by a contact move before it uses this move the attacker will be burned."
  },
  {
    "name": "beat-up",
    "label": "Beat Up",
    "type": "dark",
    "damageClass": "physical",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The target is attacked as many times as the number of Pokémon in the user's party. Pokémon that have fainted or have a status condition are not counted. This move's power is calculated based on the Attack stats of the party Pokémon."
  },
  {
    "name": "belch",
    "label": "Belch",
    "type": "poison",
    "damageClass": "special",
    "pp": 12,
    "power": 120,
    "accuracy": 90,
    "description": "This move fails unless the user has eaten a Berry during the battle."
  },
  {
    "name": "belly-drum",
    "label": "Belly Drum",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user loses 1/2 of its max HP to boost its Attack stat to its sixth stage. This move fails if the user doesn't have enough remaining HP."
  },
  {
    "name": "bind",
    "label": "Bind",
    "type": "normal",
    "damageClass": "physical",
    "pp": 20,
    "power": 15,
    "accuracy": 85,
    "description": "Gives the target the Bound status."
  },
  {
    "name": "bite",
    "label": "Bite",
    "type": "dark",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "description": "Has a 30% chance of making the target flinch."
  },
  {
    "name": "bitter-blade",
    "label": "Bitter Blade",
    "type": "fire",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "The user's HP is restored by 1/2 of the damage dealt by this move."
  },
  {
    "name": "bitter-malice",
    "label": "Bitter Malice",
    "type": "ghost",
    "damageClass": "special",
    "pp": 12,
    "power": 75,
    "accuracy": 100,
    "description": "Lowers the target's Attack stat by 1 stage."
  },
  {
    "name": "blast-burn",
    "label": "Blast Burn",
    "type": "fire",
    "damageClass": "special",
    "pp": 8,
    "power": 150,
    "accuracy": 90,
    "description": "The user gains the Recharging status on the turn after this move is used."
  },
  {
    "name": "blaze-kick",
    "label": "Blaze Kick",
    "type": "fire",
    "damageClass": "physical",
    "pp": 12,
    "power": 85,
    "accuracy": 90,
    "description": "Has a 10% chance of burning the target. This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "blizzard",
    "label": "Blizzard",
    "type": "ice",
    "damageClass": "special",
    "pp": 8,
    "power": 110,
    "accuracy": 70,
    "description": "Has a 10% chance of freezing targets. This move never misses in snow."
  },
  {
    "name": "block",
    "label": "Block",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Gives the target the Can't Escape status."
  },
  {
    "name": "body-press",
    "label": "Body Press",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "The damage dealt by this move is calculated using the user's Defense stat instead of its Attack stat."
  },
  {
    "name": "body-slam",
    "label": "Body Slam",
    "type": "normal",
    "damageClass": "physical",
    "pp": 16,
    "power": 85,
    "accuracy": 100,
    "description": "Has a 30% chance of paralyzing the target. If the target has the Minimized status this move's power is doubled and it will be sure to hit."
  },
  {
    "name": "bone-rush",
    "label": "Bone Rush",
    "type": "ground",
    "damageClass": "physical",
    "pp": 12,
    "power": 30,
    "accuracy": 90,
    "description": "The user attacks 2 to 5 times in a row."
  },
  {
    "name": "boomburst",
    "label": "Boomburst",
    "type": "normal",
    "damageClass": "special",
    "pp": 12,
    "power": 140,
    "accuracy": 100,
    "description": "Inflicts regular damage."
  },
  {
    "name": "bounce",
    "label": "Bounce",
    "type": "flying",
    "damageClass": "physical",
    "pp": 8,
    "power": 85,
    "accuracy": 85,
    "description": "The user gains the Sky-High status on the turn this move is used then attacks on the following turn. This move has a 30% chance of paralyzing the target."
  },
  {
    "name": "brave-bird",
    "label": "Brave Bird",
    "type": "flying",
    "damageClass": "physical",
    "pp": 16,
    "power": 120,
    "accuracy": 100,
    "description": "The user takes 1/3 of the damage dealt by this move."
  },
  {
    "name": "breaking-swipe",
    "label": "Breaking Swipe",
    "type": "dragon",
    "damageClass": "physical",
    "pp": 16,
    "power": 60,
    "accuracy": 100,
    "description": "Lowers targets' Attack stats by 1 stage."
  },
  {
    "name": "brick-break",
    "label": "Brick Break",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 16,
    "power": 75,
    "accuracy": 100,
    "description": "Removes the Light Screen Reflect and Aurora Veil statuses on the target's side."
  },
  {
    "name": "brutal-swing",
    "label": "Brutal Swing",
    "type": "dark",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "bug-bite",
    "label": "Bug Bite",
    "type": "bug",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "description": "If the target is holding a Berry the user eats that Berry and gains its effect."
  },
  {
    "name": "bug-buzz",
    "label": "Bug Buzz",
    "type": "bug",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 10% chance of lowering the target's Sp. Def stat by 1 stage."
  },
  {
    "name": "bulk-up",
    "label": "Bulk Up",
    "type": "fighting",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Attack and Defense stats by 1 stage."
  },
  {
    "name": "bulldoze",
    "label": "Bulldoze",
    "type": "ground",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "description": "Lowers targets' Speed stats by 1 stage. When Grassy Terrain is active this move's power is halved."
  },
  {
    "name": "bullet-punch",
    "label": "Bullet Punch",
    "type": "steel",
    "damageClass": "physical",
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "bullet-seed",
    "label": "Bullet Seed",
    "type": "grass",
    "damageClass": "physical",
    "pp": 20,
    "power": 25,
    "accuracy": 100,
    "description": "The user attacks 2 to 5 times in a row."
  },
  {
    "name": "burn-up",
    "label": "Burn Up",
    "type": "fire",
    "damageClass": "special",
    "pp": 8,
    "power": 130,
    "accuracy": 100,
    "description": "The user loses the Fire type. Cures the user of being frozen. This move fails unless it is used by a Fire type."
  },
  {
    "name": "burning-jealousy",
    "label": "Burning Jealousy",
    "type": "fire",
    "damageClass": "special",
    "pp": 8,
    "power": 70,
    "accuracy": 100,
    "description": "Burns targets if their stats were boosted during the turn this move is used."
  },
  {
    "name": "calm-mind",
    "label": "Calm Mind",
    "type": "psychic",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Sp. Atk and Sp. Def stats by 1 stage."
  },
  {
    "name": "ceaseless-edge",
    "label": "Ceaseless Edge",
    "type": "dark",
    "damageClass": "physical",
    "pp": 16,
    "power": 65,
    "accuracy": 90,
    "description": "Gives the opponent's side the Spikes status."
  },
  {
    "name": "charge",
    "label": "Charge",
    "type": "electric",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Sp. Def stat by 1 stage. The user gains the Electric Boost status."
  },
  {
    "name": "charge-beam",
    "label": "Charge Beam",
    "type": "electric",
    "damageClass": "special",
    "pp": 12,
    "power": 50,
    "accuracy": 90,
    "description": "Has a 70% chance of boosting the user's Sp. Atk stat by 1 stage."
  },
  {
    "name": "charm",
    "label": "Charm",
    "type": "fairy",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Attack stat by 2 stages."
  },
  {
    "name": "chilling-water",
    "label": "Chilling Water",
    "type": "water",
    "damageClass": "special",
    "pp": 20,
    "power": 50,
    "accuracy": 100,
    "description": "Lowers the target's Attack stat by 1 stage."
  },
  {
    "name": "chilly-reception",
    "label": "Chilly Reception",
    "type": "ice",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Summons snow for 5 turns. The user switches out of battle to be replaced by another party Pokémon."
  },
  {
    "name": "circle-throw",
    "label": "Circle Throw",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 12,
    "power": 60,
    "accuracy": 90,
    "description": "If there are other Pokémon in the target's party that can switch into battle the target is forced to switch out of battle and is replaced by one of those Pokémon at random."
  },
  {
    "name": "clanging-scales",
    "label": "Clanging Scales",
    "type": "dragon",
    "damageClass": "special",
    "pp": 8,
    "power": 110,
    "accuracy": 100,
    "description": "Lowers the user's Defense stat by 1 stage."
  },
  {
    "name": "clangorous-soul",
    "label": "Clangorous Soul",
    "type": "dragon",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "The user loses 1/3 of its max HP to boost its Attack Defense Sp. Atk Sp. Def and Speed stats by 1 stage. This move fails if the user doesn't have enough remaining HP."
  },
  {
    "name": "clear-smog",
    "label": "Clear Smog",
    "type": "poison",
    "damageClass": "special",
    "pp": 16,
    "power": 50,
    "accuracy": null,
    "description": "Removes all stat changes from the target. This move never misses."
  },
  {
    "name": "close-combat",
    "label": "Close Combat",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 8,
    "power": 120,
    "accuracy": 100,
    "description": "Lowers the user's Defense and Sp. Def stats by 1 stage."
  },
  {
    "name": "coaching",
    "label": "Coaching",
    "type": "fighting",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Boosts allies' Attack and Defense stats by 1 stage."
  },
  {
    "name": "coil",
    "label": "Coil",
    "type": "poison",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Attack and Defense stats as well as its accuracy by 1 stage."
  },
  {
    "name": "comeuppance",
    "label": "Comeuppance",
    "type": "dark",
    "damageClass": "physical",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The user retaliates to deal 150% of the damage it took from an opponent's move during the turn this move is used."
  },
  {
    "name": "confuse-ray",
    "label": "Confuse Ray",
    "type": "ghost",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "Confuses the target."
  },
  {
    "name": "copycat",
    "label": "Copycat",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "The user mimics the move that was last used. This move fails if no other move has been used yet."
  },
  {
    "name": "corrosive-gas",
    "label": "Corrosive Gas",
    "type": "poison",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Causes all other Pokémon on the field to lose their held items."
  },
  {
    "name": "cosmic-power",
    "label": "Cosmic Power",
    "type": "psychic",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Defense and Sp. Def stats by 1 stage."
  },
  {
    "name": "cotton-guard",
    "label": "Cotton Guard",
    "type": "grass",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Defense stat by 3 stages."
  },
  {
    "name": "cotton-spore",
    "label": "Cotton Spore",
    "type": "grass",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Lowers targets' Speed stats by 2 stages."
  },
  {
    "name": "counter",
    "label": "Counter",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "The user retaliates to deal double the damage it took from an opponent's physical move during the turn this move is used."
  },
  {
    "name": "covet",
    "label": "Covet",
    "type": "normal",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "description": "If the user is not already holding an item it steals the target's held item."
  },
  {
    "name": "crabhammer",
    "label": "Crabhammer",
    "type": "water",
    "damageClass": "physical",
    "pp": 12,
    "power": 100,
    "accuracy": 95,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "cross-chop",
    "label": "Cross Chop",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 8,
    "power": 100,
    "accuracy": 80,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "cross-poison",
    "label": "Cross Poison",
    "type": "poison",
    "damageClass": "physical",
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "description": "Has a 10% chance of poisoning the target. This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "crunch",
    "label": "Crunch",
    "type": "dark",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 20% chance of lowering the target's Defense stat by 1 stage."
  },
  {
    "name": "crush-claw",
    "label": "Crush Claw",
    "type": "normal",
    "damageClass": "physical",
    "pp": 12,
    "power": 75,
    "accuracy": 95,
    "description": "Has a 50% chance of lowering the target's Defense stat by 1 stage."
  },
  {
    "name": "curse",
    "label": "Curse",
    "type": "ghost",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Ghost-type: The user loses 1/2 of its max HP to give the target the Cursed status. Non-Ghost-type: Lowers the user's Speed stat by 1 stage and boosts its Attack and Defense stats by 1 stage."
  },
  {
    "name": "dark-pulse",
    "label": "Dark Pulse",
    "type": "dark",
    "damageClass": "special",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 20% chance of making the target flinch."
  },
  {
    "name": "darkest-lariat",
    "label": "Darkest Lariat",
    "type": "dark",
    "damageClass": "physical",
    "pp": 12,
    "power": 85,
    "accuracy": 100,
    "description": "This move ignores the target's stat changes when dealing damage."
  },
  {
    "name": "dazzling-gleam",
    "label": "Dazzling Gleam",
    "type": "fairy",
    "damageClass": "special",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "decorate",
    "label": "Decorate",
    "type": "fairy",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "Boosts the target's Attack and Sp. Atk stats by 2 stages."
  },
  {
    "name": "defog",
    "label": "Defog",
    "type": "flying",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "Lowers the target's evasiveness by 1 stage. Removes statuses such as Reflect Spikes and Safeguard as well as any terrain."
  },
  {
    "name": "destiny-bond",
    "label": "Destiny Bond",
    "type": "ghost",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "The user gains the Destiny Bound status. This move fails if used in succession."
  },
  {
    "name": "detect",
    "label": "Detect",
    "type": "fighting",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "The user protects itself from incoming moves for the turn. With each consecutive use this move's chance of success becomes 1/3 of what it was before."
  },
  {
    "name": "dig",
    "label": "Dig",
    "type": "ground",
    "damageClass": "physical",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "The user gains the Underground status on the turn this move is used then attacks on the following turn."
  },
  {
    "name": "dire-claw",
    "label": "Dire Claw",
    "type": "poison",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 30% chance of leaving the target poisoned paralyzed or asleep."
  },
  {
    "name": "disable",
    "label": "Disable",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Gives the target the Move Disabled status for 4 turns."
  },
  {
    "name": "discharge",
    "label": "Discharge",
    "type": "electric",
    "damageClass": "special",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 30% chance of paralyzing targets."
  },
  {
    "name": "dive",
    "label": "Dive",
    "type": "water",
    "damageClass": "physical",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "The user gains the Submerged status on the turn this move is used then attacks on the following turn."
  },
  {
    "name": "double-hit",
    "label": "Double Hit",
    "type": "normal",
    "damageClass": "physical",
    "pp": 12,
    "power": 35,
    "accuracy": 90,
    "description": "The user attacks twice in a row."
  },
  {
    "name": "double-team",
    "label": "Double Team",
    "type": "normal",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's evasiveness by 1 stage."
  },
  {
    "name": "double-edge",
    "label": "Double-Edge",
    "type": "normal",
    "damageClass": "physical",
    "pp": 16,
    "power": 120,
    "accuracy": 100,
    "description": "The user takes 1/3 of the damage dealt by this move."
  },
  {
    "name": "draco-meteor",
    "label": "Draco Meteor",
    "type": "dragon",
    "damageClass": "special",
    "pp": 8,
    "power": 130,
    "accuracy": 90,
    "description": "Lowers the user's Sp. Atk stat by 2 stages."
  },
  {
    "name": "dragon-cheer",
    "label": "Dragon Cheer",
    "type": "dragon",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "Gives allies a Critical-Hit Ratio Boost. Dragon types receive a 2-stage boost. All other types receive a 1-stage boost."
  },
  {
    "name": "dragon-claw",
    "label": "Dragon Claw",
    "type": "dragon",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "dragon-dance",
    "label": "Dragon Dance",
    "type": "dragon",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Attack and Speed stats by 1 stage."
  },
  {
    "name": "dragon-darts",
    "label": "Dragon Darts",
    "type": "dragon",
    "damageClass": "physical",
    "pp": 12,
    "power": 50,
    "accuracy": 100,
    "description": "The user attacks twice in a row. If there are 2 opposing Pokémon each of them is attacked once."
  },
  {
    "name": "dragon-pulse",
    "label": "Dragon Pulse",
    "type": "dragon",
    "damageClass": "special",
    "pp": 12,
    "power": 85,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "dragon-rush",
    "label": "Dragon Rush",
    "type": "dragon",
    "damageClass": "physical",
    "pp": 12,
    "power": 100,
    "accuracy": 75,
    "description": "Has a 20% chance of making the target flinch. If the target has the Minimized status this move's power is doubled and it will be sure to hit."
  },
  {
    "name": "dragon-tail",
    "label": "Dragon Tail",
    "type": "dragon",
    "damageClass": "physical",
    "pp": 12,
    "power": 60,
    "accuracy": 90,
    "description": "If there are other Pokémon in the target's party that can switch into battle the target is forced to switch out of battle and is replaced by one of those Pokémon at random."
  },
  {
    "name": "drain-punch",
    "label": "Drain Punch",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 12,
    "power": 75,
    "accuracy": 100,
    "description": "The user's HP is restored by 1/2 of the damage dealt by this move."
  },
  {
    "name": "draining-kiss",
    "label": "Draining Kiss",
    "type": "fairy",
    "damageClass": "special",
    "pp": 12,
    "power": 50,
    "accuracy": 100,
    "description": "The user's HP is restored by 3/4 of the damage dealt by this move."
  },
  {
    "name": "drill-peck",
    "label": "Drill Peck",
    "type": "flying",
    "damageClass": "physical",
    "pp": 20,
    "power": 80,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "drill-run",
    "label": "Drill Run",
    "type": "ground",
    "damageClass": "physical",
    "pp": 12,
    "power": 80,
    "accuracy": 95,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "dual-wingbeat",
    "label": "Dual Wingbeat",
    "type": "flying",
    "damageClass": "physical",
    "pp": 12,
    "power": 40,
    "accuracy": 90,
    "description": "The user attacks twice in a row."
  },
  {
    "name": "dynamic-punch",
    "label": "Dynamic Punch",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 8,
    "power": 100,
    "accuracy": 50,
    "description": "Confuses the target."
  },
  {
    "name": "earth-power",
    "label": "Earth Power",
    "type": "ground",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 10% chance of lowering the target's Sp. Def stat by 1 stage."
  },
  {
    "name": "earthquake",
    "label": "Earthquake",
    "type": "ground",
    "damageClass": "physical",
    "pp": 12,
    "power": 100,
    "accuracy": 100,
    "description": "This move's power is doubled against targets that have the Underground status. When Grassy Terrain is active this move's power is halved."
  },
  {
    "name": "eerie-impulse",
    "label": "Eerie Impulse",
    "type": "electric",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Sp. Atk stat by 2 stages."
  },
  {
    "name": "eerie-spell",
    "label": "Eerie Spell",
    "type": "psychic",
    "damageClass": "special",
    "pp": 8,
    "power": 80,
    "accuracy": 100,
    "description": "Removes 3 PP from the move last used by the target."
  },
  {
    "name": "electric-terrain",
    "label": "Electric Terrain",
    "type": "electric",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Turns the entire field into Electric Terrain for 5 turns."
  },
  {
    "name": "electrify",
    "label": "Electrify",
    "type": "electric",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "If this move hits the target before it uses a move its move becomes Electric type for that turn."
  },
  {
    "name": "electro-ball",
    "label": "Electro Ball",
    "type": "electric",
    "damageClass": "special",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The higher the user's Speed stat compared to the target's the greater this move's power (ranging between 40 and 150)."
  },
  {
    "name": "electro-shot",
    "label": "Electro Shot",
    "type": "electric",
    "damageClass": "special",
    "pp": 12,
    "power": 130,
    "accuracy": 100,
    "description": "The user gains the Charging status on the turn this move is used then attacks on the following turn. In rain the user does not gain the Charging status and can attack immediately. The user's Sp. Atk stat is boosted by 1 stage on the turn this move is used."
  },
  {
    "name": "electroweb",
    "label": "Electroweb",
    "type": "electric",
    "damageClass": "special",
    "pp": 16,
    "power": 55,
    "accuracy": 95,
    "description": "Lowers targets' Speed stats by 1 stage."
  },
  {
    "name": "encore",
    "label": "Encore",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": 100,
    "description": "Gives the target the Encore status."
  },
  {
    "name": "endeavor",
    "label": "Endeavor",
    "type": "normal",
    "damageClass": "physical",
    "pp": 8,
    "power": null,
    "accuracy": 100,
    "description": "Deals damage to the target equal to its remaining HP minus the user's remaining HP. This move fails if the target's HP is the same as or lower than the user's."
  },
  {
    "name": "endure",
    "label": "Endure",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "During the turn this move is used if the user takes damage from a move that would knock it out it will endure the hit with 1 HP. With each consecutive use this move's chance of success becomes 1/3 of what it was before."
  },
  {
    "name": "energy-ball",
    "label": "Energy Ball",
    "type": "grass",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 10% chance of lowering the target's Sp. Def stat by 1 stage."
  },
  {
    "name": "entrainment",
    "label": "Entrainment",
    "type": "normal",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Changes the target's Ability to be the same as the user's."
  },
  {
    "name": "eruption",
    "label": "Eruption",
    "type": "fire",
    "damageClass": "special",
    "pp": 8,
    "power": 150,
    "accuracy": 100,
    "description": "The less HP the user has left the lower this move's power (ranging between 1 and 150)."
  },
  {
    "name": "expanding-force",
    "label": "Expanding Force",
    "type": "psychic",
    "damageClass": "special",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "If the user is under the effect of Psychic Terrain this move's power is boosted by 50% and its range extends to all opponents."
  },
  {
    "name": "explosion",
    "label": "Explosion",
    "type": "normal",
    "damageClass": "physical",
    "pp": 8,
    "power": 250,
    "accuracy": 100,
    "description": "The user faints upon using this move."
  },
  {
    "name": "extrasensory",
    "label": "Extrasensory",
    "type": "psychic",
    "damageClass": "special",
    "pp": 20,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 10% chance of making the target flinch."
  },
  {
    "name": "extreme-speed",
    "label": "Extreme Speed",
    "type": "normal",
    "damageClass": "physical",
    "pp": 8,
    "power": 80,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "facade",
    "label": "Facade",
    "type": "normal",
    "damageClass": "physical",
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "description": "This move's power is doubled if the user is poisoned badly poisoned burned or paralyzed. Although this move is a physical move the damage it deals is not halved when the user is burned."
  },
  {
    "name": "fairy-lock",
    "label": "Fairy Lock",
    "type": "fairy",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Gives all Pokémon on the field the Fairy Locked status."
  },
  {
    "name": "fake-out",
    "label": "Fake Out",
    "type": "normal",
    "damageClass": "physical",
    "pp": 12,
    "power": 40,
    "accuracy": 100,
    "description": "Makes the target flinch. This move fails unless it is the first move used by the user after it enters a battle."
  },
  {
    "name": "fake-tears",
    "label": "Fake Tears",
    "type": "dark",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Sp. Def stat by 2 stages."
  },
  {
    "name": "feather-dance",
    "label": "Feather Dance",
    "type": "flying",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Attack stat by 2 stages."
  },
  {
    "name": "feint",
    "label": "Feint",
    "type": "normal",
    "damageClass": "physical",
    "pp": 12,
    "power": 30,
    "accuracy": 100,
    "description": "This move can hit a target using a move such as Protect or Detect and removes the effects of those moves."
  },
  {
    "name": "fell-stinger",
    "label": "Fell Stinger",
    "type": "bug",
    "damageClass": "physical",
    "pp": 20,
    "power": 50,
    "accuracy": 100,
    "description": "Boosts the user's Attack stat by 3 stages if this move knocks out the target."
  },
  {
    "name": "fickle-beam",
    "label": "Fickle Beam",
    "type": "dragon",
    "damageClass": "special",
    "pp": 8,
    "power": 80,
    "accuracy": 100,
    "description": "This move has a 30% chance of its power being doubled."
  },
  {
    "name": "fiery-dance",
    "label": "Fiery Dance",
    "type": "fire",
    "damageClass": "special",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 50% chance of boosting the user's Sp. Atk stat by 1 stage."
  },
  {
    "name": "final-gambit",
    "label": "Final Gambit",
    "type": "fighting",
    "damageClass": "special",
    "pp": 8,
    "power": null,
    "accuracy": 100,
    "description": "The user faints. This move deals damage to the target equal to the user's remaining HP at the time this move was used."
  },
  {
    "name": "fire-blast",
    "label": "Fire Blast",
    "type": "fire",
    "damageClass": "special",
    "pp": 8,
    "power": 110,
    "accuracy": 85,
    "description": "Has a 10% chance of burning the target."
  },
  {
    "name": "fire-fang",
    "label": "Fire Fang",
    "type": "fire",
    "damageClass": "physical",
    "pp": 16,
    "power": 65,
    "accuracy": 95,
    "description": "Has a 10% chance of burning the target and a 10% chance of making the target flinch."
  },
  {
    "name": "fire-lash",
    "label": "Fire Lash",
    "type": "fire",
    "damageClass": "physical",
    "pp": 16,
    "power": 90,
    "accuracy": 100,
    "description": "Lowers the target's Defense stat by 1 stage."
  },
  {
    "name": "fire-punch",
    "label": "Fire Punch",
    "type": "fire",
    "damageClass": "physical",
    "pp": 16,
    "power": 75,
    "accuracy": 100,
    "description": "Has a 10% chance of burning the target."
  },
  {
    "name": "fire-spin",
    "label": "Fire Spin",
    "type": "fire",
    "damageClass": "special",
    "pp": 16,
    "power": 35,
    "accuracy": 85,
    "description": "Gives the target the Bound status."
  },
  {
    "name": "first-impression",
    "label": "First Impression",
    "type": "bug",
    "damageClass": "physical",
    "pp": 12,
    "power": 100,
    "accuracy": 100,
    "description": "This move fails unless it is the first move used by the user after it enters a battle."
  },
  {
    "name": "fissure",
    "label": "Fissure",
    "type": "ground",
    "damageClass": "physical",
    "pp": 8,
    "power": null,
    "accuracy": 30,
    "description": "Knocks out the target. The accuracy of this move is fixed at 30%."
  },
  {
    "name": "flail",
    "label": "Flail",
    "type": "normal",
    "damageClass": "physical",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "The less HP the user has left the greater this move's power (ranging between 20 and 200)."
  },
  {
    "name": "flame-charge",
    "label": "Flame Charge",
    "type": "fire",
    "damageClass": "physical",
    "pp": 20,
    "power": 50,
    "accuracy": 100,
    "description": "Boosts the user's Speed stat by 1 stage."
  },
  {
    "name": "flamethrower",
    "label": "Flamethrower",
    "type": "fire",
    "damageClass": "special",
    "pp": 16,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 10% chance of burning the target."
  },
  {
    "name": "flare-blitz",
    "label": "Flare Blitz",
    "type": "fire",
    "damageClass": "physical",
    "pp": 16,
    "power": 120,
    "accuracy": 100,
    "description": "Has a 10% chance of burning the target. Cures the user of being frozen. The user also takes 1/3 of the damage dealt by this move."
  },
  {
    "name": "flash-cannon",
    "label": "Flash Cannon",
    "type": "steel",
    "damageClass": "special",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 10% chance of lowering the target's Sp. Def stat by 1 stage."
  },
  {
    "name": "flatter",
    "label": "Flatter",
    "type": "dark",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Boosts the target's Sp. Atk stat by 1 stage and confuses it."
  },
  {
    "name": "fling",
    "label": "Fling",
    "type": "dark",
    "damageClass": "physical",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "This move's power and effects depend on the user's held item. The held item is lost after this move is used."
  },
  {
    "name": "flip-turn",
    "label": "Flip Turn",
    "type": "water",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "description": "After attacking the user switches out of battle to be replaced by another party Pokémon."
  },
  {
    "name": "flower-trick",
    "label": "Flower Trick",
    "type": "grass",
    "damageClass": "physical",
    "pp": 12,
    "power": 70,
    "accuracy": null,
    "description": "This move never misses and is always a critical hit."
  },
  {
    "name": "fly",
    "label": "Fly",
    "type": "flying",
    "damageClass": "physical",
    "pp": 16,
    "power": 90,
    "accuracy": 95,
    "description": "The user gains the Sky-High status on the turn this move is used then attacks on the following turn."
  },
  {
    "name": "flying-press",
    "label": "Flying Press",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 12,
    "power": 100,
    "accuracy": 95,
    "description": "The damage dealt by this move is calculated by combining the effectiveness of the move's own type with that of the Flying type. If the target has the Minimized status this move's power is doubled and it will be sure to hit."
  },
  {
    "name": "focus-blast",
    "label": "Focus Blast",
    "type": "fighting",
    "damageClass": "special",
    "pp": 8,
    "power": 120,
    "accuracy": 70,
    "description": "Has a 10% chance of lowering the target's Sp. Def stat by 1 stage."
  },
  {
    "name": "focus-energy",
    "label": "Focus Energy",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "The user gains a 2-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "focus-punch",
    "label": "Focus Punch",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 20,
    "power": 150,
    "accuracy": 100,
    "description": "This move fails if the user has already taken damage from a move in the same turn."
  },
  {
    "name": "follow-me",
    "label": "Follow Me",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "The user redirects opponents' moves toward itself. This effect works only on single-target moves."
  },
  {
    "name": "forests-curse",
    "label": "Forest's Curse",
    "type": "grass",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Gives the target the Forest Cursed status."
  },
  {
    "name": "foul-play",
    "label": "Foul Play",
    "type": "dark",
    "damageClass": "physical",
    "pp": 16,
    "power": 95,
    "accuracy": 100,
    "description": "The damage dealt by this move is calculated using the target's Attack stat instead of the user's Attack stat."
  },
  {
    "name": "freeze-dry",
    "label": "Freeze-Dry",
    "type": "ice",
    "damageClass": "special",
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "description": "This move is also super effective against Water-type Pokémon."
  },
  {
    "name": "frenzy-plant",
    "label": "Frenzy Plant",
    "type": "grass",
    "damageClass": "special",
    "pp": 8,
    "power": 150,
    "accuracy": 90,
    "description": "The user gains the Recharging status on the turn after this move is used."
  },
  {
    "name": "frost-breath",
    "label": "Frost Breath",
    "type": "ice",
    "damageClass": "special",
    "pp": 12,
    "power": 60,
    "accuracy": 90,
    "description": "Always a critical hit."
  },
  {
    "name": "future-sight",
    "label": "Future Sight",
    "type": "psychic",
    "damageClass": "special",
    "pp": 12,
    "power": 120,
    "accuracy": 100,
    "description": "Gives the target's spot the Future Attack status."
  },
  {
    "name": "gastro-acid",
    "label": "Gastro Acid",
    "type": "poison",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "Gives the target the No Ability status."
  },
  {
    "name": "giga-drain",
    "label": "Giga Drain",
    "type": "grass",
    "damageClass": "special",
    "pp": 12,
    "power": 75,
    "accuracy": 100,
    "description": "The user's HP is restored by 1/2 of the damage dealt by this move."
  },
  {
    "name": "giga-impact",
    "label": "Giga Impact",
    "type": "normal",
    "damageClass": "physical",
    "pp": 8,
    "power": 150,
    "accuracy": 90,
    "description": "The user gains the Recharging status on the turn after this move is used."
  },
  {
    "name": "gigaton-hammer",
    "label": "Gigaton Hammer",
    "type": "steel",
    "damageClass": "physical",
    "pp": 8,
    "power": 160,
    "accuracy": 100,
    "description": "This move can't be used twice in a row."
  },
  {
    "name": "glare",
    "label": "Glare",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Paralyzes the target."
  },
  {
    "name": "grass-knot",
    "label": "Grass Knot",
    "type": "grass",
    "damageClass": "special",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "The heavier the target the greater this move's power (ranging between 20 and 120)."
  },
  {
    "name": "grassy-glide",
    "label": "Grassy Glide",
    "type": "grass",
    "damageClass": "physical",
    "pp": 20,
    "power": 55,
    "accuracy": 100,
    "description": "If the user is under the effect of Grassy Terrain this move's priority becomes +1."
  },
  {
    "name": "grassy-terrain",
    "label": "Grassy Terrain",
    "type": "grass",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Turns the entire field into Grassy Terrain for 5 turns."
  },
  {
    "name": "grav-apple",
    "label": "Grav Apple",
    "type": "grass",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Lowers the target's Defense stat by 1 stage. This move's power is boosted by 50% when the Gravity status is active."
  },
  {
    "name": "gravity",
    "label": "Gravity",
    "type": "psychic",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Gives the entire field the Gravity status for 5 turns."
  },
  {
    "name": "growth",
    "label": "Growth",
    "type": "grass",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Attack and Sp. Atk stats by 1 stage. In harsh sunlight these stats will be boosted by 2 stages instead."
  },
  {
    "name": "guard-split",
    "label": "Guard Split",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user adds its Defense stat to the target's Defense stat then splits the total in half for them to share. It does the same with each of their Sp. Def stats."
  },
  {
    "name": "guard-swap",
    "label": "Guard Swap",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user swaps the changes to its Defense and Sp. Def stats with the changes to the target's Defense and Sp. Def stats."
  },
  {
    "name": "guillotine",
    "label": "Guillotine",
    "type": "normal",
    "damageClass": "physical",
    "pp": 8,
    "power": null,
    "accuracy": 30,
    "description": "Knocks out the target. The accuracy of this move is fixed at 30%."
  },
  {
    "name": "gunk-shot",
    "label": "Gunk Shot",
    "type": "poison",
    "damageClass": "physical",
    "pp": 8,
    "power": 120,
    "accuracy": 80,
    "description": "Has a 30% chance of poisoning the target."
  },
  {
    "name": "gyro-ball",
    "label": "Gyro Ball",
    "type": "steel",
    "damageClass": "physical",
    "pp": 8,
    "power": null,
    "accuracy": 100,
    "description": "The lower the user's Speed stat compared to the target's the greater this move's power (ranging between 1 and 150)."
  },
  {
    "name": "hammer-arm",
    "label": "Hammer Arm",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 12,
    "power": 100,
    "accuracy": 90,
    "description": "Lowers the user's Speed stat by 1 stage."
  },
  {
    "name": "hard-press",
    "label": "Hard Press",
    "type": "steel",
    "damageClass": "physical",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The more HP the target has left the greater this move's power (ranging between 1 and 100)."
  },
  {
    "name": "haze",
    "label": "Haze",
    "type": "ice",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Eliminates every stat change on the entire field."
  },
  {
    "name": "head-smash",
    "label": "Head Smash",
    "type": "rock",
    "damageClass": "physical",
    "pp": 8,
    "power": 150,
    "accuracy": 80,
    "description": "The user takes 1/2 of the damage dealt by this move."
  },
  {
    "name": "headlong-rush",
    "label": "Headlong Rush",
    "type": "ground",
    "damageClass": "physical",
    "pp": 8,
    "power": 120,
    "accuracy": 100,
    "description": "Lowers the user's Defense and Sp. Def stats by 1 stage."
  },
  {
    "name": "heal-bell",
    "label": "Heal Bell",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "The user cures the status conditions of all the Pokémon in its party including itself as well as its allies."
  },
  {
    "name": "heal-pulse",
    "label": "Heal Pulse",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Restores 1/2 of the target's max HP."
  },
  {
    "name": "healing-wish",
    "label": "Healing Wish",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user faints. The Pokémon taking its place will have its HP fully restored and its status conditions cured."
  },
  {
    "name": "heat-crash",
    "label": "Heat Crash",
    "type": "fire",
    "damageClass": "physical",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The more the user outweighs the target the greater this move's power (ranging between 40 and 120). If the target has the Minimized status this move's power is doubled and it will be sure to hit."
  },
  {
    "name": "heat-wave",
    "label": "Heat Wave",
    "type": "fire",
    "damageClass": "special",
    "pp": 12,
    "power": 95,
    "accuracy": 90,
    "description": "Has a 10% chance of burning targets."
  },
  {
    "name": "heavy-slam",
    "label": "Heavy Slam",
    "type": "steel",
    "damageClass": "physical",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The more the user outweighs the target the greater this move's power (ranging between 40 and 120). If the target has the Minimized status this move's power is doubled and it will be sure to hit."
  },
  {
    "name": "helping-hand",
    "label": "Helping Hand",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the power of an ally's move by 50% during the turn this move is used."
  },
  {
    "name": "hex",
    "label": "Hex",
    "type": "ghost",
    "damageClass": "special",
    "pp": 12,
    "power": 65,
    "accuracy": 100,
    "description": "This move's power is doubled if the target has a status condition."
  },
  {
    "name": "high-horsepower",
    "label": "High Horsepower",
    "type": "ground",
    "damageClass": "physical",
    "pp": 12,
    "power": 95,
    "accuracy": 95,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "high-jump-kick",
    "label": "High Jump Kick",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 12,
    "power": 130,
    "accuracy": 90,
    "description": "If this move misses or fails the user takes damage equal to 1/2 of its max HP."
  },
  {
    "name": "horn-drill",
    "label": "Horn Drill",
    "type": "normal",
    "damageClass": "physical",
    "pp": 8,
    "power": null,
    "accuracy": 30,
    "description": "Knocks out the target. The accuracy of this move is fixed at 30%."
  },
  {
    "name": "horn-leech",
    "label": "Horn Leech",
    "type": "grass",
    "damageClass": "physical",
    "pp": 12,
    "power": 75,
    "accuracy": 100,
    "description": "The user's HP is restored by 1/2 of the damage dealt by this move."
  },
  {
    "name": "howl",
    "label": "Howl",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the Attack stats of the user and its allies by 1 stage."
  },
  {
    "name": "hurricane",
    "label": "Hurricane",
    "type": "flying",
    "damageClass": "special",
    "pp": 12,
    "power": 110,
    "accuracy": 70,
    "description": "Has a 30% chance of confusing the target. This move never misses in rain and can hit a target that has the Sky-High status."
  },
  {
    "name": "hydro-cannon",
    "label": "Hydro Cannon",
    "type": "water",
    "damageClass": "special",
    "pp": 8,
    "power": 150,
    "accuracy": 90,
    "description": "The user gains the Recharging status on the turn after this move is used."
  },
  {
    "name": "hydro-pump",
    "label": "Hydro Pump",
    "type": "water",
    "damageClass": "special",
    "pp": 8,
    "power": 110,
    "accuracy": 80,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "hyper-beam",
    "label": "Hyper Beam",
    "type": "normal",
    "damageClass": "special",
    "pp": 8,
    "power": 150,
    "accuracy": 90,
    "description": "The user gains the Recharging status on the turn after this move is used."
  },
  {
    "name": "hyper-voice",
    "label": "Hyper Voice",
    "type": "normal",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "hypnosis",
    "label": "Hypnosis",
    "type": "psychic",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 60,
    "description": "Puts the target to sleep."
  },
  {
    "name": "ice-beam",
    "label": "Ice Beam",
    "type": "ice",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 10% chance of freezing the target."
  },
  {
    "name": "ice-fang",
    "label": "Ice Fang",
    "type": "ice",
    "damageClass": "physical",
    "pp": 16,
    "power": 65,
    "accuracy": 95,
    "description": "Has a 10% chance of freezing the target and a 10% chance of making the target flinch."
  },
  {
    "name": "ice-hammer",
    "label": "Ice Hammer",
    "type": "ice",
    "damageClass": "physical",
    "pp": 12,
    "power": 100,
    "accuracy": 90,
    "description": "Lowers the user's Speed stat by 1 stage."
  },
  {
    "name": "ice-punch",
    "label": "Ice Punch",
    "type": "ice",
    "damageClass": "physical",
    "pp": 16,
    "power": 75,
    "accuracy": 100,
    "description": "Has a 10% chance of freezing the target."
  },
  {
    "name": "ice-shard",
    "label": "Ice Shard",
    "type": "ice",
    "damageClass": "physical",
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "ice-spinner",
    "label": "Ice Spinner",
    "type": "ice",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Removes any terrain."
  },
  {
    "name": "icicle-crash",
    "label": "Icicle Crash",
    "type": "ice",
    "damageClass": "physical",
    "pp": 12,
    "power": 85,
    "accuracy": 90,
    "description": "Has a 30% chance of making the target flinch."
  },
  {
    "name": "icicle-spear",
    "label": "Icicle Spear",
    "type": "ice",
    "damageClass": "physical",
    "pp": 20,
    "power": 25,
    "accuracy": 100,
    "description": "The user attacks 2 to 5 times in a row."
  },
  {
    "name": "icy-wind",
    "label": "Icy Wind",
    "type": "ice",
    "damageClass": "special",
    "pp": 16,
    "power": 55,
    "accuracy": 95,
    "description": "Lowers targets' Speed stats by 1 stage."
  },
  {
    "name": "imprison",
    "label": "Imprison",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user gains the Sealing Off status."
  },
  {
    "name": "infernal-parade",
    "label": "Infernal Parade",
    "type": "ghost",
    "damageClass": "special",
    "pp": 16,
    "power": 65,
    "accuracy": 100,
    "description": "Has a 30% chance of burning the target. This move's power is doubled if the target has a status condition."
  },
  {
    "name": "inferno",
    "label": "Inferno",
    "type": "fire",
    "damageClass": "special",
    "pp": 8,
    "power": 100,
    "accuracy": 50,
    "description": "Burns the target."
  },
  {
    "name": "infestation",
    "label": "Infestation",
    "type": "bug",
    "damageClass": "special",
    "pp": 20,
    "power": 20,
    "accuracy": 100,
    "description": "Gives the target the Bound status."
  },
  {
    "name": "ingrain",
    "label": "Ingrain",
    "type": "grass",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "The user gains the Ingrained status."
  },
  {
    "name": "instruct",
    "label": "Instruct",
    "type": "psychic",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "The user makes the target reuse the last move it used."
  },
  {
    "name": "iron-defense",
    "label": "Iron Defense",
    "type": "steel",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Defense stat by 2 stages."
  },
  {
    "name": "iron-head",
    "label": "Iron Head",
    "type": "steel",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 20% chance of making the target flinch."
  },
  {
    "name": "iron-tail",
    "label": "Iron Tail",
    "type": "steel",
    "damageClass": "physical",
    "pp": 16,
    "power": 100,
    "accuracy": 75,
    "description": "Has a 30% chance of lowering the target's Defense stat by 1 stage."
  },
  {
    "name": "jet-punch",
    "label": "Jet Punch",
    "type": "water",
    "damageClass": "physical",
    "pp": 16,
    "power": 60,
    "accuracy": 100,
    "description": ""
  },
  {
    "name": "kings-shield",
    "label": "King's Shield",
    "type": "steel",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "The user protects itself from incoming attacks for the turn and changes into its Shield Forme. Any attackers that use contact moves against the user during this turn will have their Attack stats lowered by 1 stage. With each consecutive use this move's chance of success becomes 1/3 of what it was before."
  },
  {
    "name": "knock-off",
    "label": "Knock Off",
    "type": "dark",
    "damageClass": "physical",
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "description": "This move's power is boosted by 50% if the target is holding an item. Causes the target to lose its held item."
  },
  {
    "name": "kowtow-cleave",
    "label": "Kowtow Cleave",
    "type": "dark",
    "damageClass": "physical",
    "pp": 12,
    "power": 85,
    "accuracy": null,
    "description": "This move never misses."
  },
  {
    "name": "lash-out",
    "label": "Lash Out",
    "type": "dark",
    "damageClass": "physical",
    "pp": 8,
    "power": 75,
    "accuracy": 100,
    "description": "This move's power is doubled if the user's stats were lowered during the turn this move is used."
  },
  {
    "name": "last-resort",
    "label": "Last Resort",
    "type": "normal",
    "damageClass": "physical",
    "pp": 8,
    "power": 140,
    "accuracy": 100,
    "description": "This move fails unless the user has already used all the other moves it knows."
  },
  {
    "name": "last-respects",
    "label": "Last Respects",
    "type": "ghost",
    "damageClass": "physical",
    "pp": 12,
    "power": 50,
    "accuracy": 100,
    "description": "This move's power is increased by 50 for each time that a Pokémon in the user's party has fainted."
  },
  {
    "name": "lava-plume",
    "label": "Lava Plume",
    "type": "fire",
    "damageClass": "special",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 30% chance of burning targets."
  },
  {
    "name": "leaf-blade",
    "label": "Leaf Blade",
    "type": "grass",
    "damageClass": "physical",
    "pp": 16,
    "power": 90,
    "accuracy": 100,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "leaf-storm",
    "label": "Leaf Storm",
    "type": "grass",
    "damageClass": "special",
    "pp": 8,
    "power": 130,
    "accuracy": 90,
    "description": "Lowers the user's Sp. Atk stat by 2 stages."
  },
  {
    "name": "leech-life",
    "label": "Leech Life",
    "type": "bug",
    "damageClass": "physical",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "The user's HP is restored by 1/2 of the damage dealt by this move."
  },
  {
    "name": "leech-seed",
    "label": "Leech Seed",
    "type": "grass",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 90,
    "description": "Gives the target the Leech Seeded status."
  },
  {
    "name": "life-dew",
    "label": "Life Dew",
    "type": "water",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Restores 1/4 of the max HP of the user and its allies."
  },
  {
    "name": "light-of-ruin",
    "label": "Light of Ruin",
    "type": "fairy",
    "damageClass": "special",
    "pp": 8,
    "power": 140,
    "accuracy": 90,
    "description": "The user takes 1/2 of the damage dealt by this move."
  },
  {
    "name": "light-screen",
    "label": "Light Screen",
    "type": "psychic",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Gives the user's side the Light Screen status for 5 turns."
  },
  {
    "name": "liquidation",
    "label": "Liquidation",
    "type": "water",
    "damageClass": "physical",
    "pp": 12,
    "power": 85,
    "accuracy": 100,
    "description": "Has a 20% chance of lowering the target's Defense stat by 1 stage."
  },
  {
    "name": "lock-on",
    "label": "Lock-On",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "The user gains the Locked On status."
  },
  {
    "name": "low-kick",
    "label": "Low Kick",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "The heavier the target the greater this move's power (ranging between 20 and 120)."
  },
  {
    "name": "low-sweep",
    "label": "Low Sweep",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "description": "Lowers the target's Speed stat by 1 stage."
  },
  {
    "name": "lumina-crash",
    "label": "Lumina Crash",
    "type": "psychic",
    "damageClass": "special",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "Lowers the target's Sp. Def stat by 2 stages."
  },
  {
    "name": "lunge",
    "label": "Lunge",
    "type": "bug",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Lowers the target's Attack stat by 1 stage."
  },
  {
    "name": "mach-punch",
    "label": "Mach Punch",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "magic-powder",
    "label": "Magic Powder",
    "type": "psychic",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Changes the target's type to Psychic."
  },
  {
    "name": "magic-room",
    "label": "Magic Room",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Gives the entire field the Magic Room status for 5 turns."
  },
  {
    "name": "magnet-rise",
    "label": "Magnet Rise",
    "type": "electric",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user gains the Magnet Rise status."
  },
  {
    "name": "magnetic-flux",
    "label": "Magnetic Flux",
    "type": "electric",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "If the user or its allies have the Plus Ability or the Minus Ability their Defense and Sp. Def stats are boosted by 1 stage."
  },
  {
    "name": "make-it-rain",
    "label": "Make It Rain",
    "type": "steel",
    "damageClass": "special",
    "pp": 8,
    "power": 120,
    "accuracy": 95,
    "description": "Lowers the user's Sp. Atk stat by 2 stages."
  },
  {
    "name": "matcha-gotcha",
    "label": "Matcha Gotcha",
    "type": "grass",
    "damageClass": "special",
    "pp": 16,
    "power": 80,
    "accuracy": 90,
    "description": "Has a 20% chance of burning targets. The user's HP is restored by 1/2 of the damage dealt by this move."
  },
  {
    "name": "mean-look",
    "label": "Mean Look",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Gives the target the Can't Escape status."
  },
  {
    "name": "mega-kick",
    "label": "Mega Kick",
    "type": "normal",
    "damageClass": "physical",
    "pp": 8,
    "power": 120,
    "accuracy": 75,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "megahorn",
    "label": "Megahorn",
    "type": "bug",
    "damageClass": "physical",
    "pp": 12,
    "power": 120,
    "accuracy": 85,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "memento",
    "label": "Memento",
    "type": "dark",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Attack and Sp. Atk stats by 2 stages. The user faints upon using this move."
  },
  {
    "name": "metal-burst",
    "label": "Metal Burst",
    "type": "steel",
    "damageClass": "physical",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The user retaliates to deal 150% of the damage it took from an opponent's move during the turn this move is used."
  },
  {
    "name": "metal-sound",
    "label": "Metal Sound",
    "type": "steel",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 85,
    "description": "Lowers the target's Sp. Def stat by 2 stages."
  },
  {
    "name": "meteor-beam",
    "label": "Meteor Beam",
    "type": "rock",
    "damageClass": "special",
    "pp": 12,
    "power": 120,
    "accuracy": 90,
    "description": "The user gains the Charging status on the turn this move is used then attacks on the following turn. The user's Sp. Atk stat is boosted by 1 stage on the turn this move is used."
  },
  {
    "name": "meteor-mash",
    "label": "Meteor Mash",
    "type": "steel",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 90,
    "description": "Has a 20% chance of boosting the user's Attack stat by 1 stage."
  },
  {
    "name": "minimize",
    "label": "Minimize",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's evasiveness by 2 stages. The user gains the Minimized status."
  },
  {
    "name": "mirror-coat",
    "label": "Mirror Coat",
    "type": "psychic",
    "damageClass": "special",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "The user retaliates to deal double the damage it took from an opponent's special move during the turn this move is used."
  },
  {
    "name": "misty-explosion",
    "label": "Misty Explosion",
    "type": "fairy",
    "damageClass": "special",
    "pp": 8,
    "power": 100,
    "accuracy": 100,
    "description": "If the user is under the effect of Misty Terrain this move's power is boosted by 50%. The user faints upon using this move."
  },
  {
    "name": "misty-terrain",
    "label": "Misty Terrain",
    "type": "fairy",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Turns the entire field into Misty Terrain for 5 turns."
  },
  {
    "name": "moonblast",
    "label": "Moonblast",
    "type": "fairy",
    "damageClass": "special",
    "pp": 16,
    "power": 95,
    "accuracy": 100,
    "description": "Has a 10% chance of lowering the target's Sp. Atk stat by 1 stage."
  },
  {
    "name": "moonlight",
    "label": "Moonlight",
    "type": "fairy",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Restores 1/2 of the user's max HP. In harsh sunlight 2/3 of its max HP will be restored instead. In all other weather conditions 1/4 of its max HP will be restored instead."
  },
  {
    "name": "morning-sun",
    "label": "Morning Sun",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Restores 1/2 of the user's max HP. In harsh sunlight 2/3 of its max HP will be restored instead. In all other weather conditions 1/4 of its max HP will be restored instead."
  },
  {
    "name": "mortal-spin",
    "label": "Mortal Spin",
    "type": "poison",
    "damageClass": "physical",
    "pp": 16,
    "power": 30,
    "accuracy": 100,
    "description": "Removes the Bound and Leech Seeded statuses from the user and removes the Sticky Web Stealth Rock Spikes and Toxic Spikes statuses from the user's side. Poisons targets."
  },
  {
    "name": "mountain-gale",
    "label": "Mountain Gale",
    "type": "ice",
    "damageClass": "physical",
    "pp": 12,
    "power": 120,
    "accuracy": 85,
    "description": "Has a 30% chance of making the target flinch."
  },
  {
    "name": "mud-shot",
    "label": "Mud Shot",
    "type": "ground",
    "damageClass": "special",
    "pp": 16,
    "power": 55,
    "accuracy": 95,
    "description": "Lowers the target's Speed stat by 1 stage."
  },
  {
    "name": "mud-slap",
    "label": "Mud-Slap",
    "type": "ground",
    "damageClass": "special",
    "pp": 12,
    "power": 20,
    "accuracy": 100,
    "description": "Lowers the target's accuracy by 1 stage."
  },
  {
    "name": "muddy-water",
    "label": "Muddy Water",
    "type": "water",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 85,
    "description": "Has a 30% chance of lowering targets' accuracy by 1 stage."
  },
  {
    "name": "mystical-fire",
    "label": "Mystical Fire",
    "type": "fire",
    "damageClass": "special",
    "pp": 12,
    "power": 75,
    "accuracy": 100,
    "description": "Lowers the target's Sp. Atk stat by 1 stage."
  },
  {
    "name": "nasty-plot",
    "label": "Nasty Plot",
    "type": "dark",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Sp. Atk stat by 2 stages."
  },
  {
    "name": "night-daze",
    "label": "Night Daze",
    "type": "dark",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 95,
    "description": "Has a 40% chance of lowering the target's accuracy by 1 stage."
  },
  {
    "name": "night-shade",
    "label": "Night Shade",
    "type": "ghost",
    "damageClass": "special",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Deals 50 HP of damage."
  },
  {
    "name": "night-slash",
    "label": "Night Slash",
    "type": "dark",
    "damageClass": "physical",
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "no-retreat",
    "label": "No Retreat",
    "type": "fighting",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Attack, Defense, Sp. Atk, Sp. Def, and Speed stats by 1 stage. The user gains the Can't Escape status. This move can only be used once per time the user enters battleâ€” otherwise it will fail."
  },
  {
    "name": "noble-roar",
    "label": "Noble Roar",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Attack and Sp. Atk stats by 1 stage."
  },
  {
    "name": "nuzzle",
    "label": "Nuzzle",
    "type": "electric",
    "damageClass": "physical",
    "pp": 20,
    "power": 20,
    "accuracy": 100,
    "description": "Paralyzes the target."
  },
  {
    "name": "outrage",
    "label": "Outrage",
    "type": "dragon",
    "damageClass": "physical",
    "pp": 12,
    "power": 120,
    "accuracy": 100,
    "description": "The user gains the Rampaging status."
  },
  {
    "name": "overheat",
    "label": "Overheat",
    "type": "fire",
    "damageClass": "special",
    "pp": 8,
    "power": 130,
    "accuracy": 90,
    "description": "Lowers the user's Sp. Atk stat by 2 stages."
  },
  {
    "name": "pain-split",
    "label": "Pain Split",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "The user adds its remaining HP to the target's remaining HP then splits the total in half for them to share."
  },
  {
    "name": "parabolic-charge",
    "label": "Parabolic Charge",
    "type": "electric",
    "damageClass": "special",
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "description": "The user's HP is restored by 1/2 of the damage dealt by this move."
  },
  {
    "name": "parting-shot",
    "label": "Parting Shot",
    "type": "dark",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Attack and Sp. Atk stats by 1 stage. The user then switches out of battle to be replaced by another party Pokémon."
  },
  {
    "name": "payback",
    "label": "Payback",
    "type": "dark",
    "damageClass": "physical",
    "pp": 12,
    "power": 50,
    "accuracy": 100,
    "description": "This move's power is doubled if the user attacks after the target."
  },
  {
    "name": "perish-song",
    "label": "Perish Song",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Gives all Pokémon on the field the Perishing status."
  },
  {
    "name": "petal-blizzard",
    "label": "Petal Blizzard",
    "type": "grass",
    "damageClass": "physical",
    "pp": 16,
    "power": 90,
    "accuracy": 100,
    "description": "Inflicts regular damage."
  },
  {
    "name": "petal-dance",
    "label": "Petal Dance",
    "type": "grass",
    "damageClass": "special",
    "pp": 12,
    "power": 120,
    "accuracy": 100,
    "description": "The user gains the Rampaging status."
  },
  {
    "name": "phantom-force",
    "label": "Phantom Force",
    "type": "ghost",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "The user gains the Concealed status on the turn this move is used then attacks on the following turn. This move can hit a target using a move such as Protect or Detect and removes the effects of those moves."
  },
  {
    "name": "pin-missile",
    "label": "Pin Missile",
    "type": "bug",
    "damageClass": "physical",
    "pp": 20,
    "power": 25,
    "accuracy": 95,
    "description": "The user attacks 2 to 5 times in a row."
  },
  {
    "name": "play-rough",
    "label": "Play Rough",
    "type": "fairy",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 90,
    "description": "Has a 10% chance of lowering the target's Attack stat by 1 stage."
  },
  {
    "name": "pluck",
    "label": "Pluck",
    "type": "flying",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "description": "If the target is holding a Berry the user eats that Berry and gains its effect."
  },
  {
    "name": "poison-fang",
    "label": "Poison Fang",
    "type": "poison",
    "damageClass": "physical",
    "pp": 16,
    "power": 50,
    "accuracy": 100,
    "description": "Has a 50% chance of badly poisoning the target."
  },
  {
    "name": "poison-jab",
    "label": "Poison Jab",
    "type": "poison",
    "damageClass": "physical",
    "pp": 20,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 30% chance of poisoning the target."
  },
  {
    "name": "poison-powder",
    "label": "Poison Powder",
    "type": "poison",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 75,
    "description": "Poisons the target."
  },
  {
    "name": "pollen-puff",
    "label": "Pollen Puff",
    "type": "bug",
    "damageClass": "special",
    "pp": 16,
    "power": 90,
    "accuracy": 100,
    "description": "When used on an ally this move restores 1/2 of its max HP instead of dealing damage."
  },
  {
    "name": "poltergeist",
    "label": "Poltergeist",
    "type": "ghost",
    "damageClass": "physical",
    "pp": 8,
    "power": 110,
    "accuracy": 90,
    "description": "This move fails if the target isn't holding an item."
  },
  {
    "name": "population-bomb",
    "label": "Population Bomb",
    "type": "normal",
    "damageClass": "physical",
    "pp": 12,
    "power": 20,
    "accuracy": 90,
    "description": "The user attacks 1 to 10 times in a row. The attack ends if the user misses."
  },
  {
    "name": "pounce",
    "label": "Pounce",
    "type": "bug",
    "damageClass": "physical",
    "pp": 20,
    "power": 50,
    "accuracy": 100,
    "description": "Lowers the target's Speed stat by 1 stage."
  },
  {
    "name": "power-gem",
    "label": "Power Gem",
    "type": "rock",
    "damageClass": "special",
    "pp": 20,
    "power": 80,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "power-shift",
    "label": "Power Shift",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user gains the Atk/Def Swapped status."
  },
  {
    "name": "power-split",
    "label": "Power Split",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user adds its Attack stat to the target's Attack stat then splits the total in half for them to share. It does the same with each of their Sp. Atk stats."
  },
  {
    "name": "power-swap",
    "label": "Power Swap",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user swaps the changes to its Attack and Sp. Atk stats with the changes to the target's Attack and Sp. Atk stats."
  },
  {
    "name": "power-trick",
    "label": "Power Trick",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user gains the Atk/Def Swapped status."
  },
  {
    "name": "power-trip",
    "label": "Power Trip",
    "type": "dark",
    "damageClass": "physical",
    "pp": 12,
    "power": 20,
    "accuracy": 100,
    "description": "This move's power is increased by 20 for each stage that the user's stats have been boosted."
  },
  {
    "name": "power-whip",
    "label": "Power Whip",
    "type": "grass",
    "damageClass": "physical",
    "pp": 12,
    "power": 120,
    "accuracy": 85,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "protect",
    "label": "Protect",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "The user protects itself from incoming moves for the turn. With each consecutive use this move's chance of success becomes 1/3 of what it was before."
  },
  {
    "name": "psych-up",
    "label": "Psych Up",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user copies the target's stat changes."
  },
  {
    "name": "psychic",
    "label": "Psychic",
    "type": "psychic",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 10% chance of lowering the target's Sp. Def stat by 1 stage."
  },
  {
    "name": "psychic-fangs",
    "label": "Psychic Fangs",
    "type": "psychic",
    "damageClass": "physical",
    "pp": 12,
    "power": 85,
    "accuracy": 100,
    "description": "Removes the Light Screen Reflect and Aurora Veil statuses on the target's side."
  },
  {
    "name": "psychic-noise",
    "label": "Psychic Noise",
    "type": "psychic",
    "damageClass": "special",
    "pp": 12,
    "power": 75,
    "accuracy": 100,
    "description": "Gives the target the Healing Prevented status for 2 turns."
  },
  {
    "name": "psychic-terrain",
    "label": "Psychic Terrain",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Turns the entire field into Psychic Terrain for 5 turns."
  },
  {
    "name": "psycho-cut",
    "label": "Psycho Cut",
    "type": "psychic",
    "damageClass": "physical",
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "psyshield-bash",
    "label": "Psyshield Bash",
    "type": "psychic",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 90,
    "description": "Boosts the user's Defense stat by 1 stage."
  },
  {
    "name": "psyshock",
    "label": "Psyshock",
    "type": "psychic",
    "damageClass": "special",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "This is a special move but the damage it deals is calculated using the target's Defense stat."
  },
  {
    "name": "quash",
    "label": "Quash",
    "type": "dark",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Causes the target to move last in the turn."
  },
  {
    "name": "quick-attack",
    "label": "Quick Attack",
    "type": "normal",
    "damageClass": "physical",
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "quick-guard",
    "label": "Quick Guard",
    "type": "fighting",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "The user protects itself and its allies from priority moves for the turn."
  },
  {
    "name": "quiver-dance",
    "label": "Quiver Dance",
    "type": "bug",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Sp. Atk Sp. Def and Speed stats by 1 stage."
  },
  {
    "name": "rage-fist",
    "label": "Rage Fist",
    "type": "ghost",
    "damageClass": "physical",
    "pp": 12,
    "power": 50,
    "accuracy": 100,
    "description": "This move's power is increased by 50 each time the user takes damage from a move, up to a maximum power of 350. If the user switches out of battle, the move's power returns to its usual value."
  },
  {
    "name": "rage-powder",
    "label": "Rage Powder",
    "type": "bug",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "The user redirects opponents' moves toward itself. This effect works only on single-target moves."
  },
  {
    "name": "raging-bull",
    "label": "Raging Bull",
    "type": "normal",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Removes the Light Screen Reflect and Aurora Veil statuses on the target's side. This move's type depends on the user's form."
  },
  {
    "name": "raging-fury",
    "label": "Raging Fury",
    "type": "fire",
    "damageClass": "physical",
    "pp": 12,
    "power": 120,
    "accuracy": 100,
    "description": "The user gains the Rampaging status."
  },
  {
    "name": "rain-dance",
    "label": "Rain Dance",
    "type": "water",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Summons rain for 5 turns."
  },
  {
    "name": "rapid-spin",
    "label": "Rapid Spin",
    "type": "normal",
    "damageClass": "physical",
    "pp": 20,
    "power": 50,
    "accuracy": 100,
    "description": "Removes the Bound and Leech Seeded statuses from the user and removes the Sticky Web Stealth Rock Spikes and Toxic Spikes statuses from the user's side. Boosts the user's Speed stat by 1 stage."
  },
  {
    "name": "razor-shell",
    "label": "Razor Shell",
    "type": "water",
    "damageClass": "physical",
    "pp": 12,
    "power": 75,
    "accuracy": 95,
    "description": "Has a 50% chance of lowering the target's Defense stat by 1 stage."
  },
  {
    "name": "recover",
    "label": "Recover",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Restores 1/2 of the user's max HP."
  },
  {
    "name": "recycle",
    "label": "Recycle",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Regenerates the last held item that the user consumed. The user then holds this item once more."
  },
  {
    "name": "reflect",
    "label": "Reflect",
    "type": "psychic",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Gives the user's side the Reflect status for 5 turns."
  },
  {
    "name": "reflect-type",
    "label": "Reflect Type",
    "type": "normal",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "The user becomes the same type or types as the target."
  },
  {
    "name": "rest",
    "label": "Rest",
    "type": "psychic",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Fully restores the user's HP and cures any status conditions. The user falls asleep for 2 turns. This move fails if the user's HP is full."
  },
  {
    "name": "reversal",
    "label": "Reversal",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "The less HP the user has left the greater this move's power (ranging between 20 and 200)."
  },
  {
    "name": "rising-voltage",
    "label": "Rising Voltage",
    "type": "electric",
    "damageClass": "special",
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "description": "This move's power is doubled if the target is under the effect of Electric Terrain."
  },
  {
    "name": "roar",
    "label": "Roar",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "If there are other Pokémon in the target's party that can switch into battle the target is forced to switch out of battle and is replaced by one of those Pokémon at random."
  },
  {
    "name": "rock-blast",
    "label": "Rock Blast",
    "type": "rock",
    "damageClass": "physical",
    "pp": 12,
    "power": 25,
    "accuracy": 90,
    "description": "The user attacks 2 to 5 times in a row."
  },
  {
    "name": "rock-polish",
    "label": "Rock Polish",
    "type": "rock",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Speed stat by 2 stages."
  },
  {
    "name": "rock-slide",
    "label": "Rock Slide",
    "type": "rock",
    "damageClass": "physical",
    "pp": 12,
    "power": 75,
    "accuracy": 90,
    "description": "Has a 30% chance of making targets flinch."
  },
  {
    "name": "rock-tomb",
    "label": "Rock Tomb",
    "type": "rock",
    "damageClass": "physical",
    "pp": 16,
    "power": 60,
    "accuracy": 95,
    "description": "Lowers the target's Speed stat by 1 stage."
  },
  {
    "name": "rock-wrecker",
    "label": "Rock Wrecker",
    "type": "rock",
    "damageClass": "physical",
    "pp": 8,
    "power": 150,
    "accuracy": 90,
    "description": "The user gains the Recharging status on the turn after this move is used."
  },
  {
    "name": "role-play",
    "label": "Role Play",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Changes the user's Ability to be the same as the target's."
  },
  {
    "name": "roost",
    "label": "Roost",
    "type": "flying",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Restores 1/2 of the user's max HP. If the user is a Flying type it will lose the Flying type for the turn."
  },
  {
    "name": "round",
    "label": "Round",
    "type": "normal",
    "damageClass": "special",
    "pp": 16,
    "power": 60,
    "accuracy": 100,
    "description": "If multiple Pokémon use this move in the same turn the second user onward will act immediately after the first and the power of the second Round onward will be doubled."
  },
  {
    "name": "sacred-sword",
    "label": "Sacred Sword",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 16,
    "power": 90,
    "accuracy": 100,
    "description": "This move ignores the target's stat changes when dealing damage."
  },
  {
    "name": "safeguard",
    "label": "Safeguard",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Gives the user's side the Safeguard status for 5 turns."
  },
  {
    "name": "salt-cure",
    "label": "Salt Cure",
    "type": "rock",
    "damageClass": "physical",
    "pp": 16,
    "power": 40,
    "accuracy": 100,
    "description": "Gives the target the Salt Cured status."
  },
  {
    "name": "sand-tomb",
    "label": "Sand Tomb",
    "type": "ground",
    "damageClass": "physical",
    "pp": 16,
    "power": 35,
    "accuracy": 85,
    "description": "Gives the target the Bound status."
  },
  {
    "name": "sandstorm",
    "label": "Sandstorm",
    "type": "rock",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Summons a sandstorm for 5 turns."
  },
  {
    "name": "scald",
    "label": "Scald",
    "type": "water",
    "damageClass": "special",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 30% chance of burning the target. Cures the user and target of being frozen."
  },
  {
    "name": "scale-shot",
    "label": "Scale Shot",
    "type": "dragon",
    "damageClass": "physical",
    "pp": 20,
    "power": 25,
    "accuracy": 90,
    "description": "The user attacks 2 to 5 times in a row. This move lowers the user's Defense stat by 1 stage and boosts its Speed stat by 1 stage."
  },
  {
    "name": "scary-face",
    "label": "Scary Face",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Speed stat by 2 stages."
  },
  {
    "name": "scorching-sands",
    "label": "Scorching Sands",
    "type": "ground",
    "damageClass": "special",
    "pp": 12,
    "power": 70,
    "accuracy": 100,
    "description": "Has a 30% chance of burning the target. Cures the user and target of being frozen."
  },
  {
    "name": "screech",
    "label": "Screech",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 85,
    "description": "Lowers the target's Defense stat by 2 stages."
  },
  {
    "name": "seed-bomb",
    "label": "Seed Bomb",
    "type": "grass",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "seismic-toss",
    "label": "Seismic Toss",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Deals 50 HP of damage."
  },
  {
    "name": "self-destruct",
    "label": "Self-Destruct",
    "type": "normal",
    "damageClass": "physical",
    "pp": 8,
    "power": 200,
    "accuracy": 100,
    "description": "The user faints upon using this move."
  },
  {
    "name": "shadow-ball",
    "label": "Shadow Ball",
    "type": "ghost",
    "damageClass": "special",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 20% chance of lowering the target's Sp. Def stat by 1 stage."
  },
  {
    "name": "shadow-claw",
    "label": "Shadow Claw",
    "type": "ghost",
    "damageClass": "physical",
    "pp": 16,
    "power": 70,
    "accuracy": 100,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "shadow-punch",
    "label": "Shadow Punch",
    "type": "ghost",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": null,
    "description": "This move never misses."
  },
  {
    "name": "shadow-sneak",
    "label": "Shadow Sneak",
    "type": "ghost",
    "damageClass": "physical",
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "shed-tail",
    "label": "Shed Tail",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user loses 1/2 of its max HP to create a substitute then switches out of battle to be replaced by another party Pokémon. The substitute will be hit by moves instead of that Pokémon and it will vanish when it takes damage equal to 1/4 of the user's max HP."
  },
  {
    "name": "sheer-cold",
    "label": "Sheer Cold",
    "type": "ice",
    "damageClass": "special",
    "pp": 8,
    "power": null,
    "accuracy": 30,
    "description": "Knocks out the target. This move does not affect Ice types. The accuracy of this move is fixed at 30%. If used by Pokémon other than Ice types the accuracy of this move is 20%."
  },
  {
    "name": "shell-side-arm",
    "label": "Shell Side Arm",
    "type": "poison",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 20% chance of poisoning the target. Becomes a physical move if that will deal more damage."
  },
  {
    "name": "shell-smash",
    "label": "Shell Smash",
    "type": "normal",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "Lowers the user's Defense and Sp. Def stats by 1 stage and boosts its Attack Sp. Atk and Speed stats by 2 stages."
  },
  {
    "name": "shelter",
    "label": "Shelter",
    "type": "steel",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Defense stat by 2 stages."
  },
  {
    "name": "simple-beam",
    "label": "Simple Beam",
    "type": "normal",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Changes the target's Ability to Simple."
  },
  {
    "name": "sing",
    "label": "Sing",
    "type": "normal",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 55,
    "description": "Puts the target to sleep."
  },
  {
    "name": "skill-swap",
    "label": "Skill Swap",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user and the target swap their Abilities."
  },
  {
    "name": "skitter-smack",
    "label": "Skitter Smack",
    "type": "bug",
    "damageClass": "physical",
    "pp": 12,
    "power": 70,
    "accuracy": 90,
    "description": "Lowers the target's Sp. Atk stat by 1 stage."
  },
  {
    "name": "sky-attack",
    "label": "Sky Attack",
    "type": "flying",
    "damageClass": "physical",
    "pp": 8,
    "power": 140,
    "accuracy": 90,
    "description": "The user gains the Charging status on the turn this move is used then attacks on the following turn. This move has a 30% chance of making the target flinch and it has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "slack-off",
    "label": "Slack Off",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Restores 1/2 of the user's max HP."
  },
  {
    "name": "sleep-powder",
    "label": "Sleep Powder",
    "type": "grass",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 75,
    "description": "Puts the target to sleep."
  },
  {
    "name": "sleep-talk",
    "label": "Sleep Talk",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Can be used only if the user is asleep. The user uses one of the other moves it knows at random."
  },
  {
    "name": "sludge-bomb",
    "label": "Sludge Bomb",
    "type": "poison",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 30% chance of poisoning the target."
  },
  {
    "name": "sludge-wave",
    "label": "Sludge Wave",
    "type": "poison",
    "damageClass": "special",
    "pp": 12,
    "power": 95,
    "accuracy": 100,
    "description": "Has a 10% chance of poisoning targets."
  },
  {
    "name": "smack-down",
    "label": "Smack Down",
    "type": "rock",
    "damageClass": "physical",
    "pp": 16,
    "power": 50,
    "accuracy": 100,
    "description": "If the target is off the ground it gains the Landed status. This move can hit a target that has the Sky-High status."
  },
  {
    "name": "smart-strike",
    "label": "Smart Strike",
    "type": "steel",
    "damageClass": "physical",
    "pp": 12,
    "power": 70,
    "accuracy": null,
    "description": "This move never misses."
  },
  {
    "name": "snap-trap",
    "label": "Snap Trap",
    "type": "steel",
    "damageClass": "physical",
    "pp": 16,
    "power": 35,
    "accuracy": 100,
    "description": "Gives the target the Bound status."
  },
  {
    "name": "snarl",
    "label": "Snarl",
    "type": "dark",
    "damageClass": "special",
    "pp": 16,
    "power": 55,
    "accuracy": 95,
    "description": "Lowers targets' Sp. Atk stats by 1 stage."
  },
  {
    "name": "snore",
    "label": "Snore",
    "type": "normal",
    "damageClass": "special",
    "pp": 16,
    "power": 50,
    "accuracy": 100,
    "description": "Can be used only if the user is asleep. Has a 30% chance of making the target flinch."
  },
  {
    "name": "snowscape",
    "label": "Snowscape",
    "type": "ice",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Summons snow for 5 turns."
  },
  {
    "name": "soak",
    "label": "Soak",
    "type": "water",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Changes the target's type to Water."
  },
  {
    "name": "soft-boiled",
    "label": "Soft-Boiled",
    "type": "normal",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Restores 1/2 of the user's max HP."
  },
  {
    "name": "solar-beam",
    "label": "Solar Beam",
    "type": "grass",
    "damageClass": "special",
    "pp": 12,
    "power": 120,
    "accuracy": 100,
    "description": "The user gains the Charging status on the turn this move is used then attacks on the following turn. In harsh sunlight the user does not gain the Charging status and can attack immediately. This move's power is halved in any other weather condition."
  },
  {
    "name": "solar-blade",
    "label": "Solar Blade",
    "type": "grass",
    "damageClass": "physical",
    "pp": 12,
    "power": 125,
    "accuracy": 100,
    "description": "The user gains the Charging status on the turn this move is used then attacks on the following turn. In harsh sunlight the user does not gain the Charging status and can attack immediately. This move's power is halved in any other weather condition."
  },
  {
    "name": "sparkling-aria",
    "label": "Sparkling Aria",
    "type": "water",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Cures targets of their burns."
  },
  {
    "name": "speed-swap",
    "label": "Speed Swap",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user and the target swap their Speed stats."
  },
  {
    "name": "spicy-extract",
    "label": "Spicy Extract",
    "type": "grass",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "Lowers the target's Defense stat by 2 stages and boosts its Attack stat by 2 stages."
  },
  {
    "name": "spikes",
    "label": "Spikes",
    "type": "ground",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Gives the opponent's side the Spikes status."
  },
  {
    "name": "spiky-shield",
    "label": "Spiky Shield",
    "type": "grass",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "The user protects itself from incoming moves for the turn. Any attackers that use contact moves against the user during this turn take damage equal to 1/8 of their max HP. With each consecutive use this move's chance of success becomes 1/3 of what it was before."
  },
  {
    "name": "spirit-break",
    "label": "Spirit Break",
    "type": "fairy",
    "damageClass": "physical",
    "pp": 16,
    "power": 75,
    "accuracy": 100,
    "description": "Lowers the target's Sp. Atk stat by 1 stage."
  },
  {
    "name": "spirit-shackle",
    "label": "Spirit Shackle",
    "type": "ghost",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Gives the target the Can't Escape status."
  },
  {
    "name": "spit-up",
    "label": "Spit Up",
    "type": "normal",
    "damageClass": "special",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The higher the user's Stockpiling level the greater this move's power (ranging between 100 and 300). This move fails unless the user has the Stockpiling status."
  },
  {
    "name": "spite",
    "label": "Spite",
    "type": "ghost",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "Removes 4 PP from the move last used by the target."
  },
  {
    "name": "spore",
    "label": "Spore",
    "type": "grass",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Puts the target to sleep."
  },
  {
    "name": "stealth-rock",
    "label": "Stealth Rock",
    "type": "rock",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Gives the opponent's side the Stealth Rock status."
  },
  {
    "name": "steel-beam",
    "label": "Steel Beam",
    "type": "steel",
    "damageClass": "special",
    "pp": 8,
    "power": 140,
    "accuracy": 95,
    "description": "After attacking the user takes damage equal to 1/2 of its max HP."
  },
  {
    "name": "steel-roller",
    "label": "Steel Roller",
    "type": "steel",
    "damageClass": "physical",
    "pp": 8,
    "power": 130,
    "accuracy": 100,
    "description": "Removes any terrain. This move fails if there is no terrain on the field."
  },
  {
    "name": "steel-wing",
    "label": "Steel Wing",
    "type": "steel",
    "damageClass": "physical",
    "pp": 20,
    "power": 70,
    "accuracy": 90,
    "description": "Has a 10% chance of boosting the user's Defense stat by 1 stage."
  },
  {
    "name": "sticky-web",
    "label": "Sticky Web",
    "type": "bug",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Gives the opponent's side the Sticky Web status."
  },
  {
    "name": "stockpile",
    "label": "Stockpile",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Defense and Sp. Def stats by 1 stage. Raises the user's Stockpiling level by 1. Can be used up to 3 times."
  },
  {
    "name": "stomping-tantrum",
    "label": "Stomping Tantrum",
    "type": "ground",
    "damageClass": "physical",
    "pp": 12,
    "power": 75,
    "accuracy": 100,
    "description": "This move's power is doubled if the user couldn't act or its move missed or failed on the previous turn."
  },
  {
    "name": "stone-axe",
    "label": "Stone Axe",
    "type": "rock",
    "damageClass": "physical",
    "pp": 16,
    "power": 65,
    "accuracy": 90,
    "description": "Gives the opponent's side the Stealth Rock status."
  },
  {
    "name": "stone-edge",
    "label": "Stone Edge",
    "type": "rock",
    "damageClass": "physical",
    "pp": 8,
    "power": 100,
    "accuracy": 80,
    "description": "This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "stored-power",
    "label": "Stored Power",
    "type": "psychic",
    "damageClass": "special",
    "pp": 12,
    "power": 20,
    "accuracy": 100,
    "description": "This move's power is increased by 20 for each stage that the user's stats have been boosted."
  },
  {
    "name": "storm-throw",
    "label": "Storm Throw",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 12,
    "power": 60,
    "accuracy": 100,
    "description": "Always a critical hit."
  },
  {
    "name": "strength-sap",
    "label": "Strength Sap",
    "type": "grass",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "Restores the user's HP by an amount equal to the target's Attack stat. Lowers the target's Attack stat by 1 stage."
  },
  {
    "name": "string-shot",
    "label": "String Shot",
    "type": "bug",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 95,
    "description": "Lowers targets' Speed stats by 2 stages."
  },
  {
    "name": "struggle",
    "label": "Struggle",
    "type": "normal",
    "damageClass": "physical",
    "pp": 1,
    "power": 50,
    "accuracy": null,
    "description": "User takes 1/4 its max HP in recoil."
  },
  {
    "name": "struggle-bug",
    "label": "Struggle Bug",
    "type": "bug",
    "damageClass": "special",
    "pp": 20,
    "power": 50,
    "accuracy": 100,
    "description": "Lowers targets' Sp. Atk stats by 1 stage."
  },
  {
    "name": "stuff-cheeks",
    "label": "Stuff Cheeks",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user eats its held Berry and boosts its Defense stat by 2 stages. This move can't be used if the user is not holding a Berry."
  },
  {
    "name": "stun-spore",
    "label": "Stun Spore",
    "type": "grass",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 75,
    "description": "Paralyzes the target."
  },
  {
    "name": "substitute",
    "label": "Substitute",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user loses 1/4 of its max HP to create a substitute. The substitute will be hit by moves instead of the user and it will vanish when it takes damage equal to 1/4 of the user's max HP."
  },
  {
    "name": "sucker-punch",
    "label": "Sucker Punch",
    "type": "dark",
    "damageClass": "physical",
    "pp": 8,
    "power": 70,
    "accuracy": 100,
    "description": "This move fails unless the target has chosen an attack and has not yet attacked during the turn this move is used."
  },
  {
    "name": "sunny-day",
    "label": "Sunny Day",
    "type": "fire",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Summons harsh sunlight for 5 turns."
  },
  {
    "name": "super-fang",
    "label": "Super Fang",
    "type": "normal",
    "damageClass": "physical",
    "pp": 12,
    "power": null,
    "accuracy": 90,
    "description": "Deals damage to the target equal to 1/2 of its remaining HP. Deals 1 HP of damage to a target that has only 1 HP left."
  },
  {
    "name": "supercell-slam",
    "label": "Supercell Slam",
    "type": "electric",
    "damageClass": "physical",
    "pp": 16,
    "power": 100,
    "accuracy": 95,
    "description": "If this move misses or fails the user takes damage equal to 1/2 of its max HP. If the target has the Minimized status this move's power is doubled and it will be sure to hit."
  },
  {
    "name": "superpower",
    "label": "Superpower",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 8,
    "power": 120,
    "accuracy": 100,
    "description": "Lowers the user's Attack and Defense stats by 1 stage."
  },
  {
    "name": "surf",
    "label": "Surf",
    "type": "water",
    "damageClass": "special",
    "pp": 16,
    "power": 90,
    "accuracy": 100,
    "description": "This move's power is doubled against targets that have the Submerged status."
  },
  {
    "name": "swagger",
    "label": "Swagger",
    "type": "normal",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 85,
    "description": "Boosts the target's Attack stat by 2 stages and confuses it."
  },
  {
    "name": "swallow",
    "label": "Swallow",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The higher the user's Stockpiling level the more HP the user restores. Level 1 1/4 of the user's max HP is restored. Level 2 1/2 of the user's max HP is restored. Level 3 The user's HP is fully restored. This move fails unless the user has the Stockpiling status."
  },
  {
    "name": "sweet-kiss",
    "label": "Sweet Kiss",
    "type": "fairy",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 75,
    "description": "Confuses the target."
  },
  {
    "name": "sweet-scent",
    "label": "Sweet Scent",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Lowers targets' evasiveness by 2 stages."
  },
  {
    "name": "switcheroo",
    "label": "Switcheroo",
    "type": "dark",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The user and the target swap their held items."
  },
  {
    "name": "swords-dance",
    "label": "Swords Dance",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Boosts the user's Attack stat by 2 stages."
  },
  {
    "name": "synthesis",
    "label": "Synthesis",
    "type": "grass",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Restores 1/2 of the user's max HP. In harsh sunlight 2/3 of its max HP will be restored instead. In all other weather conditions 1/4 of its max HP will be restored instead."
  },
  {
    "name": "syrup-bomb",
    "label": "Syrup Bomb",
    "type": "grass",
    "damageClass": "special",
    "pp": 12,
    "power": 60,
    "accuracy": 90,
    "description": "Gives the target the Syrupy status for 3 turns."
  },
  {
    "name": "tail-slap",
    "label": "Tail Slap",
    "type": "normal",
    "damageClass": "physical",
    "pp": 12,
    "power": 25,
    "accuracy": 85,
    "description": "The user attacks 2 to 5 times in a row."
  },
  {
    "name": "tailwind",
    "label": "Tailwind",
    "type": "flying",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": null,
    "description": "Gives the user's side the Tailwind status for 4 turns."
  },
  {
    "name": "taunt",
    "label": "Taunt",
    "type": "dark",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Gives the target the Taunted status."
  },
  {
    "name": "tearful-look",
    "label": "Tearful Look",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Lowers the target's Attack and Sp. Atk stats by 1 stage. This move ignores the target's evasiveness and can hit a target using a move such as Protect."
  },
  {
    "name": "teatime",
    "label": "Teatime",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Causes all Pokémon on the field to eat their held Berries."
  },
  {
    "name": "teeter-dance",
    "label": "Teeter Dance",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Confuses all other Pokémon on the field."
  },
  {
    "name": "temper-flare",
    "label": "Temper Flare",
    "type": "fire",
    "damageClass": "physical",
    "pp": 12,
    "power": 75,
    "accuracy": 100,
    "description": "This move's power is doubled if the user couldn't act or its move missed or failed on the previous turn."
  },
  {
    "name": "terrain-pulse",
    "label": "Terrain Pulse",
    "type": "normal",
    "damageClass": "special",
    "pp": 12,
    "power": 50,
    "accuracy": 100,
    "description": "This move's power is doubled if the user is under the effect of a terrain. This move's type depends on the terrain."
  },
  {
    "name": "thief",
    "label": "Thief",
    "type": "dark",
    "damageClass": "physical",
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "description": "If the user is not already holding an item it steals the target's held item."
  },
  {
    "name": "thrash",
    "label": "Thrash",
    "type": "normal",
    "damageClass": "physical",
    "pp": 12,
    "power": 120,
    "accuracy": 100,
    "description": "The user gains the Rampaging status."
  },
  {
    "name": "throat-chop",
    "label": "Throat Chop",
    "type": "dark",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Gives the target the Throat Chopped status."
  },
  {
    "name": "thunder",
    "label": "Thunder",
    "type": "electric",
    "damageClass": "special",
    "pp": 12,
    "power": 110,
    "accuracy": 70,
    "description": "Has a 30% chance of paralyzing the target. This move never misses in rain and can hit a target that has the Sky-High status."
  },
  {
    "name": "thunder-fang",
    "label": "Thunder Fang",
    "type": "electric",
    "damageClass": "physical",
    "pp": 16,
    "power": 65,
    "accuracy": 95,
    "description": "Has a 10% chance of paralyzing the target and a 10% chance of making the target flinch."
  },
  {
    "name": "thunder-punch",
    "label": "Thunder Punch",
    "type": "electric",
    "damageClass": "physical",
    "pp": 16,
    "power": 75,
    "accuracy": 100,
    "description": "Has a 10% chance of paralyzing the target."
  },
  {
    "name": "thunder-wave",
    "label": "Thunder Wave",
    "type": "electric",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 90,
    "description": "Paralyzes the target."
  },
  {
    "name": "thunderbolt",
    "label": "Thunderbolt",
    "type": "electric",
    "damageClass": "special",
    "pp": 16,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 10% chance of paralyzing the target."
  },
  {
    "name": "tickle",
    "label": "Tickle",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Attack and Defense stats by 1 stage."
  },
  {
    "name": "tidy-up",
    "label": "Tidy Up",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Removes the Sticky Web Stealth Rock Substitute Spikes and Toxic Spikes statuses from the entire field. Boosts the user's Attack and Speed stats by 1 stage."
  },
  {
    "name": "topsy-turvy",
    "label": "Topsy-Turvy",
    "type": "dark",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Inverts all stat changes affecting the target."
  },
  {
    "name": "torch-song",
    "label": "Torch Song",
    "type": "fire",
    "damageClass": "special",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "Boosts the user's Sp. Atk stat by 1 stage."
  },
  {
    "name": "torment",
    "label": "Torment",
    "type": "dark",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 100,
    "description": "Gives the target the Unable to Repeat status."
  },
  {
    "name": "toxic",
    "label": "Toxic",
    "type": "poison",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 90,
    "description": "Badly poisons the target. If the user is a Poison type this move will never miss."
  },
  {
    "name": "toxic-spikes",
    "label": "Toxic Spikes",
    "type": "poison",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "Gives the opponent's side the Toxic Spikes status."
  },
  {
    "name": "toxic-thread",
    "label": "Toxic Thread",
    "type": "poison",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Lowers the target's Speed stat by 2 stages and poisons it."
  },
  {
    "name": "trailblaze",
    "label": "Trailblaze",
    "type": "grass",
    "damageClass": "physical",
    "pp": 20,
    "power": 50,
    "accuracy": 100,
    "description": "Boosts the user's Speed stat by 1 stage."
  },
  {
    "name": "transform",
    "label": "Transform",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "The user transforms into a copy of the target. It also copies all of the target's stats apart from its HP."
  },
  {
    "name": "tri-attack",
    "label": "Tri Attack",
    "type": "normal",
    "damageClass": "special",
    "pp": 12,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 20% chance of leaving the target burned frozen or paralyzed."
  },
  {
    "name": "trick",
    "label": "Trick",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "The user and the target swap their held items."
  },
  {
    "name": "trick-room",
    "label": "Trick Room",
    "type": "psychic",
    "damageClass": "status",
    "pp": 8,
    "power": null,
    "accuracy": null,
    "description": "Gives the entire field the Trick Room status for 5 turns."
  },
  {
    "name": "trick-or-treat",
    "label": "Trick-or-Treat",
    "type": "ghost",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": 100,
    "description": "Gives the target the Trick-or-Treating status."
  },
  {
    "name": "triple-arrows",
    "label": "Triple Arrows",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "Has a 50% chance of lowering the target's Defense stat by 1 stage and has a 30% chance of making the target flinch. This move has a 1-stage Critical-Hit Ratio Boost."
  },
  {
    "name": "triple-axel",
    "label": "Triple Axel",
    "type": "ice",
    "damageClass": "physical",
    "pp": 12,
    "power": 20,
    "accuracy": 90,
    "description": "The user attacks 3 times in a rowÃ¢â‚¬â€first with a power of 20 then with a power of 40 then with a power of 60. The attack ends if the user misses."
  },
  {
    "name": "trop-kick",
    "label": "Trop Kick",
    "type": "grass",
    "damageClass": "physical",
    "pp": 16,
    "power": 85,
    "accuracy": 100,
    "description": "Lowers the target's Attack stat by 1 stage."
  },
  {
    "name": "twin-beam",
    "label": "Twin Beam",
    "type": "psychic",
    "damageClass": "special",
    "pp": 12,
    "power": 40,
    "accuracy": 100,
    "description": "The user attacks twice in a row."
  },
  {
    "name": "u-turn",
    "label": "U-turn",
    "type": "bug",
    "damageClass": "physical",
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "description": "After attacking the user switches out of battle to be replaced by another party Pokémon."
  },
  {
    "name": "upper-hand",
    "label": "Upper Hand",
    "type": "fighting",
    "damageClass": "physical",
    "pp": 16,
    "power": 65,
    "accuracy": 100,
    "description": "Makes the target flinch. This move fails if the target isn't about to use a priority move."
  },
  {
    "name": "uproar",
    "label": "Uproar",
    "type": "normal",
    "damageClass": "special",
    "pp": 12,
    "power": 90,
    "accuracy": 100,
    "description": "The user gains the Uproar status."
  },
  {
    "name": "vacuum-wave",
    "label": "Vacuum Wave",
    "type": "fighting",
    "damageClass": "special",
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "venoshock",
    "label": "Venoshock",
    "type": "poison",
    "damageClass": "special",
    "pp": 12,
    "power": 65,
    "accuracy": 100,
    "description": "This move's power is doubled if the target is poisoned or badly poisoned."
  },
  {
    "name": "volt-switch",
    "label": "Volt Switch",
    "type": "electric",
    "damageClass": "special",
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "description": "After attacking the user switches out of battle to be replaced by another party Pokémon."
  },
  {
    "name": "volt-tackle",
    "label": "Volt Tackle",
    "type": "electric",
    "damageClass": "physical",
    "pp": 16,
    "power": 120,
    "accuracy": 100,
    "description": "Has a 10% chance of paralyzing the target. The user also takes 1/3 of the damage dealt by this move."
  },
  {
    "name": "water-pulse",
    "label": "Water Pulse",
    "type": "water",
    "damageClass": "special",
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "description": "Has a 20% chance of confusing the target."
  },
  {
    "name": "water-shuriken",
    "label": "Water Shuriken",
    "type": "water",
    "damageClass": "special",
    "pp": 20,
    "power": 15,
    "accuracy": 100,
    "description": "The user attacks 2 to 5 times in a row."
  },
  {
    "name": "water-spout",
    "label": "Water Spout",
    "type": "water",
    "damageClass": "special",
    "pp": 8,
    "power": 150,
    "accuracy": 100,
    "description": "The less HP the user has left the lower this move's power (ranging between 1 and 150)."
  },
  {
    "name": "waterfall",
    "label": "Waterfall",
    "type": "water",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Has a 20% chance of making the target flinch."
  },
  {
    "name": "wave-crash",
    "label": "Wave Crash",
    "type": "water",
    "damageClass": "physical",
    "pp": 12,
    "power": 120,
    "accuracy": 100,
    "description": "The user takes 1/3 of the damage dealt by this move."
  },
  {
    "name": "weather-ball",
    "label": "Weather Ball",
    "type": "normal",
    "damageClass": "special",
    "pp": 12,
    "power": 50,
    "accuracy": 100,
    "description": "When a weather condition is present this move's power is doubled and its type changes. Harsh sunlight: Fire type Rain: Water type Snow: Ice type. Sandstorm: Rock type."
  },
  {
    "name": "whirlpool",
    "label": "Whirlpool",
    "type": "water",
    "damageClass": "special",
    "pp": 16,
    "power": 35,
    "accuracy": 85,
    "description": "Gives the target the Bound status. This move's power is doubled if the target has the Submerged status."
  },
  {
    "name": "whirlwind",
    "label": "Whirlwind",
    "type": "normal",
    "damageClass": "status",
    "pp": 20,
    "power": null,
    "accuracy": null,
    "description": "If there are other Pokémon in the target's party that can switch into battle the target is forced to switch out of battle and is replaced by one of those Pokémon at random."
  },
  {
    "name": "wide-guard",
    "label": "Wide Guard",
    "type": "rock",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "During the turn this move is used the user protects its side from moves that target all allies."
  },
  {
    "name": "wild-charge",
    "label": "Wild Charge",
    "type": "electric",
    "damageClass": "physical",
    "pp": 16,
    "power": 90,
    "accuracy": 100,
    "description": "The user takes 1/4 of the damage dealt by this move."
  },
  {
    "name": "will-o-wisp",
    "label": "Will-O-Wisp",
    "type": "fire",
    "damageClass": "status",
    "pp": 16,
    "power": null,
    "accuracy": 85,
    "description": "Burns the target."
  },
  {
    "name": "wish",
    "label": "Wish",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Gives the user's spot the Wish status."
  },
  {
    "name": "wonder-room",
    "label": "Wonder Room",
    "type": "psychic",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Gives the entire field the Wonder Room status for 5 turns."
  },
  {
    "name": "wood-hammer",
    "label": "Wood Hammer",
    "type": "grass",
    "damageClass": "physical",
    "pp": 16,
    "power": 120,
    "accuracy": 100,
    "description": "The user takes 1/3 of the damage dealt by this move."
  },
  {
    "name": "worry-seed",
    "label": "Worry Seed",
    "type": "grass",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": 100,
    "description": "Changes the target's Ability to Insomnia."
  },
  {
    "name": "wrap",
    "label": "Wrap",
    "type": "normal",
    "damageClass": "physical",
    "pp": 20,
    "power": 15,
    "accuracy": 90,
    "description": "Gives the target the Bound status."
  },
  {
    "name": "x-scissor",
    "label": "X-Scissor",
    "type": "bug",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 100,
    "description": "Inflicts regular damage with no additional effect."
  },
  {
    "name": "yawn",
    "label": "Yawn",
    "type": "normal",
    "damageClass": "status",
    "pp": 12,
    "power": null,
    "accuracy": null,
    "description": "Makes the target drowsy. This move never misses."
  },
  {
    "name": "zap-cannon",
    "label": "Zap Cannon",
    "type": "electric",
    "damageClass": "special",
    "pp": 8,
    "power": 120,
    "accuracy": 50,
    "description": "Paralyzes the target."
  },
  {
    "name": "zen-headbutt",
    "label": "Zen Headbutt",
    "type": "psychic",
    "damageClass": "physical",
    "pp": 16,
    "power": 80,
    "accuracy": 90,
    "description": "Has a 20% chance of making the target flinch."
  }
];
