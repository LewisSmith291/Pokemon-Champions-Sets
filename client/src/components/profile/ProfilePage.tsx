import { useEffect, useState, type SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import Modal from "@/components/shared/Modal";
import { changePassword, deleteUser, signOut, updateUser, useSession } from "@/services/authClient";
import { NAME_HINT, NAME_MAX, nameProblem, normaliseName } from "@/data/displayName";
import "./ProfilePage.css";

// Better Auth's own default, repeated so the form can say so before submitting
const PASSWORD_MIN = 8;

type Status = { kind: "ok" | "error"; text: string } | null;

export default function ProfilePage() {
  const { data: session } = useSession();
  const navigate = useNavigate();

  // --- display name ---
  const currentName: string = session?.user.name ?? "";
  const [name, setName] = useState<string>(currentName);
  const [nameStatus, setNameStatus] = useState<Status>(null);
  const [isSavingName, setIsSavingName] = useState<boolean>(false);

  // The session loads after the first render, so the box fills in once it does
  useEffect(() => setName(currentName), [currentName]);

  async function saveName(event: SyntheticEvent) {
    event.preventDefault();
    const problem = nameProblem(name);
    if (problem) {
      setNameStatus({ kind: "error", text: problem });
      return;
    }

    setIsSavingName(true);
    setNameStatus(null);
    // Better Auth returns { error } rather than throwing. The server re-checks
    // the rules, and is the only one that knows if the name is taken or disallowed.
    const { error } = await updateUser({ name: normaliseName(name) });
    setIsSavingName(false);
    setNameStatus(error
      ? { kind: "error", text: error.message ?? "Could not change your display name." }
      : { kind: "ok", text: "Display name updated. Your sets now show the new name." });
  }

  // --- password ---
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordStatus, setPasswordStatus] = useState<Status>(null);
  const [isSavingPassword, setIsSavingPassword] = useState<boolean>(false);

  async function savePassword(event: SyntheticEvent) {
    event.preventDefault();
    if (newPassword.length < PASSWORD_MIN) {
      setPasswordStatus({ kind: "error", text: `New password must be at least ${PASSWORD_MIN} characters.` });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordStatus({ kind: "error", text: "The new passwords don't match." });
      return;
    }

    setIsSavingPassword(true);
    setPasswordStatus(null);
    const { error } = await changePassword({
      currentPassword,
      newPassword,
      // Anyone signed in elsewhere with the old password is signed out - the
      // usual reason to change a password is suspecting someone else has it
      revokeOtherSessions: true,
    });
    setIsSavingPassword(false);

    if (error) {
      setPasswordStatus({ kind: "error", text: error.message ?? "Could not change your password." });
      return;
    }
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordStatus({ kind: "ok", text: "Password changed. Other devices have been signed out." });
  }

  // --- delete account ---
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [deletePassword, setDeletePassword] = useState<string>("");
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  function closeDelete() {
    setIsDeleteOpen(false);
    setDeletePassword("");
    setDeleteError(null);
  }

  async function confirmDelete(event: SyntheticEvent) {
    event.preventDefault();
    setIsDeleting(true);
    setDeleteError(null);
    // The password is checked by Better Auth before anything is removed
    const { error } = await deleteUser({ password: deletePassword });
    if (error) {
      setIsDeleting(false);
      setDeleteError(error.message ?? "Could not delete your account.");
      return;
    }
    // The account and its session are gone; clear what the client still holds
    await signOut().catch(() => undefined);
    navigate("/", { replace: true });
  }

  return (
    <div id="account">
      <h1>Account settings</h1>
      <p className="account-email">Signed in as {session?.user.email}</p>

      <form className="account-section" onSubmit={saveName}>
        <h2>Display name</h2>
        <label htmlFor="account-name" className="account-label">Name</label>
        <input
          id="account-name"
          className="text-input"
          value={name}
          maxLength={NAME_MAX}
          autoComplete="username"
          onChange={(e) => { setName(e.target.value); setNameStatus(null); }}
        />
        <p className="account-hint">{NAME_HINT}</p>
        <StatusLine status={nameStatus} />
        <button
          type="submit"
          className="account-button"
          // Nothing to save until it actually differs from what's stored
          disabled={isSavingName || normaliseName(name) === currentName}
        >
          {isSavingName ? "Saving…" : "Save name"}
        </button>
      </form>

      <form className="account-section" onSubmit={savePassword}>
        <h2>Password</h2>
        <label htmlFor="account-current" className="account-label">Current password</label>
        <input
          id="account-current"
          type="password"
          className="text-input"
          autoComplete="current-password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <label htmlFor="account-new" className="account-label">New password</label>
        <input
          id="account-new"
          type="password"
          className="text-input"
          autoComplete="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label htmlFor="account-confirm" className="account-label">Confirm new password</label>
        <input
          id="account-confirm"
          type="password"
          className="text-input"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <p className="account-hint">At least {PASSWORD_MIN} characters. Other devices will be signed out.</p>
        <StatusLine status={passwordStatus} />
        <button type="submit" className="account-button" disabled={isSavingPassword}>
          {isSavingPassword ? "Changing…" : "Change password"}
        </button>
      </form>

      <section className="account-section account-danger">
        <h2>Delete account</h2>
        <p>
          Permanently removes your account along with every set you've made, your
          votes and your saved sets. This can't be undone.
        </p>
        <button type="button" className="account-button account-delete" onClick={() => setIsDeleteOpen(true)}>
          Delete account
        </button>
      </section>

      <Modal isOpen={isDeleteOpen} onClose={closeDelete} title="Delete your account?" className="modal-sm">
        <form className="flex flex-col gap-3 p-4" onSubmit={confirmDelete}>
          <p>Enter your password to confirm. Your sets, votes and saves will be deleted with it.</p>
          <input
            type="password"
            className="text-input"
            autoComplete="current-password"
            placeholder="Password"
            value={deletePassword}
            onChange={(e) => setDeletePassword(e.target.value)}
            data-autofocus
            required
          />
          {deleteError !== null && <p className="account-status account-status-error">{deleteError}</p>}
          <div className="flex flex-row gap-2 justify-end">
            <button type="button" className="account-button" onClick={closeDelete} disabled={isDeleting}>
              Cancel
            </button>
            <button type="submit" className="account-button account-delete" disabled={isDeleting || deletePassword === ""}>
              {isDeleting ? "Deleting…" : "Delete forever"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

// aria-live, so a screen reader announces the result of saving without focus moving
function StatusLine({ status }: { status: Status }) {
  return (
    <p className={`account-status ${status?.kind === "error" ? "account-status-error" : "account-status-ok"}`} aria-live="polite">
      {status?.text ?? ""}
    </p>
  );
}
