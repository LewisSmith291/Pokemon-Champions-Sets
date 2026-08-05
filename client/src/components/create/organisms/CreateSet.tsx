import { useEffect, useState } from 'react'
import "./CreateSet.css"
import SpeciesSearch from '../atoms/SpeciesSearch.tsx';
import FormSearch from '../atoms/FormSearch.tsx'
import ItemSearch from '../atoms/ItemSearch.tsx';
import ItemRadio from '../atoms/ItemRadio.tsx';
import StatsConfig from '../molecules/StatsConfig.tsx';
import { API_URL } from '@/services/api.ts';

// Shown when an item has no PokeAPI sprite (e.g. Champions-original mega stones,
// which have no /item/{slug} endpoint). Served from public/wireSquare.svg.
const PLACEHOLDER_SPRITE = "/wireSquare.svg";
const QUESTION_MARK = "/question-mark.svg"

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
    if (selectedPokemon === "") return;

    // Ignore this response if the species changes again before it lands
    let stale = false;

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`)
      .then((response) => response.json())
      .then((data) => {
        if (stale) return;

        const varieties:string[] = data.varieties.map((v: {pokemon: {name: string}}) => v.pokemon.name)
        // Remove gmax forms
        const filteredVarieties:string[] = varieties.filter((name:string) => !name.includes("-gmax"));

        // Enable mega stone selection if any variety is a mega form
        setCanMega(filteredVarieties.some((e: string) => e.includes("mega")));

        // Set forms
        setPokemonForms(filteredVarieties);
        setSelectedForm(filteredVarieties[0]);

        // Reset item
        setItemType("held");
        setSelectedItem("");
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
    return () => { stale = true; };
  }, [selectedPokemon]);

  // Set sprite depending on form of pokemon
  useEffect(() => {
    // check if a form has been selected
    if (selectedForm === "") return;
    // Ignore this response if the form changes again before it lands
    let stale = false;

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedForm}`)
      .then((response) => response.json())
      .then((data) => {
        if (stale) return;
        setSprite(data.sprites.other.home.front_default);
        setIsMegaForm(data.name.includes("mega"));
      })

    return () => { stale = true; };
  }, [selectedForm])

  // Set item sprite depending on selected item
  useEffect(() => {
    // check if an item has been selected
    if (selectedItem === ""){
      setItemSprite("");
      return;
    }
    // Ignore this response if the selection moves on before it lands, otherwise
    // a slow request for the old item overwrites the sprite of the new one.
    let stale = false;

    fetch(`https://pokeapi.co/api/v2/item/${selectedItem}`)
      .then((response) => {
        // 404 for Champions-original mega stones not in PokeAPI
        if (!response.ok) throw new Error(`Item not in PokeAPI: ${selectedItem}`);
        return response.json();
      })
      .then((data) => {
        // some items exist but have a null sprite — fall back too
        if (!stale) setItemSprite(data.sprites.default ?? PLACEHOLDER_SPRITE);
      })
      .catch((error) => {
        console.log('Falling back to placeholder sprite: ', error);
        if (!stale) setItemSprite(PLACEHOLDER_SPRITE);
      });

    return () => { stale = true; };
  }, [selectedItem])

  // 
  async function handleSubmit(){
    const payload = {
    // Real values from the form
    species: selectedPokemon,
    form: selectedForm,
    // Schema is nullable — null means "no held item", "" would be a string that passes validation but means nothing
    item: selectedItem === "" ? null : selectedItem,

    // Hardcoded placeholders — replaced by real inputs one at a time
    gender: "male",
    ability: "overgrow",
    nature: "adamant",
    boostHp: 0, boostAtk: 0, boostDef: 0,
    boostSpAtk: 0, boostSpDef: 0, boostSpe: 0,
    moves: ["protect"],
    isPublic: false,
    };

    // POST Promise at /api/sets using setsRouter function
    const response = await fetch(`${API_URL}/api/sets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Failed:", response.status, data);
      return;
    }

    console.log("Created set:", data.set.id);
  }

  return (
    <div id="set-creation">
      <h1>Create Pokemon Set</h1>
      <div id="">
        <div id="species-form-select">
          <SpeciesSearch value={selectedPokemon} onSelect={setSelectedPokemon} setItemType={setItemType}/>
          <FormSearch currentForm={selectedForm} setSelectedForm={setSelectedForm} pokemonForms={pokemonForms}/>
          <ItemRadio canMega={canMega} isMega={isMegaForm} get={itemType} set={setItemType} />
          <ItemSearch value={selectedItem} onSelect={setSelectedItem} name={selectedPokemon} isMegaForm={isMegaForm} itemType={itemType}/>
          {itemSprite !== "" ? 
            (
              <img
                id="item-sprite" 
                src={itemSprite}
                alt={selectedItem}
                onError={(e) => { e.currentTarget.src = PLACEHOLDER_SPRITE; }}
              />
            ) : (
              <div id="item-sprite"></div>
            )
          }
        </div>
      </div>
      <div id="sprite-and-stats">
        <img id="pokemon-sprite" src={!sprite ? QUESTION_MARK: sprite} alt={selectedForm}/>
        <StatsConfig species={selectedForm}/>
      </div>
    </div>
  )
}
