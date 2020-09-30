import EpisodeSimplified from './episode-simplified';
import ShowSimplified from '../show/show-simplified';

class Episode extends EpisodeSimplified {
    show: ShowSimplified;

    constructor(json: any) {
        super(json);
        this.show = new ShowSimplified(json.show);
    }
}

export default Episode;
