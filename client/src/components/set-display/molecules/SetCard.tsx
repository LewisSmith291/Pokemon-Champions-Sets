import { Link } from "react-router";
import TypeDisplay from "@/components/shared/TypeDisplay";
import GenderIcon from "@/components/shared/GenderIcon";
import VoteButton from "../atoms/VoteButton";
import MoveChip from "../atoms/MoveChip";
import { FORM_DATA } from "@/data/formData";
import { formLabel } from "@/data/forms";
import { spritePath, spriteFallback } from "@/data/sprites";
import { ITEM_DETAILS, itemSpritePath } from "@/data/itemDetails";
import { ABILITY_BY_NAME } from "@/data/abilityLookup";
import { tagLabel } from "@/data/tags";
import GetNatureChanges, { STATS, ALIGNMENTS, finalStat } from "@/data/stats";
import { type SetSummary } from "@/services/sets";
import "./setCard.css";

interface Props {
  set: SetSummary;
  /** The signed-in viewer, so the card can show a bare count on their own set */
  viewerId?: string;
}

export default function SetCard({ set, viewerId }: Props) {
  // Mega and regional forms re-type, so this is the form's typing, not the species'
  const form = FORM_DATA[set.form];
  const item = set.item === null ? null : ITEM_DETAILS[set.item];
  const natureChanges = GetNatureChanges(set.nature);

  const boosts = {
    boostHp: set.boostHp, boostAtk: set.boostAtk, boostDef: set.boostDef,
    boostSpAtk: set.boostSpAtk, boostSpDef: set.boostSpDef, boostSpe: set.boostSpe,
  };

  return (
    <Link to={`/set/${set.id}`} className="set-card">
      <h3 className="set-card-name">
        <GenderIcon gender={set.gender} className={`set-gender gender-${set.gender}`} />
        <span>{formLabel(set.form)}</span>
      </h3>

      <div className="set-card-types">
        {(form?.types ?? []).map((type) => <TypeDisplay key={type} type={type} />)}
      </div>

      <img
        className="set-card-sprite"
        src={spritePath(set.form, set.gender)}
        alt={formLabel(set.form)}
        loading="lazy"
        onError={(e) => spriteFallback(e, set.form)}
      />

      <ul className="set-card-moves">
        {set.moves.map((move) => (
          <li key={move}><MoveChip move={move} /></li>
        ))}
      </ul>

      <p className="set-card-chip set-card-item">
        {item === null ? "No item" : (
          <>
            <img className="item-icon" src={itemSpritePath(set.item!)} alt="" />
            {item?.label ?? set.item}
          </>
        )}
      </p>

      <p className="set-card-chip set-card-ability">
        {ABILITY_BY_NAME.get(set.ability)?.label ?? set.ability}
      </p>

      {/* Same finalStat call the set page makes, so the numbers can't disagree */}
      <dl className="set-card-stats">
        {STATS.map((stat) => {
          const change = natureChanges[stat.api];
          return (
            <div key={stat.key} className={`stat-cell stat-${change === "" ? "flat" : change}`}>
              <dt>{stat.short}</dt>
              <dd>
                {finalStat(
                  stat.api,
                  form?.stats[stat.api] ?? 0,
                  boosts[stat.key],
                  ALIGNMENTS[change],
                )}
              </dd>
            </div>
          );
        })}
      </dl>

      <ul className="set-card-tags">
        {set.tags.map((tag) => <li key={tag}>{tagLabel(tag)}</li>)}
      </ul>

      <p className="set-card-author">by {set.authorName}</p>

      <div className="set-card-votes">
        <VoteButton
          setId={set.id}
          voteCount={set.voteCount}
          hasVoted={set.hasVoted}
          isOwn={viewerId === set.userId}
        />
      </div>
    </Link>
  );
}
