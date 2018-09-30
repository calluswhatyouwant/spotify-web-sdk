import { getAxiosSpotifyInstance } from './driver';

export const getSeveralTracks = async (ids: Array<number | string>) => {
    const params = { params: { ids } };
    const response = await getAxiosSpotifyInstance()
        .get('/tracks', params);
    return response.data.tracks;
};

export const getTrack = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance()
        .get(`/tracks/${id}`);
    return response.data;
};
