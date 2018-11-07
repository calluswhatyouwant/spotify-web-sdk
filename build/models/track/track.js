"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var album_simplified_1 = __importDefault(require("../album/album-simplified"));
var artist_simplified_1 = __importDefault(require("../artist/artist-simplified"));
var external_id_1 = __importDefault(require("../common/external-id"));
var external_url_1 = __importDefault(require("../common/external-url"));
var Track = (function () {
    function Track(json) {
        this.album = new album_simplified_1.default(json.album);
        this.artists = json.artists.map(function (artistJson) { return new artist_simplified_1.default(artistJson); });
        this.availableMarkets = json.available_markets;
        this.discNumber = json.disc_number;
        this.durationMs = json.duration_ms;
        this.explicit = json.explicit;
        this.externalIds = new external_id_1.default(json.external_ids);
        this.externalUrls = new external_url_1.default(json.external_urls);
        this.href = json.href;
        this.id = json.id;
        this.isPlayable = json.is_playable;
        this.linkedFrom = json.linked_from;
        this.restrictions = json.restrictions;
        this.name = json.name;
        this.popularity = json.popularity;
        this.previewUrl = json.preview_url;
        this.trackNumber = json.track_number;
        this.type = json.type;
        this.uri = json.uri;
        this.isLocal = json.isLocal;
    }
    Object.defineProperty(Track.prototype, "albumName", {
        get: function () {
            return this.album.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "stringArtists", {
        get: function () {
            var artistNames = this.artists.map(function (artist) { return artist.name; });
            return artistNames.join(', ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "releaseYear", {
        get: function () {
            return this.album.releaseYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Track.prototype, "formattedDuration", {
        get: function () {
            var minutes = Math.floor(this.durationMs / 60000);
            var seconds = Math.floor((this.durationMs % 60000) / 1000);
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        },
        enumerable: true,
        configurable: true
    });
    return Track;
}());
exports.default = Track;
