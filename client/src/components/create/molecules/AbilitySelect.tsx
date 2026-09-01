import { useState } from "react";
import { ABILITY_BY_NAME } from "@/data/abilityLookup";
import { type AbilitySummary } from "@/data/abilities";

interface Props {
  /** Ability slugs for the current form, already ordered by PokeAPI slot */
  abilityList: string[];
  currentAbility: string;
  onConfirm: (ability: string) => void;
}

export default function AbilitySelect({ abilityList, currentAbility, onConfirm }: Props) {
  const [highlighted, setHighlighted] = useState<string>(currentAbility);

  const detail: AbilitySummary | undefined = ABILITY_BY_NAME.get(highlighted);

  return (
    <div className="flex h-full min-h-0 flex-col p-2 gap-2">
      <div className="flex min-h-0 flex-1 ability-select-info gap-2">
        <div id="ability-button-list">
          {abilityList.map((name: string) => (
            <button
              key={name}
              type="button"
              onClick={() => setHighlighted(name)}
              aria-pressed={highlighted === name}
              className={`ability-button hoverable-link ${highlighted === name ? "bg-accent" : ""}`}
            >
              {ABILITY_BY_NAME.get(name)?.label ?? name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-4 ability-info">
          <h3 className="bg-[var(--p-void)] text-[var(--link-color)] rounded-[var(--rounded)] px-2 py-1">
            {detail?.label ?? "Select an ability"}
          </h3>
          {detail && <p>{detail.description}</p>}
          <button
            type="button"
            className="hoverable-link rounded-[var(--rounded)] mt-auto"
            disabled={highlighted === ""}
            onClick={() => onConfirm(highlighted)}
          >
            Confirm Ability
          </button>
        </div>
      </div>
    </div>
  );
}
