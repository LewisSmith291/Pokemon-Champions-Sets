import { SPECIES, type Species } from "./species";

export const SPECIES_BY_NAME: Map<string, Species> = new Map(
  SPECIES.map((s) => [s.name, s])
);

// The only variety suffixes Champions uses. PokeAPI hands back plenty more
// (-gmax, -totem, -cap, -starter, ...) and none of those are playable here.
// Longest first so "-mega-x" is tested before "-mega".
export const FORM_SUFFIXES = ["mega-x", "mega-y", "mega", "alola", "galar", "hisui"] as const;

export type FormSuffix = (typeof FORM_SUFFIXES)[number] | "";

const REGIONAL_ADJECTIVE: Record<string, string> = {
  alola: "Alolan",
  galar: "Galarian",
  hisui: "Hisuian",
};

// Splits a variety slug into its species and its form.
//
// Note this matches known suffixes rather than splitting on "-": plenty of
// species slugs contain hyphens of their own ("kommo-o", "mr-rime", "ho-oh"),
// and slicing at the last hyphen would mangle them.

// This searches all known suffixes and when matching, gets length of matched suffix, 
// and chops that off the species name 
export function splitForm(form: string): { base: string; suffix: FormSuffix } {
  for (const suffix of FORM_SUFFIXES) {
    if (form.endsWith(`-${suffix}`)) {
      return { base: form.slice(0, -(suffix.length + 1)), suffix };
    }
  }
  return { base: form, suffix: "" };
}

// True only for the default form and the six suffixes above, and only when the
// species itself is in the Champions dex.
export function isValidForm(form: string): boolean {
  return SPECIES_BY_NAME.has(splitForm(form).base);
}

// "ninetales-alola" -> "Alolan Ninetales", "charizard-mega-x" -> "Mega Charizard X"
export function formLabel(form: string): string {
  const { base, suffix } = splitForm(form);

  // Falls back to title-casing the slug if the species somehow isn't in the dex
  const label: string =
    SPECIES_BY_NAME.get(base)?.label ??
    base.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  switch (suffix) {
    case "":       return label;
    case "mega":   return `Mega ${label}`;
    case "mega-x": return `Mega ${label} X`;
    case "mega-y": return `Mega ${label} Y`;
    default:       return `${REGIONAL_ADJECTIVE[suffix]} ${label}`;
  }
}

// Charizard and Raichu each have two stones, and the form decides which one.
// Returns undefined when the form doesn't pin a specific stone.
export function preferredMegaStone(form: string, stones: string[]): string | undefined {
  const { suffix } = splitForm(form);
  if (suffix === "mega-x") return stones.find((s) => s.endsWith("-x"));
  if (suffix === "mega-y") return stones.find((s) => s.endsWith("-y"));
  return undefined;
}