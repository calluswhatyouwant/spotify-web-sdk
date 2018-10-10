import ArtistSimplified from '../artist/artist-simplified';
import ExternalUrl from '../common/external-url';
declare class TrackSimplified {
    artists: Array<ArtistSimplified>;
    availableMarkets: Array<string>;
    discNumber: number;
    durationMs: number;
    explicit: boolean;
    externalUrls: ExternalUrl;
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
    constructor(json: any);
    readonly stringArtists: string;
    readonly length: string;
}
export default TrackSimplified;
