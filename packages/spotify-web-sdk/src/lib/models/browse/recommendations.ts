import RecommendationSeed from './recommendation-seed';
import TrackSimplified from '../track/track-simplified';

class Recommendations {
    seeds: RecommendationSeed[];

    tracks: TrackSimplified[];

    constructor(json: any) {
        this.seeds = json.seeds.map(
            (seedJson: any) => new RecommendationSeed(seedJson)
        );
        this.tracks = json.tracks.map(
            (trackJson: any) => new TrackSimplified(trackJson)
        );
    }
}

export default Recommendations;
