import Artist from './models/artist/artist';
export declare const getArtist: (id: string | number) => Promise<Artist>;
export declare const getSeveralArtists: (ids: number[] | string[]) => Promise<any>;
