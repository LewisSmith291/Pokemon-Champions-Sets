import { formLabel } from "@/data/forms";

interface Props {
  pokemonForms: string[];
  currentForm: string;
  onConfirm: (form: string) => void;
}

// One button per variety. There's no confirm step - a form is a single value
// with nothing to compose, so picking one closes the modal like the species list.
export default function FormSelect({ pokemonForms, currentForm, onConfirm }: Props) {
  return (
    <div id="form-button-list" className="flex flex-col gap-2 p-2">
      {pokemonForms.map((form: string) => (
        <button
          key={form}
          type="button"
          onClick={() => onConfirm(form)}
          aria-pressed={currentForm === form}
          className={`form-button hoverable-link ${currentForm === form ? "bg-accent" : ""}`}
        >
          {formLabel(form)}
        </button>
      ))}
    </div>
  );
}
