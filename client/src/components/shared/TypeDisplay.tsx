import './TypeStyle.css'

interface TypeProp {
  type: string
}

export default function TypeDisplay({type}: TypeProp) {
  const typeString = type;
  return (
    <div className={"type-notch " + typeString}>
      <svg className="type-icon" aria-hidden="true"><use href={`/types.svg#${type}`}/></svg>
      <p>{typeString}</p>
    </div>
  )
}