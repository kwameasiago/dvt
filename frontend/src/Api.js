import axios from 'axios';

const deezerUrl = process.env.REACT_APP_DEEZER_URL || '';
const authUrl = process.env.REACT_APP_AUTH_URL || '';

console.log(deezerUrl)
// const BASEURL = `${corsUrl}${deezerUrl}`;
export const deezerApi = axios.create({
    baseURL: deezerUrl,
});

export const authApi = axios.create({
    baseURL: authUrl,
});

