"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cursor_1 = __importDefault(require("./cursor"));
var CursorPaging = (function () {
    function CursorPaging(json) {
        this.href = json.href;
        this.items = json.items;
        this.limit = json.limit;
        this.next = json.next;
        this.cursors = new cursor_1.default(json.cursors);
        this.total = json.total;
    }
    return CursorPaging;
}());
exports.default = CursorPaging;
