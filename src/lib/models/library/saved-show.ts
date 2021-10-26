import ShowSimplified, { RawShowSimplified } from '../show/show-simplified';

export interface RawSavedShow {
    added_at: string;
    show: RawShowSimplified;
}

class SavedShow {
    addedAt: string;
    show: ShowSimplified;

    constructor(raw: RawSavedShow) {
        this.addedAt = raw.added_at;
        this.show = new ShowSimplified(raw.show);
    }
}

export default SavedShow;
