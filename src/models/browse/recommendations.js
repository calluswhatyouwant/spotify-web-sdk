/* @flow */

import RecommendationSeed from './recommendation-seed';
import TrackSimplified from '../track/track-simplified';

class ExternalId {
    seeds: Array<RecommendationSeed>;

    tracks: Array<TrackSimplified>;

    constructor(json: any) {
        this.seeds = json.seeds
            .map(seedJson => new RecommendationSeed(seedJson));
        this.tracks = json.tracks
            .map(trackJson => new TrackSimplified(trackJson));
    }
}

export default ExternalId;
