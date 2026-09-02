import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { AlgoType } from "../pages/Home";
import { useSession } from "@/services/authClient";
import { listSets, type SetSummary } from "@/services/sets";
import SetCard from "@/components/set-display/molecules/SetCard";
import Loading from "@/components/shared/Loading";
import "./SetShowcase.css"

interface Props {
  displayNumber: number;
  algoType: AlgoType;
  setAlgoType: (algoType:AlgoType) => void;
}

const TABS: { id: AlgoType; label: string }[] = [
  { id: "hot",  label: "Hot Pokemon Sets" },
  { id: "best", label: "Best Pokemon Sets" },
  { id: "new",  label: "New Pokemon Sets" },
];

export default function SetShowcase({displayNumber, algoType, setAlgoType}: Props) {
  const { data: session } = useSession();
  const [sets, setSets] = useState<SetSummary[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Clicking through the tabs quickly leaves several requests in flight, and
    // without this a slow "hot" response can land after "new" and overwrite it
    const controller = new AbortController();

    setIsLoading(true);
    setError(null);

    listSets(algoType, displayNumber, controller.signal)
      .then((rows) => {
        setSets(rows);
        setIsLoading(false);
      })
      .catch((problem) => {
        // An aborted request isn't a failure - a newer one has already taken over
        if (controller.signal.aborted) return;
        setError(problem instanceof Error ? problem.message : "Could not load sets");
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [algoType, displayNumber]);

  return (
    <div id="showcase" className="flex h-full flex-col items-center bg-(--color-header) p-2 rounded-(--rounded)">
      <div id="headers" className="flex justify-between items-center">
        {TABS.map((tab) => (
          <a key={tab.id} onClick={() => setAlgoType(tab.id)} className="flex-1">
            <h2 className={
              (algoType === tab.id ? "text-(--color-link-text)" : "text-(--color-link-text) opacity-60")
              + " showcase-header"
            }>
              {tab.label}
            </h2>
          </a>
        ))}
      </div>

      <div id="showcase-items" className="flex flex-row h-full gap-2 w-full min-h-0">
        {isLoading ? (
          <Loading />
        ) : error !== null ? (
          <p className="showcase-message">{error}</p>
        ) : sets.length === 0 ? (
          // The normal state until people start publishing, so it gets a prompt
          // rather than an empty row that reads as something having gone wrong
          <p className="showcase-message">
            No sets published yet. <Link to="/create">Build the first one</Link>.
          </p>
        ) : (
          sets.map((set) => (
            <SetCard key={set.id} set={set} viewerId={session?.user.id} />
          ))
        )}
      </div>
    </div>
  )
}
