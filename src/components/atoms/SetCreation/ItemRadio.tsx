import React from 'react'

interface Props{
  get: string;
  set: (item: string) => void;
  canMega: boolean; 
}

export default function ItemRadio({get, set, canMega}: Props) {

  return (
    <form >
      <fieldset>
        <legend>Filter by item type</legend>
        <label><input type="radio" id="held-item" checked={get === "held"} value="held" onChange={(e) => set(e.target.value)}/>Held Items</label>
        <label><input type="radio" id="held-item" checked={get === "berry"} value="berry" onChange={(e) => set(e.target.value)}/>Berries</label>
        <label><input type="radio" id="held-item" checked={get === "mega"} value="mega" onChange={(e) => set(e.target.value)} disabled={!canMega}/>Mega Stones</label>
      </fieldset>
    </form>
  )
}