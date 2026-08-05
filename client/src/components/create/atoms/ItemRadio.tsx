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
    <fieldset className="flex items-center">
      <legend>Filter by item type</legend>
      <label><input name="item-type" type="radio" id="held-item" checked={isMega ? false : get === "held"} value="held" onChange={(e) => set(e.target.value)} disabled={isMega}/>Held Items</label>
      <label><input name="item-type" type="radio" id="berry" checked={isMega ? false: get === "berry"} value="berry" onChange={(e) => set(e.target.value)} disabled={isMega}/>Berries</label>
      <label><input name="item-type" type="radio" id="mega-stone" checked={isMega ? true : get === "mega"} value="mega" onChange={(e) => set(e.target.value)} disabled={!canMega}/>Mega Stones</label>
    </fieldset>
  )
}