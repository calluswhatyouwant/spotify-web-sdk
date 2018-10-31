import { getAxiosSpotifyInstance } from './driver';
import Artist from './models/artist/artist';
import Album from './models/album/album';
import Track from './models/track/track';

export const getArtist = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(`/artists/${id}`);
    return new Artist(response.data);
};

export const getSeveralArtists = async (ids: number[] | string[]) => {
    if (ids.length > 50) {
        const exceptionLink =
            'https://developer.spotify.com/documentation/web-api/reference/artists/get-several-artists/';
        throw `The maximum number of artists is 50. See ${exceptionLink} for details`;
    }
    const params = { params: { ids } };
    const response = await getAxiosSpotifyInstance().get('/artists', params);
    return response.data.artists.map(
        (artistJson: any) => new Artist(artistJson)
    );
};

export const getArtistAlbums = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(
        `/artists/${id}/albums`
    );
    return response.items.map(albumJson => new Album(albumJson));
};

export const getRelatedArtists = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(
        `/artists/${id}/related-artists`
    );
    return response.artists.map(artistJson => new Artist(artistJson));
};

export const getArtistTopTracks = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(
        `/artists/${id}/top-tracks`
    );
    return response.tracks.map(trackJson => new Track(trackJson));
};
