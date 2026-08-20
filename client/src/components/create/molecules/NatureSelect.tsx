import { useState } from "react";
import { NATURES, NATURE_STAT_STRINGS } from "@/data/stats";

interface Props {
  nature: string;
  onConfirm: (nature: string) => void
}

const ROW1:string[] = NATURES.slice(0,5);
const ROW2:string[] = NATURES.slice(5,10);
const ROW3:string[] = NATURES.slice(10,15);
const ROW4:string[] = NATURES.slice(15,20);
const ROW5:string[] = NATURES.slice(20,25);

const ROWS:string[][] = [ROW1, ROW2, ROW3, ROW4, ROW5];

export default function NatureSelect({nature, onConfirm}: Props) {
  const [selectedNature, setSelectedNature] = useState<string>(nature);
  return (
    <div id="nature-form-container" className="flex flex-col gap-2 p-2">
      <div id="nature-grid">
        <div></div>
        {NATURE_STAT_STRINGS.map((stat:string) => {
          return <div key={stat + " down"}>{stat} ↓</div>
        })}
        {NATURE_STAT_STRINGS.map((stat:string, index:number) => {
          return (
            <>
              <div key={stat + " up"}>{stat} ⬆</div>
              {ROWS[index].map((nature:string) => {
                return <button key = {nature} className={(!nature ? "" : "hoverable-link") + " " + (selectedNature === nature ? "bg-[var(--p-header)]" : "bg-[var(--p-void)]")} 
                  onClick={!nature ? () => null : () => setSelectedNature(nature)}>{nature}
                </button>
              })}
            </>
          )
        })}
      </div>
      <button className="hoverable-link rounded-[var(--rounded)]" onClick={() => onConfirm(selectedNature)}>Submit Nature</button>
    </div>
  )
}
// ⬆