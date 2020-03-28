import ShowSimplified from '../shows/show-simplified';

class SavedShow {
    addedAt: string;

    show: ShowSimplified;

    constructor(json: any) {
        this.addedAt = json.added_at;
        this.show = new ShowSimplified(json.show);
    }
}

export default SavedShow;
