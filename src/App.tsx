import { useEffect } from 'react'
import './App.css'
import PokemonSetDisplay from './components/molecules/PokemonSetDisplay.tsx'
import CreateSet from './components/organisms/CreateSet.tsx'


function App() {

  return (
    <>
    <CreateSet />
      {false && <PokemonSetDisplay name={"hawlucha-mega"}  ability={"lightning rod"} item={"life orb"} hp={100} atk={50} def={50} spAtk={50} spDef={50} spe={20} nature="timid"/>}
    </>
  )
}

export default App
