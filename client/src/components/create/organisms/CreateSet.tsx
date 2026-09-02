import { useEffect, useState, useMemo, type SyntheticEvent, useRef} from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router';
import "./CreateSet.css"
import { draftToParams, paramsToDraft } from '@/data/setUrl.ts';
import { useSession } from '@/services/authClient';
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
import { formLabel, isValidForm, preferredMegaStone, allowedGenders, genderFromForm, withGender, SPECIES_BY_NAME, type Gender } from '@/data/forms.ts';
import GenderButton from '../atoms/GenderButton.tsx';
import Modal from '@/components/shared/Modal.tsx';
import MoveSelect from '../molecules/MoveSelect.tsx';
import MoveButtonList from '../molecules/MoveButtonList.tsx';
import AbilitySelect from '../molecules/AbilitySelect.tsx';
import ItemSelect from '../molecules/ItemSelect.tsx';
import TagSelect from '../molecules/TagSelect.tsx';
import { tagLabel } from '@/data/tags.ts';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { data: session } = useSession();

  // Read the URL once, on mount. A lazy initialiser rather than a value read every
  // render: the effect below writes the URL from state, so re-reading it here
  // would have the two fighting each other mid-edit.
  const [initial] = useState(() => paramsToDraft(searchParams));

  // form logic
  // Don't throw the species picker over a set that was just restored from a link
  const [isSpeciesOpen, setIsSpeciesOpen] = useState<boolean>(!initial.species);
  const [editingSlot, setEditingSlot] = useState<number | null>(null);
  const [isNatureOpen, setIsNatureOpen] = useState<boolean>(false);
  const [isAbilityOpen, setIsAbilityOpen] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isItemOpen, setIsItemOpen] = useState<boolean>(false);
  const [isTagsOpen, setIsTagsOpen] = useState<boolean>(false);
  // pokemon / form selection
  const [selectedPokemon, setSelectedPokemon] = useState<string>(initial.species ?? "");
  const [pokemonForms, setPokemonForms] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string>(initial.form ?? "");
  const [isMegaForm, setIsMegaForm] = useState<boolean>(false);
  const [formTypes, setFormTypes] = useState<string[]>([]);
  const [gender, setGender] = useState<Gender>(initial.gender ?? "genderless");
  // sprite
  // The form's dex id rather than a finished path: gender can change the sprite
  // without a form fetch, so the src has to be derived at render.
  const [formId, setFormId] = useState<number | null>(null);
  // items
  // The held/berry/mega filter and whether the species has a mega at all are
  // concerns of the item picker, so they'll live inside that modal rather than here.
  const [selectedItem, setSelectedItem] = useState<string>(initial.item ?? "");
  // ability
  const [abilityList, setAbilityList] = useState<string[]>(["overgrow"]);
  const [ability, setAbility] = useState<string>(initial.ability ?? "");
  // moves
  const [learnableMoves, setLearnableMoves] = useState<MoveSummary[]>([]);
  const [moveList, setMoveList] = useState<(string | null)[]>(initial.moves ?? [null, null, null, null]);
  // stats 
  // Record<string,number> means that you can use the name hp and get the value back
  const [baseStats, setBaseStats] = useState<Record<string, number>>({});
  const [statBoosts, setStatBoosts] = useState<Boosts>(initial.boosts ?? EMPTY_BOOSTS);
  const [nature, setNature] = useState<string>(initial.nature ?? "Bold");
  // submit button
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // A set is private until its author says otherwise - only public ones are
  // reachable from the showcase, browse or search.
  const [isPublic, setIsPublic] = useState<boolean>(false);
  // Role labels for browse/search later. Deliberately not in the URL codec -
  // they describe a finished set rather than being part of the build itself.
  const [tags, setTags] = useState<string[]>([]);
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
        // Keep a form that came in from the URL, otherwise take the default variety.
        // The resets that used to live here moved to choosePokemon: this effect also
        // runs when a set is hydrated from a link, and would wipe what it restored.
        setSelectedForm((prev) => filteredVarieties.includes(prev) ? prev : filteredVarieties[0]);
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
        setFormId(data.id);
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

  // Meowstic and Basculegion carry gender in the variety name, so choosing one of
  // those forms from the form picker has to move the gender button with it.
  useEffect(() => {
    const implied: Gender | null = genderFromForm(selectedForm);
    if (implied) setGender(implied);
  }, [selectedForm]);

  // A mega form must hold its own stone, and which one depends on the form
  // (Charizardite X vs Y). This used to live in ItemSearch, but it's a rule about
  // the set rather than about the picker - so it stays put while the item control
  // is being rebuilt as a modal.
  useEffect(() => {
    if (!isMegaForm) return;
    const stones: string[] = GetMegaStones(selectedPokemon as "string");
    setSelectedItem(preferredMegaStone(selectedForm, stones) ?? stones[0] ?? "");
  }, [isMegaForm, selectedForm, selectedPokemon]);

  // Mirror the set into the address bar so a refresh - or a trip through sign-in -
  // doesn't lose it. replace:true because otherwise every slider nudge would be a
  // history entry and the back button would take dozens of presses to leave.
  useEffect(() => {
    setSearchParams(
      draftToParams({
        species: selectedPokemon,
        form: selectedForm,
        item: selectedItem,
        gender,
        ability,
        nature,
        moves: moveList,
        boosts: statBoosts,
      }),
      { replace: true }
    );
    // setSearchParams is intentionally absent: react-router rebuilds it whenever
    // the location changes, so listing it would make this effect retrigger itself.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPokemon, selectedForm, selectedItem, gender, ability, nature, moveList, statBoosts]);

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

  // Guarded on the species actually having a mega: GetMegaStones trims letters off
  // the name until something matches, so asking about a species with no stone
  // eventually matches on a single letter and returns most of the list.
  const megaStones: string[] = useMemo(
    () => pokemonForms.some((form) => form.includes("-mega"))
      ? GetMegaStones(selectedPokemon as "string")
      : [],
    [pokemonForms, selectedPokemon]
  );

  // Pikachu's tail and Venusaur's flower differ by gender without being separate
  // varieties, so those species get a second file under sprites/female/. Meowstic
  // and Basculegion are excluded - their genders are already distinct forms with
  // their own dex ids, which the shared path already resolves.
  const speciesRecord = SPECIES_BY_NAME.get(selectedPokemon);
  const useFemaleSprite: boolean =
    gender === "female" &&
    (speciesRecord?.hasGenderDifferences ?? false) &&
    !(speciesRecord?.hasGenderForms ?? false);

  const spriteSrc: string =
    formId === null ? QUESTION_MARK : `/sprites/${useFemaleSprite ? "female/" : ""}${formId}.png`;

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

    // Anyone can build a set; saving it to an account needs an account. The set
    // itself is in the URL, so handing that back as `from` means the round trip
    // through sign-in loses nothing. The server enforces this too - requireAuth
    // on POST /api/sets - this check is only here to avoid a pointless 401.
    if (!session) {
      navigate("/signin", { state: { from: location.pathname + location.search } });
      return;
    }

    setIsSubmitting(true);

    const payload = {
    // Real values from the form
    species: selectedPokemon,
    form: selectedForm,
    // Schema is nullable — null means "no held item", "" would be a string that passes validation but means nothing
    item: selectedItem === "" ? null : selectedItem,
    gender: gender,
    ability: ability,
    nature: nature.toLowerCase(),
    ...statBoosts,
    moves: moveList.filter((move): move is string => move !== null),
    tags: tags,
    isPublic: isPublic,
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
        notify("Could not save this set. Please try again.", "red");
        return;
      }

      // Straight to the saved set, which is the confirmation that it worked -
      // and for a published one, what the showcase will link to
      navigate(`/set/${data.set.id}`);

    } finally {
      setIsSubmitting(false);
    }
  }
   

  /* Species and pokemon selection functions */
  function choosePokemon(pokemon:string){
    setSelectedPokemon(pokemon);
    setIsSpeciesOpen(false);

    // A different species invalidates everything chosen for the last one. These
    // belong to the user action rather than the fetch effect - the effect also
    // fires when a set is hydrated from its URL, where wiping would be wrong.
    setSelectedForm("");
    setSelectedItem("");
    // Gender is fixed for 22 of the 208 species, so take what this one permits
    setGender(allowedGenders(pokemon)[0]);
    setNature("Serious");
    setMoveList([null, null, null, null]);
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

  /* Gender selection */
  function chooseGender(next:Gender){
    setGender(next);
    // For Meowstic and Basculegion gender *is* the form - different stats,
    // abilities and learnsets - so the form has to follow the button.
    const swapped:string = withGender(selectedForm, next);
    if (swapped !== selectedForm) setSelectedForm(swapped);
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
        <div className="cell-name grid-cell flex flex-row items-stretch gap-2">
          <GenderButton
            gender={gender}
            options={allowedGenders(selectedPokemon)}
            onChange={chooseGender}
          />
          <button type="button" className="hoverable-link rounded-[var(--rounded)] flex-1 h-full" onClick={() => chooseNewPokemon()}>
            {selectedForm === "" ? "Choose a Pokémon" : formLabel(selectedForm)}
          </button>
        </div>

        <button
          type="button"
          className="hoverable-link rounded-[var(--rounded)] cell-form grid-cell"
          onClick={() => setIsFormOpen(true)}
          // Nothing to choose between when a species has only its default form
          disabled={pokemonForms.length < 2}
        >
          {pokemonForms.length === 0 ? "Forms" : (selectedForm === "" ? "Select Form" : "Form: "+ formLabel(selectedForm))}
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
        <button
          type="button"
          className="hoverable-link rounded-[var(--rounded)] cell-items grid-cell flex flex-row items-center justify-center gap-2"
          onClick={() => setIsItemOpen(true)}
          disabled={selectedPokemon === ""}
        >
          {itemSprite !== "" ? (
            <img
              id="item-sprite"
              src={itemSprite}
              alt=""
              onError={(e) => { e.currentTarget.src = PLACEHOLDER_SPRITE;}}
            />
          ) : (
            <div id="item-sprite" className="hidden"></div>
          )}
          {selectedItem === "" ? "Select Item" : ITEM_DETAILS[selectedItem]?.label ?? selectedItem}
        </button>
        <img
          className="cell-sprite grid-cell"
          id="pokemon-sprite"
          src={spriteSrc}
          alt={selectedForm}
          onError={(e) => {
            const img = e.currentTarget;
            // Female coverage is patchy for the rarer forms - Mega Venusaur has one,
            // most megas don't - so drop back to the shared sprite before the placeholder.
            if (img.src.includes("/female/") && formId !== null) {
              img.src = `/sprites/${formId}.png`;
              return;
            }
            // A handful of forms have no sprite in the PokeAPI repo at all
            if (!img.src.endsWith(QUESTION_MARK)) img.src = QUESTION_MARK;
          }}
        />
        <div className="cell-moves grid-cell">
          <MoveButtonList moveList={moveList} onEditSlot={setEditingSlot}/>
        </div>

        <div className="cell-stats grid-cell">
          <StatsConfig baseStats={baseStats} nature={nature} statBoosts={statBoosts} setBoosts={updateBoost}/>
        </div>

        <button
          type="button"
          className="hoverable-link rounded-[var(--rounded)] cell-tags grid-cell"
          onClick={() => setIsTagsOpen(true)}
          disabled={selectedPokemon === ""}
        >
          {tags.length === 0
            ? "Add tags"
            : tags.map(tagLabel).join(", ")}
        </button>

        <div className="cell-submit grid-cell">
          <label id="publish-toggle">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
            <span>Make set public?</span>
          </label>
          <button
            type="submit"
            id="submit-set"
            className="hoverable-link rounded-[var(--rounded)]"
            disabled={isSubmitting || moveList.length === 0 || selectedPokemon === ""}
          >
            {!session ? "Sign in to save" : isPublic ? "Publish Set" : "Save Set"}
          </button>
        </div>
      </form>
      {/* Species select modal */}
      <Modal 
        isOpen={isSpeciesOpen}
        onClose={() => setIsSpeciesOpen(false)}
        title = "Choose a Pokémon"
        className="modal-full"
      >
        <SpeciesSearch onSelect={choosePokemon} currentSpecies={selectedPokemon} />
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

      {/* Item select modal */}
      <Modal
        isOpen={isItemOpen}
        onClose={() => setIsItemOpen(false)}
        title = "Choose Item"
        className="modal-lg modal-tall"
      >
        <ItemSelect
          megaStones={megaStones}
          currentItem={selectedItem}
          onConfirm={(item) => { setSelectedItem(item); setIsItemOpen(false); }}
          onClear={() => { setSelectedItem(""); setIsItemOpen(false); }}
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
        className="modal-half"
      >
        <AbilitySelect abilityList={abilityList} currentAbility={ability} onConfirm={selectAbility}/>
      </Modal>
      {/* Tag select modal */}
      <Modal
        isOpen={isTagsOpen}
        onClose={() => setIsTagsOpen(false)}
        title = "Add Tags"
        className="modal-md"
      >
        <TagSelect
          currentTags={tags}
          onConfirm={(chosen) => { setTags(chosen); setIsTagsOpen(false); }}
        />
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
