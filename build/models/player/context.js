"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var external_url_1 = __importDefault(require("../common/external-url"));
var Context = (function () {
    function Context(json) {
        this.type = json.type;
        this.href = json.href;
        this.externalUrls = new external_url_1.default(json.external_urls);
        this.uri = json.uri;
    }
    return Context;
}());
exports.default = Context;
