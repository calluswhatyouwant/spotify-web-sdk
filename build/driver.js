"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var spotifyToken;
var spotifyAxiosInstance;
exports.init = function (token) {
    spotifyToken = token;
    spotifyAxiosInstance = axios_1.default.create({
        baseURL: 'https://api.spotify.com/v1',
        headers: { Authorization: "Bearer " + token },
    });
};
exports.getToken = function () {
    if (spotifyToken)
        return spotifyToken;
    throw new Error('You must log in first');
};
exports.getAxiosSpotifyInstance = function () {
    if (spotifyAxiosInstance)
        return spotifyAxiosInstance;
    throw new Error('You must log in first');
};
