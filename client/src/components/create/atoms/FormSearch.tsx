import { formLabel } from "@/data/forms.ts";

interface Props{
  currentForm: string;
  setSelectedForm: (form: string) => void;
  pokemonForms: string[];
}

export default function FormSearch({currentForm, setSelectedForm, pokemonForms}: Props) {
  return (
    <select className="form grid-cell" value={currentForm} onChange={(e) => setSelectedForm(e.target.value)}>
      <option disabled value="">-- Form --</option>
      {pokemonForms.map((s: string) => (
        <option key={s} value={s}>{formLabel(s)}</option>
      ))}
    </select>
  )
}