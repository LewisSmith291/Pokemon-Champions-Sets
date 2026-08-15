import { MOVE_BY_NAME } from "@/data/moveLookup";
import MoveButton from "../atoms/MoveButton"

interface Props {
  moveList: (string | null)[];
  onEditSlot: (slot: number) => void;
}

export default function MoveButtonList({moveList, onEditSlot}: Props) {


  return (
    <div id="move-button-list" className="flex flex-col items-between h-full p-2">
      {moveList.map((name, slot) => {
        const move = name ? MOVE_BY_NAME.get(name) : undefined;
        return (
          <MoveButton
            key={slot}
            label={move?.label ?? null}
            type={move?.type ?? null}
            pp={move?.pp ?? null}
            onClick={() => onEditSlot(slot)}
          />
        )
      })}
    </div>
  )
}