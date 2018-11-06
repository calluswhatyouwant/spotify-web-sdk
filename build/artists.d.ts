import Artist from './models/artist/artist';
import Page from './models/paging/page';
import AlbumSimplified from './models/album/album-simplified';
export declare const getArtist: (id: string | number) => Promise<Artist>;
export declare const getSeveralArtists: (ids: number[] | string[]) => Promise<any>;
export declare const getArtistAlbums: (id: string | number, offset?: number, limit?: number) => Promise<Page<AlbumSimplified>>;
export declare const getRelatedArtists: (id: string | number) => Promise<any>;
export declare const getArtistTopTracks: (id: string | number) => Promise<any>;
