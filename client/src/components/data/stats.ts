export type StatChange = "up" | "down" | "";
export type NatureStat= "atk" | "def" | "spAtk" | "spDef" | "spe";
export type NatureChanges = Record<NatureStat, StatChange>;

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