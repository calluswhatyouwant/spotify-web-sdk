class RecommendationSeed {
    afterFilteringSize: number;

    afterRelinkingSize: number;

    href: string;

    id: string;

    initialPoolSize: number;

    type: 'artist' | 'track' | 'genre';

    constructor(json: any) {
        this.afterFilteringSize = json.afterFilteringSize;
        this.afterRelinkingSize = json.afterRelinkingSize;
        this.href = json.href;
        this.id = json.id;
        this.initialPoolSize = json.initialPoolSize;
        this.type = json.type;
    }
}

export default RecommendationSeed;
