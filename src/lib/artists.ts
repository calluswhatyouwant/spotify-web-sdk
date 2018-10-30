import { getAxiosSpotifyInstance } from './driver';
import Artist from './models/artist/artist';

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
