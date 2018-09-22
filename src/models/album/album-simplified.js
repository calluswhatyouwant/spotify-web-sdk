/* @flow */

import ArtistSimplified from '../artist/artist-simplified';
import Image from '../common/image';
import ExternalUrl from '../common/external-url';

class AlbumSimplified {
    albumGroup: 'album' | 'single' | 'compilation' | 'appears_on';

    albumType: 'album' | 'single' | 'compilation';

    artists: Array<ArtistSimplified>;

    availableMarkets: Array<string>;

    externalUrls: ExternalUrl;

    href: string;

    id: string;

    images: Array<Image>;

    name: string;

    releaseDate: string;

    releaseDatePrecision: 'year' | 'month' | 'day';

    restrictions: any;

    type: 'album';

    uri: string;

    constructor(json: any) {
        if (json) {
            this.albumGroup = json.album_group;
            this.albumType = json.album_type;
            this.artists = json.artists
                .map(artistJson => new ArtistSimplified(artistJson));
            this.availableMarkets = json.available_markets;
            this.externalUrls = new ExternalUrl(json.external_urls);
            this.href = json.href;
            this.id = json.id;
            this.images = json.images
                .map(imageJson => new Image(imageJson));
            this.name = json.name;
            this.releaseDate = json.release_date;
            this.releaseDatePrecision = json.release_date_precision;
            this.restrictions = json.restrictions;
            this.type = json.type;
            this.uri = json.uri;
        }
    }

    get stringArtists() {
        const artistNames = this.artists.map(artist => artist.name);
        return artistNames.join(', ');
    }

    get releaseYear() {
        return this.releaseDate.substring(0, 4);
    }

    get imageUrl() {
        return this.images[0].url;
    }
}

export default AlbumSimplified;
