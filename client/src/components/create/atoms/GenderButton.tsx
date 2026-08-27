import { type Gender } from "@/data/forms";
import Female from '/gender-female.svg'
import Male from '/gender-male.svg'

interface Props {
  gender: Gender;
  /** What this species permits - one entry means there's nothing to choose */
  options: Gender[];
  onChange: (gender: Gender) => void;
}

const SYMBOL: Record<Gender, string> = {
  male: Male,
  female: Female,
  genderless: "—",
};

const LABEL: Record<Gender, string> = {
  male: "Male",
  female: "Female",
  genderless: "Genderless",
};

export default function GenderButton({ gender, options, onChange }: Props) {
  const canChoose: boolean = options.length > 1;

  return (
    <button
      type="button"
      id="gender-button"
      className={`hoverable-link rounded-[var(--rounded)] gender-${gender}`}
      // Shown but inert for the 22 species that are fixed - hiding it would make
      // the row jump around and wouldn't tell the user the constraint exists
      disabled={!canChoose}
      onClick={() => onChange(gender === "male" ? "female" : "male")}
      aria-label={canChoose ? `Gender: ${LABEL[gender]}, change` : `Gender: ${LABEL[gender]}`}
      title={canChoose ? "Change gender" : `Always ${LABEL[gender].toLowerCase()}`}
    >
      {/* genderless is still a text glyph, so it can't go through <img>.
          alt is empty because the button's aria-label already names the state -
          otherwise a screen reader reads out the file name. */}
      {gender === "genderless"
        ? SYMBOL[gender]
        : <img src={SYMBOL[gender]} alt="" />}
    </button>
  );
}
