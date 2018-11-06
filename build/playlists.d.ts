import Playlist from './models/playlist/playlist';
export declare const getPlaylist: (id: string) => Promise<Playlist>;
export declare const getPlaylistTracks: (id: string) => Promise<any>;
export declare const getUserPlaylists: (id: string) => Promise<any>;
