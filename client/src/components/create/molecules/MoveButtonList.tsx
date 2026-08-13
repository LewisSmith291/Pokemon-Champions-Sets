import type { MoveSummary } from "@/data/moves";
import MoveButton from "../atoms/MoveButton"
import { useState, useEffect } from "react";

interface Props {
  moveList: string[];
  learnableMoves: MoveSummary[];
}

const MAX_MOVES = 4;

export default function MoveButtonList({moveList, learnableMoves, }: Props) {
  const [moves, setMoves] = useState<string[]>(moveList);

  useEffect(() => {

  }, moveList);

  return (
    <div className="flex flex-col gap-2">
      <MoveButton moveName={moves[0]} type={null} pp={null} handleOpenMoves={}></MoveButton>
    </div>
  )
}