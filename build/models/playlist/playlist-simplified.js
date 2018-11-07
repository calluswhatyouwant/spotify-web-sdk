"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var external_url_1 = __importDefault(require("../common/external-url"));
var image_1 = __importDefault(require("../common/image"));
var user_public_1 = __importDefault(require("../user/user-public"));
var Playlist = (function () {
    function Playlist(json) {
        this.collaborative = json.collaborative;
        this.externalUrls = new external_url_1.default(json.external_urls);
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map(function (imageJson) { return new image_1.default(imageJson); });
        this.name = json.name;
        this.owner = new user_public_1.default(json.owner);
        this.public = json.public;
        this.snapshotId = json.snapshot_id;
        this.tracks = json.tracks;
        this.type = json.type;
        this.uri = json.uri;
    }
    Object.defineProperty(Playlist.prototype, "totalTracks", {
        get: function () {
            return this.tracks.total;
        },
        enumerable: true,
        configurable: true
    });
    return Playlist;
}());
exports.default = Playlist;
