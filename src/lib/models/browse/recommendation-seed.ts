export interface RawRecommendationSeed {
    afterFilteringSize: number;
    afterRelinkingSize: number;
    href: string;
    id: string;
    initialPoolSize: number;
    type: 'artist' | 'track' | 'genre';
}

class RecommendationSeed {
    afterFilteringSize: number;
    afterRelinkingSize: number;
    href: string;
    id: string;
    initialPoolSize: number;
    type: 'artist' | 'track' | 'genre';

    constructor(raw: RawRecommendationSeed) {
        this.afterFilteringSize = raw.afterFilteringSize;
        this.afterRelinkingSize = raw.afterRelinkingSize;
        this.href = raw.href;
        this.id = raw.id;
        this.initialPoolSize = raw.initialPoolSize;
        this.type = raw.type;
    }
}

export default RecommendationSeed;
