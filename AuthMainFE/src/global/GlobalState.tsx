import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "" || null,
}

const GlobalState = createSlice({
    name: "state",
    initialState,
    reducers: {
        createUser: (state : any, { payload } : any) => {
            state.user = payload
        },

        logOut: (state : any) => {
            state.user = null
        },

    }
});

export const { logOut, createUser } = GlobalState.actions

export default GlobalState.reducer