interface Props {
  statName: string;
  value: number;
  setValue: (value:number) => void;
  max:number
} 

export default function BoostSlider({statName, value, setValue, max}: Props) {
  return (
    <label>
      {statName}
      <input 
        type="range" min={0} max={max} 
        value={value} step={1} 
        onChange={(e) => setValue(Number(e.target.value))}/>
    </label>
  )
}