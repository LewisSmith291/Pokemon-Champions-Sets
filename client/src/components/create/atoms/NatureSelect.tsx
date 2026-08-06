import {NATURES} from '@/data/stats'

interface Props{
  nature: string;
  setNature: (nature:string) => void;
}

export default function NatureSelect({nature, setNature}: Props) {
  return (
    <label className="flex flex-col">
      Select Nature
      <select value={nature} onChange={(e) => setNature(e.target.value)}>
          {NATURES.map((s: string) => (
            <option key={s} value={s}>{s}</option>
          ))}
      </select>
    </label>
  )
}