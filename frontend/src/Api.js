import axios from 'axios';

const deezerUrl = process.env.DEEZER_URL || '';
const corsUrl = process.env.CORS_URL || '';
console.log(deezerUrl)
// const BASEURL = `${corsUrl}${deezerUrl}`;
const api = axios.create({
    baseURL: 'https://api.deezer.com',
});

export default api;