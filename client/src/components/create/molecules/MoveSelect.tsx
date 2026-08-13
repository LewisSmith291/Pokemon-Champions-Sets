import {useMemo, useState} from "react";
import { type MoveSummary } from "@/data/moves";
import TypeDisplay from "@/components/shared/TypeDisplay";

const MAX_MOVES = 4;

interface Props {
  learnableMoves: MoveSummary[];
  moveList: string[];
  selectedMove: string | null;
  setMoveList: (moves: string[]) => void;
}

// Renders list and reports the selection to parent via moveList and setMoveList
export default function MoveSelect({learnableMoves, moveList, selectedMove, setMoveList}: Props){
  const [query, setQuery] = useState<string>("");
  const [activeType, setActiveType] = useState<string>("");
  const [selected, setSelected] = useState<string | null>(selectedMove);

  // useMemo is better than useEffect here as each keystroke in the search query would cause a re-render
  // and visible would be a new object on every render

  // types stores all types of moves the pokemon can know
  // If a pokemon doesn't know an ice type move, then they dont need any ice type variables or elements
  // When learnable moves changes, the function is run again to check for the types
  const types = useMemo(
    // new Set drops duplicate moves
    () => [...new Set(learnableMoves.map((m) => m.type))].sort(),[learnableMoves]
  )

  const visible = useMemo(() => {
    // trim() gets rid of stray spaces
    // toLowerCase() makes so capitalisation of search query doesn't matter
    // replace(/-/g, " ") replaces all hyphons with a space ("double edge" matches on "double-edge" now)
    // g means every occurance of this regex match, not just the first
    const needle = query.trim().toLowerCase().replace(/-/g, " ");
    return learnableMoves.filter((move) => {
      if (activeType !== "" && move.type !== activeType) return false;
      if (needle === "") return true;
      return move.label.toLowerCase().replace(/-/g," ").includes(needle);
    });
  }, [learnableMoves, query, activeType]);

  function toggle (name: string){
    if (moveList.includes(name)) {
      setMoveList(moveList.filter((m) => m !== name));
    } else if 
      (moveList.length < MAX_MOVES) {
        setMoveList([...moveList, name]);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Moves"
        />
        <span>{moveList.length}/{MAX_MOVES} selected</span>
      </div>

      <div className="flex flex-row flex-wrap gap-1">{types.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() => setActiveType(activeType === type ? "" : type)}
          className={activeType === type ? "opacity-100" : "opacity-50"}
        >
          <TypeDisplay type={type} />
        </button>
      ))}
      </div>
      <div className="grid grid-cols-6 gap-2 place-items-center">
        {visible.map((move) => {
          const chosen = moveList.includes(move.name);
          const full = !chosen && moveList.length >= MAX_MOVES;
          return (
            <button 
              key = {move.name}
              type="button" 
              disabled={full} 
              onClick={() => toggle(move.name)}
              className={`col-span-6 grid grid-cols-subgrid items-center gap-2 place-items-center hoverable-link
                ${chosen ? "bg-accent" : ""} ${full ? "opacity-40" : ""}`}
            >
              <div>{move.label}</div>
              <TypeDisplay type={move.type} />
              <div>{move.damageClass}</div>
              <div>{move.power ?? "—"}</div>
              <div>{move.accuracy ?? "—"}</div>
              <div>{move.pp ?? "—"}</div>
            </button>
          )
        })}
      </div>
    </div>
  )



}