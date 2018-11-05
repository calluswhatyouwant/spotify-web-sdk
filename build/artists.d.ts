import Artist from './models/artist/artist';
export declare const getArtist: (id: string | number) => Promise<Artist>;
export declare const getSeveralArtists: (ids: number[] | string[]) => Promise<any>;
export declare const getArtistAlbums: (id: string | number) => Promise<any>;
export declare const getRelatedArtists: (id: string | number) => Promise<any>;
export declare const getArtistTopTracks: (id: string | number) => Promise<any>;
