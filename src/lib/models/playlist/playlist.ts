import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';
import Page from '../paging/page';
import PlaylistTrack from './playlist-track';
import PublicUser from '../user/user-public';
import Track from '../track/track';

class Playlist {
    collaborative: boolean;

    description: boolean;

    externalUrls: ExternalUrl;

    followers: Followers;

    href: string;

    id: string;

    images: Image[];

    name: string;

    owner: PublicUser;

    public: boolean | null;

    snapshotId: string;

    tracks: Page<PlaylistTrack>;

    type: 'playlist';

    uri: string;

    constructor(json: any) {
        this.collaborative = json.collaborative;
        this.description = json.description;
        this.externalUrls = new ExternalUrl(json.external_urls);
        this.followers = new Followers(json.followers);
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map((imageJson: any) => new Image(imageJson));
        this.name = json.name;
        this.owner = new PublicUser(json.owner);
        this.public = json.public;
        this.snapshotId = json.snapshot_id;
        this.tracks = new Page<PlaylistTrack>(json.tracks, PlaylistTrack);
        this.type = json.type;
        this.uri = json.uri;
    }
}

export default Playlist;
