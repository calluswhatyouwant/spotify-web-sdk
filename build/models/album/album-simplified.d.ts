import ArtistSimplified from '../artist/artist-simplified';
import Image from '../common/image';
import ExternalUrl from '../common/external-url';
declare class AlbumSimplified {
    albumGroup: 'album' | 'single' | 'compilation' | 'appears_on';
    albumType: 'album' | 'single' | 'compilation';
    artists: ArtistSimplified[];
    availableMarkets: string[];
    externalUrls: ExternalUrl;
    href: string;
    id: string;
    images: Image[];
    name: string;
    releaseDate: string;
    releaseDatePrecision: 'year' | 'month' | 'day';
    restrictions: any;
    type: 'album';
    uri: string;
    constructor(json: any);
    readonly stringArtists: string;
    readonly releaseYear: string;
    readonly imageUrl: string;
}
export default AlbumSimplified;
