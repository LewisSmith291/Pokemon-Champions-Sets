import { type Gender } from "@/data/forms";
import GenderIcon, { GENDER_LABEL } from "@/components/shared/GenderIcon";

interface Props {
  gender: Gender;
  /** What this species permits - one entry means there's nothing to choose */
  options: Gender[];
  onChange: (gender: Gender) => void;
}

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
      aria-label={canChoose ? `Gender: ${GENDER_LABEL[gender]}, change` : `Gender: ${GENDER_LABEL[gender]}`}
      title={canChoose ? "Change gender" : `Always ${GENDER_LABEL[gender].toLowerCase()}`}
    >
      {/* aria-hidden inside - the button's aria-label already names the state */}
      <GenderIcon gender={gender} />
    </button>
  );
}
