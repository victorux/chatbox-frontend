import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        currentChat: null,
        isFetching: false,
        error: false,
        newConv: null,
        userConversations: null,
        receiver: null,
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
            state.currentChat = null;
        },
        setCurrentChat: (state, action) => {
            state.currentChat = action.payload;
        },
        addNewConversation: (state, action) => {
            state.newConv = action.payload;
        },
        updateUserConversations: (state, action) => {
            state.userConversations = action.payload;
        },
        updateReceiver: (state, action) => {
            state.receiver = action.payload
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
    setCurrentChat,
    addNewConversation,
    updateUserConversations,
    updateReceiver
} = userSlice.actions;
export default userSlice.reducer;


