import axios from "axios";

export const connect = axios.create({
    baseURL: 'https://api.github.com/gists/e1702c1ef26cddd006da989aa47d4f62'
});
