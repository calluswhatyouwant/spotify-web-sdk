import axios, { AxiosInstance } from 'axios';

let spotifyToken: string;
let spotifyAxiosInstance: AxiosInstance;

export const login = (token: string) => {
    spotifyToken = token;
    spotifyAxiosInstance = axios.create({
        baseURL: 'https://api.spotify.com/v1',
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const getToken = (): string => {
    if (spotifyToken) return spotifyToken;
    throw new Error('You must log in first');
};

export const getAxiosSpotifyInstance = (): AxiosInstance => {
    if (spotifyAxiosInstance) return spotifyAxiosInstance;
    throw new Error('You must log in first');
};
