import { MEGA_STONES } from "./itemData";

export default function GetMegaStones(name:"string"):string[]{
  let stones:string[] = [];
  // Name that gets edited to find all mega stones
  let currentName:string = name;

  // Go through mega stone list with the name, and if the name doesnt match on any, remove the last letter
  for (let i = 0; i < currentName.length; i++){
    // Check all megas for this name
    MEGA_STONES.forEach(stone => {
      if (stone.includes(currentName)){
        stones.push(stone);
      }
    });
    // If no stone is found, slice off the last character of name
    if (stones.length < 1){
      currentName = currentName.slice(0,-1);
    }
    else break;
  }
  return stones;
} 