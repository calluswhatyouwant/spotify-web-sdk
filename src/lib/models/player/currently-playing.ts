import Context, { RawContext } from './context';
import Track, { RawTrack } from '../track/track';
import Episode, { RawEpisode } from '../episode/episode';

export interface RawCurrentlyPlaying {
    actions: any;
    context: RawContext | null;
    currently_playing_type?: 'track' | 'episode';
    is_playing: boolean;
    item: RawTrack | RawEpisode | null;
    progress_ms: number;
    timestamp: number;
}

class CurrentlyPlaying {
    actions: any;
    context: Context | null;
    currentlyPlayingType?: 'track' | 'episode';
    isPlaying: boolean;
    item: Track | Episode | null;
    progressMs: number;
    timestamp: number;

    constructor(raw: RawCurrentlyPlaying) {
        this.actions = raw.actions;
        this.context = raw.context ? new Context(raw.context) : null;
        this.currentlyPlayingType = raw.currently_playing_type;
        this.isPlaying = raw.is_playing;
        if (this.currentlyPlayingType === 'track' && raw.item) {
            this.item = new Track(raw.item as RawTrack);
        } else if (this.currentlyPlayingType === 'episode' && raw.item) {
            this.item = new Episode(raw.item as RawEpisode);
        } else {
            this.item = null;
        }
        this.progressMs = raw.progress_ms;
        this.timestamp = raw.timestamp;
    }
}

export default CurrentlyPlaying;
