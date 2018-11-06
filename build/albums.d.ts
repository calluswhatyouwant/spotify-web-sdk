import Album from './models/album/album';
import TrackSimplified from './models/track/track-simplified';
import Page from './models/paging/page';
export declare const getAlbum: (id: string | number) => Promise<Album>;
export declare const getSeveralAlbums: (ids: number[] | string[]) => Promise<any>;
export declare const getAlbumTracks: (id: string | number, offset?: number, limit?: number) => Promise<Page<TrackSimplified>>;
