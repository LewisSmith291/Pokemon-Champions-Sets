interface Props {
  statName: string;
  value: number;
  baseStat: number;
  setValue: (value:number) => void;
  max:number
} 

export default function BoostSlider({statName, baseStat, value, setValue, max}: Props) {
  return (
    <label className=" stat-slider-row grid">
      <p className="text-start">{statName}</p>
      <p className="text-start">{baseStat + value}</p>
      <input 
        type="range" min={0} max={max} 
        value={value} step={1} 
        onChange={(e) => setValue(Number(e.target.value))}/>
      <p>{value === 0 ? value : "+"+value}</p>
    </label>
  )
}