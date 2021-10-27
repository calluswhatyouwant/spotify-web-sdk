import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';
import Followers, { RawFollowers } from '../common/followers';
import Image, { RawImage } from '../common/image';

export interface RawPrivateUser {
    birthdate: string;
    country: string;
    display_name: string;
    email: string;
    external_urls: RawExternalUrls;
    followers: RawFollowers;
    href: string;
    id: string;
    images: RawImage[];
    product: string;
    type: 'user';
    uri: string;
}

class PrivateUser {
    birthdate: string;
    country: string;
    displayName: string;
    email: string;
    externalUrls: ExternalUrls;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: 'user';
    uri: string;

    constructor(raw: RawPrivateUser) {
        this.birthdate = raw.birthdate;
        this.country = raw.country;
        this.displayName = raw.display_name;
        this.email = raw.email;
        this.externalUrls = new ExternalUrls(raw.external_urls);
        this.followers = new Followers(raw.followers);
        this.href = raw.href;
        this.id = raw.id;
        this.images = raw.images.map(imageJson => new Image(imageJson));
        this.product = raw.product;
        this.type = raw.type;
        this.uri = raw.uri;
    }
}

export default PrivateUser;
