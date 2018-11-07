"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var artist_simplified_1 = __importDefault(require("../artist/artist-simplified"));
var external_url_1 = __importDefault(require("../common/external-url"));
var TrackSimplified = (function () {
    function TrackSimplified(json) {
        this.artists = json.artists.map(function (artistJson) { return new artist_simplified_1.default(artistJson); });
        this.availableMarkets = json.available_markets;
        this.discNumber = json.disc_number;
        this.durationMs = json.duration_ms;
        this.explicit = json.explicit;
        this.externalUrls = new external_url_1.default(json.external_urls);
        this.href = json.href;
        this.id = json.id;
        this.isPlayable = json.is_playable;
        this.linkedFrom = json.linked_from;
        this.restrictions = json.restrictions;
        this.name = json.name;
        this.previewUrl = json.preview_url;
        this.trackNumber = json.track_number;
        this.type = json.type;
        this.uri = json.uri;
        this.isLocal = json.isLocal;
    }
    Object.defineProperty(TrackSimplified.prototype, "stringArtists", {
        get: function () {
            var artistNames = this.artists.map(function (artist) { return artist.name; });
            return artistNames.join(', ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackSimplified.prototype, "length", {
        get: function () {
            var minutes = Math.floor(this.durationMs / 60000);
            var seconds = Math.floor((this.durationMs % 60000) / 1000);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        },
        enumerable: true,
        configurable: true
    });
    return TrackSimplified;
}());
exports.default = TrackSimplified;
