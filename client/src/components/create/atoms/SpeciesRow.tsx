
import TypeDisplay from "@/components/shared/TypeDisplay";
import { type Species } from "@/data/species"

interface Props{
  species:Species;
  /** The species already on the set - highlighted, and scrolled to when the modal opens */
  isCurrent: boolean;
  onSelect: (speciesName:string) => void;
}

export default function SpeciesRow({species, isCurrent, onSelect}: Props) {
  return (
    <button
      type="button"
      onClick={() => onSelect(species.name)}
      data-scroll-into-view={isCurrent ? "" : undefined}
      className={` species-row hoverable-link col-span-5 grid grid-cols-subgrid
                  items-center gap-2 place-items-center hover:bg-accent
                  ${isCurrent ? "bg-accent" : ""}`}
    >
      <div>{species.label}</div>
      <img alt={species.label} src={`/sprites/${species.id}.png`} height={20} loading="lazy"/>
      <div className={"flex gap-1 species-types w-full"}>
        <TypeDisplay type={species.types[0]}/>
        {species.types.length === 2 && <TypeDisplay type={species.types[1]}/>}
      </div>
      <div className="species-abilities">{species.abilities.join(", ")}</div>
      <div className="species-hidden">{species.hiddenAbility ?? " "}</div>
    </button>
    )
}