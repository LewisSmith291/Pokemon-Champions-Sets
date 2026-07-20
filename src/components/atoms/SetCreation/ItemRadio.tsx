import {useEffect} from 'react'

interface Props{
  get: string;
  set: (item: string) => void;
  canMega: boolean; 
  isMega: boolean;
}

export default function ItemRadio({get, set, canMega, isMega}: Props) {

  useEffect(() => {
    if (isMega){
      set("mega");
    }
  },[isMega])

  return (
    <form >
      <fieldset>
        <legend>Filter by item type</legend>
        <label><input type="radio" id="held-item" checked={isMega ? false : get === "held"} value="held" onChange={(e) => set(e.target.value)}/>Held Items</label>
        <label><input type="radio" id="held-item" checked={isMega ? false: get === "berry"} value="berry" onChange={(e) => set(e.target.value)}/>Berries</label>
        <label><input type="radio" id="held-item" checked={isMega ? true : get === "mega"} value="mega" onChange={(e) => set(e.target.value)} disabled={!canMega}/>Mega Stones</label>
      </fieldset>
    </form>
  )
}