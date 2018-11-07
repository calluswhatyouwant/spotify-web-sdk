"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var external_url_1 = __importDefault(require("../common/external-url"));
var followers_1 = __importDefault(require("../common/followers"));
var image_1 = __importDefault(require("../common/image"));
var PublicUser = (function () {
    function PublicUser(json) {
        this.birthdate = json.birthdate;
        this.country = json.country;
        this.displayName = json.display_name;
        this.email = json.email;
        this.externalUrls = new external_url_1.default(json.external_urls);
        this.followers = new followers_1.default(json.followers);
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map(function (imageJson) { return new image_1.default(imageJson); });
        this.product = json.product;
        this.type = json.type;
        this.uri = json.uri;
    }
    return PublicUser;
}());
exports.default = PublicUser;
