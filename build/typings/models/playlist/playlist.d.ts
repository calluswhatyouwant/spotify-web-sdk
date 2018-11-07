import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';
import Paging from '../paging/paging';
import PlaylistTrack from './playlist-track';
import PublicUser from '../user/user-public';
declare class Playlist {
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
    tracks: Paging<PlaylistTrack>;
    type: 'playlist';
    uri: string;
    constructor(json: any);
}
export default Playlist;
