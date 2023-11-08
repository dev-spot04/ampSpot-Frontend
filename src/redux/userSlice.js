import { createSlice } from '@reduxjs/toolkit';
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('userState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('userState', serializedState);
    } catch (error) {

    }
};
const userSlice = createSlice({
    name: 'user',
    initialState: loadStateFromLocalStorage() || {
        isAuthenticated: false,
        id: null,
        user: null,
        token: null,
        loading: false,
        role: null,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.id = action.payload.id;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.role;
            saveStateToLocalStorage(state);
        },
        update: (state, action) => {
            state.user = action.payload.user;
            saveStateToLocalStorage(state);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.id = null;
            state.user = null;
            state.token = null;
            state.role = null;
            state.loading = false;
            state.error = null;
            saveStateToLocalStorage(state);
        },
    },
});

export const { login, logout, update } = userSlice.actions;

export default userSlice.reducer;
