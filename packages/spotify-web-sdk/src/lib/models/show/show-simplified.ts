import Copyright from '../common/copyright';
import Image from '../common/image';

class ShowSimplified {
    availableMarkets: string[];

    copyrights: Copyright[];

    description: string;

    explicit: boolean;

    externalUrls: any;

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

    constructor(json: any) {
        this.availableMarkets = json.available_markets;
        this.copyrights = json.copyrights.map(
            (copyrightJson: any) => new Copyright(copyrightJson)
        );
        this.description = json.description;
        this.explicit = json.explicit;
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map((imageJson: any) => new Image(imageJson));
        this.isExternallyHosted = json.is_externally_hosted;
        this.languages = json.languages;
        this.mediaType = json.media_type;
        this.name = json.name;
        this.publisher = json.publisher;
        this.type = json.type;
        this.uri = json.uri;
    }
}

export default ShowSimplified;
