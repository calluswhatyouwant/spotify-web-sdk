import axios, { AxiosInstance } from 'axios';

interface SpotifyOptions {
    token: string;
    refreshToken?: string;
    refreshTokenFunction?: (refreshToken?: string) => Promise<string>;
}

let options: SpotifyOptions;
let spotifyAxiosInstance: AxiosInstance;

const setupRefresh = (
    refreshTokenFunction: (refreshToken?: string) => Promise<string>
) => {
    spotifyAxiosInstance.interceptors.response.use(
        response => response,
        error => {
            if (
                error.config &&
                !error.config.__isRetryRequest &&
                error.response &&
                error.response.status === 401
            ) {
                error.config.__isRetryRequest = true;
                return refreshTokenFunction(options.refreshToken).then(
                    token => {
                        error.config.headers.Authorization = `Bearer ${token}`;
                        return axios.request(error.config);
                    }
                );
            }
            return Promise.reject(error);
        }
    );
};

export const init = (config: SpotifyOptions) => {
    options = config;
    spotifyAxiosInstance = axios.create({
        baseURL: 'https://api.spotify.com/v1',
        headers: { Authorization: `Bearer ${options.token}` },
    });
    if (options.refreshTokenFunction) {
        setupRefresh(options.refreshTokenFunction);
    }
};

export const getToken = (): string => {
    if (options) return options.token;
    throw new Error('You must log in first');
};

export const getAxiosSpotifyInstance = (): AxiosInstance => {
    if (spotifyAxiosInstance) return spotifyAxiosInstance;
    throw new Error('You must log in first');
};
