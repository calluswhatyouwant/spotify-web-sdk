import Album from '../album/album';
import Artist from '../artist/artist';
import Context, { RawContext } from './context';
import Playlist from '../playlist/playlist';
import Track, { RawTrack } from '../track/track';
import { getAlbum, getArtist, getPlaylist } from '../..';

export interface RawPlayHistory {
    track: RawTrack;
    played_at: string;
    context: RawContext | null;
}

class PlayHistory {
    track: Track;
    playedAt: string;
    context: Context | null;

    constructor(raw: RawPlayHistory) {
        this.track = new Track(raw.track);
        this.playedAt = raw.played_at;
        this.context = raw.context ? new Context(raw.context) : null;
    }

    getContextData(): Promise<Album | Artist | Playlist> {
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
