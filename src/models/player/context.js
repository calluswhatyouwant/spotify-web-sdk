/* @flow */

import ExternalUrl from '../common/external-url';

class Context {
    type: string;

    href: string;

    externalUrls: ExternalUrl;

    uri: string;

    constructor(json: any) {
        this.type = json.type;
        this.href = json.href;
        this.externalUrls = new ExternalUrl(json.external_urls);
        this.uri = json.uri;
    }
}

export default Context;
