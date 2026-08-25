import { ABILITIES } from "./abilities";

// Slug -> ability, so resolving a form's ability list is a lookup per entry rather than a scan
export const ABILITY_BY_NAME = new Map(ABILITIES.map((a) => [a.name, a]));
