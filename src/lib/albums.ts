import { getAxiosSpotifyInstance } from './driver';
import { Album, TrackSimplified, Page } from './models';

export const getAlbum = async (id: string, market?: string): Promise<Album> => {
    const params = { params: { market } };
    const response = await getAxiosSpotifyInstance().get(
        `/albums/${id}`,
        params
    );

    return new Album(response.data);
};

export const getSeveralAlbums = async (
    ids: string[],
    market?: string
): Promise<Album[]> => {
    if (ids.length > 20) {
        const exceptionLink =
            'https://developer.spotify.com/documentation/web-api/reference/albums/get-several-albums/';
        throw new Error(
            `The maximum number of albums is 20. See ${exceptionLink} for details`
        );
    }
    const params = { params: { market, ids: ids.join(',') } };
    const response = await getAxiosSpotifyInstance().get('/albums', params);

    return response.data.albums.map((albumJson: any) => new Album(albumJson));
};

export const getAlbumTracks = async (
    id: string,
    params?: {
        offset?: number;
        limit?: number;
        market?: string;
    }
): Promise<Page<TrackSimplified>> => {
    const response = await getAxiosSpotifyInstance().get(
        `/albums/${id}/tracks`,
        { params }
    );
    return new Page<TrackSimplified>(response.data, TrackSimplified);
};
