import { useState, Fragment } from "react";
import { NATURES, NATURE_STAT_STRINGS } from "@/data/stats";

interface Props {
  currentNature: string;
  onConfirm: (nature: string) => void
}

// Arrays for rendering natures in grid
const ROW1:string[] = NATURES.slice(0,5);
const ROW2:string[] = NATURES.slice(5,10);
const ROW3:string[] = NATURES.slice(10,15);
const ROW4:string[] = NATURES.slice(15,20);
const ROW5:string[] = NATURES.slice(20,25);
const ROWS:string[][] = [ROW1, ROW2, ROW3, ROW4, ROW5];

export default function NatureSelect({currentNature, onConfirm}: Props) {
  const [selectedNature, setSelectedNature] = useState<string>(currentNature);
  return (
    <div id="nature-form-container" className="flex flex-col gap-2 p-2">
      <div id="nature-grid">
        <div></div>
        {NATURE_STAT_STRINGS.map((stat:string) => {
          return <div key={stat + " down"}>{stat} ↓</div>
        })}
        {NATURE_STAT_STRINGS.map((stat:string, index:number) => {
          return (
            <Fragment key={stat}>
              <div >{stat} ⬆</div>
              {ROWS[index].map((nature:string) => {
                return <button 
                  key = {nature} 
                  className={"nature-cell "+(!nature ? "" : "hoverable-link") + " " + (selectedNature === nature ? "bg-[var(--accent)] text-[var(--p-yellow)]" : "bg-[var(--bg)]")} 
                  onClick={() => setSelectedNature(nature)}
                  disabled={!nature}
                >
                  {nature}
                </button>
              })}
            </Fragment>
          )
        })}
      </div>
      <button className="hoverable-link rounded-[var(--rounded)]" onClick={() => onConfirm(selectedNature)}>Submit Nature</button>
    </div>
  )
}
// ⬆