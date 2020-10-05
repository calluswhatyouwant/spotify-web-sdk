import EpisodeSimplified from '../episode/episode-simplified';
import Page from '../paging/page';
import ShowSimplified from './show-simplified';

class Show extends ShowSimplified {
    episodes: Page<EpisodeSimplified>;

    constructor(json: any) {
        super(json);
        this.episodes = new Page<EpisodeSimplified>(
            json.episodes,
            EpisodeSimplified
        );
    }
}

export default Show;
