import { useState } from "react";
import { useSession } from "@/services/authClient";
import { setVote } from "@/services/sets";

interface Props {
  setId: string;
  voteCount: number;
  hasVoted: boolean;
  /** True when the viewer wrote this set - the API rejects voting on your own */
  isOwn: boolean;
}

export default function VoteButton({ setId, voteCount, hasVoted, isOwn }: Props) {
  const { data: session } = useSession();
  const [count, setCount] = useState<number>(voteCount);
  const [voted, setVoted] = useState<boolean>(hasVoted);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const canVote = Boolean(session) && !isOwn;

  async function toggle(event: React.MouseEvent) {
    // The card wraps this in a <Link>, so a vote must not also navigate
    event.preventDefault();
    event.stopPropagation();
    if (!canVote || isBusy) return;

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

  return (
    <button
      type="button"
      className={`vote-button ${voted ? "voted" : ""}`}
      onClick={toggle}
      disabled={!canVote || isBusy}
      aria-pressed={voted}
      title={
        error ??
        (isOwn ? "You can't vote on your own set"
          : !session ? "Sign in to vote"
          : voted ? "Remove your vote"
          : "Upvote this set")
      }
    >
      <span aria-hidden="true">▲</span>
      <span>{count}</span>
    </button>
  );
}
