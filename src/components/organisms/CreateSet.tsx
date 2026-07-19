import { useEffect, useState } from 'react'
import SpeciesSearch from '../atoms/SetCreation/SpeciesSearch';
import ItemSearch from '../atoms/SetCreation/ItemSearch';
import "./CreateSet.css"

// Shown when an item has no PokeAPI sprite (e.g. Champions-original mega stones,
// which have no /item/{slug} endpoint). Served from public/wireSquare.svg.
const PLACEHOLDER_SPRITE = "/wireSquare.svg";

export default function CreateSet() {
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [pokemonForms, setPokemonForms] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [sprite, setSprite] = useState<string>();
  const [itemSprite, setItemSprite] = useState<string>();
  const [canMega, setCanMega] = useState<boolean>(false);

  // Fill out list of forms (default and mega, and without filtering: gmax forms)
  useEffect(() => {
    // only fetch if a pokemon has been selected
    if (selectedPokemon !== ""){
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`)
      .then((response) => response.json())
      .then((data) => {
        const varieties = data.varieties.map((v: {pokemon: {name: string}}) => v.pokemon.name)
        // Remove gmax forms
        const filteredVarieties = varieties.filter((name:string) => !name.includes("-gmax"));
        setPokemonForms(filteredVarieties);
        setSelectedForm(filteredVarieties[0]);
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
        .then((response) => {
          // 404 for Champions-original mega stones not in PokeAPI
          if (!response.ok) throw new Error(`Item not in PokeAPI: ${selectedItem}`);
          return response.json();
        })
        .then((data) => {
          // some items exist but have a null sprite — fall back too
          setItemSprite(data.sprites.default ?? PLACEHOLDER_SPRITE);
        })
        .catch((error) => {
          console.log('Falling back to placeholder sprite: ', error);
          setItemSprite(PLACEHOLDER_SPRITE);
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
          {itemSprite && (
            <img
              id="item-sprite"
              src={itemSprite}
              alt={selectedItem}
              onError={(e) => { e.currentTarget.src = PLACEHOLDER_SPRITE; }}
            />
          )}
        </div>
      </div>
      <img id="pokemon-sprite" src={sprite} alt={selectedForm}/>
    </div>
  )
}
