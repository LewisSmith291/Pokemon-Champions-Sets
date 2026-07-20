import { useEffect, useState} from "react";
import { HELD_ITEMS, BERRIES } from "../../data/itemData";
import GetMegaStones from "../../data/megaStones.ts";

interface Props {
  value: string;
  onSelect: (item: string) => void;
  name: string;
  isMegaForm: boolean;
  isMega: boolean;
  isHeld: boolean;
  isBerry: boolean;
}

// Turns an API slug like "life-orb" into a display label like "Life Orb".
function toLabel(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ItemSearch({ value, onSelect, name, isMegaForm, isMega, isHeld, isBerry }: Props) {
  const [megaStones, setMegaStones] = useState<string[]>([]);
  
  // Reset sprite when item category is changed 
  useEffect(()=>{
    onSelect("");
  },[isMega,isHeld,isBerry, name, isMegaForm])
  
  // Update the mega stones list when different species is chosen 
  useEffect(() => {
    setMegaStones(GetMegaStones(name as "string"))
  },[name])

  return (
    <select value={value} onChange={(e) => onSelect(e.target.value)}>
      {!isMegaForm && <option value="">None</option>}
      {isHeld && HELD_ITEMS.map((item: string, index: number) => (
        <option key={index} value={item}>{toLabel(item)}</option>
      ))}
      {isMega && megaStones.map((item: string, index: number) => (
        <option key={index} value={item}>{toLabel(item)}</option>
      ))}

      {isBerry && BERRIES.map((item: string, index: number) => (
        <option key={index} value={item}>{toLabel(item)}</option>
      ))}
    </select>
  )
  
}
