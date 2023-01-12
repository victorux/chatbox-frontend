import axios from "axios";

const BASE_URL = "http://localhost:8800/api"

const currentUser = JSON.parse(window.localStorage.getItem("persist:root"))?.currentUser;
const TOKEN = currentUser && JSON.parse(currentUser)?.accessToken;

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