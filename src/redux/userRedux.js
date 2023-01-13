import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        currentChat: null,
        isFetching: false,
        error: false,
    },
    reducers:{
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser =  action.payload;
        },
        loginFailure: (state) => {
            state.error = true;
            state.currentUser = null;
            state.isFetching = false;
        },

        updateUserStart: (state) => {
            state.isFetching = true;
        },
        updateUserSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.currentUser = {...state.currentUser, ...action.payload}
        },
        updateUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        updatePasswordSuccess: (state) => {
            state.isFetching = false;
            state.error = false;
        },
        userLogOut: (state) => {
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
            state.activeChat = null;
        },
        setCurrentChat: (state, action) => {
            state.currentChat = action.payload;
        }
    }
});

export const { 
    loginStart, 
    loginSuccess, 
    loginFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    userLogOut,
    updatePasswordSuccess,
    setCurrentChat
} = userSlice.actions;
export default userSlice.reducer;


