import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { useSession } from "@/services/authClient";
import { listMySets, listSavedSets, type SetSummary } from "@/services/sets";
import SetCard from "@/components/set-display/molecules/SetCard";
import Loading from "@/components/shared/Loading";
import "./MySetsPage.css";

type Filter = "all" | "public" | "private" | "saved";

const TABS: { id: Filter; label: string }[] = [
  { id: "all",     label: "All" },
  { id: "public",  label: "Public" },
  { id: "private", label: "Private" },
  // Other people's sets, kept apart from your own rather than mixed into All
  { id: "saved",   label: "Saved" },
];

export default function MySetsPage() {
  const { data: session } = useSession();
  const [sets, setSets] = useState<SetSummary[]>([]);
  const [savedSets, setSavedSets] = useState<SetSummary[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    // Both up front, so every tab's count is right before it's opened
    Promise.all([listMySets(controller.signal), listSavedSets(controller.signal)])
      .then(([own, saved]) => {
        setSets(own);
        setSavedSets(saved);
        setIsLoading(false);
      })
      .catch((problem) => {
        if (controller.signal.aborted) return;
        setError(problem instanceof Error ? problem.message : "Could not load your sets");
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  // Filtered here rather than by the server - every row already says whether
  // it's public, and switching tabs shouldn't mean another request
  const visible: SetSummary[] = useMemo(() => {
    if (filter === "saved") return savedSets;
    if (filter === "all") return sets;
    const wantPublic = filter === "public";
    return sets.filter((set) => set.isPublic === wantPublic);
  }, [sets, savedSets, filter]);

  const counts: Record<Filter, number> = {
    all: sets.length,
    public: sets.filter((set) => set.isPublic).length,
    private: sets.filter((set) => !set.isPublic).length,
    saved: savedSets.length,
  };

  return (
    <div id="my-sets">
      <div id="my-sets-head">
        <h1>My Sets</h1>
        <div id="my-sets-tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={filter === tab.id}
              className="my-sets-tab"
              onClick={() => setFilter(tab.id)}
            >
              {tab.label} <span className="my-sets-count">{counts[tab.id]}</span>
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : error !== null ? (
        <p className="my-sets-message">{error}</p>
      ) : filter === "saved" && savedSets.length === 0 ? (
        <p className="my-sets-message">
          Nothing saved yet. Tap the star on anyone's set to keep it here.
        </p>
      ) : filter !== "saved" && sets.length === 0 ? (
        <p className="my-sets-message">
          You haven't made any sets yet. <Link to="/create">Build your first one</Link>.
        </p>
      ) : visible.length === 0 ? (
        <p className="my-sets-message">
          {filter === "public" ? "None of your sets are published yet." : "All of your sets are published."}
        </p>
      ) : (
        <div id="my-sets-grid">
          {visible.map((set) => (
            <SetCard
              key={set.id}
              set={set}
              viewerId={session?.user.id}
              // Unsaving from the Saved tab takes the card straight out of it
              onSavedChange={(saved) => {
                if (!saved) setSavedSets((prev) => prev.filter((row) => row.id !== set.id));
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
