import { MOVE_BY_NAME } from "@/data/moveLookup";
import "@/components/shared/TypeStyle.css";
import "./moveChip.css";

interface Props {
  /** PokeAPI move slug as stored on the set */
  move: string;
}

/**
 * A move coloured by its type, the way the create page's MoveButton is, but
 * sized for a card. The colour and text colour come from the type class in
 * TypeStyle.css - the same one TypeDisplay uses - so the two never disagree.
 */
export default function MoveChip({ move }: Props) {
  const detail = MOVE_BY_NAME.get(move);
  // A move that isn't in the bundle still renders, just without its colour
  const type = detail?.type ?? "";

  return (
    <span className={`move-chip ${type}`} title={detail?.label ?? move}>
      {type !== "" && (
        <svg className="move-chip-icon" aria-hidden="true">
          <use href={`/types.svg#${type}`} />
        </svg>
      )}
      <span className="move-chip-label">{detail?.label ?? move}</span>
    </span>
  );
}
