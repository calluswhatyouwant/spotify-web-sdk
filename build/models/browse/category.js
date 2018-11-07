"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("../common/image"));
var Category = (function () {
    function Category(json) {
        this.href = json.href;
        this.icons = json.icons.map(function (iconJson) { return new image_1.default(iconJson); });
        this.id = json.id;
        this.name = json.name;
    }
    return Category;
}());
exports.default = Category;
