import { useEffect, useState} from 'react'
import SpeciesSearch from '../atoms/SetCreation/SpeciesSearch';

interface Props{

}

export default function CreateSet({}: Props) {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [speciesList, setSpeciesList] = useState<Object>();
  const [selectedPokemon, setSelectedPokemon] = useState("");


  return (
    <div>
      <h1>Create Pokemon Set</h1>
      <SpeciesSearch />
    </div>
  )
}