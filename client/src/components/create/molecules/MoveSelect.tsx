import {useMemo, useState} from "react";
import { type MoveSummary } from "@/data/moves";
import TypeDisplay from "@/components/shared/TypeDisplay";
import { TYPE_ORDER } from "@/data/types";

interface Props {
  learnableMoves: MoveSummary[];
  currentMove: string | null;
  takenMoves: string[];
  onConfirm: (move: string) => void;
  onClear: () => void;
}

// Renders list and reports the selection to parent via moveList and setMoveList
export default function MoveSelect({learnableMoves, currentMove, takenMoves, onConfirm, onClear}: Props){
  const [query, setQuery] = useState<string>("");
  const [activeType, setActiveType] = useState<string>("");
  const [highlighted, setHighlighted] = useState<string | null>(currentMove);

  // useMemo is better than useEffect here as each keystroke in the search query would cause a re-render
  // and visible would be a new object on every render

  // types stores all types of moves the pokemon can know
  // If a pokemon doesn't know an ice type move, then they dont need any ice type variables or elements
  // When learnable moves changes, the function is run again to check for the types
  const types:string[] = useMemo(
    // new Set drops duplicate moves
    () => [...new Set(learnableMoves.map((m) => m.type))].sort(),[learnableMoves]
  )

  const visible: MoveSummary[] = useMemo(() => {
    // trim() gets rid of stray spaces
    // toLowerCase() makes so capitalisation of search query doesn't matter
    // replace(/-/g, " ") replaces all hyphons with a space ("double edge" matches on "double-edge" now)
    // g means every occurance of this regex match, not just the first
    const needle: string = query.trim().toLowerCase().replace(/-/g, " ");
    return (learnableMoves.filter((move) => {
      if (activeType !== "" && move.type !== activeType) return false;
      if (needle === "") return true;
      return move.label.toLowerCase().replace(/-/g," ").includes(needle);  
    }))
    // Sort list of visible moves by type
    .sort((a,b) => TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type) || a.label.localeCompare(b.label));
  }, [learnableMoves, query, activeType]);

  const detail: MoveSummary | undefined = highlighted === null ? undefined : learnableMoves.find((m) => m.name === highlighted);

  // Enter confirms outright once the filters have narrowed to a single move.
  // Unlike the species list this has to respect `taken` - that move is already
  // in another slot, and its row is disabled for the same reason.
  function handleEnter(){
    if (visible.length !== 1) return;
    const only: MoveSummary = visible[0];
    if (takenMoves.includes(only.name)) return;
    onConfirm(only.name);
  }

  return (
    <div className="flex h-full min-h-0 flex-col ">
      <div className="flex shrink-0 flex-col ">
        <div className="flex flex-row items-center gap-2 ">
          <input
            className="text-input"
            data-autofocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              e.preventDefault();
              handleEnter();
            }}
            placeholder="Search Moves"
          />
        </div>
        <div className="flex flex-row flex-wrap gap-1 ">{types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setActiveType(activeType === type ? "" : type)}
            className={`border-0 bg-transparent p-0 ${activeType === type ? "opacity-100" : "opacity-50"}`}
          >
            <TypeDisplay type={type} />
          </button>
        ))}
        </div>
      </div>
      <div className="flex min-h-0 flex-1 move-select-info">
        <div className="min-w-0 flex-1 overflow-y-auto">
          <div className="grid grid-cols-[minmax(0,2fr)_auto_repeat(4,minmax(0,1fr))] gap-2 place-items-center max-w-full">
            <div 
              id="move-select-header" 
              className="col-span-6 grid grid-cols-subgrid items-center gap-2 text-white
              place-items-center hoverable-link sticky top-0 p-2 bg-[var(--header)] dark: bg-[var(--p-void)] z-1"
            >
              <div>Name</div>
              <div>Type</div>
              <div>Category</div>
              <div>Power</div>
              <div>Accuracy</div>
              <div>PP</div>
            </div>
            {visible.map((move) => {
              const taken = takenMoves.includes(move.name);
              return (
                <button 
                  key = {move.name}
                  type="button" 
                  disabled={taken} 
                  onClick={() => setHighlighted(move.name)}
                  className={`col-span-6 grid grid-cols-subgrid items-center gap-2 place-items-center hoverable-link rounded-[var(--rounded)]
                    ${highlighted === move.name ? "bg-accent" : ""} ${taken ? "opacity-40" : ""}`}
                >
                  <div>{move.label}</div>
                  <TypeDisplay type={move.type} />
                  <div>{move.damageClass}</div>
                  <div>{move.power ?? "—"}</div>
                  <div>{move.accuracy ?? "—"}</div>
                  <div>{move.pp ?? "—"}</div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex w-1/3 shrink-0 flex-col gap-2 p-4 move-info">
          <div className="flex flex-row justify-evenly gap-2 items-center">
            <h3 
              className="bg-[var(--p-void)] text-white rounded-[var(--rounded)] px-2 py-1 flex-1"
            >
              {detail?.label ?? "Select a move"} 
            </h3>
            {detail && <TypeDisplay type={detail.type} />}
          </div>
          {detail && (
            <>
              <p>{detail.damageClass} · {detail.power ?? "—"} power · {detail.accuracy ?? "—"} acc · {detail.pp} PP</p>
              <p>{detail.description}</p>
            </>
          )}
          <button type="button" className="rounded-[var(--rounded)] hoverable-link" disabled={highlighted === null} onClick={() => onConfirm(highlighted!)}>
            {currentMove === null ? "Add to slot" : "Replace move"}
          </button>
          {currentMove !== null && (
            <button type="button" className="hoverable-link" onClick={onClear}>Clear slot</button>
          )}
        </div>
      </div>
    </div>
  )



}