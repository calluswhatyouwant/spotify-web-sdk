/* @flow */

import axios from 'axios';
import type { Axios } from 'axios';

let spotifyToken;
let spotifyAxiosInstance;

export const login = (token: string) => {
    spotifyToken = token;
    spotifyAxiosInstance = axios.create({
        baseURL: 'https://api.spotify.com/v1',
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const getToken = () : string => {
    if (spotifyToken) return spotifyToken;
    throw new Error('You must log in first');
};

export const getAxiosSpotifyInstance = () : Axios => {
    if (spotifyAxiosInstance) return spotifyAxiosInstance;
    throw new Error('You must log in first');
};
