import { useEffect, useState, type SyntheticEvent, useRef} from 'react'
import "./CreateSet.css"
import SpeciesSearch from '../organisms/SpeciesSearch.tsx';
import FormSelect from '../molecules/FormSelect.tsx';
import StatsConfig from '../molecules/StatsConfig.tsx';
import TypeDisplay from '@/components/shared/TypeDisplay.tsx';
import GetMegaStones from '@/data/megaStones.ts';
import { API_URL } from '@/services/api.ts';
import { EMPTY_BOOSTS, MAX_PER_STAT, MAX_TOTAL, type Boosts, type BoostKey } from '@/data/stats.ts';
import NatureSelect from '../molecules/NatureSelect.tsx';
import { type MoveSummary } from '@/data/moves.ts';
import { MOVE_BY_NAME } from '@/data/moveLookup.ts';
import { itemSpritePath, ITEM_DETAILS } from '@/data/itemDetails.ts';
import { formLabel, isValidForm, preferredMegaStone } from '@/data/forms.ts';
import Modal from '@/components/shared/Modal.tsx';
import MoveSelect from '../molecules/MoveSelect.tsx';
import MoveButtonList from '../molecules/MoveButtonList.tsx';
import AbilitySelect from '../molecules/AbilitySelect.tsx';
import { ABILITY_BY_NAME } from '@/data/abilityLookup.ts';
import NotificationList from '@/components/shared/NotificationList.tsx';
import useNotifications from '@/components/shared/useNotifications.ts';

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

// One entry of PokeAPI's /pokemon/{name} abilities array.
// slot is 1-2 for normal abilities and 3 for the hidden one, so sorting by it
// keeps the picker in the game's own order.
interface ApiAbility{
  ability: {name:string};
  is_hidden: boolean;
  slot: number;
}

// Shown when an item slug has no file in public/sprites/items - which now only
// happens for a slug added to itemData.ts without re-running build-items.mjs.
const PLACEHOLDER_SPRITE = "/wireSquare.svg";
const QUESTION_MARK = "/question-mark.svg"

