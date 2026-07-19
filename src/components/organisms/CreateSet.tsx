import { useState } from 'react'
import SpeciesSearch from '../atoms/SetCreation/SpeciesSearch';

export default function CreateSet() {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");

  return (
    <div>
      <h1>Create Pokemon Set</h1>
      <SpeciesSearch value={selectedPokemon} onSelect={setSelectedPokemon} />
      <p>You picked: {selectedPokemon}</p>
    </div>
  )
}
