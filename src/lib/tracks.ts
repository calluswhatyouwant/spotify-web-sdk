import { getAxiosSpotifyInstance } from './driver';
import Track from './models/track/track';

export const getSeveralTracks = async (ids: number[] | string[]) => {
    if (ids.length > 50) {
        const exceptionLink =
            'https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-tracks/';
        throw `The maximum number of tracks is 50. See ${exceptionLink} for details`;
    }
    const params = { params: { ids } };
    const response = await getAxiosSpotifyInstance().get('/tracks', params);
    return response.data.tracks.map((trackJson: any) => new Track(trackJson));
};

export const getTrack = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(`/tracks/${id}`);
    return new Track(response.data);
};
