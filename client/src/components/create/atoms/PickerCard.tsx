import TypeDisplay from "@/components/shared/TypeDisplay";
import { ABILITY_BY_NAME } from "@/data/abilityLookup";
import { ITEM_DETAILS, itemSpritePath } from "@/data/itemDetails";
import { STATS } from "@/data/stats";
import { spriteFallback } from "@/data/sprites";
import { REGIONS, statTotal, type PokemonEntry } from "@/data/pokemonEntries";

interface Props {
  entry: PokemonEntry;
  isCurrent: boolean;
  onPick: (entry: PokemonEntry) => void;
}

const abilityLabel = (slug: string): string => ABILITY_BY_NAME.get(slug)?.label ?? slug;

// "Indeedee ♀" -> the name, plus the symbol on its own so it can be coloured
function splitGender(label: string): { name: string; symbol: "♂" | "♀" | null } {
  const last = label.slice(-1);
  return last === "♂" || last === "♀"
    ? { name: label.slice(0, -1).trimEnd(), symbol: last }
    : { name: label, symbol: null };
}

// One entry in the create page's Pokemon picker. A row card on a phone, a
// stacked card on wider screens - the same markup, laid out by pickerCard.css.
export default function PickerCard({ entry, isCurrent, onPick }: Props) {
  const { name, symbol } = splitGender(entry.label);
  const region = entry.region === null ? null : REGIONS.find((r) => r.id === entry.region)?.label;

  return (
    <button
      type="button"
      className={`pick-card ${isCurrent ? "is-current" : ""} ${entry.kind === "mega" ? "is-mega" : ""}`}
      onClick={() => onPick(entry)}
      aria-current={isCurrent ? "true" : undefined}
      // The picker scrolls this into view when it opens
      data-current={isCurrent ? "" : undefined}
    >
      <img
        className="pick-sprite"
        src={`/sprites/${entry.spriteId}.png`}
        alt=""
        width={96}
        height={96}
        // 324 cards - only fetch the sprites that are scrolled near
        loading="lazy"
        onError={(e) => spriteFallback(e, entry.form)}
      />

      <div className="pick-head">
        <h3>
          {name}
          {symbol !== null && (
            <span className={`pick-gender ${symbol === "♂" ? "is-male" : "is-female"}`} aria-label={symbol === "♂" ? "male" : "female"}>
              {" "}{symbol}
            </span>
          )}
        </h3>
        {entry.kind === "mega" && <span className="pick-badge">Mega</span>}
        {region && <span className="pick-badge pick-badge-region">{region}</span>}
      </div>

      <div className="pick-types">
        {entry.types.map((type) => <TypeDisplay key={type} type={type} />)}
      </div>

      <ul className="pick-abilities" aria-label="Abilities">
        {entry.abilities.map((slug) => <li key={slug}>{abilityLabel(slug)}</li>)}
        {entry.hiddenAbility !== null && (
          <li className="is-hidden" title="Hidden ability">
            <span className="pick-hidden-tag">Hidden</span> {abilityLabel(entry.hiddenAbility)}
          </li>
        )}
      </ul>

      {/* A Mega can only be run holding its own stone - picking it equips this */}
      {entry.stone !== null && (
        <p className="pick-stone">
          <img src={itemSpritePath(entry.stone)} alt="" width={20} height={20} loading="lazy" />
          Holds {ITEM_DETAILS[entry.stone]?.label ?? entry.stone}
        </p>
      )}

      <dl className="pick-stats">
        {STATS.map((stat) => (
          <div key={stat.key}>
            <dt>{stat.short}</dt>
            <dd>{entry.stats[stat.api] ?? "—"}</dd>
          </div>
        ))}
        <div className="pick-bst">
          <dt>BST</dt>
          <dd>{statTotal(entry)}</dd>
        </div>
      </dl>
    </button>
  );
}
