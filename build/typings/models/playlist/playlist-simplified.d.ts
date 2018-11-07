import ExternalUrl from '../common/external-url';
import Image from '../common/image';
import PublicUser from '../user/user-public';
declare class Playlist {
    collaborative: boolean;
    externalUrls: ExternalUrl;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: PublicUser;
    public: boolean | null;
    snapshotId: string;
    tracks: any;
    type: 'playlist';
    uri: string;
    constructor(json: any);
    readonly totalTracks: any;
}
export default Playlist;
