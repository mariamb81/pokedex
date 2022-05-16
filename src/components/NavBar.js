import React from 'react'
import styled from 'styled-components'
import './styles/NavBar.css';
import { BsFillBookmarkStarFill, BsFillInfoSquareFill } from "react-icons/bs";

import Pokeball from '../resources/icons8-pokeball-50.png'

export const NavBar = () => {
  return (
        <Container>
            <ContainerLogo>
                <Logo src="https://fontmeme.com/permalink/220426/c5342c47847318ee4b4d515a7e94c776.png" alt="pokedex-icon" border="0"/>
            </ContainerLogo>
            <div className='links'>

                <a href='#'>
                    <div className='idv saved'>
                        <BsFillBookmarkStarFill className='icon'/>
                        <p>Saved</p>
                    </div>
                </a>
                <a href='#'>
                    <div className='idv info'>
                        <BsFillInfoSquareFill className='icon'/>
                        <p>About</p>
                    </div>
                </a>
                <a href='#'>
                    <div className='idv home'>
                        <img className='icon' src={Pokeball}/>    
                        <p>Home</p>
                    </div>
                </a>
            </div>
        </Container>
  )
}
const Container = styled.div `
    background-color: #FE2A36;
    position: absolute
    width: 100%;
    left: 0px;
    bottom: 0px;
`
const ContainerLogo = styled.div `
    position: absolute;
    width: 195px;
    height: 65px;
    top: 8px;
    left: 29px;
`
const Logo = styled.img `
    max-height: 80%;
    width: auto;
`