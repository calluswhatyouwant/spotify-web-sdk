/* @flow */

import Track from '../track/track';

class SavedTrack {
    addedAt: string;

    // Timestamp
    track: Track;

    constructor(json: any) {
        this.addedAt = json.added_at;
        this.track = new Track(json.track);
    }
}

export default SavedTrack;
