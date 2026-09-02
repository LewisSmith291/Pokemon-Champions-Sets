import { useEffect, useState } from "react";
import { useSession } from "@/services/authClient";
import { setVote } from "@/services/sets";

interface Props {
  setId: string;
  voteCount: number;
  hasVoted: boolean;
  /** True when the viewer wrote this set - the API refuses voting on your own */
  isOwn: boolean;
}

export default function VoteButton({ setId, voteCount, hasVoted, isOwn }: Props) {
  const { data: session } = useSession();
  const [count, setCount] = useState<number>(voteCount);
  const [voted, setVoted] = useState<boolean>(hasVoted);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // The card is keyed on the set id, so switching showcase tabs re-renders this
  // with fresh server numbers but does NOT remount it - without this the state
  // seeded on mount would go stale and keep showing the old count.
  useEffect(() => {
    setCount(voteCount);
    setVoted(hasVoted);
  }, [voteCount, hasVoted]);

  async function toggle(event: React.MouseEvent) {
    // The card wraps this in a <Link>, so a vote must not also navigate
    event.preventDefault();
    event.stopPropagation();
    if (isBusy) return;

    setIsBusy(true);
    setError(null);
    try {
      const result = await setVote(setId, !voted);
      setCount(result.voteCount);
      setVoted(result.hasVoted);
    } catch (problem) {
      // The count on screen is still the server's last word, so nothing to undo
      setError(problem instanceof Error ? problem.message : "Vote failed");
    } finally {
      setIsBusy(false);
    }
  }

  // Your own set: a permanently disabled button reads as broken, so show the
  // score as plain text instead. There is no action to offer here.
  if (isOwn) {
    return (
      <span className="vote-count" title="Your own set">
        <span aria-hidden="true">▲</span>
        <span>{count}</span>
      </span>
    );
  }

  return (
    <button
      type="button"
      className={`vote-button ${voted ? "voted" : ""}`}
      onClick={toggle}
      // Signed out is the one disabled case worth keeping - "sign in" is something
      // the viewer can actually go and do
      disabled={!session || isBusy}
      aria-pressed={voted}
      aria-label={voted ? "Remove your vote" : "Upvote this set"}
      title={
        error ??
        (!session ? "Sign in to vote" : voted ? "Remove your vote" : "Upvote this set")
      }
    >
      <span aria-hidden="true">▲</span>
      <span>{count}</span>
    </button>
  );
}
