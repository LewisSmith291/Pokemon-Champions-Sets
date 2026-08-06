import GetNatureChanges, { STATS, MAX_PER_STAT, ALIGNMENTS, type Boosts, type BoostKey } from '@/data/stats';
import BoostSlider from '../atoms/BoostSlider';

interface Props{
  baseStats: Record<string, number>;
  statBoosts: Boosts;
  nature: string;
  setBoosts: (key:BoostKey, value:number) => void;
}

export default function StatsConfig({baseStats, statBoosts, nature, setBoosts}: Props) {
  const natureChanges = GetNatureChanges(nature);

  return (
    <div className="flex flex-col gap-2">
      {STATS.map((stat) => (
        <div className="stat-row" key={stat.key}>
          <BoostSlider 
            statName={stat.label}
            baseStat={baseStats[stat.api] ?? 0}
            alignment={ALIGNMENTS[natureChanges[stat.api]]}
            value={statBoosts[stat.key]}
            max={MAX_PER_STAT}
            setValue={(value) => setBoosts(stat.key, value)}
          />
        </div>
      ))}
    </div>
  )
}