import React from 'react'
import '../styles/SearchBar.css';
import {BsSearch} from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm } from './searchTermSlice';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice';
import CloseButton from 'react-bootstrap/CloseButton'

export const SearchBar = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleChange = ({target}) => {
    dispatch(setSearchTerm(target.value));
  }
  const handleClear = () => {
    dispatch(clearSearchTerm());
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
            value={searchTerm}
            onChange={handleChange}
            />
            <div className={'close'}>
              <CloseButton 
              onClick={handleClear}
              />
            </div>

          </div>
      
    </div>
  )
}