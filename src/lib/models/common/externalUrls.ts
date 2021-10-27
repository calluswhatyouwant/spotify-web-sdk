export interface RawExternalUrls {
    spotify: string;
}

class ExternalUrls {
    spotify: string;

    constructor(raw: RawExternalUrls) {
        this.spotify = raw.spotify;
    }
}

export default ExternalUrls;
