import Copyright, { RawCopyright } from '../common/copyright';
import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';
import Image, { RawImage } from '../common/image';

export interface RawShowSimplified {
    available_markets: string[];
    copyrights: RawCopyright[];
    description: string;
    explicit: boolean;
    external_urls: RawExternalUrls;
    href: string;
    id: string;
    images: RawImage[];
    is_externally_hosted: boolean | null;
    languages: string[];
    media_type: string;
    name: string;
    publisher: string;
    type: 'show';
    uri: string;
}

class ShowSimplified {
    availableMarkets: string[];
    copyrights: Copyright[];
    description: string;
    explicit: boolean;
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    isExternallyHosted: boolean | null;
    languages: string[];
    mediaType: string;
    name: string;
    publisher: string;
    type: 'show';
    uri: string;

    constructor(raw: RawShowSimplified) {
        this.availableMarkets = raw.available_markets;
        this.copyrights = raw.copyrights.map(
            rawCopyright => new Copyright(rawCopyright)
        );
        this.description = raw.description;
        this.explicit = raw.explicit;
        this.externalUrls = raw.external_urls;
        this.href = raw.href;
        this.id = raw.id;
        this.images = raw.images.map(rawImage => new Image(rawImage));
        this.isExternallyHosted = raw.is_externally_hosted;
        this.languages = raw.languages;
        this.mediaType = raw.media_type;
        this.name = raw.name;
        this.publisher = raw.publisher;
        this.type = raw.type;
        this.uri = raw.uri;
    }
}

export default ShowSimplified;
