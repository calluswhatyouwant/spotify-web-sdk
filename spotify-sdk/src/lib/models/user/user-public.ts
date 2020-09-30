import Followers from '../common/followers';
import Image from '../common/image';

class PublicUser {
    displayName: string;

    externalUrls: any;

    followers?: Followers;

    href: string;

    id: string;

    images?: Image[];

    type: 'user';

    uri: string;

    constructor(json: any) {
        this.displayName = json.display_name;
        this.externalUrls = json.external_urls;
        if (json.followers) this.followers = new Followers(json.followers);
        this.href = json.href;
        this.id = json.id;
        if (json.images) {
            this.images = json.images.map(
                (imageJson: any) => new Image(imageJson)
            );
        }
        this.type = json.type;
        this.uri = json.uri;
    }
}

export default PublicUser;
