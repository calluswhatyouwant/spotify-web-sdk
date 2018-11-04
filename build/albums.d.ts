import Album from './models/album/album';
export declare const getAlbum: (id: string | number) => Promise<Album>;
export declare const getSeveralAlbums: (ids: number[] | string[]) => Promise<any>;
export declare const getAlbumTracks: (id: string | number) => Promise<any>;
