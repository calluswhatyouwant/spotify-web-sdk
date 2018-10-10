import RecommendationSeed from './recommendation-seed';
import TrackSimplified from '../track/track-simplified';
declare class ExternalId {
    seeds: Array<RecommendationSeed>;
    tracks: Array<TrackSimplified>;
    constructor(json: any);
}
export default ExternalId;
