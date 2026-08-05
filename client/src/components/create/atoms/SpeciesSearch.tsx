import { SPECIES, type Species } from "@/data/species";
import SpeciesRow from "./SpeciesRow";

interface Props {
  value: string;
  onSelect: (species: string) => void;
  setItemType:(item: string) => void;
}

export default function SpeciesSearch({ value, onSelect, setItemType }: Props) {
  function handleSelect(chosen:string){
    onSelect(chosen);
    setItemType("held");
  }

  return (
    <div id="species-select" className="overflow-y-auto w-full">
      <div className="grid grid-cols-5 gap-2 place-items-center ">
        <div>Species</div>
        <div>Sprite</div>
        <div>Types</div>
        <div>Abilities</div>
        <div>Hidden Ability</div>
        {SPECIES.map((s:Species) => (
          <SpeciesRow onSelect={onSelect} species={s}/>
        ))}
      </div>
    </div>
  )
}
