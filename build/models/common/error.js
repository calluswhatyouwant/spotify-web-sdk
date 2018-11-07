"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error = (function () {
    function Error(json) {
        this.status = json.status;
        this.message = json.message;
    }
    return Error;
}());
exports.default = Error;
