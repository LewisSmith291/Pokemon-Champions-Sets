import { useEffect, useState} from "react";
import { HELD_ITEMS, BERRIES } from "@/data/itemData";
import GetMegaStones from "@/data/megaStones.ts";
import { preferredMegaStone } from "@/data/forms.ts";

interface Props {
  value: string;
  onSelect: (item: string) => void;
  name: string;
  form: string;
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

export default function ItemSearch({ value, onSelect, name, form, isMegaForm, itemType }: Props) {
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
  // every species change, resets to "None".
  useEffect(() => {
    // A mega form determines its own stone, so correct the choice even when the
    // current one is a valid option - switching Charizard X -> Y leaves
    // charizardite-x selected, which is still in `options` and would otherwise stick.
    if (isMegaForm) {
      const wanted: string = preferredMegaStone(form, options) ?? options[0] ?? "";
      if (value !== wanted) onSelect(wanted);
      return;
    }

    if (options.includes(value)) return;
    onSelect(itemType === "mega" ? (options[0] ?? "") : "");
  },[itemType, name, form, isMegaForm, options, value])

  return (
    <select value={value} onChange={(e) => onSelect(e.target.value)}>
      {!isMegaForm && <option value="">None</option>}
      {options.map((item: string, index: number) => (
        <option key={index} value={item}>{toLabel(item)}</option>
      ))}
    </select>
  )

}
