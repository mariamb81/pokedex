import React from 'react'
import styles from '../styles/NavBar.module.css';
// import { BsFillBookmarkStarFill, BsFillInfoSquareFill } from "react-icons/bs";
// import Pokeball from '../../resources/icons8-pokeball-50.png'

export const NavBar = () => {
  return (
        <div className={styles.navContainer}>
            <div className={styles.navLogo}>
                <img src="https://fontmeme.com/permalink/220426/c5342c47847318ee4b4d515a7e94c776.png" alt="pokedex-icon" border="0"/>
            </div>
            {/* {<div className='links'>
                <div className='idv saved'>
                    <BsFillBookmarkStarFill className='icon'/>
                    <p>Saved</p>
                </div>
                <div className='idv info'>
                    <BsFillInfoSquareFill className='icon'/>
                    <p>About</p>
                </div>
                <div className='idv home'>
                    <img className='icon' alt="pokeball logo" src={Pokeball}/>    
                    <p>Home</p>
                </div>
            </div>} */}
        </div>
  )
}
