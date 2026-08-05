import {STATS} from '@/data/stats';

interface Props{
  baseStats: Record<string, number>;
}


export default function StatsConfig({baseStats}: Props) {


  return (
    <div>
      {STATS.map((stat) => (
        <div key={stat.key}>{stat.label}: {baseStats[stat.api] ?? "-"}</div>
      ))}
    </div>
  )
}