import { configureStore } from "@reduxjs/toolkit";
//reducers
import allPokemonReducer from './components/allPokemon/allPokemonSlice'
import searchTermReducer from './components/searchbar/searchTermSlice'
import infoModalReducer from './components/infomodal/infoModalSlice'

export const store = configureStore({
    reducer: {
        allPokemon: allPokemonReducer,
        searchTerm: searchTermReducer,
        infoModal: infoModalReducer,
    },
});
