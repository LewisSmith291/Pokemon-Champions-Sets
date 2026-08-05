import { STATS, MAX_PER_STAT, type Boosts, type BoostKey } from '@/data/stats';
import BoostSlider from '../atoms/BoostSlider';

interface Props{
  baseStats: Record<string, number>;
  statBoosts: Boosts;
  setBoosts: (key:BoostKey, value:number) => void;
}


export default function StatsConfig({baseStats, statBoosts, setBoosts}: Props) {
  return (
    <div className="flex flex-col gap-2">
      {STATS.map((stat) => (
        <div className="stat-row" key={stat.key}>
          <BoostSlider 
            statName={stat.label}
            baseStat={baseStats[stat.api] ?? 0}
            value={statBoosts[stat.key]}
            max={MAX_PER_STAT}
            setValue={(value) => setBoosts(stat.key, value)}
          />
        </div>
      ))}
    </div>
  )
}