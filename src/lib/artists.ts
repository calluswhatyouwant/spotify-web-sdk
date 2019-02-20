import { getAxiosSpotifyInstance } from './driver';
import { Artist, Track, Page, AlbumSimplified } from './models';

export const getArtist = async (id: string): Promise<Artist> => {
    const response = await getAxiosSpotifyInstance().get(`/artists/${id}`);
    return new Artist(response.data);
};

export const getSeveralArtists = async (ids: string[]): Promise<Artist[]> => {
    if (ids.length > 50) {
        const exceptionLink =
            'https://developer.spotify.com/documentation/web-api/reference/artists/get-several-artists/';
        throw new Error(
            `The maximum number of artists is 50. See ${exceptionLink} for details`
        );
    }
    const params = { params: { ids } };
    const response = await getAxiosSpotifyInstance().get('/artists', params);
    return response.data.artists.map(
        (artistJson: any) => new Artist(artistJson)
    );
};

export const getArtistAlbums = async (
    id: string,
    params?: {
        offset?: number;
        limit?: number;
        includeGroups?: string[];
        market?: string;
    }
): Promise<Page<AlbumSimplified>> => {
    const config = {
        params: {
            ...params,
            include_groups:
                params && params.includeGroups
                    ? params.includeGroups.join(',')
                    : '',
        },
    };
    const response = await getAxiosSpotifyInstance().get(
        `/artists/${id}/albums`,
        config
    );
    return new Page<AlbumSimplified>(response.data, AlbumSimplified);
};

export const getArtistRelatedArtists = async (
    id: string
): Promise<Artist[]> => {
    const response = await getAxiosSpotifyInstance().get(
        `/artists/${id}/related-artists`
    );
    return response.data.artists.map(
        (artistJson: any) => new Artist(artistJson)
    );
};

export const getArtistTopTracks = async (
    id: string,
    market: string
): Promise<Track[]> => {
    const params = { params: { market } };
    const response = await getAxiosSpotifyInstance().get(
        `/artists/${id}/top-tracks`,
        params
    );
    return response.data.tracks.map((trackJson: any) => new Track(trackJson));
};
