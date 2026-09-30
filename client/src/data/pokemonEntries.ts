import { SPECIES } from "./species";
import { FORM_DATA } from "./formData";
import { formLabel, isValidForm, preferredMegaStone, splitForm } from "./forms";
import GetMegaStones from "./megaStones";

// One entry per selectable form - the create page's Pokemon picker lists these.
// Megas, regional forms and gendered forms each get their own entry, since each
// has its own stats, typing or abilities and is a different pick.

export type EntryKind = "base" | "mega" | "regional" | "gender";
export type Region = "alola" | "galar" | "hisui" | "paldea";

export interface PokemonEntry {
  /** The form slug - what the set stores as `form` */
  form: string;
  /** The species slug - what the set stores as `species` */
  species: string;
  /** "Mega Charizard X", "Alolan Ninetales", "Indeedee ♀" */
  label: string;
  kind: EntryKind;
  region: Region | null;
  /** National dex number of the species, for ordering */
  dex: number;
  /** The form's own dex id - names its sprite */
  spriteId: number;
  types: string[];
  stats: Record<string, number>;
  abilities: string[];
  hiddenAbility: string | null;
  /** For a Mega: the stone it has to hold. Picking the entry sets it as the item. */
  stone: string | null;
}

export const REGIONS: { id: Region; label: string }[] = [
  { id: "alola",  label: "Alolan" },
  { id: "galar",  label: "Galarian" },
  { id: "hisui",  label: "Hisuian" },
  { id: "paldea", label: "Paldean" },
];

function kindOf(suffix: string): { kind: EntryKind; region: Region | null } {
  if (suffix.includes("mega")) return { kind: "mega", region: null };
  const region = REGIONS.find((r) => suffix.startsWith(r.id));
  if (region) return { kind: "regional", region: region.id };
  if (suffix === "male" || suffix === "female") return { kind: "gender", region: null };
  return { kind: "base", region: null };
}

// Within one species: the base form, then gendered forms, then regional, then Megas
const KIND_ORDER: Record<EntryKind, number> = { base: 0, gender: 1, regional: 2, mega: 3 };

function build(): PokemonEntry[] {
  const dexOf = new Map(SPECIES.map((s) => [s.name, s.id]));
  const entries: PokemonEntry[] = [];

  for (const [form, data] of Object.entries(FORM_DATA)) {
    if (!isValidForm(form)) continue;
    const { base, suffix } = splitForm(form);
    const dex = dexOf.get(base);
    if (dex === undefined) continue;

    const { kind, region } = kindOf(suffix);
    let stone: string | null = null;
    if (kind === "mega") {
      const stones = GetMegaStones(base as "string");
      stone = preferredMegaStone(form, stones) ?? stones[0] ?? null;
    }

    entries.push({
      form,
      species: base,
      // Pyroar's only form is named pyroar-male, and formLabel already drops the
      // gender where it means nothing, so this reads "Pyroar"
      label: formLabel(form),
      // "pyroar-male" is its species' only form, so it's the base entry
      kind: kind === "gender" && !FORM_DATA[`${base}-${suffix === "male" ? "female" : "male"}`] ? "base" : kind,
      region,
      dex,
      spriteId: data.id,
      types: data.types,
      stats: data.stats,
      abilities: data.abilities,
      hiddenAbility: data.hiddenAbility,
      stone,
    });
  }

  return entries.sort((a, b) =>
    a.dex - b.dex ||
    KIND_ORDER[a.kind] - KIND_ORDER[b.kind] ||
    a.label.localeCompare(b.label));
}

// Built once at load - 324 entries, all from bundled data
export const POKEMON_ENTRIES: PokemonEntry[] = build();

/** Base stat total, shown on every card */
export function statTotal(entry: PokemonEntry): number {
  return Object.values(entry.stats).reduce((sum, value) => sum + value, 0);
}
