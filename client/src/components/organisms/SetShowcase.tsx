//import PokemonSetDisplay from "../molecules/PokemonSetDisplay"

interface Props {
  displayNumber: number
}

export default function SetShowcase({displayNumber}: Props) {
  return (
    <div className="flex bg-red-600">{displayNumber}</div>
  )
}