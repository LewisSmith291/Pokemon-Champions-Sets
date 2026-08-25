// GENERATED FILE - do not edit by hand
// Rebuild with: node scripts/build-abilities.mjs
//
// Every ability reachable from the Champions dex, bundled so the ability picker
// can show descriptions without a request per ability. Sorted by label

export interface AbilitySummary {
  /** PokeAPI slug - this is what gets submitted as `ability` */
  name: string;
  /** Display name, e.g. "Solar Power" */
  label: string;
  /** PokeAPI's short_effect, falling back to the latest English flavour text */
  description: string;
}

export const ABILITIES: AbilitySummary[] = [
  {
    "name": "adaptability",
    "label": "Adaptability",
    "description": "Increases the same-type attack bonus from 1.5× to 2×."
  },
  {
    "name": "aerilate",
    "label": "Aerilate",
    "description": "Turns the bearer's Normal moves into Flying moves and strengthens them to 1.3× their power."
  },
  {
    "name": "aftermath",
    "label": "Aftermath",
    "description": "Damages the attacker for 1/4 its max HP when knocked out by a contact move."
  },
  {
    "name": "analytic",
    "label": "Analytic",
    "description": "Strengthens moves to 1.3× their power when moving last."
  },
  {
    "name": "anger-point",
    "label": "Anger Point",
    "description": "Raises Attack to the maximum of six stages upon receiving a critical hit."
  },
  {
    "name": "anticipation",
    "label": "Anticipation",
    "description": "Notifies all trainers upon entering battle if an opponent has a super-effective move, Self-Destruct, Explosion, or a one-hit KO move."
  },
  {
    "name": "armor-tail",
    "label": "Armor Tail",
    "description": "Prevents the opponent from using any moves that have priority, such as Quick Attack."
  },
  {
    "name": "aroma-veil",
    "label": "Aroma Veil",
    "description": "Protects allies against moves that affect their mental state."
  },
  {
    "name": "battle-armor",
    "label": "Battle Armor",
    "description": "Protects against critical hits."
  },
  {
    "name": "battle-bond",
    "label": "Battle Bond",
    "description": "Transforms this Pokémon into Ash-Greninja after fainting an opponent. Water Shuriken's power is 20 and always hits three times."
  },
  {
    "name": "berserk",
    "label": "Berserk",
    "description": "Raises this Pokémon's Special Attack by one stage every time its HP drops below half."
  },
  {
    "name": "big-pecks",
    "label": "Big Pecks",
    "description": "Protects against Defense drops."
  },
  {
    "name": "blaze",
    "label": "Blaze",
    "description": "Strengthens Fire moves to inflict 1.5× damage at 1/3 max HP or less."
  },
  {
    "name": "bulletproof",
    "label": "Bulletproof",
    "description": "Protects against bullet, ball, and bomb-based moves."
  },
  {
    "name": "cheek-pouch",
    "label": "Cheek Pouch",
    "description": "Restores HP upon eating a Berry, in addition to the Berry's effect."
  },
  {
    "name": "chlorophyll",
    "label": "Chlorophyll",
    "description": "Doubles Speed during strong sunlight."
  },
  {
    "name": "clear-body",
    "label": "Clear Body",
    "description": "Prevents stats from being lowered by other Pokémon."
  },
  {
    "name": "cloud-nine",
    "label": "Cloud Nine",
    "description": "Negates all effects of weather, but does not prevent the weather itself."
  },
  {
    "name": "competitive",
    "label": "Competitive",
    "description": "Raises Special Attack by two stages upon having any stat lowered."
  },
  {
    "name": "compound-eyes",
    "label": "Compound Eyes",
    "description": "Increases moves' accuracy to 1.3×."
  },
  {
    "name": "contrary",
    "label": "Contrary",
    "description": "Inverts stat changes."
  },
  {
    "name": "corrosion",
    "label": "Corrosion",
    "description": "This Pokémon can inflict poison on Poison and Steel Pokémon."
  },
  {
    "name": "cud-chew",
    "label": "Cud Chew",
    "description": "Causes the Pokémon to reuse an already consumed Berry at the end of the next turn."
  },
  {
    "name": "curious-medicine",
    "label": "Curious Medicine",
    "description": "Resets all stat changes upon entering battlefield."
  },
  {
    "name": "cursed-body",
    "label": "Cursed Body",
    "description": "Has a 30% chance of Disabling any move that hits the Pokémon."
  },
  {
    "name": "cute-charm",
    "label": "Cute Charm",
    "description": "Has a 30% chance of infatuating attacking Pokémon on contact."
  },
  {
    "name": "damp",
    "label": "Damp",
    "description": "Prevents Self-Destruct, Explosion, and Aftermath from working while the Pokémon is in battle."
  },
  {
    "name": "defiant",
    "label": "Defiant",
    "description": "Raises Attack two stages upon having any stat lowered."
  },
  {
    "name": "disguise",
    "label": "Disguise",
    "description": "Prevents the first instance of battle damage."
  },
  {
    "name": "dragonize",
    "label": "Dragonize",
    "description": "The Pokémon's Normal-type moves become Dragon-type moves and their power is boosted by 20%."
  },
  {
    "name": "drizzle",
    "label": "Drizzle",
    "description": "Summons rain that lasts indefinitely upon entering battle."
  },
  {
    "name": "drought",
    "label": "Drought",
    "description": "Summons strong sunlight that lasts indefinitely upon entering battle."
  },
  {
    "name": "dry-skin",
    "label": "Dry Skin",
    "description": "Causes 1/8 max HP in damage each turn during strong sunlight, but heals for 1/8 max HP during rain. Increases damage from Fire moves to 1.25×, but absorbs Water moves, healing for 1/4 max HP."
  },
  {
    "name": "early-bird",
    "label": "Early Bird",
    "description": "Makes sleep pass twice as quickly."
  },
  {
    "name": "earth-eater",
    "label": "Earth Eater",
    "description": "Restores HP when hit by a Ground-type move."
  },
  {
    "name": "eelevate",
    "label": "Eelevate",
    "description": "The Pokémon floats off the ground, making it immune to Ground-type moves, as well as the Spikes, Toxic Spikes, and Sticky Web statuses. When the Pokémon knocks out a target with an attack, its highest stat is boosted by 1 stage."
  },
  {
    "name": "effect-spore",
    "label": "Effect Spore",
    "description": "Has a 30% chance of inflcting either paralysis, poison, or sleep on attacking Pokémon on contact."
  },
  {
    "name": "electric-surge",
    "label": "Electric Surge",
    "description": "When this Pokémon enters battle, it changes the terrain to Electric Terrain."
  },
  {
    "name": "electromorphosis",
    "label": "Electromorphosis",
    "description": "When hit by an attack, the power of the next Electric-type move it uses is doubled."
  },
  {
    "name": "fairy-aura",
    "label": "Fairy Aura",
    "description": "Strengthens Fairy moves to 1.33× their power for all friendly and opposing Pokémon."
  },
  {
    "name": "filter",
    "label": "Filter",
    "description": "Decreases damage taken from super-effective moves by 1/4."
  },
  {
    "name": "fire-mane",
    "label": "Fire Mane",
    "description": "Boosts the power of the Pokémon's Fire-type moves by 50%."
  },
  {
    "name": "flame-body",
    "label": "Flame Body",
    "description": "Has a 30% chance of burning attacking Pokémon on contact."
  },
  {
    "name": "flash-fire",
    "label": "Flash Fire",
    "description": "Protects against Fire moves. Once one has been blocked, the Pokémon's own Fire moves inflict 1.5× damage until it leaves battle."
  },
  {
    "name": "flower-veil",
    "label": "Flower Veil",
    "description": "Protects friendly Grass Pokémon from having their stats lowered by other Pokémon."
  },
  {
    "name": "fluffy",
    "label": "Fluffy",
    "description": "Damage from contact moves is halved. Damage from Fire moves is doubled."
  },
  {
    "name": "forecast",
    "label": "Forecast",
    "description": "Changes Castform's type and form to match the weather."
  },
  {
    "name": "forewarn",
    "label": "Forewarn",
    "description": "Reveals the opponents' strongest move upon entering battle."
  },
  {
    "name": "friend-guard",
    "label": "Friend Guard",
    "description": "Decreases all direct damage taken by friendly Pokémon to 0.75×."
  },
  {
    "name": "frisk",
    "label": "Frisk",
    "description": "Reveals an opponent's held item upon entering battle."
  },
  {
    "name": "fur-coat",
    "label": "Fur Coat",
    "description": "Halves damage from physical attacks."
  },
  {
    "name": "gale-wings",
    "label": "Gale Wings",
    "description": "Raises Flying moves' priority by one stage."
  },
  {
    "name": "gluttony",
    "label": "Gluttony",
    "description": "Makes the Pokémon eat any held Berry triggered by low HP below 1/2 its max HP."
  },
  {
    "name": "good-as-gold",
    "label": "Good as Gold",
    "description": "Gives immunity to status moves."
  },
  {
    "name": "gooey",
    "label": "Gooey",
    "description": "Lowers attacking Pokémon's Speed by one stage on contact."
  },
  {
    "name": "guts",
    "label": "Guts",
    "description": "Increases Attack to 1.5× with a major status ailment."
  },
  {
    "name": "harvest",
    "label": "Harvest",
    "description": "Has a 50% chance of restoring a used Berry after each turn if the Pokémon has held no items in the meantime."
  },
  {
    "name": "healer",
    "label": "Healer",
    "description": "Has a 30% chance of curing each adjacent ally of any major status ailment after each turn."
  },
  {
    "name": "heatproof",
    "label": "Heatproof",
    "description": "Halves damage from Fire moves and burns."
  },
  {
    "name": "heavy-metal",
    "label": "Heavy Metal",
    "description": "Doubles the Pokémon's weight."
  },
  {
    "name": "hospitality",
    "label": "Hospitality",
    "description": "When a Pokémon with Hospitality enters a battle, it restores HP for an ally by 25%."
  },
  {
    "name": "huge-power",
    "label": "Huge Power",
    "description": "Doubles Attack in battle."
  },
  {
    "name": "hunger-switch",
    "label": "Hunger Switch",
    "description": "Causes Morpeko to change its form each turn, alternating between Full Belly Mode and Hangry Mode"
  },
  {
    "name": "hustle",
    "label": "Hustle",
    "description": "Strengthens physical moves to inflict 1.5× damage, but decreases their accuracy to 0.8×."
  },
  {
    "name": "hydration",
    "label": "Hydration",
    "description": "Cures any major status ailment after each turn during rain."
  },
  {
    "name": "hyper-cutter",
    "label": "Hyper Cutter",
    "description": "Prevents Attack from being lowered by other Pokémon."
  },
  {
    "name": "ice-body",
    "label": "Ice Body",
    "description": "Heals for 1/16 max HP after each turn during hail. Protects against hail damage."
  },
  {
    "name": "illuminate",
    "label": "Illuminate",
    "description": "Doubles the wild encounter rate."
  },
  {
    "name": "illusion",
    "label": "Illusion",
    "description": "Takes the appearance of the last conscious party Pokémon upon being sent out until hit by a damaging move."
  },
  {
    "name": "immunity",
    "label": "Immunity",
    "description": "Prevents poison."
  },
  {
    "name": "imposter",
    "label": "Imposter",
    "description": "Transforms upon entering battle."
  },
  {
    "name": "infiltrator",
    "label": "Infiltrator",
    "description": "Bypasses Light Screen, Reflect, and Safeguard."
  },
  {
    "name": "innards-out",
    "label": "Innards Out",
    "description": "When this Pokémon faints from an opponent's move, that opponent takes damage equal to the HP this Pokémon had remaining."
  },
  {
    "name": "inner-focus",
    "label": "Inner Focus",
    "description": "Prevents flinching."
  },
  {
    "name": "insomnia",
    "label": "Insomnia",
    "description": "Prevents sleep."
  },
  {
    "name": "intimidate",
    "label": "Intimidate",
    "description": "Lowers opponents' Attack one stage upon entering battle."
  },
  {
    "name": "iron-fist",
    "label": "Iron Fist",
    "description": "Strengthens punch-based moves to 1.2× their power."
  },
  {
    "name": "justified",
    "label": "Justified",
    "description": "Raises Attack one stage upon taking damage from a Dark move."
  },
  {
    "name": "keen-eye",
    "label": "Keen Eye",
    "description": "Prevents accuracy from being lowered."
  },
  {
    "name": "klutz",
    "label": "Klutz",
    "description": "Prevents the Pokémon from using its held item in battle."
  },
  {
    "name": "leaf-guard",
    "label": "Leaf Guard",
    "description": "Protects against major status ailments during strong sunlight."
  },
  {
    "name": "levitate",
    "label": "Levitate",
    "description": "Evades Ground moves."
  },
  {
    "name": "light-metal",
    "label": "Light Metal",
    "description": "Halves the Pokémon's weight."
  },
  {
    "name": "lightning-rod",
    "label": "Lightning Rod",
    "description": "Redirects single-target Electric moves to this Pokémon where possible. Absorbs Electric moves, raising Special Attack one stage."
  },
  {
    "name": "limber",
    "label": "Limber",
    "description": "Prevents paralysis."
  },
  {
    "name": "liquid-voice",
    "label": "Liquid Voice",
    "description": "Sound-based moves become Water-type."
  },
  {
    "name": "long-reach",
    "label": "Long Reach",
    "description": "This Pokémon's moves do not make contact."
  },
  {
    "name": "magic-bounce",
    "label": "Magic Bounce",
    "description": "Reflects most non-damaging moves back at their user."
  },
  {
    "name": "magic-guard",
    "label": "Magic Guard",
    "description": "Protects against damage not directly caused by a move."
  },
  {
    "name": "magician",
    "label": "Magician",
    "description": "Steals the target's held item when the bearer uses a damaging move."
  },
  {
    "name": "magma-armor",
    "label": "Magma Armor",
    "description": "Prevents freezing."
  },
  {
    "name": "marvel-scale",
    "label": "Marvel Scale",
    "description": "Increases Defense to 1.5× with a major status ailment."
  },
  {
    "name": "mega-launcher",
    "label": "Mega Launcher",
    "description": "Strengthens aura and pulse moves to 1.5× their power."
  },
  {
    "name": "mega-sol",
    "label": "Mega Sol",
    "description": "The Pokémon can use its moves as if the weather were harsh sunlight."
  },
  {
    "name": "merciless",
    "label": "Merciless",
    "description": "This Pokémon's moves critical hit against poisoned targets."
  },
  {
    "name": "mimicry",
    "label": "Mimicry",
    "description": "Changes type depending on the terrain."
  },
  {
    "name": "minus",
    "label": "Minus",
    "description": "Increases Special Attack to 1.5× when a friendly Pokémon has Plus or Minus."
  },
  {
    "name": "mirror-armor",
    "label": "Mirror Armor",
    "description": "Reflects any stat-lowering effects."
  },
  {
    "name": "mold-breaker",
    "label": "Mold Breaker",
    "description": "Bypasses targets' abilities if they could hinder or prevent a move."
  },
  {
    "name": "moody",
    "label": "Moody",
    "description": "Raises a random stat two stages and lowers another one stage after each turn."
  },
  {
    "name": "motor-drive",
    "label": "Motor Drive",
    "description": "Absorbs Electric moves, raising Speed one stage."
  },
  {
    "name": "moxie",
    "label": "Moxie",
    "description": "Raises Attack one stage upon KOing a Pokémon."
  },
  {
    "name": "multiscale",
    "label": "Multiscale",
    "description": "Halves damage taken from full HP."
  },
  {
    "name": "mummy",
    "label": "Mummy",
    "description": "Changes attacking Pokémon's abilities to Mummy on contact."
  },
  {
    "name": "natural-cure",
    "label": "Natural Cure",
    "description": "Cures any major status ailment upon switching out."
  },
  {
    "name": "no-guard",
    "label": "No Guard",
    "description": "Ensures all moves used by and against the Pokémon hit."
  },
  {
    "name": "oblivious",
    "label": "Oblivious",
    "description": "Prevents infatuation and protects against Captivate."
  },
  {
    "name": "opportunist",
    "label": "Opportunist",
    "description": "Copies stat boosts by the opponent."
  },
  {
    "name": "overcoat",
    "label": "Overcoat",
    "description": "Protects against damage from weather."
  },
  {
    "name": "overgrow",
    "label": "Overgrow",
    "description": "Strengthens Grass moves to inflict 1.5× damage at 1/3 max HP or less."
  },
  {
    "name": "own-tempo",
    "label": "Own Tempo",
    "description": "Prevents confusion."
  },
  {
    "name": "parental-bond",
    "label": "Parental Bond",
    "description": "Lets the bearer hit twice with damaging moves. The second hit has half power."
  },
  {
    "name": "pickpocket",
    "label": "Pickpocket",
    "description": "Steals attacking Pokémon's held items on contact."
  },
  {
    "name": "pickup",
    "label": "Pickup",
    "description": "Picks up other Pokémon's used and Flung held items. May also pick up an item after battle."
  },
  {
    "name": "piercing-drill",
    "label": "Piercing Drill",
    "description": "When the Pokémon uses contact moves, it can hit even targets that are protecting themselves."
  },
  {
    "name": "pixilate",
    "label": "Pixilate",
    "description": "Turns the bearer's Normal moves into Fairy moves and strengthens them to 1.3× their power."
  },
  {
    "name": "plus",
    "label": "Plus",
    "description": "Increases Special Attack to 1.5× when a friendly Pokémon has Plus or Minus."
  },
  {
    "name": "poison-heal",
    "label": "Poison Heal",
    "description": "Heals for 1/8 max HP after each turn when poisoned in place of damage."
  },
  {
    "name": "poison-point",
    "label": "Poison Point",
    "description": "Has a 30% chance of poisoning attacking Pokémon on contact."
  },
  {
    "name": "poison-touch",
    "label": "Poison Touch",
    "description": "Has a 30% chance of poisoning target Pokémon upon contact."
  },
  {
    "name": "prankster",
    "label": "Prankster",
    "description": "Raises non-damaging moves' priority by one stage."
  },
  {
    "name": "pressure",
    "label": "Pressure",
    "description": "Increases the PP cost of moves targetting the Pokémon by one."
  },
  {
    "name": "protean",
    "label": "Protean",
    "description": "Changes the bearer's type to match each move it uses."
  },
  {
    "name": "pure-power",
    "label": "Pure Power",
    "description": "Doubles Attack in battle."
  },
  {
    "name": "purifying-salt",
    "label": "Purifying Salt",
    "description": "Protects from status conditions and halves damage from Ghost-type moves."
  },
  {
    "name": "queenly-majesty",
    "label": "Queenly Majesty",
    "description": "Opposing Pokémon cannot use priority attacks."
  },
  {
    "name": "quick-draw",
    "label": "Quick Draw",
    "description": "Enables the Pokémon to move first occasionally."
  },
  {
    "name": "quick-feet",
    "label": "Quick Feet",
    "description": "Increases Speed to 1.5× with a major status ailment."
  },
  {
    "name": "rain-dish",
    "label": "Rain Dish",
    "description": "Heals for 1/16 max HP after each turn during rain."
  },
  {
    "name": "receiver",
    "label": "Receiver",
    "description": "When an ally faints, this Pokémon gains its Ability."
  },
  {
    "name": "reckless",
    "label": "Reckless",
    "description": "Strengthens recoil moves to 1.2× their power."
  },
  {
    "name": "refrigerate",
    "label": "Refrigerate",
    "description": "Turns the bearer's Normal moves into Ice moves and strengthens them to 1.3× their power."
  },
  {
    "name": "regenerator",
    "label": "Regenerator",
    "description": "Heals for 1/3 max HP upon switching out."
  },
  {
    "name": "ripen",
    "label": "Ripen",
    "description": "Doubles the effect of berries."
  },
  {
    "name": "rivalry",
    "label": "Rivalry",
    "description": "Increases damage inflicted to 1.25× against Pokémon of the same gender, but decreases damage to 0.75× against the opposite gender."
  },
  {
    "name": "rock-head",
    "label": "Rock Head",
    "description": "Protects against recoil damage."
  },
  {
    "name": "rough-skin",
    "label": "Rough Skin",
    "description": "Damages attacking Pokémon for 1/8 their max HP on contact."
  },
  {
    "name": "sand-force",
    "label": "Sand Force",
    "description": "Strengthens Rock, Ground, and Steel moves to 1.3× their power during a sandstorm. Protects against sandstorm damage."
  },
  {
    "name": "sand-rush",
    "label": "Sand Rush",
    "description": "Doubles Speed during a sandstorm. Protects against sandstorm damage."
  },
  {
    "name": "sand-spit",
    "label": "Sand Spit",
    "description": "Creates a sandstorm when hit by an attack."
  },
  {
    "name": "sand-stream",
    "label": "Sand Stream",
    "description": "Summons a sandstorm that lasts indefinitely upon entering battle."
  },
  {
    "name": "sand-veil",
    "label": "Sand Veil",
    "description": "Increases evasion to 1.25× during a sandstorm. Protects against sandstorm damage."
  },
  {
    "name": "sap-sipper",
    "label": "Sap Sipper",
    "description": "Absorbs Grass moves, raising Attack one stage."
  },
  {
    "name": "scrappy",
    "label": "Scrappy",
    "description": "Lets the Pokémon's Normal and Fighting moves hit Ghost Pokémon."
  },
  {
    "name": "screen-cleaner",
    "label": "Screen Cleaner",
    "description": "Nullifies effects of Light Screen, Reflect, and Aurora Veil."
  },
  {
    "name": "shadow-tag",
    "label": "Shadow Tag",
    "description": "Prevents opponents from fleeing or switching out."
  },
  {
    "name": "sharpness",
    "label": "Sharpness",
    "description": "Powers up slicing moves."
  },
  {
    "name": "shed-skin",
    "label": "Shed Skin",
    "description": "Has a 33% chance of curing any major status ailment after each turn."
  },
  {
    "name": "sheer-force",
    "label": "Sheer Force",
    "description": "Strengthens moves with extra effects to 1.3× their power, but prevents their extra effects."
  },
  {
    "name": "shell-armor",
    "label": "Shell Armor",
    "description": "Protects against critical hits."
  },
  {
    "name": "shield-dust",
    "label": "Shield Dust",
    "description": "Protects against incoming moves' extra effects."
  },
  {
    "name": "skill-link",
    "label": "Skill Link",
    "description": "Extends two-to-five-hit moves and Triple Kick to their full length every time."
  },
  {
    "name": "slush-rush",
    "label": "Slush Rush",
    "description": "During Hail, this Pokémon has double Speed."
  },
  {
    "name": "sniper",
    "label": "Sniper",
    "description": "Strengthens critical hits to inflict 3× damage rather than 2×."
  },
  {
    "name": "snow-cloak",
    "label": "Snow Cloak",
    "description": "Increases evasion to 1.25× during hail. Protects against hail damage."
  },
  {
    "name": "snow-warning",
    "label": "Snow Warning",
    "description": "Summons hail that lasts indefinitely upon entering battle."
  },
  {
    "name": "solar-power",
    "label": "Solar Power",
    "description": "Increases Special Attack to 1.5× but costs 1/8 max HP after each turn during strong sunlight."
  },
  {
    "name": "solid-rock",
    "label": "Solid Rock",
    "description": "Decreases damage taken from super-effective moves by 1/4."
  },
  {
    "name": "soundproof",
    "label": "Soundproof",
    "description": "Protects against sound-based moves."
  },
  {
    "name": "speed-boost",
    "label": "Speed Boost",
    "description": "Raises Speed one stage after each turn."
  },
  {
    "name": "spicy-spray",
    "label": "Spicy Spray",
    "description": "When the Pokémon takes damage from a move, it burns the attacker."
  },
  {
    "name": "stall",
    "label": "Stall",
    "description": "Makes the Pokémon move last within its move's priority bracket."
  },
  {
    "name": "stalwart",
    "label": "Stalwart",
    "description": "Ignores moves and abilities that draw in moves."
  },
  {
    "name": "stamina",
    "label": "Stamina",
    "description": "Raises this Pokémon's Defense by one stage when it takes damage from a move."
  },
  {
    "name": "stance-change",
    "label": "Stance Change",
    "description": "Changes Aegislash to Blade Forme before using a damaging move, or Shield Forme before using King’s Shield."
  },
  {
    "name": "static",
    "label": "Static",
    "description": "Has a 30% chance of paralyzing attacking Pokémon on contact."
  },
  {
    "name": "steadfast",
    "label": "Steadfast",
    "description": "Raises Speed one stage upon flinching."
  },
  {
    "name": "stench",
    "label": "Stench",
    "description": "Has a 10% chance of making target Pokémon flinch with each hit."
  },
  {
    "name": "sticky-hold",
    "label": "Sticky Hold",
    "description": "Prevents a held item from being removed by other Pokémon."
  },
  {
    "name": "strong-jaw",
    "label": "Strong Jaw",
    "description": "Strengthens biting moves to 1.5× their power."
  },
  {
    "name": "sturdy",
    "label": "Sturdy",
    "description": "Prevents being KOed from full HP, leaving 1 HP instead. Protects against the one-hit KO moves regardless of HP."
  },
  {
    "name": "suction-cups",
    "label": "Suction Cups",
    "description": "Prevents being forced out of battle by other Pokémon's moves."
  },
  {
    "name": "super-luck",
    "label": "Super Luck",
    "description": "Raises moves' critical hit rates one stage."
  },
  {
    "name": "supersweet-syrup",
    "label": "Supersweet Syrup",
    "description": "Once per battle, when a Pokémon with Supersweet Syrup enters the battle, it lowers the evasion stat of all adjacent opponents by one stage."
  },
  {
    "name": "supreme-overlord",
    "label": "Supreme Overlord",
    "description": "Attack and Special Attack are boosted for each party Pokémon that has been defeated."
  },
  {
    "name": "surge-surfer",
    "label": "Surge Surfer",
    "description": "Doubles this Pokémon's Speed on Electric Terrain."
  },
  {
    "name": "swarm",
    "label": "Swarm",
    "description": "Strengthens Bug moves to inflict 1.5× damage at 1/3 max HP or less."
  },
  {
    "name": "sweet-veil",
    "label": "Sweet Veil",
    "description": "Prevents friendly Pokémon from sleeping."
  },
  {
    "name": "swift-swim",
    "label": "Swift Swim",
    "description": "Doubles Speed during rain."
  },
  {
    "name": "symbiosis",
    "label": "Symbiosis",
    "description": "Passes the bearer's held item to an ally when the ally uses up its item."
  },
  {
    "name": "synchronize",
    "label": "Synchronize",
    "description": "Copies burns, paralysis, and poison received onto the Pokémon that inflicted them."
  },
  {
    "name": "tangled-feet",
    "label": "Tangled Feet",
    "description": "Doubles evasion when confused."
  },
  {
    "name": "technician",
    "label": "Technician",
    "description": "Strengthens moves of 60 base power or less to 1.5× their power."
  },
  {
    "name": "telepathy",
    "label": "Telepathy",
    "description": "Protects against friendly Pokémon's damaging moves."
  },
  {
    "name": "thick-fat",
    "label": "Thick Fat",
    "description": "Halves damage from Fire and Ice moves."
  },
  {
    "name": "torrent",
    "label": "Torrent",
    "description": "Strengthens Water moves to inflict 1.5× damage at 1/3 max HP or less."
  },
  {
    "name": "tough-claws",
    "label": "Tough Claws",
    "description": "Strengthens moves that make contact to 1.33× their power."
  },
  {
    "name": "toxic-debris",
    "label": "Toxic Debris",
    "description": "Scatters poison spikes at the feet of the opposing team when the Pokémon takes damage from physical moves."
  },
  {
    "name": "trace",
    "label": "Trace",
    "description": "Copies an opponent's ability upon entering battle."
  },
  {
    "name": "unaware",
    "label": "Unaware",
    "description": "Ignores other Pokémon's stat modifiers for damage and accuracy calculation."
  },
  {
    "name": "unburden",
    "label": "Unburden",
    "description": "Doubles Speed upon using or losing a held item."
  },
  {
    "name": "unnerve",
    "label": "Unnerve",
    "description": "Prevents opposing Pokémon from eating held Berries."
  },
  {
    "name": "unseen-fist",
    "label": "Unseen Fist",
    "description": "Contact moves can strike through Protect/Detect."
  },
  {
    "name": "vital-spirit",
    "label": "Vital Spirit",
    "description": "Prevents sleep."
  },
  {
    "name": "volt-absorb",
    "label": "Volt Absorb",
    "description": "Absorbs Electric moves, healing for 1/4 max HP."
  },
  {
    "name": "wandering-spirit",
    "label": "Wandering Spirit",
    "description": "Swaps abilities with opponents on contact."
  },
  {
    "name": "water-absorb",
    "label": "Water Absorb",
    "description": "Absorbs Water moves, healing for 1/4 max HP."
  },
  {
    "name": "water-bubble",
    "label": "Water Bubble",
    "description": "Halves damage from Fire moves, doubles damage of Water moves, and prevents burns."
  },
  {
    "name": "weak-armor",
    "label": "Weak Armor",
    "description": "Raises Speed and lowers Defense by one stage each upon being hit by a physical move."
  },
  {
    "name": "white-smoke",
    "label": "White Smoke",
    "description": "Prevents stats from being lowered by other Pokémon."
  },
  {
    "name": "zero-to-hero",
    "label": "Zero to Hero",
    "description": "Transforms into its Hero Form when switching out."
  }
];
