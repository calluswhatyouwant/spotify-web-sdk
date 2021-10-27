import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';

export interface RawTrackLink {
    external_urls: RawExternalUrls;
    href: string;
    id: string;
    type: 'track';
    uri: string;
}

class TrackLink {
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    type: 'track';
    uri: string;

    constructor(raw: RawTrackLink) {
        this.externalUrls = new ExternalUrls(raw.external_urls);
        this.href = raw.href;
        this.id = raw.id;
        this.type = raw.type;
        this.uri = raw.uri;
    }
}

export default TrackLink;
