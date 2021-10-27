import Track, { RawTrack } from '../track/track';
import PublicUser, { RawPublicUser } from '../user/user-public';

export interface RawPlaylistItem {
    added_at: string;
    added_by: RawPublicUser;
    is_local: boolean;
    track: RawTrack;
    video_thumbnail: { url: string | null };
}

class PlaylistItem {
    addedAt: string;
    addedBy: PublicUser;
    isLocal: boolean;
    track: Track;
    videoThumbnail: { url: string | null };

    constructor(raw: RawPlaylistItem) {
        this.addedAt = raw.added_at;
        this.addedBy = new PublicUser(raw.added_by);
        this.isLocal = raw.is_local;
        this.track = new Track(raw.track);
        this.videoThumbnail = raw.video_thumbnail;
    }
}

export default PlaylistItem;
