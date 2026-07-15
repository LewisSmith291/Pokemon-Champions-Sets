import { useState } from 'react'
import type { PokemonType } from 'pokedex-promise-v2';
import Pokedex from 'pokedex-promise-v2'
import './App.css'
import PokemonSetDisplay from './components/molecules/PokemonSetDisplay.tsx'

const p = new Pokedex();

function App() {

  return (
    <>
      <PokemonSetDisplay name={"pikachu"} typing={} ability={"lightning rod"} item={"life orb"} hp={100} atk={50} def={50} spAtk={50} spDef={50} spe={20} nature="adamant"/>
    </>
  )
}

export default App
