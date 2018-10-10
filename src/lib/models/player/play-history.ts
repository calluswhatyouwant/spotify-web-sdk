import Context from './context';
import Track from '../track/track';

class PlaylistTrack {
    track: Track;

    playedAt: string; // Timestamp

    context: Context;

    constructor(json: any) {
        this.track = new Track(json.track);
        this.playedAt = json.added_at;
        this.context = new Context(json.context);
    }
}

export default PlaylistTrack;
