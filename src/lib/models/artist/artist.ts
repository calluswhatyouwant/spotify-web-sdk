import ArtistSimplified from './artist-simplified';
import Followers from '../common/followers';
import Image from '../common/image';

class Artist extends ArtistSimplified {
    followers: Followers;

    genres: string[];

    images: Image[];

    popularity: number;

    constructor(json: any) {
        super(json);
        this.followers = new Followers(json.followers);
        this.genres = json.genres;
        this.images = json.images.map((imageJson: any) => new Image(imageJson));
        this.popularity = json.popularity;
    }

    get imageUrl(): string {
        return this.images[0].url;
    }
}

export default Artist;
