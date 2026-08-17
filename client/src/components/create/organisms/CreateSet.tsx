import { useEffect, useState, type SyntheticEvent } from 'react'
import "./CreateSet.css"
import SpeciesSearch from '../organisms/SpeciesSearch.tsx';
import FormSearch from '../atoms/FormSearch.tsx'
import ItemSearch from '../atoms/ItemSearch.tsx';
import ItemRadio from '../atoms/ItemRadio.tsx';
import StatsConfig from '../molecules/StatsConfig.tsx';
import { API_URL } from '@/services/api.ts';
import { EMPTY_BOOSTS, MAX_PER_STAT, MAX_TOTAL, type Boosts, type BoostKey } from '@/data/stats.ts';
import NatureSelect from '../atoms/NatureSelect.tsx';
import { type MoveSummary } from '@/data/moves.ts';
import { MOVE_BY_NAME } from '@/data/moveLookup.ts';
import { itemSpritePath } from '@/data/itemDetails.ts';
import Modal from '@/components/shared/Modal.tsx';
import MoveSelect from '../molecules/MoveSelect.tsx';
import MoveButtonList from '../molecules/MoveButtonList.tsx';

// One entry of PokeAPI's /pokemon/{name} stats array 
// This is the typing of the object returned that is needed to get name of stat and value of base stat
// It then can be mapped into a Record<string,number> for ease of use
interface ApiStat {
  base_stat: number;
  stat: { name: string };
}

interface ApiMove{
  move: {name:string};
}

// Shown when an item slug has no file in public/sprites/items - which now only
// happens for a slug added to itemData.ts without re-running build-items.mjs.
const PLACEHOLDER_SPRITE = "/wireSquare.svg";
const QUESTION_MARK = "/question-mark.svg"

