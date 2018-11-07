import Artist from './models/artist/artist';
export declare const getArtist: (id: string) => Promise<Artist>;
export declare const getSeveralArtists: (ids: string[]) => Promise<any>;
export declare const getArtistAlbums: (id: string) => Promise<any>;
export declare const getRelatedArtists: (id: string) => Promise<any>;
export declare const getArtistTopTracks: (id: string) => Promise<any>;
