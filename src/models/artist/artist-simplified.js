/* @flow */

import ExternalUrl from '../common/external-url';

class ArtistSimplified {
    externalUrls: ExternalUrl;

    href: string;

    id: string;

    name: string;

    type: 'artist';

    uri: string;

    constructor(json: any) {
        if (json) {
            this.externalUrls = new ExternalUrl(json.external_urls);
            this.href = json.href;
            this.id = json.id;
            this.name = json.name;
            this.type = json.type;
            this.uri = json.uri;
        }
    }
}

export default ArtistSimplified;
