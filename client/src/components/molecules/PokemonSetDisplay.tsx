import NatureBoost from '../atoms/setDisplay/NatureBoost.tsx';
import StatDisplay from '../atoms/setDisplay/StatDisplay.tsx';
import TypeDisplay from '../atoms/setDisplay/TypeDisplay.tsx';
import GetNatureChanges from '../data/stats.ts'
import '../atoms/setDisplay/TypeStyle.css'
import './pokemonDisplay.css'
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
  const [sprite, setSprite] = useState<string>();

  useEffect(() => {
    let stale = false;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        if (stale) return;
        setSprite(data.sprites.other.home.front_default);
        const typeNames = data.types.map((t: { type: { name: string } }) => t.type.name);
        setTyping(typeNames);
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
      return () => { stale = true; };
  }, [name]);

  const statChanges = GetNatureChanges(nature);

  return (
    <div className="set-display">
      <div className="typing-header">
        {typing.length > 0 && <TypeDisplay type={typing[0]}/>}
        {typing.length > 1 && <TypeDisplay type={typing[1]}/>}
      </div>
      <h1 className="name">{name}</h1>
      <div className="about-and-stats">
        <div className="info-column">
          <img className="sprite" alt="pokemon sprite" src={sprite}/>
          <p className="ability">{ability}</p>
          <p className="item">{item}</p>
        </div>
        <div className="stat-column">
        <StatDisplay label="HP" stat={hp} />
        <StatDisplay label="Atk" stat={atk} /> {statChanges.atk !== "" && <NatureBoost isBoost = {statChanges.atk === "up"}/>}
        <StatDisplay label="Def" stat={def} /> {statChanges.def !== "" && <NatureBoost isBoost = {statChanges.def === "up"}/>}
        <StatDisplay label="SpAtk" stat={spAtk} /> {statChanges.spAtk !== "" && <NatureBoost isBoost = {statChanges.spAtk === "up"}/>}
        <StatDisplay label="SpDef" stat={spDef} /> {statChanges.spDef !== "" && <NatureBoost isBoost = {statChanges.spDef === "up"}/>}
        <StatDisplay label="Spe" stat={spe} /> {statChanges.spe !== "" && <NatureBoost isBoost = {statChanges.spe === "up"}/>}
        <div className="nature">{nature}</div>
      </div>
      </div>
    </div>
  )
}
