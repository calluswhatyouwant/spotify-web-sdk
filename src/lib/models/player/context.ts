import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';

export interface RawContext {
    type: string;
    href: string;
    external_urls: RawExternalUrls;
    uri: string;
}

class Context {
    type: string;
    href: string;
    externalUrls: ExternalUrls;
    uri: string;

    constructor(raw: RawContext) {
        this.type = raw.type;
        this.href = raw.href;
        this.externalUrls = new ExternalUrls(raw.external_urls);
        this.uri = raw.uri;
    }
}

export default Context;
