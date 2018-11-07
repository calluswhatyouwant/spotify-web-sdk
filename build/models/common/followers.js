"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Followers = (function () {
    function Followers(json) {
        this.href = json.href;
        this.total = json.total;
    }
    return Followers;
}());
exports.default = Followers;
