
interface Props {
  label: string | null;
  type: string | null;
  pp: number | null;
  onClick: () => void;
}

export default function MoveButton({label, type, pp, onClick}: Props) {

  // If no move in this slot
  if (!label)
    return (
      <button 
        type="button"
        className="move-button flex items-center justify-center bg-grey-400 hover:bg-grey-300 hoverable-link"
        onClick={onClick}
      >
        Choose Move
      </button>
    )

  // If there is a move in this slot
  return (
    <button 
      className={"hover:cursor-pointer hover:brightness-110 move-button grid grid-cols-3 items-center " + type}
      type="button" onClick={onClick}>
      <svg className="h-full aspect-1/1 brightness-90" aria-hidden="true"><use href={`/types.svg#${type}`}/></svg>
      <p>
        {label}
      </p>
      <p>
        {pp} PP
      </p>
    </button>
  )
}