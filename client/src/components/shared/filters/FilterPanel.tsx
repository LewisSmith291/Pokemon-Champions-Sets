import { useState, type ReactNode } from "react";
import "./filters.css";

interface Props {
  /** The panel's id, which the mobile toggle points at */
  id: string;
  /** How many filters are on, shown on the toggle so a closed panel still says so */
  activeCount: number;
  children: ReactNode;
}

// The filter box, with the button that shows and hides it on a phone. Wider
// screens always show it. The panel is hidden with a class rather than left out
// of the page, so the desktop layout never depends on the toggle's state.
export default function FilterPanel({ id, activeCount, children }: Props) {
  // Closed by default: most visits are to look, not to filter
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className="filter-chip filter-toggle"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "Hide filters" : "Filters"}
        {activeCount > 0 && <span className="filter-count">{activeCount}</span>}
      </button>

      <div id={id} className={`filter-panel ${isOpen ? "is-open" : ""}`}>
        {children}
      </div>
    </>
  );
}
