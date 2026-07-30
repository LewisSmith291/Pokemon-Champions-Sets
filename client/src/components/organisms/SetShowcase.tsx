import type { AlgoType } from "../pages/Home";
import "./SetShowcase.css"

interface Props {
  displayNumber: number;
  algoType: AlgoType;
  setAlgoType: (algoType:AlgoType) => void;
}

export default function SetShowcase({displayNumber, algoType, setAlgoType}: Props) {
  /*
  const [loadedNumber, setLoadedNumber] = useState(Clamp(displayNumber,1,3));

  function Clamp(input:number, min:number, max:number):number{
    return input < min ? min : (input > max? max : input);
  }
    */

  const displayItems = []
  for (let i = 0; i < displayNumber; i++){
    displayItems.push(
      <div key={i+1} className="flex h-full flex-5 bg-cyan-600 rounded-xl w-1/3 justify-center text-white items-center">Placeholder</div>
    );
  }

  return (
    <div id="showcase" className="flex w-full h-full flex-col items-center bg-(--color-header) p-2 rounded-(--rounded)">
      <div id="headers" className="flex justify-between items-center">
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
      <div className="flex flex-row h-full gap-2">
        <div className="flex h-full flex-5 bg-cyan-600 rounded-xl w-1/3 justify-center text-white items-center">Placeholder</div>
        <div className="flex h-full flex-5 bg-cyan-600 rounded-xl w-1/3 justify-center text-white items-center">Placeholder</div>
        <div className="flex h-full flex-5 bg-cyan-600 rounded-xl w-1/3 justify-center text-white items-center">Placeholder</div>
      </div>
    </div>
  )
}