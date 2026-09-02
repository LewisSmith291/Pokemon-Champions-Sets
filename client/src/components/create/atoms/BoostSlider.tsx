import { finalStat, type Alignment, type StatApi } from "@/data/stats";

interface Props {
  statName: string;
  /** PokeAPI stat slug - what finalStat keys the HP special case off */
  statApi: StatApi;
  value: number;
  baseStat: number;
  alignment: Alignment;
  setValue: (value:number) => void;
  max:number
}

export default function BoostSlider({statName, statApi, baseStat, alignment, value, setValue, max}: Props) {
  const basePlusBoost = finalStat(statApi, baseStat, value, alignment);

  // Theme-aware stat colours from index.css. These rows sit on --header, so the
  // tokens are tinted per theme to stay readable against the deep purple.
  const alignmentText =
    alignment === 1 ? "" :
    alignment === 1.1 ? " text-(--color-stat-up)" : " text-(--color-stat-down)";

  return (
    <label className={"stat-slider-row grid " }>
      <p className={"text-start" + alignmentText}>{statName}</p>
      <p className={"text-start" + alignmentText}>{basePlusBoost}</p>
      <input 
        type="range" min={0} max={max} 
        value={value} step={1} 
        onChange={(e) => setValue(Number(e.target.value))}/>
      <p>{value === 0 ? (value) : (alignment === 1 ? value : alignment === 0.9 ? value+" -" : value+" +")}</p>

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