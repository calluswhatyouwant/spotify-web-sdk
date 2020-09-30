import Context from './context';
import Track from '../track/track';
import Episode from '../episode/episode';

class CurrentlyPlaying {
    actions: any;
    context: Context | null;
    currentlyPlayingType: string;
    isPlaying: boolean;
    item: Track | Episode | null;
    progressMs: number;
    timestamp: number;

    constructor(json: any) {
        this.actions = json.actions;
        this.context = json.context ? new Context(json.context) : null;
        this.currentlyPlayingType = json.currently_playing_type;
        this.isPlaying = json.is_playing;
        if (this.currentlyPlayingType === 'track' && json.item) {
            this.item = new Track(json.item);
        } else if (this.currentlyPlayingType === 'episode' && json.item) {
            this.item = new Episode(json.item);
        } else {
            this.item = null;
        }
        this.progressMs = json.progress_ms;
        this.timestamp = json.timestamp;
    }
}

export default CurrentlyPlaying;
