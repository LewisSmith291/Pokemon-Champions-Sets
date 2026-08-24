import { useState, useEffect } from 'react';
interface Props {
  queryText:string;
  updateQuery: (query:string) => void
}

export default function SearchAndFilter({queryText, updateQuery}: Props) {
  const [query, setQuery] = useState<string>(queryText);

    useEffect(() => {
      setQuery(queryText);
    }, [queryText]);

    return (
    <div id="search-and-filter" className="flex flex-row items-center justify-center">
      <input className="text-input" type="text" value={query} placeholder="Search" onChange={(e) => updateQuery(e.target.value)}>
      </input>
    </div>
  )
}