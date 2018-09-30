/* @flow */

import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';

class PublicUser {
    displayName: string;

    externalUrls: ExternalUrl;

    followers: Followers;

    href: string;

    id: string;

    images: Array<Image>;

    type: 'user';

    uri: string;

    constructor(json: any) {
        if (json) {
            this.displayName = json.display_name;
            this.externalUrls = new ExternalUrl(json.external_urls);
            this.followers = new Followers(json.followers);
            this.href = json.href;
            this.id = json.id;
            this.images = json.images
                .map(imageJson => new Image(imageJson));
            this.type = json.type;
            this.uri = json.uri;
        }
    }
}

export default PublicUser;
