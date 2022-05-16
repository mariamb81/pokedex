import React, {useEffect, useState} from 'react'
import { Pokecard } from './Pokecard.js'

export const PokecardDisplay = (props) => {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    console.log(props.pokemonList);
    setPokemonData(props.pokemonList);
  }, [props.pokemonList]);
  const sendPokeDataToParent = (clickData) => {
    // fired when pokecard is clicked
    props.sendPokeDataToHome(clickData);
  }
  const renderPokecards = pokemonData.map((pokemon, index) => 
    <div key={index}>
      <Pokecard
      data={pokemon}
      sendPokeDataToParent={sendPokeDataToParent}
      />
  </div>
  ); 
  return (
    <div className='cards'>
      {
      pokemonData.length !== 0 ? renderPokecards :
      <p>No results</p>
      }
    </div>
  )
}
