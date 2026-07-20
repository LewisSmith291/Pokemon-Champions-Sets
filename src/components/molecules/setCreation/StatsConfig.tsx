import {useEffect, useState} from 'react'

interface Props{
  species: string;
}

export default function StatsConfig({species}: Props) {
  const [baseStats, setBaseStats] = useState<object[]>([]);
  

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${species}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBaseStats(data.stats.map((statObject: {base_stat:number}) => statObject.base_stat));
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, [species]);

  

  return (
    <div>
      {baseStats.map((value: number, index: number) => (
        <div key={index}>{}</div>
      ))}
    </div>
  )
}