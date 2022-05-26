import React from 'react'
import { Pokecard } from '../card/Pokecard.js'
import { selectFilteredAllPokemon } from './allPokemonSlice.js';
import { useSelector } from 'react-redux';
export const PokecardDisplay = () => {
  const pokemonData = useSelector(selectFilteredAllPokemon);
  //map pokemon data to create cards
  const renderPokecards = pokemonData.map((pokemon, index) => 
      <Pokecard key={index} pokemon={pokemon}/>
  ); 
  return (
    <div className='cards'>
      {renderPokecards}
    </div>
  )
}
