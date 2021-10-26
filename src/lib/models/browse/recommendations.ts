import RecommendationSeed, {
    RawRecommendationSeed,
} from './recommendation-seed';
import TrackSimplified, { RawTrackSimplified } from '../track/track-simplified';

export interface RawRecommendations {
    seeds: RawRecommendationSeed[];
    tracks: RawTrackSimplified[];
}

class Recommendations {
    seeds: RecommendationSeed[];
    tracks: TrackSimplified[];

    constructor(raw: RawRecommendations) {
        this.seeds = raw.seeds.map(
            seedJson => new RecommendationSeed(seedJson)
        );
        this.tracks = raw.tracks.map(
            trackJson => new TrackSimplified(trackJson)
        );
    }
}

export default Recommendations;
