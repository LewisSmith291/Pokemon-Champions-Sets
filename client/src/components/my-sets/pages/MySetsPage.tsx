import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { useSession } from "@/services/authClient";
import { listMySets, listSavedSets, type SetSummary } from "@/services/sets";
import SetCard from "@/components/set-display/molecules/SetCard";
import Loading from "@/components/shared/Loading";
import { SET_SORTS, sortSets, type SetSortKey } from "@/data/setSort";
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
  const [sortKey, setSortKey] = useState<SetSortKey>("recent");
  const [reversed, setReversed] = useState<boolean>(false);
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
    const filtered =
      filter === "saved" ? savedSets :
      filter === "all"   ? sets :
      sets.filter((set) => set.isPublic === (filter === "public"));
    // Sorted after filtering, and the same choice carries across every tab
    return sortSets(filtered, sortKey, reversed);
  }, [sets, savedSets, filter, sortKey, reversed]);

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
              // The Saved tab shows only a star, so its name has to come from here
              aria-label={`${tab.label}, ${counts[tab.id]}`}
            >
              {tab.id === "saved" ? (
                // The same star as the save button, so the tab reads as "your starred sets"
                <svg className="my-sets-star" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52l-5.88 3.09 1.12-6.55L2.48 9.42l6.58-.96L12 2.5z" />
                </svg>
              ) : (
                tab.label
              )}
              <span className="my-sets-count">{counts[tab.id]}</span>
            </button>
          ))}
        </div>
      </div>

      <div id="my-sets-sort" role="group" aria-label="Sort sets">
        <span className="my-sets-sort-label">Sort</span>
        {SET_SORTS.map((option) => (
          <button
            key={option.id}
            type="button"
            className="my-sets-tab"
            aria-pressed={sortKey === option.id}
            onClick={() => setSortKey(option.id)}
          >
            {option.label}
          </button>
        ))}
        <button
          type="button"
          className="my-sets-tab my-sets-reverse"
          aria-pressed={reversed}
          onClick={() => setReversed((prev) => !prev)}
          aria-label={reversed ? "Reversed order, switch back" : "Reverse order"}
          title="Reverse order"
        >
          {/* Arrow flips with the state, so it shows which way the list runs */}
          <span aria-hidden="true">{reversed ? "↑" : "↓"}</span>
          Reverse
        </button>
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
