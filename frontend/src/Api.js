import axios from 'axios';

const deezerUrl = process.env.REACT_APP_DEEZER_URL || '';

console.log(deezerUrl)
// const BASEURL = `${corsUrl}${deezerUrl}`;
const api = axios.create({
    baseURL: deezerUrl,
});

export default api;