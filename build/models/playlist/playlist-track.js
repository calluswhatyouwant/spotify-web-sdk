"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var track_1 = __importDefault(require("../track/track"));
var user_public_1 = __importDefault(require("../user/user-public"));
var PlaylistTrack = (function () {
    function PlaylistTrack(json) {
        this.addedAt = json.added_at;
        this.addedBy = new user_public_1.default(json.added_by);
        this.isLocal = json.is_local;
        this.track = new track_1.default(json.track);
    }
    return PlaylistTrack;
}());
exports.default = PlaylistTrack;
