import { getAxiosSpotifyInstance } from './driver';
import Playlist from './models/playlist/playlist';
import PlaylistTrack from './models/playlist/playlist-track';

export const getPlaylist = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(`/plylists/${id}`);
    return new Playlist(response.data);
}

export const getPlaylistTracks = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(
        `/playlists/${id}/tracks`
    );
    return response.items.map(trackJson => new PlaylistTrack(trackJson));
}

export const getUserPlaylists = async (id: number | string) => {
    const response = await getAxiosSpotifyInstance().get(
        `/users//${id}/playlists`
    );
    return response.items.map(playlistJson => new Playlist(playlistJson));
}
