import { getAxiosSpotifyInstance } from './driver';
import Album from './models/album/album';
import TrackSimplified from './models/track/track-simplified';

export const getAlbum = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(`/albums/${id}`);
    return new Album(response.data);
};

export const getSeveralAlbums = async (ids: number[] | string[]) => {
    if (ids.length > 20) {
        const exceptionLink =
            'https://developer.spotify.com/documentation/web-api/reference/albums/get-several-albums/';
        throw `The maximum number of albums is 20. See ${exceptionLink} for details`;
    }
    const params = { params: { ids } };
    const response = await getAxiosSpotifyInstance().get('/albums', params);
    return response.data.artists.map((albumJson: any) => new Album(albumJson));
};

export const getAlbumTracks = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(
        `/albums/${id}/tracks`
    );
    return response.data.items.map(
        (trackJson: any) => new TrackSimplified(trackJson)
    );
};
