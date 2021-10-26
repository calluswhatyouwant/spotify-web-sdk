import ArtistSimplified, {
    RawArtistSimplified,
} from '../artist/artist-simplified';
import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';
import Image, { RawImage } from '../common/image';

type AlbumGroup = 'album' | 'single' | 'compilation' | 'appears_on';

type AlbumType = 'album' | 'single' | 'compilation';

type ReleaseDatePrecision = 'year' | 'month' | 'day';

export interface RawAlbumSimplified {
    album_group?: AlbumGroup;
    album_type: AlbumType;
    artists: RawArtistSimplified[];
    available_markets: string[];
    external_urls: RawExternalUrls;
    href: string;
    id: string;
    images: RawImage[];
    name: string;
    release_date: string;
    release_date_precision: ReleaseDatePrecision;
    restrictions?: any;
    type: 'album';
    uri: string;
}

class AlbumSimplified {
    albumGroup?: AlbumGroup;
    albumType: AlbumType;
    artists: ArtistSimplified[];
    availableMarkets: string[];
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    releaseDate: string;
    releaseDatePrecision: ReleaseDatePrecision;
    restrictions: any;
    type: 'album';
    uri: string;

    constructor(raw: RawAlbumSimplified) {
        this.albumGroup = raw.album_group;
        this.albumType = raw.album_type;
        this.artists = raw.artists.map(
            rawArtist => new ArtistSimplified(rawArtist)
        );
        this.availableMarkets = raw.available_markets;
        this.externalUrls = raw.external_urls;
        this.href = raw.href;
        this.id = raw.id;
        this.images = raw.images.map(rawImage => new Image(rawImage));
        this.name = raw.name;
        this.releaseDate = raw.release_date;
        this.releaseDatePrecision = raw.release_date_precision;
        this.restrictions = raw.restrictions;
        this.type = raw.type;
        this.uri = raw.uri;
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
