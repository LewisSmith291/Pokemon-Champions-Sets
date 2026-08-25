import { useState, useMemo } from "react";
import { SPECIES, type Species } from "@/data/species";
import SpeciesRow from "../atoms/SpeciesRow";
import SpeciesSearchBar from "../molecules/SearchAndFilter.jsx";

interface Props {
  onSelect: (species: string) => void;
  setItemType:(item: string) => void;
}

export default function SpeciesList({ onSelect, setItemType }: Props) {
  const [query, setQuery] = useState<string>("");

  const visible: Species[] = useMemo(() => {
    const needle: string = query.trim().toLowerCase().replace(/-/g, " ");
    if (needle === "") return SPECIES;
    return SPECIES.filter((s) =>
      s.label.toLowerCase().replace(/-/g, " ").includes(needle)
    );
  }, [query])

  function handleSelect(chosen:string){
    onSelect(chosen);
    setItemType("held");
  }

  function handleQuery(q:string){
    setQuery(q);
  }

  // Enter picks the result outright once the query has narrowed to exactly one,
  // so a species can be chosen without reaching for the mouse
  function handleEnter(){
    if (visible.length !== 1) return;
    handleSelect(visible[0].name);
  }

  return (
    <div id="species-search-container" className="flex flex-col gap-2 p-4 w-full m-0">
      <SpeciesSearchBar queryText={query} updateQuery={handleQuery} onEnter={handleEnter} />
        <div className="species-header grid grid-cols-5 gap-2 place-items-center">
          <div className="species-headers">Species</div>
          <div className="species-headers">Sprite</div>
          <div className="species-headers">Types</div>
          <div className="species-headers">Abilities</div>
          <div className="species-headers">Hidden Ability</div>
        </div>
      <div id="species-select" className="overflow-y-auto w-full flex-1 min-h-0">
        {visible.length === 0 && <p className="p-4">No species match "{query}".</p>}
        <div id="species-list" className="grid grid-cols-5 gap-2 place-items-center">
          {visible.map((s:Species) => (
            <SpeciesRow key={s.name} onSelect={handleSelect} species={s}/>
          ))}
        </div>
      </div>
    </div>
  )
}
