
import TypeDisplay from "@/components/shared/TypeDisplay";
import { type Species } from "@/data/species"

interface Props{
  species:Species;
  onSelect: (speciesName:string) => void;
}

export default function SpeciesRow({species, onSelect}: Props) {
  return (
    <button 
      type="button"
      onClick={() => onSelect(species.name)}
      className=" species-row hoverable-link col-span-5 grid grid-cols-subgrid 
                  items-center gap-2 place-items-center hover:bg-accent "
    >
      <div>{species.label}</div>
      <img alt={species.label} src={`/sprites/${species.id}.png`} height={20} loading="lazy"/>
      <div className={"flex gap-2 species-types items-between " + (species.types.length === 2 ? " w-1/1" : " w-1/2")}>
        <TypeDisplay type={species.types[0]}/>
        {species.types.length === 2 && <TypeDisplay type={species.types[1]}/>}
      </div>
      <div>{species.abilities.join(", ")}</div>
      <div>{species.hiddenAbility ?? " "}</div>
    </button>
    )
}