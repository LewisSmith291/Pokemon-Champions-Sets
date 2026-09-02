import { Link } from "react-router";
import TypeDisplay from "@/components/shared/TypeDisplay";
import GenderIcon from "@/components/shared/GenderIcon";
import VoteButton from "../atoms/VoteButton";
import MoveChip from "../atoms/MoveChip";
import GetNatureChanges, { STATS, ALIGNMENTS, finalStat } from "@/data/stats";
import { FORM_DATA } from "@/data/formData";
import { formLabel } from "@/data/forms";
import { spritePath, spriteFallback } from "@/data/sprites";
import { ITEM_DETAILS, itemSpritePath } from "@/data/itemDetails";
import { ABILITY_BY_NAME } from "@/data/abilityLookup";
import { tagLabel } from "@/data/tags";
import { draftToParams } from "@/data/setUrl";
import { type SetDetail } from "@/services/sets";
import "./pokemonDisplay.css";

interface Props {
  set: SetDetail;
  /** The signed-in viewer, for the vote control and the private badge */
  viewerId?: string;
}

// Widest final stat worth scaling a bar against - a max-boosted, nature-raised
// HP stat lands near here, so bars stay comparable between sets
const BAR_MAX = 255;

export default function PokemonSetDisplay({ set, viewerId }: Props) {
  // All derived from the bundled form data rather than fetched. The form's own
  // typing and base stats are what matter: Mega Charizard X is fire/dragon with
  // different bulk to the Charizard it evolved from.
  const form = FORM_DATA[set.form];
  const natureChanges = GetNatureChanges(set.nature);
  const item = set.item === null ? null : ITEM_DETAILS[set.item];

  const boosts = {
    boostHp: set.boostHp, boostAtk: set.boostAtk, boostDef: set.boostDef,
    boostSpAtk: set.boostSpAtk, boostSpDef: set.boostSpDef, boostSpe: set.boostSpe,
  };

  // Same URL codec the create page reads on mount, so "edit a copy" is a link
  // rather than a feature - it opens the builder with this set already loaded
  const editParams = draftToParams({
    species: set.species,
    form: set.form,
    item: set.item ?? "",
    gender: set.gender,
    ability: set.ability,
    nature: set.nature,
    moves: set.moves,
    boosts,
  });

  return (
    <article className="set-display">
      <h1 className="set-name">
        <GenderIcon gender={set.gender} className={`set-gender gender-${set.gender}`} />
        <span>{formLabel(set.form)}</span>
      </h1>

      <div className="set-types">
        {(form?.types ?? []).map((type) => <TypeDisplay key={type} type={type} />)}
      </div>

      <img
        className="set-sprite"
        alt={formLabel(set.form)}
        src={spritePath(set.form, set.gender)}
        onError={(e) => spriteFallback(e, set.form)}
      />

      <ul className="set-moves">
        {set.moves.map((move) => (
          <li key={move}><MoveChip move={move} /></li>
        ))}
      </ul>

      <div className="set-facts">
        <p className="set-fact set-item">
          {item === null ? "No item" : (
            <>
              <img className="item-icon" src={itemSpritePath(set.item!)} alt="" />
              {item?.label ?? set.item}
            </>
          )}
        </p>
        <p className="set-fact set-ability">{ABILITY_BY_NAME.get(set.ability)?.label ?? set.ability}</p>
        <p className="set-fact set-nature">{set.nature}</p>
      </div>

      {/* label / value / bar, reading like the create page's StatsConfig rows */}
      <div className="set-stats">
        {STATS.map((stat) => {
          const change = natureChanges[stat.api];
          const value = finalStat(
            stat.api,
            form?.stats[stat.api] ?? 0,
            boosts[stat.key],
            ALIGNMENTS[change],
          );
          return (
            <div key={stat.key} className={`stat-row stat-${change === "" ? "flat" : change}`}> 
              {/* Both lengths, swapped by media query - "Sp. Defense" wraps on a
                  phone and makes that one row taller than the other five */}
              <span className="stat-label">
                <span className="stat-name-short">{stat.short}</span>
              </span>
              <span className="stat-value">{value}</span>
              <span className="stat-bar">
                <span className="stat-fill" style={{ width: `${Math.min(100, (value / BAR_MAX) * 100)}%` }} />
              </span>
              <span className="stat-boost">
                {boosts[stat.key] > 0 ? `+${boosts[stat.key]}` : ""}
              </span>
            </div>
          );
        })}
      </div>

      <ul className="set-tags">
        {set.tags.map((tag) => <li key={tag}>{tagLabel(tag)}</li>)}
      </ul>

      <div className="set-actions">
        <Link className="set-edit-link" to={`/create?${editParams}`}>
          Edit a copy
        </Link>
      </div>

      <p className="set-author">
        by {set.authorName}
        {!set.isPublic && <span className="set-private"> · Private</span>}
      </p>

      <div className="set-votes">
        <VoteButton
          setId={set.id}
          voteCount={set.voteCount}
          hasVoted={set.hasVoted}
          isOwn={viewerId === set.userId}
        />
      </div>
    </article>
  );
}
