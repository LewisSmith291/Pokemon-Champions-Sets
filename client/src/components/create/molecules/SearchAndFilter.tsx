import { useState, useEffect } from 'react';
interface Props {
  queryText:string;
  updateQuery: (query:string) => void;
  onEnter?: () => void;
}

export default function SearchAndFilter({queryText, updateQuery, onEnter}: Props) {
  const [query, setQuery] = useState<string>(queryText);

    useEffect(() => {
      setQuery(queryText);
    }, [queryText]);

    return (
    <div id="search-and-filter" className="flex flex-row items-center justify-center">
      <input
        data-autofocus
        className="text-input"
        type="text"
        value={query}
        placeholder="Search"
        onChange={(e) => updateQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          e.preventDefault(); // never let Enter submit an enclosing form
          onEnter?.();
        }}
      >
      </input>
    </div>
  )
}