import EpisodeSimplified, { RawEpisodeSimplified } from './episode-simplified';
import ShowSimplified, { RawShowSimplified } from '../show/show-simplified';

export interface RawEpisode extends RawEpisodeSimplified {
    show: RawShowSimplified;
}

class Episode extends EpisodeSimplified {
    show: ShowSimplified;

    constructor(raw: any) {
        super(raw);
        this.show = new ShowSimplified(raw.show);
    }
}

export default Episode;
