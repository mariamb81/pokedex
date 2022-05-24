import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../searchbar/searchTermSlice";
import { getDataByName } from "../../helpers/utilities";
import { getPokemonProms } from '../../helpers/handleQuery'

//async thunk function to load data
export const loadData = createAsyncThunk(
    'pokemonData/loadData',
    async () => {
        const promArray = await getPokemonProms();
        const data = await Promise.all(promArray);
        return data;
    }
);
//slice to store all pokemon data from API
const initialState = {
    pokemon: [],
    isLoading: false,
    hasError: false
};
export const allPokemonSlice = createSlice({
    name: 'pokemonData',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [loadData.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadData.fulfilled]: (state, action) => {
            state.pokemon = action.payload;
            // console.log('pokemon data loaded');
            // console.log(state.pokemon);
            state.isLoading = false;
            state.hasError = false;
        },
        [loadData.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        },
    }
});

//selector functions
export const selectAllPokemon = state => state.allPokemon.pokemon;

//filter pokemon results based on search term 
export const selectFilteredAllPokemon = state => {
    const allPokemon = selectAllPokemon(state);
    const searchTerm = selectSearchTerm(state);
    return getDataByName(searchTerm, allPokemon);
}

export default allPokemonSlice.reducer;