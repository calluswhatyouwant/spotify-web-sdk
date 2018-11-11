import ArtistSimplified from '../artist/artist-simplified';
import Image from '../common/image';
import Page from '../paging/page';
import TrackSimplified from '../track/track-simplified';

class Album {
    albumType: 'album' | 'single' | 'compilation';

    artists: ArtistSimplified[];

    availableMarkets: string[];

    copyrights: any[];

    externalIds: any;

    externalUrls: any;

    genres: string[];

    href: string;

    id: string;

    images: Image[];

    label: string;

    name: string;

    popularity: number;

    releaseDate: string;

    releaseDatePrecision: 'year' | 'month' | 'day';

    totalTracks: number;

    tracks: Page<TrackSimplified>;

    type: 'album';

    uri: string;

    constructor(json: any) {
        this.albumType = json.album_type;
        this.artists = json.artists.map(
            (artistJson: any) => new ArtistSimplified(artistJson)
        );
        this.availableMarkets = json.available_markets;
        this.copyrights = json.copyrights;
        this.externalIds = json.external_ids;
        this.externalUrls = json.external_urls;
        this.genres = json.genres;
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map((imageJson: any) => new Image(imageJson));
        this.label = json.label;
        this.name = json.name;
        this.popularity = json.popularity;
        this.releaseDate = json.release_date;
        this.releaseDatePrecision = json.release_date_precision;
        this.totalTracks = json.total_tracks;
        this.tracks = new Page<TrackSimplified>(json.tracks, TrackSimplified);
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

export default Album;
