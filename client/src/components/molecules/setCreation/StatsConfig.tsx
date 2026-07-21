import {useEffect, useState} from 'react'

interface Props{
  species: string;
}

// One entry of PokeAPI's /pokemon/{name} stats array
interface ApiStat {
  base_stat: number;
  stat: { name: string };
}

// The shape we actually care about, flattened out of ApiStat
interface BaseStat {
  name: string;
  value: number;
}

export default function StatsConfig({species}: Props) {
  const [baseStats, setBaseStats] = useState<BaseStat[]>([]);

  useEffect(() => {
    if (species === "") return;

    // Ignore this response if the species changes again before it lands
    let stale = false;

    fetch(`https://pokeapi.co/api/v2/pokemon/${species}`)
      .then((response) => response.json())
      .then((data) => {
        if (stale) return;
        // stat.name sits alongside base_stat, one level deeper
        setBaseStats(data.stats.map((statObject: ApiStat) => ({
          name: statObject.stat.name,
          value: statObject.base_stat,
        })));
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });

    return () => { stale = true; };
  }, [species]);

  return (
    <div>
      {baseStats.map((stat: BaseStat) => (
        <div key={stat.name}>{stat.name}: {stat.value}</div>
      ))}
    </div>
  )
}