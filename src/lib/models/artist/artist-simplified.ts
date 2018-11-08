class ArtistSimplified {
    externalUrls: any;

    href: string;

    id: string;

    name: string;

    type: 'artist';

    uri: string;

    constructor(json: any) {
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.name = json.name;
        this.type = json.type;
        this.uri = json.uri;
    }
}

export default ArtistSimplified;
