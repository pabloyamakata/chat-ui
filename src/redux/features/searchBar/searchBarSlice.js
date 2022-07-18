import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSearchActive: false
};

export const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        setIsSearchActive: (state) => {
            state.isSearchActive = !state.isSearchActive;
        }
    }
});

export const { setIsSearchActive } = searchBarSlice.actions;
export default searchBarSlice.reducer;
