
import { type Species } from "@/data/species"

interface Props{
  species:Species;
}

export default function SpeciesRow({species}: Props) {
  return (
    <>
      <div className="species-row">{species.label}</div>
      <img className="species-row" alt={species.label} src={`/sprites/${species.id}.png`}/>
      <div>{species.types}</div>
      <div className="species-row">{species.abilities}</div>
      <div>{species.hiddenAbility}</div>
    </>
    )
}