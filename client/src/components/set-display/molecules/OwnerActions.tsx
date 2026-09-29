import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Modal from "@/components/shared/Modal";
import { deleteSet, setPublished } from "@/services/sets";

interface Props {
  setId: string;
  isPublic: boolean;
  /** /create?edit=<id>&... - the builder reopened on this set */
  editHref: string;
  /** Lets the page update its "Private" badge without refetching */
  onVisibilityChange: (isPublic: boolean) => void;
}

// Only rendered for the set's author. The server checks ownership on every one
// of these routes too - hiding the buttons is for the interface, not security.
export default function OwnerActions({ setId, isPublic, editHref, onVisibilityChange }: Props) {
  const navigate = useNavigate();
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function toggleVisibility() {
    setIsBusy(true);
    setError(null);
    try {
      onVisibilityChange(await setPublished(setId, !isPublic));
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : "Could not change visibility");
    } finally {
      setIsBusy(false);
    }
  }

  async function confirmDelete() {
    setIsBusy(true);
    setError(null);
    try {
      await deleteSet(setId);
      // The page it was on no longer exists, so there's nowhere to go back to
      navigate("/", { replace: true });
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : "Could not delete set");
      setIsConfirmOpen(false);
      setIsBusy(false);
    }
  }

  return (
    <div className="owner-actions">
      <Link className="set-edit-link" to={editHref}>Edit</Link>

      <button type="button" className="owner-button" onClick={toggleVisibility} disabled={isBusy}>
        {isPublic ? "Unpublish" : "Publish"}
      </button>

      <button
        type="button"
        className="owner-button owner-delete"
        onClick={() => setIsConfirmOpen(true)}
        disabled={isBusy}
      >
        Delete
      </button>

      {error !== null && <p className="owner-error">{error}</p>}

      <Modal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        title="Delete this set?"
        className="modal-sm"
      >
        <div className="flex flex-col gap-3 p-4">
          <p>This removes the set and its votes for good. It can't be undone.</p>
          <div className="flex flex-row gap-2 justify-end">
            <button type="button" className="hoverable-link" onClick={() => setIsConfirmOpen(false)} disabled={isBusy}>
              Cancel
            </button>
            <button type="button" className="owner-button owner-delete" onClick={confirmDelete} disabled={isBusy}>
              {isBusy ? "Deleting…" : "Delete"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
