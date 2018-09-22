/* @flow */

import AlbumSimplified from '../album/album-simplified';
import ArtistSimplified from '../artist/artist-simplified';
import ExternalId from '../common/external-id';
import ExternalUrl from '../common/external-url';

class Track {
    album: AlbumSimplified;

    artists: Array<ArtistSimplified>;

    availableMarkets: Array<string>;

    discNumber: number;

    durationMs: number;

    explicit: boolean;

    externalIds: ExternalId;

    externalUrls: ExternalUrl;

    href: string;

    id: string;

    isPlayable: boolean;

    linkedFrom: any;

    restrictions: any;

    name: string;

    popularity: number;

    previewUrl: string;

    trackNumber: number;

    type: 'track';

    uri: string;

    isLocal: boolean;

    constructor(json: any) {
        if (json) {
            this.album = new AlbumSimplified(json.album);
            this.artists = json.artists
                .map(artistJson => new ArtistSimplified(artistJson));
            this.availableMarkets = json.available_markets;
            this.discNumber = json.disc_number;
            this.durationMs = json.duration_ms;
            this.explicit = json.explicit;
            this.externalIds = new ExternalId(json.external_ids);
            this.externalUrls = new ExternalUrl(json.external_urls);
            this.href = json.href;
            this.id = json.id;
            this.isPlayable = json.is_playable;
            this.linkedFrom = json.linked_from;
            this.restrictions = json.restrictions;
            this.name = json.name;
            this.popularity = json.popularity;
            this.previewUrl = json.preview_url;
            this.trackNumber = json.track_number;
            this.type = json.type;
            this.uri = json.uri;
            this.isLocal = json.isLocal;
        }
    }

    get albumName() {
        return this.album.name;
    }

    get stringArtists() {
        const artistNames = this.artists.map(artist => artist.name);
        return artistNames.join(', ');
    }

    get releaseYear() {
        return this.album.releaseYear;
    }

    get formattedDuration() {
        const minutes = Math.floor(this.durationMs / 60000);
        const seconds = Math.floor((this.durationMs % 60000) / 1000);

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}

export default Track;
