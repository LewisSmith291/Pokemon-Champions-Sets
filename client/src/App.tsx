import './App.css'
import { useState } from 'react'
import PokemonSetDisplay from './components/molecules/PokemonSetDisplay.tsx'
import AuthForm from './components/organisms/authForm.tsx'
import CreateSet from './components/organisms/CreateSet.tsx'


function App() {
  const [answer, setAnswer] = useState<string>("answer");
  return (
    <>
      <h1>{answer}</h1>
      <AuthForm authMode="signin" onSuccess={() => setAnswer("successful login")}/>
      <CreateSet />
      {false && <PokemonSetDisplay name={"hawlucha-mega"}  ability={"lightning rod"} item={"life orb"} hp={100} atk={50} def={50} spAtk={50} spDef={50} spe={20} nature="timid"/>}
    </>
  )
}

export default App
