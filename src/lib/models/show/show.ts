import EpisodeSimplified from '../episode/episode-simplified';
import Page, { RawPage } from '../paging/page';
import ShowSimplified, { RawShowSimplified } from './show-simplified';

export interface RawShow extends RawShowSimplified {
    episodes: RawPage;
}

class Show extends ShowSimplified {
    episodes: Page<EpisodeSimplified>;

    constructor(raw: RawShow) {
        super(raw);
        this.episodes = new Page<EpisodeSimplified>(
            raw.episodes,
            EpisodeSimplified
        );
    }
}

export default Show;
