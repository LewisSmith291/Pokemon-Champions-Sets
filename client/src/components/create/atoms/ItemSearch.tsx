import { useEffect, useState} from "react";
import { HELD_ITEMS, BERRIES } from "../../data/itemData";
import GetMegaStones from "../../data/megaStones.ts";

interface Props {
  value: string;
  onSelect: (item: string) => void;
  name: string;
  isMegaForm: boolean;
  itemType: string;
}

// Turns an API slug like "life-orb" into a display label like "Life Orb".
function toLabel(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ItemSearch({ value, onSelect, name, isMegaForm, itemType }: Props) {
  const [megaStones, setMegaStones] = useState<string[]>([]);

  // Update the mega stones list when different species is chosen
  useEffect(() => {
    setMegaStones(GetMegaStones(name as "string"))
  },[name])

  // The options currently on offer
  const options: string[] =
    itemType === "mega" ? megaStones :
    itemType === "berry" ? BERRIES :
    HELD_ITEMS;

  // Only the mega filter auto-picks (a mega form must hold a stone); every other filter, and
  // every species change, resets to "None". Keying off itemType rather than
  useEffect(() => {
    if (options.includes(value)) return;
    onSelect(itemType === "mega" ? (options[0] ?? "") : "");
  },[itemType, name, options, value])

  return (
    <select value={value} onChange={(e) => onSelect(e.target.value)}>
      {!isMegaForm && <option value="">None</option>}
      {options.map((item: string, index: number) => (
        <option key={index} value={item}>{toLabel(item)}</option>
      ))}
    </select>
  )

}
