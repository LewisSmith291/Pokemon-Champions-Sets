import { useEffect } from 'react'
import './App.css'
import PokemonSetDisplay from './components/molecules/PokemonSetDisplay.tsx'


function App() {

  return (
    <>
      <PokemonSetDisplay name={"pikachu"}  ability={"lightning rod"} item={"life orb"} hp={100} atk={50} def={50} spAtk={50} spDef={50} spe={20} nature="adamant"/>
    </>
  )
}

export default App
