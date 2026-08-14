
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
        className="flex items-center bg-grey-400 hover:bg-grey-300"
        onClick={onClick}
      >
        Choose Move
      </button>
    )

  // If there is a move in this slot
  return (
    <button 
      className={"grid grid-cols-3 " + type}
      type="button" onClick={onClick}>
      <img />
      <div>
        {label}
      </div>
      <div>
        {pp} PP
      </div>
    </button>
  )
}