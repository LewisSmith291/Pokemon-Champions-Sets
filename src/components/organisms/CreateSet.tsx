import { useEffect, useState } from 'react'
import SpeciesSearch from '../atoms/setCreation/SpeciesSearch';
import ItemSearch from '../atoms/setCreation/ItemSearch';
import "./CreateSet.css"
import ItemRadio from '../atoms/setCreation/ItemRadio';

// Shown when an item has no PokeAPI sprite (e.g. Champions-original mega stones,
// which have no /item/{slug} endpoint). Served from public/wireSquare.svg.
const PLACEHOLDER_SPRITE = "/wireSquare.svg";

export default function CreateSet() {
  // pokemon / form selection
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [pokemonForms, setPokemonForms] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string>("");
  const [isMegaForm, setIsMegaForm] = useState<boolean>(false);
  // sprite
  const [sprite, setSprite] = useState<string>();
  // items
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [itemSprite, setItemSprite] = useState<string>();
  const [canMega, setCanMega] = useState<boolean>(false);
  const [itemType, setItemType] = useState<string>("held");


  // Fill out list of forms (default and mega, and without filtering: gmax forms)
  useEffect(() => {
    // only fetch if a pokemon has been selected
    if (selectedPokemon !== ""){
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`)
      .then((response) => response.json())
      .then((data) => {
        const varieties:string[] = data.varieties.map((v: {pokemon: {name: string}}) => v.pokemon.name)
        // Remove gmax forms
        const filteredVarieties:string[] = varieties.filter((name:string) => !name.includes("-gmax"));

        // Enable mega stone selection if mega forms
        filteredVarieties.forEach(e => {
        if (e.includes("mega")){
          setCanMega(true);
        }
        else {
          setCanMega(false);
        }
        });

        // Set forms
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
          setIsMegaForm(data.name.includes("mega"));
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
      <p>{""+isMegaForm}</p>
      <h1>Create Pokemon Set</h1>
      <div id="">
        <div id="species-form-select">
          <SpeciesSearch value={selectedPokemon} onSelect={setSelectedPokemon} setItemType={setItemType}/>
          <select value={selectedForm} onChange={(e) => setSelectedForm(e.target.value)}>
            <option disabled value="">-- Form --</option>
            {pokemonForms.map((s: string) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ItemRadio canMega={canMega} isMega={isMegaForm} get={itemType} set={setItemType} />
          <ItemSearch value={selectedItem} onSelect={setSelectedItem} name={selectedPokemon} isMegaForm={isMegaForm} isMega={itemType==="mega"} isHeld={itemType==="held"} isBerry={itemType==="berry"}/>
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
