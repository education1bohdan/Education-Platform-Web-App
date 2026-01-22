import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Author } from "../../constants";

const initialState: Author[] = [];

const authorsSlice = createSlice({
    name: 'authors',
    initialState,
    reducers: {
        setAuthors: (_state, action: PayloadAction<Author[]>) => {
            return action.payload;
        },
        addAuthor: (state, action: PayloadAction<Author>) => {
            state.push(action.payload);
        },
    },
})

export const authorsReducer = authorsSlice.reducer;
export const { setAuthors, addAuthor } = authorsSlice.actions;
