import { useEffect, useMemo, useState } from "react";
import FilterPanel from "@/components/shared/filters/FilterPanel";
import TypeFilter from "@/components/shared/filters/TypeFilter";
import PickerCard from "../atoms/PickerCard";
import { POKEMON_ENTRIES, REGIONS, type PokemonEntry, type Region } from "@/data/pokemonEntries";
import { SPECIES_BY_NAME } from "@/data/forms";
import { ABILITY_BY_NAME } from "@/data/abilityLookup";
import "./SpeciesPicker.css";

interface Props {
  /** The form already on the set, outlined and scrolled to - "" for a new set */
  currentForm: string;
  onPick: (entry: PokemonEntry) => void;
  /** Back to the set without changing Pokemon - absent before one is chosen */
  onCancel?: () => void;
}

const MAX_TYPES = 2;

// Case-insensitive, hyphens read as spaces - the same matching as Browse
const normalise = (text: string): string => text.trim().toLowerCase().replace(/-/g, " ");

// Every name a card can be found by: "Mega Charizard X" also answers to
// "charizard", and a regional form answers to its species' plain name
function searchNames(entry: PokemonEntry): string {
  return normalise(`${entry.label} ${SPECIES_BY_NAME.get(entry.species)?.label ?? ""}`);
}

function abilityNames(entry: PokemonEntry): string {
  return normalise(
    [...entry.abilities, entry.hiddenAbility ?? ""]
      .map((slug) => ABILITY_BY_NAME.get(slug)?.label ?? slug)
      .join(" "),
  );
}

// The create page's first step: every selectable form as a card, filtered like
// Browse. Part of the page rather than a modal, so the site header stays.
export default function SpeciesPicker({ currentForm, onPick, onCancel }: Props) {
  const [name, setName] = useState<string>("");
  const [ability, setAbility] = useState<string>("");
  const [types, setTypes] = useState<string[]>([]);
  const [regions, setRegions] = useState<Region[]>([]);
  const [megaOnly, setMegaOnly] = useState<boolean>(false);

  const visible: PokemonEntry[] = useMemo(() => {
    const nameNeedle = normalise(name);
    const abilityNeedle = normalise(ability);
    return POKEMON_ENTRIES.filter((entry) =>
      (nameNeedle === "" || searchNames(entry).includes(nameNeedle)) &&
      (abilityNeedle === "" || abilityNames(entry).includes(abilityNeedle)) &&
      // The form's own typing - Mega Charizard X counts as Dragon
      types.every((type) => entry.types.includes(type)) &&
      (regions.length === 0 || (entry.region !== null && regions.includes(entry.region))) &&
      (!megaOnly || entry.kind === "mega"));
  }, [name, ability, types, regions, megaOnly]);

  // Open on the Pokemon already chosen, rather than the top of the dex. Only on
  // opening - scrolling on every filter change would fight the person typing.
  useEffect(() => {
    document.querySelector<HTMLElement>("[data-current]")?.scrollIntoView({ block: "center" });
  }, []);

  function toggleType(type: string) {
    setTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type)
      : prev.length >= MAX_TYPES ? prev : [...prev, type]);
  }

  function toggleRegion(region: Region) {
    setRegions((prev) => prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]);
  }

  function clearAll() {
    setName("");
    setAbility("");
    setTypes([]);
    setRegions([]);
    setMegaOnly(false);
  }

  const activeCount =
    (name.trim() !== "" ? 1 : 0) + (ability.trim() !== "" ? 1 : 0) +
    types.length + regions.length + (megaOnly ? 1 : 0);

  return (
    <div id="species-picker">
      <div id="picker-head">
        <h1>Choose a Pokémon</h1>
        {onCancel && (
          <button type="button" className="filter-chip" onClick={onCancel}>
            Back to your set
          </button>
        )}
      </div>

      <FilterPanel id="picker-filters" activeCount={activeCount}>
        <label className="filter-label" htmlFor="picker-name">Pokémon</label>
        <div className="filter-search">
          <input
            id="picker-name"
            className="text-input"
            type="search"
            placeholder="Any Pokémon"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // Straight to typing on a keyboard; on a phone this would throw up
            // the keyboard over the list, so only where there's a real pointer
            autoFocus={window.matchMedia("(pointer: fine)").matches}
          />
          {name !== "" && (
            <button type="button" className="filter-chip" onClick={() => setName("")}>Clear</button>
          )}
          <label className="filter-check">
            <input type="checkbox" checked={megaOnly} onChange={(e) => setMegaOnly(e.target.checked)} />
            <span>Mega only</span>
          </label>
        </div>

        <label className="filter-label" htmlFor="picker-ability">Ability</label>
        <div className="filter-search">
          <input
            id="picker-ability"
            className="text-input"
            type="search"
            placeholder="Any ability"
            value={ability}
            onChange={(e) => setAbility(e.target.value)}
          />
          {ability !== "" && (
            <button type="button" className="filter-chip" onClick={() => setAbility("")}>Clear</button>
          )}
        </div>

        <span className="filter-label">
          Type <span className="filter-hint">up to {MAX_TYPES}</span>
        </span>
        <TypeFilter selected={types} max={MAX_TYPES} onToggle={toggleType} />

        <span className="filter-label">Region</span>
        <div className="filter-row">
          {REGIONS.map((region) => (
            <button
              key={region.id}
              type="button"
              className="filter-chip"
              aria-pressed={regions.includes(region.id)}
              onClick={() => toggleRegion(region.id)}
            >
              {region.label}
            </button>
          ))}
        </div>

        {activeCount > 0 && (
          <button type="button" className="filter-chip filter-reset" onClick={clearAll}>
            Clear all filters
          </button>
        )}
      </FilterPanel>

      <p className="picker-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "Pokémon" : "Pokémon"}
      </p>

      {visible.length === 0 ? (
        <p className="picker-message">No Pokémon match these filters.</p>
      ) : (
        <div id="picker-grid">
          {visible.map((entry) => (
            <PickerCard
              key={entry.form}
              entry={entry}
              isCurrent={entry.form === currentForm}
              onPick={onPick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
