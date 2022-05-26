import React from 'react';
import styles from '../styles/Pokecard.module.css';
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
        <div className={styles.card}>
            <button
            onClick={handleClick}
            >
                <div>
                    <img src={pokemonData.photo} alt={pokemonData.name}/>
                    <div className={styles.cardText}>
                        <p className='card-name'>
                            {pokemonData.name}
                        </p>
                        <p className={styles.cardID}>#{pokemonData.id}</p>
                    </div>
                </div>
            </button>
        </div>
      );
} 