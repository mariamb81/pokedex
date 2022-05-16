import React from 'react';
import './styles/Pokecard.css';
import styled from 'styled-components'
import { logo } from '../resources/loading.gif'
export const Pokecard = (props) => {
  const pokemonData = props.data;
    return (
        <div className='container'>
            <a
            onClick={() => {
              props.sendPokeDataToParent(pokemonData);
            }}
            >
                <div className='card'>
                    <img src={pokemonData.photo}/>
                    <div className='card-text'>
                        <p className='card-name'>
                            {pokemonData.formatted_name}
                        </p>
                        <p className='card-id'> #{pokemonData.id}</p>
                    </div>
                </div>
            </a>
        </div>
      );
} 