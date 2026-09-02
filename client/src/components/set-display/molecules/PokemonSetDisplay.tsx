import { Link } from "react-router";
import TypeDisplay from "@/components/shared/TypeDisplay";
import VoteButton from "../atoms/VoteButton";
import GetNatureChanges, { STATS, ALIGNMENTS, finalStat, MAX_PER_STAT } from "@/data/stats";
import { FORM_DATA } from "@/data/formData";
import { formLabel } from "@/data/forms";
import { spritePath, spriteFallback } from "@/data/sprites";
import { ITEM_DETAILS, itemSpritePath } from "@/data/itemDetails";
import { ABILITY_BY_NAME } from "@/data/abilityLookup";
import { MOVE_BY_NAME } from "@/data/moveLookup";
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
      <header className="set-header">
        <img
          className="set-sprite"
          alt={formLabel(set.form)}
          src={spritePath(set.form, set.gender)}
          onError={(e) => spriteFallback(e, set.form)}
        />

        <div className="set-identity">
          <h1>{formLabel(set.form)}</h1>
          <div className="set-types">
            {(form?.types ?? []).map((type) => <TypeDisplay key={type} type={type} />)}
          </div>
          <p className="set-author">
            by {set.authorName}
            {!set.isPublic && <span className="set-private"> · Private</span>}
          </p>
          <VoteButton
            setId={set.id}
            voteCount={set.voteCount}
            hasVoted={set.hasVoted}
            isOwn={viewerId === set.userId}
          />
        </div>
      </header>

      {set.tags.length > 0 && (
        <ul className="set-tags">
          {set.tags.map((tag) => <li key={tag}>{tagLabel(tag)}</li>)}
        </ul>
      )}

      <dl className="set-facts">
        <dt>Ability</dt>
        <dd>{ABILITY_BY_NAME.get(set.ability)?.label ?? set.ability}</dd>

        <dt>Item</dt>
        <dd className="set-item">
          {item === null ? "No item" : (
            <>
              <img className="item-icon" src={itemSpritePath(set.item!)} alt="" />
              {item?.label ?? set.item}
            </>
          )}
        </dd>

        <dt>Nature</dt>
        <dd className="set-nature">{set.nature}</dd>
      </dl>

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
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{value}</span>
              <span className="stat-bar">
                <span className="stat-fill" style={{ width: `${Math.min(100, (value / BAR_MAX) * 100)}%` }} />
              </span>
              <span className="stat-boost">
                {boosts[stat.key] > 0 ? `+${boosts[stat.key]}` : ""}
                {boosts[stat.key] === MAX_PER_STAT ? " max" : ""}
              </span>
            </div>
          );
        })}
      </div>

      <ul className="set-moves">
        {set.moves.map((move) => (
          <li key={move}>{MOVE_BY_NAME.get(move)?.label ?? move}</li>
        ))}
      </ul>

      <footer className="set-actions">
        <Link className="set-edit-link" to={`/create?${editParams}`}>
          Edit a copy
        </Link>
      </footer>
    </article>
  );
}
