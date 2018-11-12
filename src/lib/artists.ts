import { getAxiosSpotifyInstance } from './driver';
import Artist from './models/artist/artist';
import Track from './models/track/track';
import Page from './models/paging/page';
import AlbumSimplified from './models/album/album-simplified';

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
    offset = 0,
    limit = 20
): Promise<Page<AlbumSimplified>> => {
    const params = { params: { offset, limit } };
    const response = await getAxiosSpotifyInstance().get(
        `/artists/${id}/albums`,
        params
    );
    return new Page<AlbumSimplified>(response.data, AlbumSimplified);
};

export const getRelatedArtists = async (id: string): Promise<Artist[]> => {
    const response = await getAxiosSpotifyInstance().get(
        `/artists/${id}/related-artists`
    );
    return response.data.artists.map(
        (artistJson: any) => new Artist(artistJson)
    );
};

export const getArtistTopTracks = async (id: string): Promise<Track> => {
    const response = await getAxiosSpotifyInstance().get(
        `/artists/${id}/top-tracks`
    );
    return response.data.tracks.map((trackJson: any) => new Track(trackJson));
};
