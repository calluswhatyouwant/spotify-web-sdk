"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paging = (function () {
    function Paging(json) {
        this.href = json.href;
        this.items = json.items;
        this.limit = json.limit;
        this.next = json.next;
        this.offset = json.offset;
        this.previous = json.previous;
        this.total = json.total;
    }
    return Paging;
}());
exports.default = Paging;
