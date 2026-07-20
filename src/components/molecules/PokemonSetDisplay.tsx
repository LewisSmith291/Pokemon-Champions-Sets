import NatureBoost from '../atoms/setDIsplay/NatureBoost.tsx';
import StatDisplay from '../atoms/setDIsplay/StatDisplay.tsx';
import TypeDisplay from '../atoms/setDIsplay/TypeDisplay.tsx';
import '../atoms/SetDisplay/TypeStyle.css'
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
    // "" = no change
    // "up" = increased stat
    // "down" = decreased stat
    let attack = "";
    let defence = "";
    let specialAttack = "";
    let specialDefence = "";
    let speed = "";

    // copies of stats from props so they can just be edited here and apply to all logic branches,
    // rather than having to change stats on each branch
    let hpOut = hp;
    let atkOut = atk;
    let defOut = def;
    let spAtkOut = spAtk
    let spDefOut = spDef;
    let speOut = spe;

    if (nature == "bashful" || nature == "docile" || nature == "hardy" || nature == "quirky" || nature == "serious"){
      // no stat changes
      return(
        <div className="stat-column">
          <StatDisplay label="HP" stat={hpOut} />
          <StatDisplay label="Atk" stat={atkOut} />
          <StatDisplay label="Def" stat={defOut} />
          <StatDisplay label="SpAtk" stat={spAtkOut} />
          <StatDisplay label="SpDef" stat={spDefOut} />
          <StatDisplay label="Spe" stat={speOut} />
          <div className="nature">{nature}</div>
        </div>
      );
    }
    // attack up
    if(nature == "adamant" || nature == "brave" || nature == "lonely" || nature == "naughty"){
      attack = "up";
      if (nature == "adamant") specialAttack = "down";
      if (nature == "brave") speed = "down";
      if (nature == "lonely") defence = "down";
      if (nature == "naughty") specialDefence = "down";
    }
    // defence up
    else if(nature == "bold" || nature == "impish" || nature == "lax" || nature == "relaxed"){
      defence = "up";
      if (nature == "bold") attack = "down";
      if (nature == "impish") specialAttack = "down";
      if (nature == "lax") specialDefence = "down";
      if (nature == "relaxed") speed = "down";
    }
    // special attack up
    else if(nature == "modest" || nature == "mild" || nature == "quiet" || nature == "rash"){
      specialAttack = "up";
      if (nature == "modest") attack = "down";
      if (nature == "mild") defence = "down";
      if (nature == "quiet") speed = "down";
      if (nature == "rash") specialDefence = "down";
    }
    // special defence up
    else if(nature == "calm" || nature == "careful" || nature == "gentle" || nature == "sassy"){
      specialDefence = "up";
      if (nature == "calm") attack = "down";
      if (nature == "careful") specialAttack = "down";
      if (nature == "gentle") defence = "down";
      if (nature == "sassy") speed = "down";
    }
    // speed up
    else if(nature == "hasty" || nature == "jolly" || nature == "naive" || nature == "timid"){
      speed = "up";
      if (nature == "hasty") defence = "down";
      if (nature == "jolly") specialAttack = "down";
      if (nature == "naive") specialDefence = "down";
      if (nature == "timid") attack = "down";
    }
    return(
      <div className="stat-column">
        <StatDisplay label="HP" stat={hpOut} />
        <StatDisplay label="Atk" stat={atkOut} /> {attack !== "" && <NatureBoost isBoost = {attack === "up" ? true : false}/>}
        <StatDisplay label="Def" stat={defOut} /> {defence !== "" && <NatureBoost isBoost = {defence === "up" ? true : false}/>}
        <StatDisplay label="SpAtk" stat={spAtkOut} /> {specialAttack !== "" && <NatureBoost isBoost = {specialAttack === "up" ? true : false}/>}
        <StatDisplay label="SpDef" stat={spDefOut} /> {specialDefence !== "" && <NatureBoost isBoost = {specialDefence === "up" ? true : false}/>}
        <StatDisplay label="Spe" stat={speOut} /> {speed !== "" && <NatureBoost isBoost = {speed === "up" ? true : false}/>}
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