export default function CreateSet() {
  // form logic
  const [isSpeciesOpen, setIsSpeciesOpen] = useState<boolean>(true);
  const [editingSlot, setEditingSlot] = useState<number | null>(null);
  const [isNatureOpen, setIsNatureOpen] = useState<boolean>(false);
  const [isAbilityOpen, setIsAbilityOpen] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  // pokemon / form selection
  const [selectedPokemon, setSelectedPokemon] = useState<string>("");
  const [pokemonForms, setPokemonForms] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string>("");
  const [isMegaForm, setIsMegaForm] = useState<boolean>(false);
  const [formTypes, setFormTypes] = useState<string[]>([]);
  // sprite
  const [sprite, setSprite] = useState<string>();
  // items
  // The held/berry/mega filter and whether the species has a mega at all are
  // concerns of the item picker, so they'll live inside that modal rather than here.
  const [selectedItem, setSelectedItem] = useState<string>("");
  // ability
  const [abilityList, setAbilityList] = useState<string[]>(["overgrow"]);
  const [ability, setAbility] = useState<string>("");
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
  // notifications
  const { notifications, notify, dismiss } = useNotifications();

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
        // Keep only the default form and the suffixes Champions actually has.
        // PokeAPI also returns -gmax, -totem, -cap, -starter and friends.
        const filteredVarieties:string[] = varieties.filter(isValidForm);

        // Set forms
        setPokemonForms(filteredVarieties);
        setSelectedForm(filteredVarieties[0]);

        // Reset item
        setSelectedItem("");

        // Reset nature
        setNature("Serious");

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
        // Typing is per-form too: Galarian Slowbro is Poison/Psychic, not Water/Psychic
        setFormTypes(data.types.map((t: {type: {name: string}}) => t.type.name));
        // Object.fromEntries: takes the list of pairs: [["hp", 45],["atk",32],...]
        // then collapses it into a single object: {hp:45, attack:32, ...}
        setBaseStats(Object.fromEntries(
          data.stats.map((s:ApiStat) => [s.stat.name, s.base_stat])
        ));

        // Abilities are per-form, not per-species: Alolan Ninetales has none of
        // Kantonian's, and each mega has exactly one.
        const abilities:string[] = [...data.abilities]
          .sort((a:ApiAbility, b:ApiAbility) => a.slot - b.slot)
          .map((a:ApiAbility) => a.ability.name);

        setAbilityList(abilities);
        // Unlike a move slot there's no partial state to preserve - the ability
        // is either legal for this form or it isn't, so fall back to the first.
        setAbility((prev) => (abilities.includes(prev) ? prev : abilities[0] ?? ""));
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
    return () => { stale = true; };
  }, [selectedForm])

  // A mega form must hold its own stone, and which one depends on the form
  // (Charizardite X vs Y). This used to live in ItemSearch, but it's a rule about
  // the set rather than about the picker - so it stays put while the item control
  // is being rebuilt as a modal.
  useEffect(() => {
    if (!isMegaForm) return;
    const stones: string[] = GetMegaStones(selectedPokemon as "string");
    setSelectedItem(preferredMegaStone(selectedForm, stones) ?? stones[0] ?? "");
  }, [isMegaForm, selectedForm, selectedPokemon]);

  // update moveListRef
  const moveListRef = useRef(moveList);
  useEffect(() => {
    moveListRef.current = moveList;
  },[moveList])

  const learnsetForm  = selectedForm.includes("-mega") ? pokemonForms[0] : selectedForm;
  useEffect(() => {
    if (!learnsetForm) return;
    let stale = false;

    fetch(`https://pokeapi.co/api/v2/pokemon/${learnsetForm}`)
      .then((response) => response.json())
      .then((data) => {
        if (stale) return;

        const moves: MoveSummary[] = data.moves
        .map((m: ApiMove) => MOVE_BY_NAME.get(m.move.name))
        .filter((m:MoveSummary | undefined): m is MoveSummary => m !== undefined);

        setLearnableMoves(moves);
        
        // A form change can invalidate moves the previous form knew
        const learnable = new Set(moves.map((m) => m.name));
        const dropped = moveListRef.current
          .filter((m): m is string => m !== null && !learnable.has(m))
          .map((n) => MOVE_BY_NAME.get(n)?.label ?? n);

        // Removing a move silently reads as a bug, so say what went and why
        if (dropped.length > 0) {
          notify(
            `${formLabel(learnsetForm)} can't learn ${dropped.join(", ")}, so ` +
            `${dropped.length === 1 ? "it was" : "they were"} removed from the set.`,
            "orange"
          );
        }

        setMoveList((prev) => prev.map((m) => (m === null || learnable.has(m) ? m : null)));
      })
      .catch((error) => {console.log("Failed to load learnset: ", error)});
      return () => {stale = true};
  }, [learnsetForm, notify]);

  
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
    ability: ability,
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
   

  /* Species and pokemon selection functions */
  function choosePokemon(pokemon:string){
    setSelectedPokemon(pokemon);
    setIsSpeciesOpen(false);
  }

  function chooseNewPokemon(){
    setIsSpeciesOpen(true);
  }

  /* Nature selection functions */

  function chooseNature(){
    setIsNatureOpen(true);
  }

  function selectNature(nature:string){
    setNature(nature);
    setIsNatureOpen(false);
  }

  /* Ability selection functions */
  function selectAbility(chosen:string){
    setAbility(chosen);
    setIsAbilityOpen(false);
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
      <NotificationList notifications={notifications} onDismissed={dismiss}/>
      <form id="set-creation" className="p-4 m-4 w-full" onSubmit={handleSubmit}>
        <button type="button" className="hoverable-link rounded-[var(--rounded)] cell-name grid-cell" onClick={() => chooseNewPokemon()}>
          {selectedForm === "" ? "Choose a Pokémon" : formLabel(selectedForm)}
        </button>

        <button
          type="button"
          className="hoverable-link rounded-[var(--rounded)] cell-form grid-cell"
          onClick={() => setIsFormOpen(true)}
          // Nothing to choose between when a species has only its default form
          disabled={pokemonForms.length < 2}
        >
          {selectedForm === "" ? "Form" : formLabel(selectedForm)}
        </button>

        <div className="cell-typing grid-cell flex flex-row items-center justify-center gap-2">
          {formTypes.map((type: string) => <TypeDisplay key={type} type={type}/>)}
        </div>
        <button type="button" className="hoverable-link rounded-[var(--rounded)] cell-nature grid-cell" onClick={() => chooseNature()}>{nature}</button>
        <button
          type="button"
          className="hoverable-link rounded-[var(--rounded)] cell-ability grid-cell"
          onClick={() => setIsAbilityOpen(true)}
          disabled={abilityList.length === 0}
        >
          {ABILITY_BY_NAME.get(ability)?.label ?? ability}
        </button>
        {/* TODO: open an item select modal - inert until that exists */}
        <button type="button" className="hoverable-link rounded-[var(--rounded)] cell-items grid-cell flex flex-row items-center justify-center gap-2">
          {itemSprite !== "" ? (
            <img
              id="item-sprite"
              src={itemSprite}
              alt=""
              onError={(e) => { e.currentTarget.src = PLACEHOLDER_SPRITE; }}
            />
          ) : (
            <div id="item-sprite"></div>
          )}
          {selectedItem === "" ? "Select Item" : ITEM_DETAILS[selectedItem]?.label ?? selectedItem}
        </button>
        <img
          className="cell-sprite grid-cell"
          id="pokemon-sprite"
          src={!sprite ? QUESTION_MARK : sprite}
          alt={selectedForm}
          // A handful of forms have no sprite in the PokeAPI repo (pikachu-starter),
          // so there is nothing in public/sprites to serve for them
          onError={(e) => { e.currentTarget.src = QUESTION_MARK; }}
        />
        <div className="cell-moves grid-cell">
          <MoveButtonList moveList={moveList} onEditSlot={setEditingSlot}/>
        </div>

        <div className="cell-stats grid-cell">
          <StatsConfig baseStats={baseStats} nature={nature} statBoosts={statBoosts} setBoosts={updateBoost}/>
        </div>

        <button type="submit" className="hoverable-link rounded-[var(--rounded)] cell-submit grid-cell" disabled={isSubmitting || moveList.length === 0 || selectedPokemon === ""}>Create Set</button>
      </form>
      {/* Species select modal */}
      <Modal 
        isOpen={isSpeciesOpen}
        onClose={() => setIsSpeciesOpen(false)}
        title = "Choose a Pokémon"
        className="modal-full"
      >
        <SpeciesSearch onSelect={choosePokemon} />
      </Modal>
      {/* Form select modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title = "Choose Form"
        className="modal-sm"
      >
        <FormSelect
          pokemonForms={pokemonForms}
          currentForm={selectedForm}
          onConfirm={(form) => { setSelectedForm(form); setIsFormOpen(false); }}
        />
      </Modal>

      {/* Nature select modal */}
      <Modal
        isOpen={isNatureOpen}
        onClose={() => setIsNatureOpen(false)}
        title = "Select Nature"
        className="modal-lg"
      >
        <NatureSelect
          currentNature={nature}
          onConfirm={selectNature}/>
      </Modal>

      {/* Ability select modal */}
      <Modal
        isOpen={isAbilityOpen}
        onClose={() => setIsAbilityOpen(false)}
        title = "Choose Ability"
        className="modal-md"
      >
        <AbilitySelect abilityList={abilityList} currentAbility={ability} onConfirm={selectAbility}/>
      </Modal>
      {/* Move select modal */}
      <Modal 
        isOpen={editingSlot !== null} 
        onClose={() => setEditingSlot(null)} 
        title={`Choose Move ${(editingSlot ?? 0) + 1}`}
        className="modal-full"
      >
        <MoveSelect 
          key={editingSlot} 
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
