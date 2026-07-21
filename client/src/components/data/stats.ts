export default function GetNatureChanges(nature: string): string[]{
  // "" = no change
  // "up" = increased stat
  // "down" = decreased stat
  let attack = "";
  let defence = "";
  let specialAttack = "";
  let specialDefence = "";
  let speed = "";

  if (nature == "bashful" || nature == "docile" || nature == "hardy" || nature == "quirky" || nature == "serious"){
    // no stat changes
    return ["", "", "", "", ""];
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
  return [attack, defence, specialAttack, specialDefence, speed]
}

export const STAT_LIST = [
  "hp",
  "attack",
  "defence",
  "specialAttack",
  "specialDefence",
  "speed"
]