import ArtistSimplified from '../artist/artist-simplified';
import Image from '../common/image';

class AlbumSimplified {
    albumGroup: 'album' | 'single' | 'compilation' | 'appears_on';

    albumType: 'album' | 'single' | 'compilation';

    artists: ArtistSimplified[];

    availableMarkets: string[];

    externalUrls: any;

    href: string;

    id: string;

    images: Image[];

    name: string;

    releaseDate: string;

    releaseDatePrecision: 'year' | 'month' | 'day';

    restrictions: any;

    type: 'album';

    uri: string;

    constructor(json: any) {
        this.albumGroup = json.album_group;
        this.albumType = json.album_type;
        this.artists = json.artists.map(
            (artistJson: any) => new ArtistSimplified(artistJson)
        );
        this.availableMarkets = json.available_markets;
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map((imageJson: any) => new Image(imageJson));
        this.name = json.name;
        this.releaseDate = json.release_date;
        this.releaseDatePrecision = json.release_date_precision;
        this.restrictions = json.restrictions;
        this.type = json.type;
        this.uri = json.uri;
    }

    get stringArtists(): string {
        const artistNames = this.artists.map(artist => artist.name);
        return artistNames.join(', ');
    }

    get releaseYear(): number {
        return Number(this.releaseDate.substring(0, 4));
    }

    get imageUrl(): string {
        return this.images[0].url;
    }
}

export default AlbumSimplified;
