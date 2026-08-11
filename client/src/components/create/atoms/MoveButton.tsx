import type { Move } from "pokedex-promise-v2";

interface Props {
  move: Move;
}

export default function MoveButton({move}: Props) {
  return (
    <div>
      <img />
      <div>
        {move.name}
      </div>
      <div>
        {move.pp}
      </div>
    </div>
  )
}