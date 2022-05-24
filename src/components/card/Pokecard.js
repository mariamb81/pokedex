import React from 'react';
import '../styles/Pokecard.css';
import { useDispatch } from 'react-redux';
import { setInfoModal, setInfoModalOpen } from '../infomodal/infoModalSlice';

export const Pokecard = (props) => {
    const pokemonData = props.pokemon;
    const dispatch = useDispatch();

    const handleClick = () => {
        //open pokemodal
        //add pokemon to infoModal slice
        dispatch(setInfoModal(pokemonData));
        dispatch(setInfoModalOpen());
    }
    return (
        <div className='container'>
            <a
            onClick={handleClick}
            >
                <div className='card'>
                    <img src={pokemonData.photo} alt={pokemonData.name}/>
                    <div className='card-text'>
                        <p className='card-name'>
                            {pokemonData.name}
                        </p>
                        <p className='card-id'> #{pokemonData.id}</p>
                    </div>
                </div>
            </a>
        </div>
      );
} 