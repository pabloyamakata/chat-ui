import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSearchActive: false,
    inputValue: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setIsSearchActive: (state) => {
            state.isSearchActive = !state.isSearchActive;
        },
        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        }
    }
});

export const { setIsSearchActive, setInputValue } = searchSlice.actions;
export default searchSlice.reducer;
