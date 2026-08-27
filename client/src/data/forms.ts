import { SPECIES, type Species } from "./species";

export const SPECIES_BY_NAME: Map<string, Species> = new Map(
  SPECIES.map((s) => [s.name, s])
);

// The only variety suffixes Champions uses. PokeAPI hands back plenty more
// (-gmax, -totem, -cap, -starter, ...) and none of those are playable here.
// Longest first: "-male-mega" has to be tested before "-mega", and "-mega-x"
// before "-mega", or the wrong tail gets stripped.
export const FORM_SUFFIXES = [
  "male-mega", "female-mega",
  "mega-x", "mega-y", "mega",
  "alola", "galar", "hisui",
  "male", "female",
] as const;

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

  // Pyroar's default variety is named "pyroar-male" but it has no female
  // counterpart, so the gender there is noise - strip it and show plain "Pyroar".
  const gendered: boolean = SPECIES_BY_NAME.get(base)?.hasGenderForms ?? false;

  switch (suffix) {
    case "":            return label;
    case "mega":        return `Mega ${label}`;
    case "mega-x":      return `Mega ${label} X`;
    case "mega-y":      return `Mega ${label} Y`;
    case "male":        return gendered ? `${label} ♂` : label;
    case "female":      return gendered ? `${label} ♀` : label;
    case "male-mega":   return gendered ? `Mega ${label} ♂` : `Mega ${label}`;
    case "female-mega": return gendered ? `Mega ${label} ♀` : `Mega ${label}`;
    default:            return `${REGIONAL_ADJECTIVE[suffix]} ${label}`;
  }
}

export type Gender = "male" | "female" | "genderless";

// What gender a variety implies, for the species where gender *is* the form.
// Returns null when the form says nothing about it.
export function genderFromForm(form: string): Gender | null {
  const { base, suffix } = splitForm(form);
  if (!SPECIES_BY_NAME.get(base)?.hasGenderForms) return null;
  if (suffix === "male" || suffix === "male-mega") return "male";
  if (suffix === "female" || suffix === "female-mega") return "female";
  return null;
}

// The counterpart variety for the other gender, keeping mega-ness. Returns the
// form untouched for every species where gender isn't a form.
export function withGender(form: string, gender: Gender): string {
  const { base, suffix } = splitForm(form);
  if (gender === "genderless") return form;
  if (!SPECIES_BY_NAME.get(base)?.hasGenderForms) return form;

  const isMega: boolean = suffix === "male-mega" || suffix === "female-mega";
  return `${base}-${gender}${isMega ? "-mega" : ""}`;
}

// Which genders a species allows, straight from PokeAPI's gender_rate.
export function allowedGenders(speciesName: string): Gender[] {
  const rate: number = SPECIES_BY_NAME.get(speciesName)?.genderRate ?? -1;
  if (rate === -1) return ["genderless"];
  if (rate === 0) return ["male"];
  if (rate === 8) return ["female"];
  return ["male", "female"];
}

// Charizard and Raichu each have two stones, and the form decides which one.
// Returns undefined when the form doesn't pin a specific stone.
export function preferredMegaStone(form: string, stones: string[]): string | undefined {
  const { suffix } = splitForm(form);
  if (suffix === "mega-x") return stones.find((s) => s.endsWith("-x"));
  if (suffix === "mega-y") return stones.find((s) => s.endsWith("-y"));
  return undefined;
}