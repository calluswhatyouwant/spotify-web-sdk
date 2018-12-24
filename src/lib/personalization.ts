import { getAxiosSpotifyInstance } from './driver';
import { Artist, Page, Track } from './models';

export const getCurrentUserTopArtists = async (params?: {
    limit?: number;
    offset?: number;
    range?: string;
}) => {
    const response = await getAxiosSpotifyInstance().get(
        'https://api.spotify.com/v1/me/top/artists',
        { params }
    );
    return new Page<Artist>(response.data, Artist);
};

export const getCurrentUserTopTracks = async (params?: {
    limit?: number;
    offset?: number;
    range?: string;
}) => {
    const response = await getAxiosSpotifyInstance().get(
        'https://api.spotify.com/v1/me/top/tracks',
        { params }
    );
    return new Page<Track>(response.data, Track);
};
