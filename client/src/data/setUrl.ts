import { EMPTY_BOOSTS, MAX_PER_STAT, MAX_TOTAL, NATURES, type Boosts, type BoostKey } from "./stats";
import { MOVE_BY_NAME } from "./moveLookup";
import { ABILITY_BY_NAME } from "./abilityLookup";
import { ITEM_DETAILS } from "./itemDetails";
import { SPECIES_BY_NAME, isValidForm, splitForm, type Gender } from "./forms";

// The whole in-progress set, as it lives in the address bar. Readable params
// rather than one packed blob: a set is only a dozen fields, the URL stays under
// ~200 characters, and there's no encoding version to migrate when a field moves.
export interface SetDraft {
  species: string;
  form: string;
  item: string;                 // "" means no held item
  gender: Gender;
  ability: string;
  nature: string;               // display casing, e.g. "Serious"
  moves: (string | null)[];     // always 4 slots; null is an empty slot
  boosts: Boosts;
}

const BOOST_PARAM: Record<BoostKey, string> = {
  boostHp: "hp",
  boostAtk: "atk",
  boostDef: "def",
  boostSpAtk: "spa",
  boostSpDef: "spd",
  boostSpe: "spe",
};

const GENDERS: string[] = ["male", "female", "genderless"];

export function draftToParams(draft: SetDraft): URLSearchParams {
  const params = new URLSearchParams();

  // Nothing picked yet - keep the URL clean rather than writing empty keys
  if (draft.species === "") return params;

  params.set("species", draft.species);
  // The default variety is implied by the species, so only a real choice is stored
  if (draft.form !== "" && draft.form !== draft.species) params.set("form", draft.form);
  params.set("gender", draft.gender);
  if (draft.ability !== "") params.set("ability", draft.ability);
  if (draft.nature !== "") params.set("nature", draft.nature.toLowerCase());
  if (draft.item !== "") params.set("item", draft.item);

  // Empty strings hold the slot positions, so move 4 doesn't come back as move 3
  if (draft.moves.some((move) => move !== null)) {
    params.set("moves", draft.moves.map((move) => move ?? "").join(","));
  }

  for (const key of Object.keys(BOOST_PARAM) as BoostKey[]) {
    if (draft.boosts[key] > 0) params.set(BOOST_PARAM[key], String(draft.boosts[key]));
  }

  return params;
}

// Everything here is untrusted - a URL can be hand-edited, truncated by a chat
// client, or reference a species since dropped from the dex - so each field is
// checked against the bundled data and silently dropped if it doesn't hold up.
// A partial draft is fine; CreateSet fills the gaps with its own defaults.
export function paramsToDraft(params: URLSearchParams): Partial<SetDraft> {
  const draft: Partial<SetDraft> = {};

  const species = params.get("species") ?? "";
  // Without a species nothing else means anything
  if (!SPECIES_BY_NAME.has(species)) return draft;
  draft.species = species;

  // Has to be well-formed *and* a form of this species - charizard-mega-x is a
  // real form, just not one Venusaur can wear
  const form = params.get("form");
  if (form && isValidForm(form) && splitForm(form).base === species) draft.form = form;

  const gender = params.get("gender");
  if (gender && GENDERS.includes(gender)) draft.gender = gender as Gender;

  const ability = params.get("ability");
  if (ability && ABILITY_BY_NAME.has(ability)) draft.ability = ability;

  const nature = params.get("nature");
  if (nature) {
    // URLs carry lower case; NATURES holds the display casing
    const match = NATURES.find((n) => n !== "" && n.toLowerCase() === nature.toLowerCase());
    if (match) draft.nature = match;
  }

  const item = params.get("item");
  if (item && item in ITEM_DETAILS) draft.item = item;

  const moves = params.get("moves");
  if (moves) {
    const slots: string[] = moves.split(",").slice(0, 4);
    const parsed: (string | null)[] = [null, null, null, null];
    slots.forEach((slug, index) => {
      // Duplicates are rejected by the server, so don't build one here either
      if (slug && MOVE_BY_NAME.has(slug) && !parsed.includes(slug)) parsed[index] = slug;
    });
    if (parsed.some((move) => move !== null)) draft.moves = parsed;
  }

  // Clamped per stat and in total, matching what the sliders enforce and the
  // server re-checks - a URL claiming 32 everywhere must not reach the form
  const boosts: Boosts = { ...EMPTY_BOOSTS };
  let spent = 0;
  for (const key of Object.keys(BOOST_PARAM) as BoostKey[]) {
    const raw = Number(params.get(BOOST_PARAM[key]));
    if (!Number.isInteger(raw) || raw <= 0) continue;
    const value = Math.min(raw, MAX_PER_STAT, MAX_TOTAL - spent);
    if (value <= 0) continue;
    boosts[key] = value;
    spent += value;
  }
  if (spent > 0) draft.boosts = boosts;

  return draft;
}
