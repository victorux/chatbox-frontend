import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers:{
        loginStart: (state) => {
            state.isFetching = true;

        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        loginFailure: (state) => {
            state.error = true;
            state.currentUser = null;
            state.isFetching = false;
        },
    }
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;


