import { getAxiosSpotifyInstance } from './driver';
import Playlist from './models/playlist/playlist';
import PlaylistTrack from './models/playlist/playlist-track';
import Page from './models/paging/page';
import PlaylistSimplified from './models/playlist/playlist-simplified';

export const getPlaylist = async (id: string) => {
    const response = await getAxiosSpotifyInstance().get(`/playlists/${id}`);
    return new Playlist(response.data);
};

export const getPlaylistTracks = async (id: string, offset = 0, limit = 20) => {
    const params = { params: { offset, limit } };
    const response = await getAxiosSpotifyInstance().get(
        `/playlists/${id}/tracks`,
        params
    );
    return new Page<PlaylistTrack>(response.data, PlaylistTrack);
};

export const getUserPlaylists = async (id: string, offset = 0, limit = 20) => {
    const params = { params: { offset, limit } };
    const response = await getAxiosSpotifyInstance().get(
        `/users/${id}/playlists`,
        params
    );
    return new Page<PlaylistSimplified>(response.data, PlaylistSimplified);
};
