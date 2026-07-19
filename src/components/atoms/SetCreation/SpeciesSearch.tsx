import { useEffect, useState} from 'react'

interface Props{
  
}

export default function SpeciesSearch({}: Props) {
  const [speciesList, setSpeciesList] = useState<string[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokedex/champions`)
      .then((response) => response.json())
      .then((data) => {
        setSpeciesList(data);

        const species = data.pokemon_entries.map((s: {pokemon_species : {name:string}}) => s.pokemon_species.name);
        setSpeciesList(species);
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, []);

  return (
    <select onChange={(val) => setSelectedPokemon(val)}>
      {speciesList.map((s:string, index:number) => 
      <option key={index}>{s}</option>
      )}
    </select>
  )
}