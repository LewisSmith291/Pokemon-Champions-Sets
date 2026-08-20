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
        {NATURE_STAT_STRINGS.map((stat:string, index:number) => {
          return <Fragment>
            <div className="flex flex-row justify-center">
              <div className="stat-long nature-head-col" key={stat + " down long"}>{stat +" ↓"}</div>
              <div className="stat-short nature-head-col" key={stat + " down short"}>{NATURE_STAT_SHORT[index] + " ↓"}</div> 
            </div>
          </Fragment>
        })}
        {NATURE_STAT_STRINGS.map((stat:string, index:number) => {
          return (
            <Fragment key={stat}>
              <div className="flex flex-row justify-center items-center">
                <div className="stat-long nature-head-row">{stat+" ⬆"}</div>
                <div className="stat-short nature-head-row">{NATURE_STAT_SHORT[index] + "⬆"}</div> 
              </div>
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