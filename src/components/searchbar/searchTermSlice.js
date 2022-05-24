import { createSlice } from "@reduxjs/toolkit";

//slice to store search term entered by user
const initialState = '';
export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: initialState,
    reducers: {
        setSearchTerm: (state, action) => action.payload,
        clearSearchTerm: (state, action) => '',
    }
});

//action functions
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
//selector functions
export const selectSearchTerm = state => state.searchTerm;

export default searchTermSlice.reducer;
