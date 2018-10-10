import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';
import Paging from '../paging/paging';
import PlaylistTrack from './playlist-track';
import PublicUser from '../user/user-public';

class Playlist {
    collaborative: boolean;

    description: boolean;

    externalUrls: ExternalUrl;

    followers: Followers;

    href: string;

    id: string;

    images: Array<Image>;

    name: string;

    owner: PublicUser;

    public: boolean | null;

    snapshotId: string;

    tracks: Paging<PlaylistTrack>;

    type: 'playlist';

    uri: string;

    constructor(json: any) {
        if (json) {
            this.collaborative = json.collaborative;
            this.description = json.description;
            this.externalUrls = new ExternalUrl(json.external_urls);
            this.followers = new Followers(json.followers);
            this.href = json.href;
            this.id = json.id;
            this.images = json.images
                .map(imageJson => new Image(imageJson));
            this.name = json.name;
            this.owner = new PublicUser(json.owner);
            this.public = json.public;
            this.snapshotId = json.snapshot_id;
            this.tracks = new Paging(json.tracks);
            this.type = json.type;
            this.uri = json.uri;
        }
    }
}

export default Playlist;
