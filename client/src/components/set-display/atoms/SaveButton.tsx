import { useEffect, useState } from "react";
import { useSession } from "@/services/authClient";
import { setSaved } from "@/services/sets";
import "./saveButton.css";

interface Props {
  setId: string;
  hasSaved: boolean;
  /** Tells a list the set was unsaved, so the Saved tab can drop the card */
  onChange?: (saved: boolean) => void;
}

// A star: outlined when not saved, filled when it is. Not rendered on the
// viewer's own sets at all - those are already in My Sets.
export default function SaveButton({ setId, hasSaved, onChange }: Props) {
  const { data: session } = useSession();
  const [saved, setSavedState] = useState<boolean>(hasSaved);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Same reason as VoteButton: a card keyed on the set id re-renders with fresh
  // props without remounting, so the seeded state has to follow them
  useEffect(() => setSavedState(hasSaved), [hasSaved]);

  async function toggle(event: React.MouseEvent) {
    // The card wraps this in a <Link>, so saving must not also navigate
    event.preventDefault();
    event.stopPropagation();
    if (isBusy) return;

    setIsBusy(true);
    setError(null);
    try {
      const next = await setSaved(setId, !saved);
      setSavedState(next);
      onChange?.(next);
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : "Save failed");
    } finally {
      setIsBusy(false);
    }
  }

  const label = !session ? "Sign in to save" : saved ? "Remove from saved" : "Save this set";

  return (
    <button
      type="button"
      className={`save-button ${saved ? "saved" : ""}`}
      onClick={toggle}
      disabled={!session || isBusy}
      aria-pressed={saved}
      aria-label={label}
      title={error ?? label}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z" />
      </svg>
    </button>
  );
}
