"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var track_1 = __importDefault(require("../track/track"));
var SavedTrack = (function () {
    function SavedTrack(json) {
        this.addedAt = json.added_at;
        this.track = new track_1.default(json.track);
    }
    return SavedTrack;
}());
exports.default = SavedTrack;
