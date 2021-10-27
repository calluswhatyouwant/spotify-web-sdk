import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';
import Image, { RawImage } from '../common/image';
import PublicUser, { RawPublicUser } from '../user/user-public';

interface SimplifiedTracks {
    href: string;
    total: number;
}

export interface RawPlaylistSimplified {
    collaborative: boolean;
    description: string | null;
    external_urls: RawExternalUrls;
    href: string;
    id: string;
    images: RawImage[];
    name: string;
    owner: RawPublicUser;
    primary_color: string | null;
    public: boolean | null;
    snapshot_id: string;
    tracks: SimplifiedTracks;
    type: 'playlist';
    uri: string;
}

class PlaylistSimplified {
    collaborative: boolean;
    description: string | null;
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: PublicUser;
    primaryColor: string | null;
    public: boolean | null;
    snapshotId: string;
    tracks: SimplifiedTracks;
    type: 'playlist';
    uri: string;

    constructor(raw: RawPlaylistSimplified) {
        this.collaborative = raw.collaborative;
        this.description = raw.description;
        this.externalUrls = raw.external_urls;
        this.href = raw.href;
        this.id = raw.id;
        this.images = raw.images.map(imageJson => new Image(imageJson));
        this.name = raw.name;
        this.owner = new PublicUser(raw.owner);
        this.primaryColor = raw.primary_color;
        this.public = raw.public;
        this.snapshotId = raw.snapshot_id;
        this.tracks = raw.tracks;
        this.type = raw.type;
        this.uri = raw.uri;
    }

    get totalTracks() {
        return this.tracks.total;
    }
}

export default PlaylistSimplified;
