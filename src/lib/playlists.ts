import { getAxiosSpotifyInstance } from './driver';
import {
    Playlist,
    PlaylistTrack,
    PlaylistSimplified,
    Page,
    Image,
} from './models';
import { propertiesToSnakeCase } from './util';

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

export const getCurrentUserPlaylists = async (params?: {
    limit?: number;
    offset?: number;
}) => {
    const response = await getAxiosSpotifyInstance().get('/me/playlists', {
        params,
    });
    return new Page<PlaylistSimplified>(response.data, PlaylistSimplified);
};

export const getPlaylistCoverImage = async (id: string) => {
    const response = await getAxiosSpotifyInstance().get(
        `playlists/${id}/images`
    );
    return response.data.map((imageJson: any) => new Image(imageJson));
};

export const createPlaylist = async (
    userId: string,
    name: string,
    params?: { public?: boolean; collaborative?: boolean; description?: string }
) => {
    const data = { name, ...params };
    const response = await getAxiosSpotifyInstance().post(
        `/users/${userId}/playlists`,
        data
    );
    return new Playlist(response.data);
};

export const addTracksToPlaylist = async (
    playlistId: string,
    trackUris: string[],
    position?: number
) => {
    const data = { uris: trackUris, position };
    const response = await getAxiosSpotifyInstance().post(
        `/playlists/${playlistId}/tracks`,
        data
    );
    return response.data;
};

export const changePlaylistDetails = async (
    id: string,
    params?: {
        name?: string;
        public?: boolean;
        collaborative?: boolean;
        description?: string;
    }
) => {
    const response = await getAxiosSpotifyInstance().put(`/playlists/${id}`, {
        ...params,
    });
    return response.data;
};

export const reorderPlaylistTracks = async (
    id: string,
    rangeStart: number,
    params?: {
        rangeLength?: number;
        insertBefore?: number;
        snapshotId?: string;
    }
) => {
    const data = propertiesToSnakeCase({ rangeStart, ...params });
    const response = await getAxiosSpotifyInstance().put(
        `/playlists/${id}/tracks`,
        data
    );
    return response.data;
};

export const replacePlaylistTracks = async (
    id: string,
    trackUris: string[]
) => {
    const response = await getAxiosSpotifyInstance().put(
        `/playlists/${id}/tracks`,
        { uris: trackUris }
    );
    return response.data;
};

export const uploadPlaylistCoverImage = async (id: string, imageData: any) => {
    const response = await getAxiosSpotifyInstance().put(
        `/playlists/${id}/images`,
        { imageData }
    );
    return response.data;
};

type TrackToBeRemoved = {
    uri: string;
    positions?: number[];
};

export const removeTracksFromPlaylist = async (
    id: string,
    tracks: TrackToBeRemoved[],
    snapshotId?: string
) => {
    const data = { tracks, snapshot_id: snapshotId };
    const response = await getAxiosSpotifyInstance().delete(
        `/playlists/${id}/tracks`,
        {
            data,
        }
    );
    return response.data;
};
