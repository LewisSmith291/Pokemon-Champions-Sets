interface Props{
  currentForm: string;
  setSelectedForm: (form: string) => void;
  pokemonForms: string[];
}

export default function FormSearch({currentForm, setSelectedForm, pokemonForms}: Props) {
  return (
    <select value={currentForm} onChange={(e) => setSelectedForm(e.target.value)}>
      <option disabled value="">-- Form --</option>
      {pokemonForms.map((s: string) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  )
}