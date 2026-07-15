import StatDisplay from '../atoms/StatDisplay.tsx';
import TypeDisplay from '../atoms/TypeDisplay.tsx';
import './pokemonDisplay.css'
import WireSquare from '/wireSquare.svg'
import { useState, useEffect } from 'react';

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
  nature: string
  ability: string
  item: string
}

export default function PokemonSetDisplay({name, ability, nature, item, hp, atk, def, spAtk, spDef, spe}: PokemonSetDisplayProps) {
  const [typing, setTyping] = useState<string[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        // data.types looks like: [{ slot: 1, type: { name: "electric" } }]
        const typeNames = data.types.map((t: { type: { name: string } }) => t.type.name);
        setTyping(typeNames);
        console.log(typeNames);
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, [name]);

  return (
    <div className="set-display">
      <div className="typing-header">
        <TypeDisplay />
        <TypeDisplay />
      </div>
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
