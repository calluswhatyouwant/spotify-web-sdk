import Playlist from './models/playlist/playlist';
import PlaylistTrack from './models/playlist/playlist-track';
import Page from './models/paging/page';
import PlaylistSimplified from './models/playlist/playlist-simplified';
export declare const getPlaylist: (id: string | number) => Promise<Playlist>;
export declare const getPlaylistTracks: (id: string | number, offset?: number, limit?: number) => Promise<Page<PlaylistTrack>>;
export declare const getUserPlaylists: (id: string | number, offset?: number, limit?: number) => Promise<Page<PlaylistSimplified>>;
