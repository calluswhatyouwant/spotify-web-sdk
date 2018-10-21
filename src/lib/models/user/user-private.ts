import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';

class PublicUser {
    birthdate: string;

    country: string;

    displayName: string;

    email: string;

    externalUrls: ExternalUrl;

    followers: Followers;

    href: string;

    id: string;

    images: Image[];

    product: string;

    type: 'user';

    uri: string;

    constructor(json: any) {
        if (json) {
            this.birthdate = json.birthdate;
            this.country = json.country;
            this.displayName = json.display_name;
            this.email = json.email;
            this.externalUrls = new ExternalUrl(json.external_urls);
            this.followers = new Followers(json.followers);
            this.href = json.href;
            this.id = json.id;
            this.images = json.images.map(imageJson => new Image(imageJson));
            this.product = json.product;
            this.type = json.type;
            this.uri = json.uri;
        }
    }
}

export default PublicUser;
