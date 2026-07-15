import type { PokemonType } from 'pokedex-promise-v2';
import StatDisplay from '../atoms/StatDisplay.tsx';
import TypeDisplay from '../atoms/TypeDisplay.tsx';
import './pokemonDisplay.css'
import WireSquare from '/wireSquare.svg'

interface Stats {
  hp: number
  atk: number
  def: number
  spAtk: number
  spDef: number
  spe: number
}

interface PokemonSetDisplayProps extends Stats {
  name: string
  typing: [string | null, string | null]
  nature: string
  ability: string
  item: string
}

export default function PokemonSetDisplay({name, typing, ability, nature, item, hp, atk, def, spAtk, spDef, spe}: PokemonSetDisplayProps) {
 
  return (
    <div className="set-display">
      <div className="typing-header">
        
      </div>
      <TypeDisplay/>
      <div className="info-column">
        <p className="name">{name}</p>
        <img className="sprite" src={WireSquare}/>
        <p className="nature">{nature}</p>
        <p className="ability">{ability}</p>
        <p className="item">{item}</p>
      </div>
      <div className="stat-column">
        <StatDisplay label="HP" stat={hp} />
        <StatDisplay label="Atk" stat={atk} />
        <StatDisplay label="Def" stat={def} />
        <StatDisplay label="SpAtk" stat={spAtk} />
        <StatDisplay label="SpDef" stat={spDef} />
        <StatDisplay label="Spe" stat={spe} />
      </div>
    </div>
  )
}
