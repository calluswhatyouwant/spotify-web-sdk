"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var album_1 = __importDefault(require("../album/album"));
var SavedAlbum = (function () {
    function SavedAlbum(json) {
        this.addedAt = json.added_at;
        this.album = new album_1.default(json.album);
    }
    return SavedAlbum;
}());
exports.default = SavedAlbum;
