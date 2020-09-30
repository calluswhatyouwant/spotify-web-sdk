import Followers from '../common/followers';
import Page from '../paging/page';
import PlaylistTrack from './playlist-track';
import PlaylistSimplified from './playlist-simplified';

class Playlist extends PlaylistSimplified {
    description: boolean;

    followers: Followers;

    tracks: Page<PlaylistTrack>;

    constructor(json: any) {
        super(json);
        this.description = json.description;
        this.followers = new Followers(json.followers);
        this.tracks = new Page<PlaylistTrack>(json.tracks, PlaylistTrack);
    }
}

export default Playlist;
