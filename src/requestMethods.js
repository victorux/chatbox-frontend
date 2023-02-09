import axios from "axios";

const BASE_URL = "https://chabox-server.onrender.com/api"

const user = JSON.parse(localStorage.getItem("persist:root"))?.currentUser;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 
        'Accept-Version': 1,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8', 
        'token': `Bearer ${TOKEN}`,
    },
});