import Artist from './models/artist/artist';
import Page from './models/paging/page';
import AlbumSimplified from './models/album/album-simplified';
export declare const getArtist: (id: string) => Promise<Artist>;
export declare const getSeveralArtists: (ids: string[]) => Promise<any>;
export declare const getArtistAlbums: (id: string, offset?: number, limit?: number) => Promise<Page<AlbumSimplified>>;
export declare const getRelatedArtists: (id: string) => Promise<any>;
export declare const getArtistTopTracks: (id: string) => Promise<any>;
