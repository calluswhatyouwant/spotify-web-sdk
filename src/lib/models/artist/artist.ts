import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';

class Artist {
    externalUrls: ExternalUrl;

    followers: Followers;

    genres: Array<string>;

    href: string;

    id: string;

    images: Array<Image>;

    name: string;

    popularity: number;

    type: 'artist';

    uri: string;

    constructor(json: any) {
        this.externalUrls = new ExternalUrl(json.external_urls);
        this.followers = new Followers(json.followers);
        this.genres = json.genres;
        this.href = json.href;
        this.id = json.id;
        this.images = json.images
            .map((imageJson: any) => new Image(imageJson));
        this.name = json.name;
        this.popularity = json.popularity;
        this.type = json.type;
        this.uri = json.uri;
    }
}

export default Artist;
