import { createSlice } from "@reduxjs/toolkit";

interface UserInitialState {
    isAuth: boolean;
    name: string;
    email: string;
    token: string;
}

const initialState: UserInitialState = {
    isAuth: false,
    name: '',
    email: '',
    token: localStorage.getItem('token') || '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('user', action.payload.name);
        },
        logout: (state) => {
            state.isAuth = false;
            state.name = '';
            state.email = '';
            state.token = '';
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
    }
})

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
