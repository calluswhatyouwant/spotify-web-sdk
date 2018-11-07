import Album from './models/album/album';
export declare const getAlbum: (id: string) => Promise<Album>;
export declare const getSeveralAlbums: (ids: string[]) => Promise<any>;
export declare const getAlbumTracks: (id: string) => Promise<any>;
