import { STATS, MAX_PER_STAT, type Boosts, type BoostKey } from '@/data/stats';
import BoostSlider from '../atoms/BoostSlider';

interface Props{
  baseStats: Record<string, number>;
  statBoosts: Boosts;
  setBoosts: (key:BoostKey, value:number) => void;
}


export default function StatsConfig({baseStats, statBoosts, setBoosts}: Props) {
  return (
    <div>
      {STATS.map((stat) => (
        <div key={stat.key} className="stat-row">
          <span>{stat.label}</span>
          <span>{baseStats[stat.api] ?? "-"}</span>
          <BoostSlider 
            statName={stat.label}
            value={statBoosts[stat.key]}
            max={MAX_PER_STAT}
            setValue={(value) => setBoosts(stat.key, value)}
          />
          <span>+{statBoosts[stat.key]}</span>
        </div>
      ))}
    </div>
  )
}