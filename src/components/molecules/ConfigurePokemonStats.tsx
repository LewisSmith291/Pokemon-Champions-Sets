import {useEffect, useState} from 'react'

interface Props{
  species: string;
}

export default function ConfigurePokemonStats({species}: Props) {

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${species}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Name)
      })
      .catch((error) => {
        console.log('There was an ERROR: ', error);
      });
  }, [species]);

  

  return (
    <div>
      <div>atk</div>
      
    </div>
  )
}