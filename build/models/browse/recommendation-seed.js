"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RecommendationSeed = (function () {
    function RecommendationSeed(json) {
        this.afterFilteringSize = json.afterFilteringSize;
        this.afterRelinkingSize = json.afterRelinkingSize;
        this.href = json.href;
        this.id = json.id;
        this.initialPoolSize = json.initialPoolSize;
        this.type = json.type;
    }
    return RecommendationSeed;
}());
exports.default = RecommendationSeed;
