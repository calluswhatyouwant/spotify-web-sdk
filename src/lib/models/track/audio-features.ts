export interface RawAudioFeatures {
    acousticness: number;
    analysis_url: string;
    danceability: number;
    duration_ms: number;
    energy: number;
    id: string;
    instrumentalness: number;
    key: number;
    liveness: number;
    loudness: number;
    mode: number;
    speechiness: number;
    tempo: number;
    time_signature: number;
    track_href: string;
    type: 'audio_features';
    uri: string;
    valence: number;
}

class AudioFeatures {
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

    constructor(raw: RawAudioFeatures) {
        this.acousticness = raw.acousticness;
        this.analysisUrl = raw.analysis_url;
        this.danceability = raw.danceability;
        this.durationMs = raw.duration_ms;
        this.energy = raw.energy;
        this.id = raw.id;
        this.instrumentalness = raw.instrumentalness;
        this.key = raw.key;
        this.liveness = raw.liveness;
        this.loudness = raw.loudness;
        this.mode = raw.mode;
        this.speechiness = raw.speechiness;
        this.tempo = raw.tempo;
        this.timeSignature = raw.time_signature;
        this.trackHref = raw.track_href;
        this.type = raw.type;
        this.uri = raw.uri;
        this.valence = raw.valence;
    }
}

export default AudioFeatures;
