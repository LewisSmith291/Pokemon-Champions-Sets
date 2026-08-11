import type { Alignment } from "@/data/stats";

interface Props {
  statName: string;
  value: number;
  baseStat: number;
  alignment: Alignment;
  setValue: (value:number) => void;
  max:number
} 

export default function BoostSlider({statName, baseStat, alignment, value, setValue, max}: Props) {
  // HP is calculated: Base + StatPoints + 75
  // All other stats are calculated: (Base + StatPoints + 20) * Alignment
  // Stat point decimals are always rounded down
  const basePlusBoost = statName === "HP" ? baseStat + value + 75 : Math.floor((baseStat + value + 20) * alignment);
  return (
    <label className={"stat-slider-row grid " }>
      <p className={"text-start "+ (alignment === 1 ? "" : alignment === 1.1 ? " text-" : " text-[--down-alignment]")}>{statName}</p>
      <p className={"text-start "+ (alignment === 1 ? "" : alignment === 1.1 ? " text-red-400" : " text-[--down-alignment]")}>{basePlusBoost}</p>
      <input 
        type="range" min={0} max={max} 
        value={value} step={1} 
        onChange={(e) => setValue(Number(e.target.value))}/>
      <p>{value === 0 ? value : "+"+value}</p>

      {alignment === 1 ? 
        (<div/>) // Neutral stat alignment
      : alignment === 1.1 ? 
        (<img className="w-5 h-5" alt="stats up" src={"/stats-up-arrow.svg"}/>) // Positive stat alignment
      : 
        (<img className="w-5 h-5" alt="stats down" src={"/stats-down-arrow.svg"}/>)  // Negative stat alignment
      }
    </label>
  )
}