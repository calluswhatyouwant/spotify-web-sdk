declare class AudioFeatures {
    acousticness: number;
    analysisUrl: string;
    danceability: number;
    durationMs: number;
    energy: number;
    id: string;
    instrumentalness: number;
    key: number;
    liveness: number;
    loudness: number;
    mode: number;
    speechiness: number;
    tempo: number;
    timeSignature: number;
    trackHref: string;
    type: 'audio_features';
    uri: string;
    valence: number;
    constructor(json: any);
}
export default AudioFeatures;
