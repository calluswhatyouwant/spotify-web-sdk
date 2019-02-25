import ArtistSimplified from '../artist/artist-simplified';

class TrackSimplified {
    artists: ArtistSimplified[];

    availableMarkets: string[];

    discNumber: number;

    durationMs: number;

    explicit: boolean;

    externalUrls: any;

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

    constructor(json: any) {
        this.artists = json.artists.map(
            (artistJson: any) => new ArtistSimplified(artistJson)
        );
        this.availableMarkets = json.available_markets;
        this.discNumber = json.disc_number;
        this.durationMs = json.duration_ms;
        this.explicit = json.explicit;
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.isPlayable = json.is_playable;
        this.linkedFrom = json.linked_from;
        this.restrictions = json.restrictions;
        this.name = json.name;
        this.previewUrl = json.preview_url;
        this.trackNumber = json.track_number;
        this.type = json.type;
        this.uri = json.uri;
        this.isLocal = json.is_local;
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
