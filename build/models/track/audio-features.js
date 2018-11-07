"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AudioFeatures = (function () {
    function AudioFeatures(json) {
        this.acousticness = json.acousticness;
        this.analysisUrl = json.analysis_url;
        this.danceability = json.danceability;
        this.durationMs = json.duration_ms;
        this.energy = json.energy;
        this.id = json.id;
        this.instrumentalness = json.instrumentalness;
        this.key = json.key;
        this.liveness = json.liveness;
        this.loudness = json.loudness;
        this.mode = json.mode;
        this.speechiness = json.speechiness;
        this.tempo = json.tempo;
        this.timeSignature = json.time_signature;
        this.trackHref = json.track_href;
        this.type = json.type;
        this.uri = json.uri;
        this.valence = json.valence;
    }
    return AudioFeatures;
}());
exports.default = AudioFeatures;
