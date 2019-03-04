import { getAxiosSpotifyInstance } from './driver';
import { Page, SavedAlbum, SavedTrack } from './models';

export const areSavedToCurrentUserLibrary = async (
    ids: string[],
    type: 'tracks' | 'albums'
) => {
    const params = { ids: ids.join() };
    const response = await getAxiosSpotifyInstance().get(
        `/me/${type}/contains`,
        { params }
    );
    return response.data;
};

export const getCurrentUserSavedAlbums = async (params?: {
    limit?: number;
    offset?: number;
    market?: string;
}) => {
    const response = await getAxiosSpotifyInstance().get('/me/albums', {
        params,
    });
    return new Page<SavedAlbum>(response.data, SavedAlbum);
};

export const getCurrentUserSavedTracks = async (params?: {
    limit?: number;
    offset?: number;
    market?: string;
}) => {
    const response = await getAxiosSpotifyInstance().get('/me/tracks', {
        params,
    });
    return new Page<SavedTrack>(response.data, SavedTrack);
};

export const saveAlbumsOrTracksForCurrentUser = async (
    ids: string[],
    type: 'albums' | 'tracks'
) => {
    const response = await getAxiosSpotifyInstance().put(`/me/${type}`, {
        ids,
    });
    return response.data;
};

export const removeAlbumsOrTracksForCurrentUser = async (
    ids: string[],
    type: 'albums' | 'tracks'
) => {
    const data = { ids };
    const response = await getAxiosSpotifyInstance().delete(`/me/${type}`, {
        data,
    });
    return response.data;
};
