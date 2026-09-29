import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useSession } from "@/services/authClient";
import { browseSets, type SetSort, type SetSummary } from "@/services/sets";
import SetCard from "@/components/set-display/molecules/SetCard";
import TypeDisplay from "@/components/shared/TypeDisplay";
import Loading from "@/components/shared/Loading";
import { SPECIES } from "@/data/species";
import { SPECIES_BY_NAME, isValidForm } from "@/data/forms";
import { FORM_DATA } from "@/data/formData";
import { TYPE_ORDER } from "@/data/types";
import { TAGS, MAX_TAGS } from "@/data/tags";
import "./BrowsePage.css";

const PAGE_SIZE = 24;
// A set has at most two types, so a third selection could never match anything
const MAX_TYPES = 2;

const SORTS: { id: SetSort; label: string }[] = [
  { id: "hot",  label: "Hot" },
  { id: "best", label: "Best" },
  { id: "new",  label: "New" },
];

// "a,b" in the URL -> ["a", "b"], ignoring blanks
function listParam(value: string | null): string[] {
  return (value ?? "").split(",").filter(Boolean);
}

export default function BrowsePage() {
  const { data: session } = useSession();

  // The URL is the single source of truth, so any page of results can be
  // linked to and the back button steps through filter changes
  const [params, setParams] = useSearchParams();
  const sort: SetSort = (["hot", "best", "new"] as const).find((s) => s === params.get("sort")) ?? "hot";
  const page: number = Math.max(1, Number(params.get("page")) || 1);
  const species: string = params.get("species") ?? "";
  const types: string[] = listParam(params.get("types")).slice(0, MAX_TYPES);
  const tags: string[] = listParam(params.get("tags")).slice(0, MAX_TAGS);

  // The species box is typed into freely; the filter only applies once the text
  // matches a real Pokemon, so half a name doesn't empty the results
  const [speciesText, setSpeciesText] = useState<string>(
    SPECIES_BY_NAME.get(species)?.label ?? "",
  );

  const [sets, setSets] = useState<SetSummary[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const typesKey = types.join(",");
  const tagsKey = tags.join(",");

  // The server has no typing data, so the type filter becomes the list of forms
  // whose own typing includes every selected type. Mega Charizard X is Dragon.
  const typeForms: string[] | null = useMemo(() => {
    const selected = typesKey === "" ? [] : typesKey.split(",");
    if (selected.length === 0) return null;
    return Object.entries(FORM_DATA)
      .filter(([form, data]) => isValidForm(form) && selected.every((type) => data.types.includes(type)))
      .map(([form]) => form);
  }, [typesKey]);

  useEffect(() => {
    // Two types no form has (Fire/Fairy, say) can't match anything - skip the request
    if (typeForms !== null && typeForms.length === 0) {
      setSets([]);
      setTotal(0);
      setIsLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    browseSets(
      {
        sort,
        page,
        pageSize: PAGE_SIZE,
        species: species || undefined,
        forms: typeForms ?? undefined,
        tags: tagsKey === "" ? [] : tagsKey.split(","),
      },
      controller.signal,
    )
      .then((result) => {
        setSets(result.sets);
        setTotal(result.total);
        setIsLoading(false);
      })
      .catch((problem) => {
        if (controller.signal.aborted) return;
        setError(problem instanceof Error ? problem.message : "Could not load sets");
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [sort, page, species, typeForms, tagsKey]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  // Writes the URL. Any filter change goes back to page 1 - staying on page 4
  // of a list that now has two pages would show nothing.
  function update(changes: Record<string, string | null>, keepPage = false) {
    const next = new URLSearchParams(params);
    for (const [key, value] of Object.entries(changes)) {
      if (value === null || value === "") next.delete(key);
      else next.set(key, value);
    }
    if (!keepPage) next.delete("page");
    setParams(next);
  }

  function toggle(list: string[], value: string, max: number): string {
    const next = list.includes(value)
      ? list.filter((item) => item !== value)
      : list.length >= max ? list : [...list, value];
    return next.join(",");
  }

  function chooseSpecies(text: string) {
    setSpeciesText(text);
    const match = SPECIES.find((s) => s.label.toLowerCase() === text.trim().toLowerCase());
    // Only commit a real match; clearing the box clears the filter
    if (match) update({ species: match.name });
    else if (text.trim() === "") update({ species: null });
  }

  function goToPage(target: number) {
    update({ page: target === 1 ? null : String(target) }, true);
    window.scrollTo({ top: 0 });
  }

  function clearAll() {
    setSpeciesText("");
    update({ species: null, types: null, tags: null });
  }

  const hasFilters = species !== "" || types.length > 0 || tags.length > 0;

  return (
    <div id="browse">
      <div id="browse-head">
        <h1>Browse</h1>
        <div className="browse-row" role="group" aria-label="Sort">
          {SORTS.map((option) => (
            <button
              key={option.id}
              type="button"
              className="browse-chip"
              aria-pressed={sort === option.id}
              onClick={() => update({ sort: option.id === "hot" ? null : option.id })}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div id="browse-filters">
        <label className="browse-filter-label" htmlFor="browse-species">Pokémon</label>
        <div className="browse-species">
          <input
            id="browse-species"
            className="text-input"
            list="browse-species-options"
            placeholder="Any Pokémon"
            value={speciesText}
            onChange={(e) => chooseSpecies(e.target.value)}
          />
          {species !== "" && (
            <button type="button" className="browse-chip" onClick={() => { setSpeciesText(""); update({ species: null }); }}>
              Clear
            </button>
          )}
          <datalist id="browse-species-options">
            {SPECIES.map((s) => <option key={s.name} value={s.label} />)}
          </datalist>
        </div>

        <span className="browse-filter-label">
          Type <span className="browse-hint">up to {MAX_TYPES}</span>
        </span>
        <div className="browse-row browse-types">
          {TYPE_ORDER.map((type) => {
            const isOn = types.includes(type);
            return (
              <button
                key={type}
                type="button"
                className="browse-type"
                aria-pressed={isOn}
                aria-label={type}
                // Past two, a third type could never match a set
                disabled={!isOn && types.length >= MAX_TYPES}
                onClick={() => update({ types: toggle(types, type, MAX_TYPES) })}
              >
                <TypeDisplay type={type} />
              </button>
            );
          })}
        </div>

        <span className="browse-filter-label">
          Tags <span className="browse-hint">must have all</span>
        </span>
        <div className="browse-row">
          {TAGS.map((tag) => (
            <button
              key={tag.slug}
              type="button"
              className="browse-chip"
              aria-pressed={tags.includes(tag.slug)}
              onClick={() => update({ tags: toggle(tags, tag.slug, MAX_TAGS) })}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {hasFilters && (
          <button type="button" className="browse-chip browse-reset" onClick={clearAll}>
            Clear all filters
          </button>
        )}
      </div>

      <p className="browse-count" aria-live="polite">
        {isLoading ? "" : `${total} ${total === 1 ? "set" : "sets"}`}
      </p>

      {isLoading ? (
        <Loading />
      ) : error !== null ? (
        <p className="browse-message">{error}</p>
      ) : sets.length === 0 ? (
        <p className="browse-message">
          {hasFilters
            ? "No sets match these filters."
            : <>No sets have been published yet. <Link to="/create">Build the first one</Link>.</>}
        </p>
      ) : (
        <>
          <div id="browse-grid">
            {sets.map((set) => (
              <SetCard key={set.id} set={set} viewerId={session?.user.id} />
            ))}
          </div>

          {totalPages > 1 && (
            <nav id="browse-pages" aria-label="Pages">
              <button type="button" className="browse-chip" disabled={page <= 1} onClick={() => goToPage(page - 1)}>
                ‹ Prev
              </button>
              {pageNumbers(page, totalPages).map((entry, index) =>
                entry === null ? (
                  <span key={`gap-${index}`} className="browse-gap">…</span>
                ) : (
                  <button
                    key={entry}
                    type="button"
                    className="browse-chip"
                    aria-current={entry === page ? "page" : undefined}
                    aria-pressed={entry === page}
                    onClick={() => goToPage(entry)}
                  >
                    {entry}
                  </button>
                ),
              )}
              <button type="button" className="browse-chip" disabled={page >= totalPages} onClick={() => goToPage(page + 1)}>
                Next ›
              </button>
            </nav>
          )}
        </>
      )}
    </div>
  );
}

// First, last, and the two either side of the current page, with a gap (null)
// wherever numbers are skipped: 1 … 4 5 [6] 7 8 … 20
function pageNumbers(current: number, last: number): (number | null)[] {
  const wanted = new Set<number>([1, last]);
  for (let n = current - 2; n <= current + 2; n++) {
    if (n >= 1 && n <= last) wanted.add(n);
  }
  const sorted = [...wanted].sort((a, b) => a - b);
  const result: (number | null)[] = [];
  sorted.forEach((n, i) => {
    if (i > 0 && n - sorted[i - 1] > 1) result.push(null);
    result.push(n);
  });
  return result;
}