export default function CreateSet() {
  // form logic
  const [isSpeciesOpen, setIsSpeciesOpen] = useState<boolean>(true);
  const [editingSlot, setEditingSlot] = useState<number | null>(null);
  // pokemon / form selection
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [pokemonForms, setPokemonForms] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string>("");
  const [isMegaForm, setIsMegaForm] = useState<boolean>(false);
  // sprite
  const [sprite, setSprite] = useState<string>();
  // items
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [canMega, setCanMega] = useState<boolean>(false);
  const [itemType, setItemType] = useState<string>("held");
  // moves
  const [learnableMoves, setLearnableMoves] = useState<MoveSummary[]>([]);
  const [moveList, setMoveList] = useState<(string | null)[]>([null, null, null, null]);
  // stats 
  // Record<string,number> means that you can use the name hp and get the value back
  const [baseStats, setBaseStats] = useState<Record<string, number>>({});
  const [statBoosts, setStatBoosts] = useState<Boosts>(EMPTY_BOOSTS);
  const [nature, setNature] = useState<string>("Bold");
  // submit button
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
        setCanMega(filteredVarieties.some((e: string) => e.includes("-mega")));

        // Set forms
        setPokemonForms(filteredVarieties);
        setSelectedForm(filteredVarieties[0]);

        // Reset item
        setItemType("held");
        setSelectedItem("");

        // Reset moves list
        setMoveList([null, null, null, null]);
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
    return () => { stale = true; };
  }, [selectedPokemon]);

  // Set sprite and stats depending on form of pokemon
  useEffect(() => {
    // check if a form has been selected
    if (selectedForm === "") return;
    // Ignore this response if the form changes again before it lands
    let stale = false;

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedForm}`)
      .then((response) => response.json())
      .then((data) => {
        if (stale) return;
        // Served from public/sprites, not data.sprites.front_default: that field
        // points at raw.githubusercontent.com, which 429s under GitHub's abuse
        // protection. data.id is the *form's* dex id, so megas resolve correctly.
        setSprite(`/sprites/${data.id}.png`);
        setIsMegaForm(data.name.includes("-mega"));
        // Object.fromEntries: takes the list of pairs: [["hp", 45],["atk",32],...]
        // then collapses it into a single object: {hp:45, attack:32, ...}
        setBaseStats(Object.fromEntries(
          data.stats.map((s:ApiStat) => [s.stat.name, s.base_stat])
        ));
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
    return () => { stale = true; };
  }, [selectedForm])

  const learnsetForm  = selectedForm.includes("-mega") ? pokemonForms[0] : selectedForm;
  useEffect(() => {
    if (!learnsetForm) return;
    let stale = false;

    fetch(`https://pokeapi.co/api/v2/pokemon/${learnsetForm}`)
      .then((response) => response.json())
      .then((data) => {
        if (stale) return;
        setLearnableMoves(
          data.moves.map((m: ApiMove) => MOVE_BY_NAME.get(m.move.name))
          .filter((m:MoveSummary | undefined): m is MoveSummary => m !== undefined)
        );
      })
      .catch((error) => {console.log("Failed to load learnset: ", error)});

      return () => {stale = true};
   }, [learnsetForm]);
  
  // Item sprites are keyed by the same slug we already hold, so the path is
  // derivable - no request, and no race between a slow response and a newer
  // selection. Previously this asked PokeAPI, which has no entry at all for the
  // Champions-original mega stones and so always fell back to the placeholder.
  const itemSprite = selectedItem === "" ? "" : itemSpritePath(selectedItem);

  // Function to clamp a stat boost slider
  function updateBoost(key:BoostKey, value:number){
    setStatBoosts((prev) => {
      const spentByOthers = Object.values(prev).reduce((sum,v) => sum + v, 0) - prev[key];
      const clamped = Math.min(value, MAX_PER_STAT, MAX_TOTAL - spentByOthers);
      return { ...prev, [key]: clamped};
    });
  }

  // Function run by submit button to create a new set 
  async function handleSubmit(e: SyntheticEvent){
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
    // Real values from the form
    species: selectedPokemon,
    form: selectedForm,
    // Schema is nullable — null means "no held item", "" would be a string that passes validation but means nothing
    item: selectedItem === "" ? null : selectedItem,
    // Hardcoded placeholders — replaced by real inputs one at a time
    gender: "male",
    ability: "overgrow",
    nature: nature.toLowerCase(),
    ...statBoosts,
    moves: moveList.filter((move): move is string => move !== null),
    isPublic: false,
    };

    // Wrap in try/finally incase the fetch fails, the setIsSubmitting needs to be turned off regardless
    try{
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

    } finally {
      setIsSubmitting(false);
    }
  }
   
  function choosePokemon(pokemon:string){
    setSelectedPokemon(pokemon);
    setIsSpeciesOpen(false);
  }

  function chooseNewPokemon(){
    setIsSpeciesOpen(true);
  }

  /* Move slot functions */
  function confirmMove(move:string){
    setMoveList((prev) => prev.map((m,i) => (i === editingSlot ? move: m))); // replace move in editing slot with new move
    setEditingSlot(null);
  }

  function clearSlot(){
    setMoveList((prev) => prev.map((m,i) => (i === editingSlot ? null : m)));
    setEditingSlot(null);
  }

  return (
    <div id="create-container" className="w-10/10 flex flex-col items-center">
      <form id="set-creation" className="p-4 m-4 w-full" onSubmit={handleSubmit}>
        <div id="species-form-select" className="flex flex-row"> 
          <button type="button" onClick={() => chooseNewPokemon()}>Choose new pokemon</button>
          <FormSearch currentForm={selectedForm} setSelectedForm={setSelectedForm} pokemonForms={pokemonForms}/>
          <NatureSelect nature={nature} setNature={setNature}/>
          <label className="flex flex-col">
            Select Item
            <div className='flex flex-row'>
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
          </label>
        </div>
        <div id="sprite-and-stats" className="flex flex-row gap-4">
          <img
            id="pokemon-sprite"
            src={!sprite ? QUESTION_MARK : sprite}
            alt={selectedForm}
            // A handful of forms have no sprite in the PokeAPI repo (pikachu-starter),
            // so there is nothing in public/sprites to serve for them
            onError={(e) => { e.currentTarget.src = QUESTION_MARK; }}
          />
          <MoveButtonList moveList={moveList} onEditSlot={setEditingSlot}/>
          <StatsConfig baseStats={baseStats} nature={nature} statBoosts={statBoosts} setBoosts={updateBoost}/>
        </div>
        <button type="submit" className="hoverable-link" disabled={isSubmitting || moveList.length === 0 || selectedPokemon === ""}>Create Set</button>
      </form>
      <Modal 
        isOpen={isSpeciesOpen}
        onClose={() => setIsSpeciesOpen(false)}
        title = "Choose a Pokémon"
      >
        <SpeciesSearch onSelect={choosePokemon} setItemType={setItemType} />
      </Modal>
      <Modal isOpen={editingSlot !== null} onClose={() => setEditingSlot(null)} title={`Choose Move ${(editingSlot ?? 0) + 1}`}
      >
        <MoveSelect key={editingSlot} 
          learnableMoves={learnableMoves} 
          currentMove={editingSlot == null ? null : moveList[editingSlot]} 
          takenMoves={moveList.filter((m,i) => m !== null && i !== editingSlot) as string[]} 
          onConfirm={confirmMove}
          onClear={clearSlot}
        />
      </Modal>
    </div>
  )
}
