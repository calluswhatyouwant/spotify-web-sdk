"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var artist_simplified_1 = __importDefault(require("../artist/artist-simplified"));
var external_id_1 = __importDefault(require("../common/external-id"));
var external_url_1 = __importDefault(require("../common/external-url"));
var image_1 = __importDefault(require("../common/image"));
var paging_1 = __importDefault(require("../paging/paging"));
var Album = (function () {
    function Album(json) {
        this.albumType = json.album_type;
        this.artists = json.artists.map(function (artistJson) { return new artist_simplified_1.default(artistJson); });
        this.availableMarkets = json.available_markets;
        this.copyrights = json.copyrights;
        this.externalIds = new external_id_1.default(json.external_ids);
        this.externalUrls = new external_url_1.default(json.external_urls);
        this.genres = json.genres;
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map(function (imageJson) { return new image_1.default(imageJson); });
        this.label = json.label;
        this.name = json.name;
        this.popularity = json.popularity;
        this.releaseDate = json.release_date;
        this.releaseDatePrecision = json.release_date_precision;
        this.tracks = new paging_1.default(json.tracks);
        this.type = json.type;
        this.uri = json.uri;
    }
    Object.defineProperty(Album.prototype, "stringArtists", {
        get: function () {
            var artistNames = this.artists.map(function (artist) { return artist.name; });
            return artistNames.join(', ');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "releaseYear", {
        get: function () {
            return this.releaseDate.substring(0, 4);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "imageUrl", {
        get: function () {
            return this.images[0].url;
        },
        enumerable: true,
        configurable: true
    });
    return Album;
}());
exports.default = Album;
