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
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setSprite(data.sprites.other.home.front_default);
        const typeNames = data.types.map((t: { type: { name: string } }) => t.type.name);
        setTyping(typeNames);
        console.log(data.Name)
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, [name]);

  // Outputs StatDisplay elements with corresponding up or down arrows for the stats when altered by the pokemon's nature
  // For example: an "adamant" nature will result in increased attack and decreased special attack
  function outputStatsWithNatureArrows(){
    // These natures dont have any stat changes, so the unaltered statDisplay components can be output with no up or down arrow
    if (nature == "bashful" || nature == "docile" || nature == "hardy" || nature == "quirky" || nature == "serious"){
      // no stat changes
      return(
        <div className="stat-column">
          <StatDisplay label="HP" stat={hp} />
          <StatDisplay label="Atk" stat={atk} />
          <StatDisplay label="Def" stat={def} />
          <StatDisplay label="SpAtk" stat={spAtk} />
          <StatDisplay label="SpDef" stat={spDef} />
          <StatDisplay label="Spe" stat={spe} />
          <div className="nature">{nature}</div>
        </div>
      );
    }

    // Function outputs "" for no change in stat, "up" for increased stat, and "down" for decreased stat. Stores results of atk - spe in array[string]
    const stats = GetNatureChanges(nature);
    // "" = no change
    // "up" = increased stat
    // "down" = decreased stat
    let attack = stats[0];
    let defence = stats[1];
    let specialAttack = stats[2];
    let specialDefence = stats[3];
    let speed = stats[4];

    return(
      <div className="stat-column">
        <StatDisplay label="HP" stat={hp} />
        <StatDisplay label="Atk" stat={atk} /> {attack !== "" && <NatureBoost isBoost = {attack === "up" ? true : false}/>}
        <StatDisplay label="Def" stat={def} /> {defence !== "" && <NatureBoost isBoost = {defence === "up" ? true : false}/>}
        <StatDisplay label="SpAtk" stat={spAtk} /> {specialAttack !== "" && <NatureBoost isBoost = {specialAttack === "up" ? true : false}/>}
        <StatDisplay label="SpDef" stat={spDef} /> {specialDefence !== "" && <NatureBoost isBoost = {specialDefence === "up" ? true : false}/>}
        <StatDisplay label="Spe" stat={spe} /> {speed !== "" && <NatureBoost isBoost = {speed === "up" ? true : false}/>}
        <div className="nature">{nature}</div>
      </div>
    )
  }

  return (
    <div className="set-display">
      <div className="typing-header">
        {typing.length > 0 && <TypeDisplay type={typing[0]}/>}
        {typing.length > 1 && <TypeDisplay type={typing[1]}/>}
      </div>
      <h1 className="name">{name}</h1>
      <div className="about-and-stats">
        <div className="info-column">
          <img className="sprite" src={sprite}/>
          <p className="ability">{ability}</p>
          <p className="item">{item}</p>
        </div>
        {outputStatsWithNatureArrows()}
      </div>
    </div>
  )
}
