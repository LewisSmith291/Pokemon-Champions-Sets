import NatureBoost from '../atoms/NatureBoost.tsx';
import StatDisplay from '../atoms/StatDisplay.tsx';
import TypeDisplay from '@/components/shared/TypeDisplay.tsx';
import GetNatureChanges from '@/data/stats.ts'
import '../atoms/TypeStyle.css'
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
        <StatDisplay label="Atk" stat={atk} /> {statChanges.attack !== "" && <NatureBoost isBoost = {statChanges.attack === "up"}/>}
        <StatDisplay label="Def" stat={def} /> {statChanges.defense !== "" && <NatureBoost isBoost = {statChanges.defense === "up"}/>}
        <StatDisplay label="SpAtk" stat={spAtk} /> {statChanges["special-attack"] !== "" && <NatureBoost isBoost = {statChanges["special-attack"] === "up"}/>}
        <StatDisplay label="SpDef" stat={spDef} /> {statChanges["special-defense"] !== "" && <NatureBoost isBoost = {statChanges["special-defense"] === "up"}/>}
        <StatDisplay label="Spe" stat={spe} /> {statChanges.speed !== "" && <NatureBoost isBoost = {statChanges.speed === "up"}/>}
        <div className="nature">{nature}</div>
      </div>
      </div>
    </div>
  )
}
