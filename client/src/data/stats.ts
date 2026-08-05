// Nature changed stats
export type StatChange = "up" | "down" | "";
export type NatureStat= "atk" | "def" | "spAtk" | "spDef" | "spe";
export type NatureChanges = Record<NatureStat, StatChange>;

// Base stats
export const STATS = [
  { key: "boostHp", api: "hp", label: "HP" },
  { key: "boostAtk", api: "attack", label: "Attack" },
  { key: "boostDef", api: "defense", label: "Defence" },
  { key: "boostSpAtk", api: "special-attack", label: "Sp. Attack" },
  { key: "boostSpDef", api: "special-defense", label: "Sp. Defence" },
  { key: "boostSpe", api: "speed", label: "Speed" },
] as const; // as const allows BoostKey to get each of a property that it wants as a literal type

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

// Ommitted natures have no stat change
// Undefined is required when checking if natureEffect is false
const NATURE_EFFECTS: Record<string, { up: NatureStat; down: NatureStat } | undefined> = {
  // Attack up
  adamant: { up: "atk", down: "spAtk"},
  brave: { up: "atk", down: "spe"},
  lonely: { up: "atk", down: "def"},
  naughty: { up: "atk", down: "spDef"},
  // Defence up
  bold: { up: "def", down: "atk"},
  impish: { up: "def", down: "spAtk"},
  lax: { up: "def", down: "spDef"},
  relaxed: { up: "def", down: "spe"},
  // Special Attack up
  modest: { up: "spAtk", down: "atk"},
  mild: { up: "spAtk", down: "def"},
  quiet: { up: "spAtk", down: "spe"},
  rash: { up: "spAtk", down: "spDef"},
  // Special Defence up
  calm: { up: "spDef", down: "atk"},
  careful: { up: "spDef", down: "spAtk"},
  gentle: { up: "spDef", down: "def"},
  sassy: { up: "spDef", down: "spe"},
  // Speed up
  hasty: { up: "spe", down: "def"},
  jolly: { up: "spe", down: "spAtk"},
  naive: { up: "spe", down: "spDef"},
  timid: { up: "spe", down: "atk"},
};

// Returns record of nature changes
export default function GetNatureChanges(nature: string): NatureChanges{
  const changes: NatureChanges = {atk:"", def:"", spAtk:"", spDef:"", spe:""}
  const natureEffect = NATURE_EFFECTS[nature];

  // If there is no nature effect, return no changes
  if (!natureEffect) return changes;

  // uses the up and down nature stored in natureEffect object to edit the correct stats in the changes object
  changes[natureEffect.up] = "up";
  changes[natureEffect.down] = "down";

  return changes;
}