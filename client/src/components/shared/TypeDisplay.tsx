import './TypeStyle.css'
import '../set-display/molecules/pokemonDisplay.css'

interface TypeProp {
  type: string
}

export default function TypeDisplay({type}: TypeProp) {
  const typeString = type;
  return (
    <div className={"type-notch " + typeString}>
      <svg className=" type-icon w-1/4 h-full" aria-hidden="true"><use href={`/types.svg#${type}`}/></svg>
      <p>{typeString}</p>
    </div>
  )
}