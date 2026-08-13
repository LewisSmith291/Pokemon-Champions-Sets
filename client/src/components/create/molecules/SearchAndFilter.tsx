import { useState, useEffect } from 'react';
import MagnifyingGlass from '/magnifying-glass.svg'
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
      <input className="" type="text" value={query} placeholder="Search" onChange={(e) => updateQuery(e.target.value)}>
      </input>
      <img src={MagnifyingGlass} className='w-6 h-6 bright dark:invert'></img>
    </div>
  )
}