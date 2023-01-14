import axios from 'axios';

const deezerUrl = process.env.REACT_APP_DEEZER_URL || '';
const authUrl = process.env.REACT_APP_AUTH_URL || '';

export const deezerApi = axios.create({
    baseURL: deezerUrl,
});

export const authApi = axios.create({
    baseURL: authUrl,
});

