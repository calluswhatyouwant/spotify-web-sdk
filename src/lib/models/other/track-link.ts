class TrackLink {
    externalUrls: any;

    href: string;

    id: string;

    type: 'track';

    uri: string;

    constructor(json: any) {
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.type = json.type;
        this.uri = json.uri;
    }
}

export default TrackLink;
