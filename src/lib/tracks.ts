import { getAxiosSpotifyInstance } from './driver';
import { Track, AudioAnalysis, AudioFeatures } from './models';
import { RawAudioFeatures } from './models/track/audio-features';
import { RawTrack } from './models/track/track';

export const getSeveralTracks = async (
    ids: string[],
    params?: { market?: string }
): Promise<Track[]> => {
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
    return response.data.tracks.map(
        (trackJson: RawTrack) => new Track(trackJson)
    );
};

export const getTrack = async (
    id: string,
    params?: { market?: string }
): Promise<Track> => {
    const response = await getAxiosSpotifyInstance().get(`/tracks/${id}`, {
        params,
    });
    return new Track(response.data);
};

export const getAudioAnalysisForTrack = async (
    id: string
): Promise<AudioAnalysis> => {
    const response = await getAxiosSpotifyInstance().get(
        `/audio-analysis/${id}`
    );
    return new AudioAnalysis(response.data);
};

export const getAudioFeaturesForTrack = async (
    id: string
): Promise<AudioFeatures> => {
    const response = await getAxiosSpotifyInstance().get(
        `/audio-features/${id}`
    );
    return new AudioFeatures(response.data);
};

export const getAudioFeaturesForSeveralTracks = async (
    ids: string[]
): Promise<AudioFeatures> => {
    const config = { params: { ids: ids.join(',') } };
    const response = await getAxiosSpotifyInstance().get(
        `/audio-features`,
        config
    );
    return response.data.audio_features.map(
        (audioFeaturesJson: RawAudioFeatures) =>
            new AudioFeatures(audioFeaturesJson)
    );
};
