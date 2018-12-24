import { getAxiosSpotifyInstance } from './driver';
import { Track, AudioAnalysis, AudioFeatures } from './models';

export const getSeveralTracks = async (
    ids: string[],
    params?: { market?: string }
) => {
    if (ids.length > 50) {
        const exceptionLink =
            'https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-tracks/';
        throw new Error(
            `The maximum number of tracks is 50. See ${exceptionLink} for details`
        );
    }
    const response = await getAxiosSpotifyInstance().get('/tracks', {
        params: { ids: ids.join(','), ...params },
    });
    return response.data.tracks.map((trackJson: any) => new Track(trackJson));
};

export const getTrack = async (id: string, params?: { market?: string }) => {
    const response = await getAxiosSpotifyInstance().get(`/tracks/${id}`, {
        params,
    });
    return new Track(response.data);
};

export const getAudioAnalysisForTrack = async (id: string) => {
    const response = await getAxiosSpotifyInstance().get(
        `/audio-analysis/${id}`
    );
    return new AudioAnalysis(response.data);
};

export const getAudioFeaturesForTrack = async (id: string) => {
    const response = await getAxiosSpotifyInstance().get(
        `/audio-features/${id}`
    );
    return new AudioFeatures(response.data);
};

export const getAudioFeaturesForSeveralTracks = async (ids: string[]) => {
    const params = { ids: ids.join(',') };
    const response = await getAxiosSpotifyInstance().get(`/audio-features`, {
        params,
    });
    return response.data.audio_features.map(
        (audioFeaturesJson: any) => new AudioFeatures(audioFeaturesJson)
    );
};
