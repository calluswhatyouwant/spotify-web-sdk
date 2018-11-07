"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var recommendation_seed_1 = __importDefault(require("./recommendation-seed"));
var track_simplified_1 = __importDefault(require("../track/track-simplified"));
var ExternalId = (function () {
    function ExternalId(json) {
        this.seeds = json.seeds.map(function (seedJson) { return new recommendation_seed_1.default(seedJson); });
        this.tracks = json.tracks.map(function (trackJson) { return new track_simplified_1.default(trackJson); });
    }
    return ExternalId;
}());
exports.default = ExternalId;
