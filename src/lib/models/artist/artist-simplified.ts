import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';

export interface RawArtistSimplified {
    external_urls: RawExternalUrls;
    href: string;
    id: string;
    name: string;
    type: 'artist';
    uri: string;
}

class ArtistSimplified {
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: 'artist';
    uri: string;

    constructor(raw: RawArtistSimplified) {
        this.externalUrls = new ExternalUrls(raw.external_urls);
        this.href = raw.href;
        this.id = raw.id;
        this.name = raw.name;
        this.type = raw.type;
        this.uri = raw.uri;
    }
}

export default ArtistSimplified;
