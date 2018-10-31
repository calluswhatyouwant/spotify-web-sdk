import Playlist from './models/playlist/playlist';
export declare const getPlaylist: (id: string | number) => Promise<Playlist>;
export declare const getPlaylistTracks: (id: string | number) => Promise<Any>;
export declare const getUserPlaylists: (id: string | number) => Promise<Any>;
