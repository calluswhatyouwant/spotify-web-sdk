import { getAxiosSpotifyInstance } from './driver';
import Track from './models/track/track';

export const getSeveralTracks = async (ids: Array<number | string>) => {
    const params = { params: { ids } };
    const response = await getAxiosSpotifyInstance()
        .get('/tracks', params);
    return response.data.tracks.map((trackJson: any) => new Track(trackJson));
};

export const getTrack = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance()
        .get(`/tracks/${id}`);
    return new Track(response.data);
};
