import Context from './context';
import Track from '../track/track';

class PlayHistory {
    track: Track;

    playedAt: string; // Timestamp

    context: Context | null;

    constructor(json: any) {
        this.track = new Track(json.track);
        this.playedAt = json.played_at;
        this.context = json.context ? new Context(json.context) : null;
    }
}

export default PlayHistory;
