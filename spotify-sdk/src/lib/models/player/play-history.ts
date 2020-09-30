import Context from './context';
import Track from '../track/track';
import { getAlbum, getArtist, getPlaylist } from '../..';

class PlayHistory {
    track: Track;

    playedAt: string;

    context: Context | null;

    constructor(json: any) {
        this.track = new Track(json.track);
        this.playedAt = json.played_at;
        this.context = json.context ? new Context(json.context) : null;
    }

    getContextData(): Promise<any> {
        if (this.context) {
            const [, type, id] = this.context.uri.split(':');
            switch (type) {
                case 'album':
                    return getAlbum(id);
                case 'artist':
                    return getArtist(id);
                case 'playlist':
                    return getPlaylist(id);
                default:
                    return getAlbum(this.track.album.id);
            }
        }
        return getAlbum(this.track.album.id);
    }
}

export default PlayHistory;
