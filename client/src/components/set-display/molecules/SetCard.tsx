import { Link } from "react-router";
import TypeDisplay from "@/components/shared/TypeDisplay";
import VoteButton from "../atoms/VoteButton";
import { FORM_DATA } from "@/data/formData";
import { formLabel } from "@/data/forms";
import { spritePath, spriteFallback } from "@/data/sprites";
import { ITEM_DETAILS, itemSpritePath } from "@/data/itemDetails";
import { ABILITY_BY_NAME } from "@/data/abilityLookup";
import { MOVE_BY_NAME } from "@/data/moveLookup";
import { type SetSummary } from "@/services/sets";
import "./setCard.css";

interface Props {
  set: SetSummary;
  /** The signed-in viewer, so the card can grey out voting on their own set */
  viewerId?: string;
}

export default function SetCard({ set, viewerId }: Props) {
  // Mega and regional forms re-type, so this is the form's typing, not the species'
  const types: string[] = FORM_DATA[set.form]?.types ?? [];
  const item = set.item === null ? null : ITEM_DETAILS[set.item];

  return (
    <Link to={`/set/${set.id}`} className="set-card hoverable-link">
      <div className="set-card-head">
        <h3>{formLabel(set.form)}</h3>
        <VoteButton
          setId={set.id}
          voteCount={set.voteCount}
          hasVoted={set.hasVoted}
          isOwn={viewerId === set.userId}
        />
      </div>

      <img
        className="set-card-sprite"
        src={spritePath(set.form, set.gender)}
        alt={formLabel(set.form)}
        loading="lazy"
        onError={(e) => spriteFallback(e, set.form)}
      />

      <div className="set-card-types">
        {types.map((type) => <TypeDisplay key={type} type={type} />)}
      </div>

      <p className="set-card-ability">
        {ABILITY_BY_NAME.get(set.ability)?.label ?? set.ability}
      </p>

      <p className="set-card-item">
        {item === null ? (
          "No item"
        ) : (
          <>
            <img className="item-icon" src={itemSpritePath(set.item!)} alt="" />
            {item?.label ?? set.item}
          </>
        )}
      </p>

      <ul className="set-card-moves">
        {set.moves.map((move) => (
          <li key={move}>{MOVE_BY_NAME.get(move)?.label ?? move}</li>
        ))}
      </ul>

      <p className="set-card-author">by {set.authorName}</p>
    </Link>
  );
}
