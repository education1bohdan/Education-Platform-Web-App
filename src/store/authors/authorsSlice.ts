import { createSlice } from "@reduxjs/toolkit";
import { Author } from "../../constants"

const initialState: Author[] = [];

const authorsSlice = createSlice({
    name: 'authors',
    initialState,
    reducers: {
        setAuthors: (_state, action) => {
            return action.payload;
        },
        addAuthors: (state, action) => {
            state.push(...action.payload);
        },
    },
})

export const authorsReducer = authorsSlice.reducer;
export const { setAuthors, addAuthors } = authorsSlice.actions;
