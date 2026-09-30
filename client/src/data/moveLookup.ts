import {MOVES, type MoveSummary} from "./moves";
import {LEARNSETS} from "./learnsets";
import {splitForm} from "./forms";

// Slug -> move, so resolving a learnset is a lookup per entry rather than a scan
export const MOVE_BY_NAME = new Map(MOVES.map((m) => [m.name, m]));

// Every move a form can learn in Champions.
//
// A Mega learns what the form it evolves from learns, so the Mega part is dropped
// first: charizard-mega-x -> charizard, meowstic-female-mega -> meowstic-female.
// A form without a table of its own - lycanroc-midday, gourgeist-average - learns
// its species' set.
export function learnsetFor(form: string): MoveSummary[] {
  const preMega: string = form.replace(/-mega(-[xyz])?$/, "");
  const slugs: string[] = LEARNSETS[preMega] ?? LEARNSETS[splitForm(preMega).base] ?? [];
  return slugs
    .map((slug) => MOVE_BY_NAME.get(slug))
    .filter((move): move is MoveSummary => move !== undefined);
}
