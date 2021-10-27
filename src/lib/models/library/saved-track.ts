import Track, { RawTrack } from '../track/track';

export interface RawSavedTrack {
    added_at: string;
    track: RawTrack;
}

class SavedTrack {
    addedAt: string;
    track: Track;

    constructor(raw: RawSavedTrack) {
        this.addedAt = raw.added_at;
        this.track = new Track(raw.track);
    }
}

export default SavedTrack;
