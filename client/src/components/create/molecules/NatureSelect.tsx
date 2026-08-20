import { useState, Fragment } from "react";
import { NATURES, NATURE_STAT_STRINGS, NATURE_STAT_SHORT } from "@/data/stats";

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
        {/* column headers*/}
        {NATURE_STAT_STRINGS.map((stat:string, col:number) => (
          <div className="flex flex-row justify-center nature-head-col">
            <span className="stat-long" data-col={col} >{stat} ↓</span>
            <span className="stat-short">{NATURE_STAT_SHORT[col]} ↓</span> 
          </div>
        ))}
        {NATURE_STAT_STRINGS.map((stat:string, row:number) => (
          <Fragment key={stat}>
            <div className="nature-head-row" data-row={row}>
              <span className="stat-long">{stat} ⬆</span>
              <span className="stat-short">{NATURE_STAT_SHORT[row]} ⬆</span> 
            </div>
            {ROWS[row].map((nature:string, col:number) => (
              <button 
                key = {`${row}-${col}`} 
                data-row={row}
                data-col={col}
                className={
                  "nature-cell "+(!nature ? "" : "hoverable-link") + " " + 
                  (selectedNature === nature ? "bg-[var(--accent)] text-[var(--p-yellow)]" : "bg-[var(--bg)]")
                } 
                onClick={() => setSelectedNature(nature)}
                disabled={!nature}
              >
                {nature}
              </button>
            ))}
          </Fragment>
        ))}
      </div>
      <button className="hoverable-link rounded-[var(--rounded)]" onClick={() => onConfirm(selectedNature)}>Submit Nature</button>
    </div>
  )
}
// ⬆