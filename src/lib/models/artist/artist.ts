import ArtistSimplified, { RawArtistSimplified } from './artist-simplified';
import Followers, { RawFollowers } from '../common/followers';
import Image, { RawImage } from '../common/image';

export interface RawArtist extends RawArtistSimplified {
    followers: RawFollowers;
    genres: string[];
    images: RawImage[];
    popularity: number;
}

class Artist extends ArtistSimplified {
    followers: Followers;
    genres: string[];
    images: Image[];
    popularity: number;

    constructor(raw: RawArtist) {
        super(raw);
        this.followers = new Followers(raw.followers);
        this.genres = raw.genres;
        this.images = raw.images.map(rawImage => new Image(rawImage));
        this.popularity = raw.popularity;
    }

    get imageUrl(): string {
        return this.images[0].url;
    }
}

export default Artist;
