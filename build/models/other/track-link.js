"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var external_url_1 = __importDefault(require("../common/external-url"));
var TrackLink = (function () {
    function TrackLink(json) {
        this.externalUrls = new external_url_1.default(json.external_urls);
        this.href = json.href;
        this.id = json.id;
        this.type = json.type;
        this.uri = json.uri;
    }
    return TrackLink;
}());
exports.default = TrackLink;
