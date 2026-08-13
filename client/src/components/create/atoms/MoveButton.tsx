
interface Props {
  moveName:string | null;
  type:string | null;
  pp:number | null;
  handleOpenMoves: (selectedMove: string | null) => void;
}

export default function MoveButton({moveName, type, pp, handleOpenMoves}: Props) {

  // If no move in this slot
  if (!moveName)
    return (
      <button 
        className="flex items-center bg-grey-400 hover:bg-grey-300"
        onClick={() => handleOpenMoves(null)}
      >
        Choose Move
      </button>
    )

  // If there is a move in this slot
  return (
    <button 
      className={"grid grid-cols-3 " + type}
      type="button" onClick={() => handleOpenMoves(moveName)}>
      <img />
      <div>
        {moveName}
      </div>
      <div>
        {pp}
      </div>
    </button>
  )
}