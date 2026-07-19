import { useEffect, useState } from 'react'
import SpeciesSearch from '../atoms/SetCreation/SpeciesSearch';
import ItemSearch from '../atoms/SetCreation/ItemSearch';
import "./CreateSet.css"

export default function CreateSet() {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [pokemonForms, setPokemonForms] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [sprite, setSprite] = useState<string>();
  const [itemSprite, setItemSprite] = useState<string>();


  // Fill out list of forms (default and mega, and without filtering: gmax forms)
  useEffect(() => {
    // only fetch if a pokemon has been selected
    if (selectedPokemon !== ""){
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`)
      .then((response) => response.json())
      .then((data) => {
        const varieties = data.varieties.map((v: {pokemon: {name: string}}) => v.pokemon.name)
        setPokemonForms(varieties);
        setSelectedForm(varieties[0]);
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
    }
  }, [selectedPokemon]);

  // Set sprite depending on form of pokemon
  useEffect(() => {
    // check if a form has been selected
    if (selectedForm !== ""){
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedForm}`)
        .then((response) => response.json())
        .then((data) => {
          setSprite(data.sprites.other.home.front_default);
        })
    }
  }, [selectedForm])

  // Set item sprite depending on selected item
  useEffect(() => {
    // check if an item has been selected
    if (selectedItem !== ""){
      fetch(`https://pokeapi.co/api/v2/item/${selectedItem}`)
        .then((response) => response.json())
        .then((data) => {
          setItemSprite(data.sprites.default);
        })
        .catch((error) => {
          console.log('There was an ERROR: ', error);
        });
    }
    else {
      setItemSprite("");
    }
  }, [selectedItem])

  return (
    <div id="set-creation">
      <h1>Create Pokemon Set</h1>
      <div id="">
        <div id="species-form-select">
          <SpeciesSearch value={selectedPokemon} onSelect={setSelectedPokemon}/>
          <select value={selectedForm} onChange={(e) => setSelectedForm(e.target.value)}>
            <option disabled value="">-- Form --</option>
            {pokemonForms.map((s: string) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ItemSearch value={selectedItem} onSelect={setSelectedItem} />
          {itemSprite && <img src={itemSprite} alt={selectedItem} />}
        </div>
      </div>
      <img id="item-sprite" src={sprite} alt={selectedForm}/>
    </div>
  )
}
