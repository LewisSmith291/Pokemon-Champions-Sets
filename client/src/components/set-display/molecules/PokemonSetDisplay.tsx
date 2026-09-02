import { Fragment } from "react";
import { Link } from "react-router";
import TypeDisplay from "@/components/shared/TypeDisplay";
import NatureBoost from "../atoms/NatureBoost";
import StatDisplay from "../atoms/StatDisplay";
import VoteButton from "../atoms/VoteButton";
import GetNatureChanges, { STATS, ALIGNMENTS, finalStat } from "@/data/stats";
import { FORM_DATA } from "@/data/formData";
import { formLabel } from "@/data/forms";
import { spritePath, spriteFallback } from "@/data/sprites";
import { ITEM_DETAILS, itemSpritePath } from "@/data/itemDetails";
import { ABILITY_BY_NAME } from "@/data/abilityLookup";
import { MOVE_BY_NAME } from "@/data/moveLookup";
import { draftToParams } from "@/data/setUrl";
import { type SetDetail } from "@/services/sets";
import "./pokemonDisplay.css";

interface Props {
  set: SetDetail;
  /** The signed-in viewer, for the vote button and the private-set badge */
  viewerId?: string;
}

export default function PokemonSetDisplay({ set, viewerId }: Props) {
  // Everything is derived from the bundled form data rather than fetched. The
  // form's own typing and base stats matter here: Mega Charizard X is
  // fire/dragon with different bulk to the Charizard it evolved from.
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
    <div className="set-display">
      <div className="typing-header">
        {(form?.types ?? []).map((type) => <TypeDisplay key={type} type={type} />)}
      </div>

      <h1 className="name">{formLabel(set.form)}</h1>
      <p className="set-author">
        by {set.authorName}
        {!set.isPublic && <span className="set-private"> · Private</span>}
      </p>

      <div className="about-and-stats">
        <div className="info-column">
          <img
            className="sprite"
            alt={formLabel(set.form)}
            src={spritePath(set.form, set.gender)}
            onError={(e) => spriteFallback(e, set.form)}
          />
          <p className="ability">{ABILITY_BY_NAME.get(set.ability)?.label ?? set.ability}</p>
          <p className="item">
            {item === null ? "No item" : (
              <>
                <img className="item-icon" src={itemSpritePath(set.item!)} alt="" />
                {item?.label ?? set.item}
              </>
            )}
          </p>
        </div>

        <div className="stat-column">
          {STATS.map((stat) => (
            // The arrow is only rendered for a stat the nature touches. The next
            // StatDisplay still lands in column 1 either way - .stat-display
            // pins grid-column-start, which is what lets this stay conditional.
            <Fragment key={stat.key}>
              <StatDisplay
                label={stat.label}
                stat={finalStat(
                  stat.api,
                  form?.stats[stat.api] ?? 0,
                  boosts[stat.key],
                  ALIGNMENTS[natureChanges[stat.api]],
                )}
              />
              {natureChanges[stat.api] !== "" && (
                <NatureBoost isBoost={natureChanges[stat.api] === "up"} />
              )}
            </Fragment>
          ))}
          <div className="nature">{set.nature}</div>
        </div>
      </div>

      <ul className="set-moves">
        {set.moves.map((move) => (
          <li key={move}>{MOVE_BY_NAME.get(move)?.label ?? move}</li>
        ))}
      </ul>

      <div className="set-actions">
        <VoteButton
          setId={set.id}
          voteCount={set.voteCount}
          hasVoted={set.hasVoted}
          isOwn={viewerId === set.userId}
        />
        <Link className="hoverable-link set-edit-link" to={`/create?${editParams}`}>
          Edit a copy
        </Link>
      </div>
    </div>
  );
}
