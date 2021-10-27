import Followers, { RawFollowers } from '../common/followers';
import Page, { RawPage } from '../paging/page';
import PlaylistTrack from './playlist-track';
import PlaylistSimplified, {
    RawPlaylistSimplified,
} from './playlist-simplified';

export interface RawPlaylist extends RawPlaylistSimplified {
    followers: RawFollowers;
    tracks: RawPage;
}

class Playlist extends PlaylistSimplified {
    followers: Followers;
    tracks: Page<PlaylistTrack>;

    constructor(raw: RawPlaylist) {
        super(raw);
        this.followers = new Followers(raw.followers);
        this.tracks = new Page<PlaylistTrack>(raw.tracks, PlaylistTrack);
    }
}

export default Playlist;
