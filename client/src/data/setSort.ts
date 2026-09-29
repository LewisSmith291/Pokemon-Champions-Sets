import { SPECIES_BY_NAME, formLabel } from "./forms";
import { FORM_DATA } from "./formData";
import { TYPE_ORDER } from "./types";

// "recent" is the order the API already returns (most recently edited first),
// so it needs no comparator - it's the starting point the others reorder.
export type SetSortKey = "recent" | "dex" | "alpha" | "type";

export const SET_SORTS: { id: SetSortKey; label: string }[] = [
  { id: "recent", label: "Recent" },
  { id: "dex",    label: "Dex No." },
  { id: "alpha",  label: "A–Z" },
  { id: "type",   label: "Type" },
];

// Just the fields sorting needs, so this works on any set row
interface Sortable {
  species: string;
  form: string;
}

// The species' national dex number, from the bundled dex. Every form of a
// species shares it, so Mega Charizard sits with Charizard.
function dexNumber(set: Sortable): number {
  return SPECIES_BY_NAME.get(set.species)?.id ?? Number.MAX_SAFE_INTEGER;
}

// Position of a type in the canonical order, with "no second type" sorting
// ahead of every real one so mono-types lead their group
function typeRank(type: string | undefined): number {
  if (type === undefined) return -1;
  const index = TYPE_ORDER.indexOf(type);
  return index === -1 ? TYPE_ORDER.length : index;
}

const COMPARATORS: Record<Exclude<SetSortKey, "recent">, (a: Sortable, b: Sortable) => number> = {
  // Ties - two sets of the same species - fall back to the form's name, so
  // Charizard, Mega Charizard X and Mega Charizard Y stay in a stable order
  dex: (a, b) =>
    dexNumber(a) - dexNumber(b) || formLabel(a.form).localeCompare(formLabel(b.form)),

  // By species name rather than the displayed form label. Sorting on the label
  // would file every Mega under M and every Alolan form under A.
  alpha: (a, b) => {
    const nameA = SPECIES_BY_NAME.get(a.species)?.label ?? a.species;
    const nameB = SPECIES_BY_NAME.get(b.species)?.label ?? b.species;
    return nameA.localeCompare(nameB) || formLabel(a.form).localeCompare(formLabel(b.form));
  },

  // The form's own typing - Mega Charizard X is Fire/Dragon, not Fire/Flying.
  // Primary type first, then secondary, then dex number within the same typing.
  type: (a, b) => {
    const typesA = FORM_DATA[a.form]?.types ?? [];
    const typesB = FORM_DATA[b.form]?.types ?? [];
    return (
      typeRank(typesA[0]) - typeRank(typesB[0]) ||
      typeRank(typesA[1]) - typeRank(typesB[1]) ||
      dexNumber(a) - dexNumber(b)
    );
  },
};

/** A sorted copy - never mutates the list it's given */
export function sortSets<T extends Sortable>(sets: T[], key: SetSortKey, reversed: boolean): T[] {
  const sorted = key === "recent" ? [...sets] : [...sets].sort(COMPARATORS[key]);
  return reversed ? sorted.reverse() : sorted;
}
