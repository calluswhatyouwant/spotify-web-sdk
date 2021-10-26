import ArtistSimplified, {
    RawArtistSimplified,
} from '../artist/artist-simplified';
import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';

export interface RawTrackSimplified {
    artists: RawArtistSimplified[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: RawExternalUrls;
    href: string;
    id: string;
    is_playable: boolean;
    linked_from: any;
    restrictions: any;
    name: string;
    preview_url: string;
    track_number: number;
    type: 'track';
    uri: string;
    is_local: boolean;
}

class TrackSimplified {
    artists: ArtistSimplified[];
    availableMarkets: string[];
    discNumber: number;
    durationMs: number;
    explicit: boolean;
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    isPlayable: boolean;
    linkedFrom: any;
    restrictions: any;
    name: string;
    previewUrl: string;
    trackNumber: number;
    type: 'track';
    uri: string;
    isLocal: boolean;

    constructor(raw: RawTrackSimplified) {
        this.artists = raw.artists.map(
            rawArtist => new ArtistSimplified(rawArtist)
        );
        this.availableMarkets = raw.available_markets;
        this.discNumber = raw.disc_number;
        this.durationMs = raw.duration_ms;
        this.explicit = raw.explicit;
        this.externalUrls = new ExternalUrls(raw.external_urls);
        this.href = raw.href;
        this.id = raw.id;
        this.isPlayable = raw.is_playable;
        this.linkedFrom = raw.linked_from;
        this.restrictions = raw.restrictions;
        this.name = raw.name;
        this.previewUrl = raw.preview_url;
        this.trackNumber = raw.track_number;
        this.type = raw.type;
        this.uri = raw.uri;
        this.isLocal = raw.is_local;
    }

    get stringArtists(): string {
        const artistNames = this.artists.map(artist => artist.name);
        return artistNames.join(', ');
    }

    get length(): string {
        const minutes = Math.floor(this.durationMs / 60000);
        const seconds = Math.floor((this.durationMs % 60000) / 1000);

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}

export default TrackSimplified;
