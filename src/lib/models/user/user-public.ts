import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';
import Followers, { RawFollowers } from '../common/followers';
import Image, { RawImage } from '../common/image';

export interface RawPublicUser {
    display_name: string | null;
    external_urls: RawExternalUrls;
    followers?: RawFollowers;
    href: string;
    id: string;
    images?: RawImage[];
    type: 'user';
    uri: string;
}

class PublicUser {
    displayName: string | null;
    externalUrls: ExternalUrls;
    followers?: Followers;
    href: string;
    id: string;
    images?: Image[];
    type: 'user';
    uri: string;

    constructor(raw: RawPublicUser) {
        this.displayName = raw.display_name;
        this.externalUrls = raw.external_urls;
        if (raw.followers) this.followers = new Followers(raw.followers);
        this.href = raw.href;
        this.id = raw.id;
        if (raw.images) {
            this.images = raw.images.map(imageJson => new Image(imageJson));
        }
        this.type = raw.type;
        this.uri = raw.uri;
    }
}

export default PublicUser;
