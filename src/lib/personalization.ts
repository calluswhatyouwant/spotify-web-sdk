import { getAxiosSpotifyInstance } from './driver';
import { Artist, Page, Track } from './models';

type Range = 'short_term' | 'medium_term' | 'long_term';

export const getCurrentUserTopArtists = async (params?: {
    limit?: number;
    offset?: number;
    range?: Range;
}): Promise<Page<Artist>> => {
    const response = await getAxiosSpotifyInstance().get(
        'https://api.spotify.com/v1/me/top/artists',
        {
            params: {
                limit: params?.limit,
                offset: params?.offset,
                time_range: params?.range,
            }
        }
    );
    return new Page<Artist>(response.data, Artist);
};

export const getCurrentUserTopTracks = async (params?: {
    limit?: number;
    offset?: number;
    range?: Range;
}): Promise<Page<Track>> => {
    const response = await getAxiosSpotifyInstance().get(
        'https://api.spotify.com/v1/me/top/tracks',
        {
            params: {
                limit: params?.limit,
                offset: params?.offset,
                time_range: params?.range,
            },
        }
    );
    return new Page<Track>(response.data, Track);
};
