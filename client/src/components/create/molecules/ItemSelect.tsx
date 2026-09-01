import { useMemo, useState } from "react";
import { ITEM_DETAILS, itemSpritePath, type ItemDetail } from "@/data/itemDetails";
import { ITEM_CATEGORIES, itemCategories, type ItemCategory } from "@/data/itemCategories";

const PLACEHOLDER_SPRITE = "/wireSquare.svg";

interface Props {
  /** Only this species' stones - Absolite on Venusaur would just be noise */
  megaStones: string[];
  currentItem: string;
  onConfirm: (item: string) => void;
  onClear: () => void;
}

export default function ItemSelect({ megaStones, currentItem, onConfirm, onClear }: Props) {
  const [category, setCategory] = useState<ItemCategory>("all");
  const [highlighted, setHighlighted] = useState<string>(currentItem);

  const visible: string[] = useMemo(() => {
    return Object.keys(ITEM_DETAILS)
      .filter((slug) => {
        // A mega stone is only selectable if it belongs to the current species
        if (ITEM_DETAILS[slug].category === "mega-stone" && !megaStones.includes(slug)) return false;
        return category === "all" || itemCategories(slug).includes(category);
      })
      .sort((a, b) => ITEM_DETAILS[a].label.localeCompare(ITEM_DETAILS[b].label));
  }, [category, megaStones]);

  const detail: ItemDetail | undefined = ITEM_DETAILS[highlighted];

  return (
    <div className="flex h-full min-h-0 flex-col p-2 gap-2">
      <div id="item-category-tabs">
        {ITEM_CATEGORIES.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setCategory(id)}
            aria-pressed={category === id}
            className={`item-category-tab hoverable-link ${category === id ? "bg-accent" : ""}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex min-h-0 flex-1 item-select-info gap-2">
        <div id="item-button-list">
          {visible.length === 0 && (
            <p className="p-4">
              {category === "mega-stone"
                ? "This Pokémon has no Mega Stone."
                : "No items in this category."}
            </p>
          )}
          {visible.map((slug: string) => (
            <button
              key={slug}
              type="button"
              onClick={() => setHighlighted(slug)}
              aria-pressed={highlighted === slug}
              className={`item-button hoverable-link ${highlighted === slug ? "bg-accent" : ""}`}
            >
              <img
                className="item-icon"
                src={itemSpritePath(slug)}
                alt=""
                onError={(e) => { e.currentTarget.src = PLACEHOLDER_SPRITE; }}
              />
              <span>{ITEM_DETAILS[slug].label}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-4 item-info">
          <h3 className="bg-[var(--p-void)] rounded-[var(--rounded)] px-2 py-1">
            {detail?.label ?? "Select an item"}
          </h3>
          {detail && <p>{detail.description}</p>}

          <button
            type="button"
            className="hoverable-link rounded-[var(--rounded)] mt-auto"
            disabled={highlighted === ""}
            onClick={() => onConfirm(highlighted)}
          >
            Confirm Item
          </button>
          {currentItem !== "" && (
            <button type="button" className="hoverable-link rounded-[var(--rounded)]" onClick={onClear}>
              Remove item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
