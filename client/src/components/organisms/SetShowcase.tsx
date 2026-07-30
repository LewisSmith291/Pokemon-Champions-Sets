import { useEffect } from "react";
import type { AlgoType } from "../pages/Home";
import "./SetShowcase.css"

interface Props {
  displayNumber: number;
  algoType: AlgoType;
  setAlgoType: (algoType:AlgoType) => void;
}

export default function SetShowcase({displayNumber, algoType, setAlgoType}: Props) {

  // Update algo type headers on algoType change
  useEffect(() => {
    console.log(algoType);
  },[algoType]);

  return (
    <div className="flex w-full flex-col gap-2 justify-center items-center bg-(--color-header) p-2 rounded-(--rounded)">
      <div id="headers" className="flex w-full flex-row justify-around items-center">
        <a onClick={() => setAlgoType("hot")} className="flex-1">
          <h2 id="header-hot" className={(algoType === "hot" ? "text-(--color-link-text)" : "text-(--color-text)")+
            " showcase-header"}>Hot Pokemon Sets</h2>
        </a>
        <a onClick={() => setAlgoType("best")} className="flex-1">
          <h2 className={(algoType === "best" ? "text-(--color-link-text)" : "text-(--color-text)")+
            " showcase-header"}>Best Pokemon Sets</h2>
        </a>
        <a onClick={() => setAlgoType("new")} className="flex-1">
          <h2 className={(algoType === "new" ? "text-(--color-link-text)" : "text-(--color-text)")+
            " showcase-header"}>New Pokemon Sets</h2>
        </a>
      </div>
      <div className="flex flex-5 flex-row">

      </div>

      <div className="flex h-full bg-cyan-600 rounded-xl w-1/3 justify-center text-white items-center">{displayNumber}</div>
    </div>
  )
}