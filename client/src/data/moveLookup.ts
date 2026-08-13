import {MOVES} from "./moves";

// Slug -> move, so resolving a learnset is a lookup per entry rather than a scan
export const MOVE_BY_NAME = new Map(MOVES.map((m) => [m.name, m]));