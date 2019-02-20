import { getAxiosSpotifyInstance } from './driver';
import { Playlist, PlaylistTrack, PlaylistSimplified, Page } from './models';

export const getPlaylist = async (id: string) => {
    const response = await getAxiosSpotifyInstance().get(`/playlists/${id}`);
    return new Playlist(response.data);
};

export const getPlaylistTracks = async (
    id: string,
    params?: {
        fields?: string;
        limit?: number;
        offset?: number;
        market?: string;
    }
) => {
    const response = await getAxiosSpotifyInstance().get(
        `/playlists/${id}/tracks`,
        { params }
    );
    return new Page<PlaylistTrack>(response.data, PlaylistTrack);
};

export const getUserPlaylists = async (
    id: string,
    params?: {
        limit?: number;
        offset?: number;
    }
) => {
    const response = await getAxiosSpotifyInstance().get(
        `/users/${id}/playlists`,
        { params }
    );
    return new Page<PlaylistSimplified>(response.data, PlaylistSimplified);
};
