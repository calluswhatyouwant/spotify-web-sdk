/* @flow */

import Track from '../track/track';
import PublicUser from '../user/user-public';

class PlaylistTrack {
    addedAt: string;

    // Timestamp
    addedBy: PublicUser;

    isLocal: boolean;

    track: Track;

    constructor(json: any) {
        this.addedAt = json.added_at;
        this.addedBy = new PublicUser(json.added_by);
        this.isLocal = json.is_local;
        this.track = new Track(json.track);
    }
}

export default PlaylistTrack;
