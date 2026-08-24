// Base stats
export const STATS = [
  { key: "boostHp", api: "hp", label: "HP" },
  { key: "boostAtk", api: "attack", label: "Attack" },
  { key: "boostDef", api: "defense", label: "Defense" },
  { key: "boostSpAtk", api: "special-attack", label: "Sp. Attack" },
  { key: "boostSpDef", api: "special-defense", label: "Sp. Defense" },
  { key: "boostSpe", api: "speed", label: "Speed" },
] as const; // as const allows BoostKey to get each of a property that it wants as a literal type

export const NATURE_STAT_STRINGS = ["Attack", "Defense", "Special Attack", "Special Defense", "Speed"];
export const NATURE_STAT_SHORT = ["Atk", "Def", "SpAtk", "SpDef", "Speed"]
// Nature changed stats
export type StatChange = "up" | "down" | "";
// Derived from STATS
export type StatApi = typeof STATS[number]["api"];
// Nature stats dont effect HP, so it is excluded, but rest of stats are used
export type NatureStat = Exclude<StatApi, "hp">; // ("attack" | "defense" | "special-attack" | "special-defense" | "speed")
export type NatureChanges = Record<StatApi, StatChange>;

// Converting "up" | "down" |"" to alignment number values
export type Alignment = 0.9 | 1.0 | 1.1;
export const ALIGNMENTS: Record<StatChange, Alignment> = {up:1.1, down:0.9, "":1.0};

// Stat boosts
export const MAX_PER_STAT = 32;
export const MAX_TOTAL = 66;
// typeof STATS is equal to the entire STATS const in a readonly form, which can then be queried by index
// STATS[number] means to get an index of type number, which is all possible indexes, so all 6 element types are unioned
// "key" specifies the property from the union
// if "key" is changed to "api", it will equal all of the api values (e.g. "hp" | "attack" | ...)
export type BoostKey = typeof STATS[number]["key"];
export type Boosts = Record<BoostKey, number>;
export const EMPTY_BOOSTS: Boosts = {
  boostHp: 0, boostAtk: 0, boostDef: 0, boostSpAtk: 0, boostSpDef: 0, boostSpe:0
};

export const NATURES: string[] = [
  "Serious", "Lonely", "Adamant", "Naughty", "Brave",
  "Bold", "", "Impish", "Lax", "Relaxed",
  "Modest", "Mild", "", "Rash", "Quiet",
  "Calm", "Gentle", "Careful", "", "Sassy",
  "Timid", "Hasty", "Jolly", "Naive", "",
];

// Ommitted natures have no stat change
// Undefined is required when checking if natureEffect is false
export const NATURE_EFFECTS: Record<string, { up: NatureStat; down: NatureStat } | undefined> = {
  // Attack up
  adamant: { up: "attack", down: "special-attack"},
  brave: { up: "attack", down: "speed"},
  lonely: { up: "attack", down: "defense"},
  naughty: { up: "attack", down: "special-defense"},
  // Defense up
  bold: { up: "defense", down: "attack"},
  impish: { up: "defense", down: "special-attack"},
  lax: { up: "defense", down: "special-defense"},
  relaxed: { up: "defense", down: "speed"},
  // Special Attack up
  modest: { up: "special-attack", down: "attack"},
  mild: { up: "special-attack", down: "defense"},
  quiet: { up: "special-attack", down: "speed"},
  rash: { up: "special-attack", down: "special-defense"},
  // Special Defense up
  calm: { up: "special-defense", down: "attack"},
  careful: { up: "special-defense", down: "special-attack"},
  gentle: { up: "special-defense", down: "defense"},
  sassy: { up: "special-defense", down: "speed"},
  // Speed up
  hasty: { up: "speed", down: "defense"},
  jolly: { up: "speed", down: "special-attack"},
  naive: { up: "speed", down: "special-defense"},
  timid: { up: "speed", down: "attack"},
  // No changes
  hardy:   { up: "attack", down: "attack" },
  docile:  { up: "defense", down: "defense" },
  bashful: { up: "special-attack", down: "special-attack" },
  quirky:  { up: "special-defense", down: "special-defense" },
  serious: { up: "speed", down: "speed" },
};

// Returns record of nature changes
export default function GetNatureChanges(nature: string): NatureChanges{
  const changes: NatureChanges = {hp:"",attack:"", defense:"", "special-attack":"", "special-defense":"", speed:""}
  const natureEffect = NATURE_EFFECTS[nature.toLowerCase()];

  
  // If natureEffect is undefined (wrong nature input possibly, return)
  if (!natureEffect) return changes;

  // If a nature with no stat changes is selected, also return no stat changes
  if (natureEffect.up === natureEffect.down) return changes;

  // uses the up and down nature stored in natureEffect object to edit the correct stats in the changes object
  changes[natureEffect.up] = "up";
  changes[natureEffect.down] = "down";

  return changes;
}