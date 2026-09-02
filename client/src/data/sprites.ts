import { FORM_DATA } from "./formData";
import { SPECIES_BY_NAME, splitForm, type Gender } from "./forms";

export const QUESTION_MARK = "/question-mark.svg";

/**
 * Battle sprite for a stored set. Served from public/sprites rather than
 * PokeAPI's own urls, which point at raw.githubusercontent.com and get rate
 * limited. Falls back to the placeholder for a form that isn't in the bundle.
 */
export function spritePath(form: string, gender: Gender): string {
  const data = FORM_DATA[form];
  if (!data) return QUESTION_MARK;

  // Pikachu's tail and Venusaur's flower differ by gender without being separate
  // varieties, so those get a second file under sprites/female/. Meowstic and
  // Basculegion are excluded - their genders are already distinct forms with
  // their own dex ids, which the shared path resolves on its own.
  const species = SPECIES_BY_NAME.get(splitForm(form).base);
  const useFemale =
    gender === "female" &&
    (species?.hasGenderDifferences ?? false) &&
    !(species?.hasGenderForms ?? false);

  return `/sprites/${useFemale ? "female/" : ""}${data.id}.png`;
}

/**
 * onError handler for a sprite. Female coverage is patchy for the rarer forms -
 * Mega Venusaur has one, most megas don't - so drop back to the shared sprite
 * before giving up on the placeholder.
 */
export function spriteFallback(event: React.SyntheticEvent<HTMLImageElement>, form: string): void {
  const img = event.currentTarget;
  const id = FORM_DATA[form]?.id;

  if (img.src.includes("/female/") && id !== undefined) {
    img.src = `/sprites/${id}.png`;
    return;
  }
  if (!img.src.endsWith(QUESTION_MARK)) img.src = QUESTION_MARK;
}
