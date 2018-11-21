import Context from './context';
import Track from '../track/track';

class CurrentlyPlaying {
    context: Context | null;
    currentlyPlayingType: string;
    isPlaying: boolean;
    item: Track | null;
    progressMs: number;
    timestamp: number;

    constructor(json: any) {
        this.context = json.context ? new Context(json.context) : null;
        this.currentlyPlayingType = json.currently_playing_type;
        this.isPlaying = json.is_playing;
        this.item = json.item ? new Track(json.item) : null;
        this.progressMs = json.progress_ms;
        this.timestamp = json.timestamp;
    }
}

export default CurrentlyPlaying;
