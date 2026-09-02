import { useState } from "react";
import { TAGS, MAX_TAGS, type TagSlug } from "@/data/tags";

interface Props {
  currentTags: string[];
  onConfirm: (tags: string[]) => void;
}

export default function TagSelect({ currentTags, onConfirm }: Props) {
  const [selected, setSelected] = useState<string[]>(currentTags);

  const isFull = selected.length >= MAX_TAGS;

  function toggle(slug: TagSlug) {
    setSelected((prev) =>
      prev.includes(slug)
        ? prev.filter((tag) => tag !== slug)
        // Guarded here as well as in the disabled attribute, so a keyboard
        // activation can't slip past the cap either
        : prev.length >= MAX_TAGS ? prev : [...prev, slug],
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col p-4 gap-3">
      <p className="tag-count">
        {selected.length} of {MAX_TAGS} chosen
        {isFull && " - deselect one to swap"}
      </p>

      <div id="tag-list">
        {TAGS.map(({ slug, label }) => {
          const isSelected = selected.includes(slug);
          return (
            <button
              key={slug}
              type="button"
              onClick={() => toggle(slug)}
              aria-pressed={isSelected}
              // The cap disables what you can't reach, rather than letting you
              // pick an 8th and bounce off a 400 after submitting
              disabled={isFull && !isSelected}
              className="tag-chip hoverable-link"
            >
              {label}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="hoverable-link rounded-[var(--rounded)] mt-auto"
        onClick={() => onConfirm(selected)}
      >
        Confirm Tags
      </button>
    </div>
  );
}
