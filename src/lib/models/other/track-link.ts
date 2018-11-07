import ExternalUrl from '../common/external-url';

class TrackLink {
    externalUrls: ExternalUrl;

    href: string;

    id: string;

    type: 'track';

    uri: string;

    constructor(json: any) {
        this.externalUrls = new ExternalUrl(json.external_urls);
        this.href = json.href;
        this.id = json.id;
        this.type = json.type;
        this.uri = json.uri;
    }
}

export default TrackLink;
