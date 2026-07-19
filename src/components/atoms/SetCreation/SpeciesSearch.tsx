import { useEffect, useState } from 'react'

interface Props {
  value: string;
  onSelect: (species: string) => void;
}

export default function SpeciesSearch({ value, onSelect }: Props) {
  const [speciesList, setSpeciesList] = useState<string[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokedex/champions`)
      .then((response) => response.json())
      .then((data) => {
        const species = data.pokemon_entries.map((s: { pokemon_species: { name: string } }) => s.pokemon_species.name);
        setSpeciesList(species);
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, []);

  return (
    <select value={value} onChange={(e) => onSelect(e.target.value)}>
      <option disabled value="">-- choose a Pokémon --</option>
      {speciesList.map((s: string) => (
        <option key={s} value={s}>{s}</option>
      ))}
    </select>
  )
}
