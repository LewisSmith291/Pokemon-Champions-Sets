import { SPECIES, type Species } from "@/data/species";
import SpeciesRow from "../atoms/SpeciesRow";
import SpeciesSearchBar from "../molecules/SearchAndFilter.jsx";

interface Props {
  onSelect: (species: string) => void;
  setItemType:(item: string) => void;
}

export default function SpeciesList({ onSelect, setItemType }: Props) {
  function handleSelect(chosen:string){
    onSelect(chosen);
    setItemType("held");
  }

  return (
    <div id="species-search-container" className="flex flex-col gap-2 p-4 w-full m-0">
      <SpeciesSearchBar/>
        <div className="species-header grid grid-cols-5 gap-2 place-items-center">
          <div className="species-headers">Species</div>
          <div className="species-headers">Sprite</div>
          <div className="species-headers">Types</div>
          <div className="species-headers">Abilities</div>
          <div className="species-headers">Hidden Ability</div>
        </div>
      <div id="species-select" className="overflow-y-auto w-full">
        <div className="grid grid-cols-5 gap-2 place-items-center">
          {SPECIES.map((s:Species) => (
            <SpeciesRow onSelect={handleSelect} species={s}/>
          ))}
        </div>
      </div>
    </div>
  )
}
