import React, { useState } from 'react'
import './styles/SearchBar.css';
import {BsSearch} from "react-icons/bs";

export const SearchBar = (props) => {
  const [userInput, setUserInput] = useState('');
  const handleChange = ({target}) => {
    let text = target.value.toLowerCase();
    setUserInput(text);
    props.sendQueryToHome(text);
  }
  return (
    <div className='search-bar'>
      <label>
          Search Pokemon by Name:
        </label>
          <div className='box'>
            <BsSearch className='icon'/>
            <input 
            type="text"
            className='query'
            placeholder='Search:'
            value={userInput}
            onChange={handleChange}
            />
          </div>
      
    </div>
  )
}