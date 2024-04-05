import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWI1MzJhN2IxMzU3ZmNmYjRiNDhkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjA5OTY2OCwiZXhwIjoxNzA2NTMxNjY4fQ.aaRPiZYr35qMtGuQWCdbpaecEBCSjgpEzQgtkcmdtKw";


export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});
