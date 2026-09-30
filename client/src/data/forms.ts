import { SPECIES, type Species } from "./species";
import { FORM_DATA } from "./formData";

export const SPECIES_BY_NAME: Map<string, Species> = new Map(
  SPECIES.map((s) => [s.name, s])
);

// The only variety suffixes Champions uses. PokeAPI hands back plenty more
// (-gmax, -totem, -cap, -starter, ...) and none of those are playable here.
// Longest first: "-male-mega" has to be tested before "-mega", and "-mega-x"
// before "-mega", or the wrong tail gets stripped.
export const FORM_SUFFIXES = [
  "male-mega", "female-mega",
  "mega-x", "mega-y", "mega", "mega-z",
  // Paldean Tauros has no plain "-paldea" variety - each breed is its own slug
  "paldea-combat-breed", "paldea-blaze-breed", "paldea-aqua-breed",
  "alola", "galar", "hisui", "paldea",
  // Rotom's appliance forms - each re-types it and gives it a signature move
  "heat", "wash", "frost", "fan", "mow",
  "male", "female",
] as const;

export type FormSuffix = (typeof FORM_SUFFIXES)[number] | "";

// Rotom's forms are named with the appliance first: "Wash Rotom", not "Rotom Wash"
const APPLIANCE: Record<string, string> = {
  heat: "Heat", wash: "Wash", frost: "Frost", fan: "Fan", mow: "Mow",
};

const REGIONAL_ADJECTIVE: Record<string, string> = {
  alola: "Alolan",
  galar: "Galarian",
  hisui: "Hisuian",
  paldea: "Paldean",
};

// Splits a variety slug into its species and its form.
//
// Note this matches known suffixes rather than splitting on "-": plenty of
// species slugs contain hyphens of their own ("kommo-o", "mr-rime", "ho-oh"),
// and slicing at the last hyphen would mangle them.

// This searches all known suffixes and when matching, gets length of matched suffix, 
// and chops that off the species name 
export function splitForm(form: string): { base: string; suffix: FormSuffix } {
  const species: string | undefined = SPECIES_BY_DEFAULT_FORM.get(form);
  if (species) return { base: species, suffix: "" };
  return splitBySuffix(form);
}

function splitBySuffix(form: string): { base: string; suffix: FormSuffix } {
  for (const suffix of FORM_SUFFIXES) {
    if (form.endsWith(`-${suffix}`)) {
      return { base: form.slice(0, -(suffix.length + 1)), suffix };
    }
  }
  return { base: form, suffix: "" };
}

// Species whose default form has a name of its own: PokeAPI has no plain
// "lycanroc", only lycanroc-midday, and likewise toxtricity-amped,
// aegislash-shield, mimikyu-disguised and a few more. None of those names end in
// a suffix above, so without this they split to no species, fail isValidForm,
// and the species can't be picked at all. They're the unmarked form, so they
// split to the plain species with no suffix.
//
// species.ts records the default form's dex id, which is how it's found. Defaults
// that already split correctly - pyroar-male, meowstic-male - are left alone, or
// Meowstic would lose its ♂.
const SPECIES_BY_DEFAULT_FORM: Map<string, string> = new Map(
  SPECIES.filter((s) => !(s.name in FORM_DATA)).flatMap((s) => {
    const form = Object.keys(FORM_DATA).find((key) => FORM_DATA[key].id === s.id);
    return form && splitBySuffix(form).base !== s.name ? [[form, s.name] as const] : [];
  })
);

// Individual forms that match a valid suffix but aren't in Champions. The suffix
// can't be dropped for these - "-galar" is still needed for Galarian Slowbro and
// the rest - so they're excluded by name instead.
export const EXCLUDED_FORMS: ReadonlySet<string> = new Set([
  "farfetchd-galar",   // Sirfetch'd is in the game, but its pre-evolution isn't
  "mr-mime-galar"
]);

// True only for the default form and the suffixes above, only when the species
// itself is in the Champions dex, and not for a form excluded by name.
export function isValidForm(form: string): boolean {
  if (EXCLUDED_FORMS.has(form)) return false;
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
    case "mega-z":      return `Mega ${label} Z`;
    case "paldea-combat-breed": return `Paldean ${label} (Combat)`;
    case "paldea-blaze-breed":  return `Paldean ${label} (Blaze)`;
    case "paldea-aqua-breed":   return `Paldean ${label} (Aqua)`;
    case "male":        return gendered ? `${label} ♂` : label;
    case "female":      return gendered ? `${label} ♀` : label;
    case "male-mega":   return gendered ? `Mega ${label} ♂` : `Mega ${label}`;
    case "female-mega": return gendered ? `Mega ${label} ♀` : `Mega ${label}`;
    case "heat":
    case "wash":
    case "frost":
    case "fan":
    case "mow":         return `${APPLIANCE[suffix]} ${label}`;
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
  if (suffix === "mega-z") return stones.find((s) => s.endsWith("-z"));
  // Garchomp, Absol and Lucario now have a plain stone and a Z stone. Pick the
  // plain one on purpose rather than relying on it happening to sort first.
  if (suffix === "mega") return stones.find((s) => !/-[xyz]$/.test(s));
  return undefined;
}