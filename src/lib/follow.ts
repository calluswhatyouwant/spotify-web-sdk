import { getAxiosSpotifyInstance } from './driver';
import { Artist } from './models';
import { RawArtist } from './models/artist/artist';

export const getFollowedArtists = async (params?: {
    limit?: number;
    after?: string;
}): Promise<Artist[]> => {
    if (params && params.limit && (params.limit < 1 || params.limit > 50)) {
        const exceptionLink =
            'https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/';
        throw new Error(
            `The limit must be between 1 and 50 (inclusive). See ${exceptionLink} for details`
        );
    }

    const config = { params: { ...params, type: 'artist' } };
    const response = await getAxiosSpotifyInstance().get(
        '/me/following',
        config
    );

    return response.data.artists.items.map(
        (artistJson: RawArtist) => new Artist(artistJson)
    );
};

export const isFollowing = async (
    type: string,
    ids: string[]
): Promise<boolean[]> => {
    const exceptionLink =
        'https://developer.spotify.com/documentation/web-api/reference/follow/check-current-user-follows/';
    if (type !== 'artist' && type !== 'user') {
        throw new Error(
            `The type must be either artist or user. See ${exceptionLink} for details`
        );
    } else if (ids.length > 50) {
        throw new Error(
            `The maximum number of ids to check is 50. See ${exceptionLink} for details`
        );
    }

    const config = { params: { type, ids: ids.join() } };
    const response = await getAxiosSpotifyInstance().get(
        '/me/following/contains',
        config
    );

    return response.data;
};

export const checkUsersFollowingPlaylist = async (
    playlistId: string,
    ids: string[]
): Promise<boolean[]> => {
    if (ids.length > 5) {
        const exceptionLink =
            'https://developer.spotify.com/documentation/web-api/reference/follow/check-user-following-playlist/';
        throw new Error(
            `The maximum number of users to check is 5. See ${exceptionLink} for details`
        );
    }

    const config = { params: { ids: ids.join() } };
    const response = await getAxiosSpotifyInstance().get(
        `/playlists/${playlistId}/followers/contains`,
        config
    );

    return response.data;
};

// TODO Improve responses based on Spotify

export const followArtistsOrUsers = async (
    ids: string[],
    type: 'artist' | 'user'
): Promise<string> => {
    const params = { type };
    const response = await getAxiosSpotifyInstance().put(
        '/me/following',
        { ids },
        { params }
    );
    return response.data;
};

export const followPlaylist = async (
    id: string,
    publicFollow?: boolean
): Promise<string> => {
    const response = await getAxiosSpotifyInstance().put(
        `/playlists/${id}/followers`,
        { public: publicFollow }
    );
    return response.data;
};

export const unfollowArtistsOrUsers = async (
    ids: string[],
    type: 'artist' | 'user'
): Promise<string> => {
    const params = { type };
    const data = { ids };
    const response = await getAxiosSpotifyInstance().delete('/me/following', {
        params,
        data,
    });
    return response.data;
};

export const unfollowPlaylist = async (id: string): Promise<string> => {
    const response = await getAxiosSpotifyInstance().delete(
        `/playlists/${id}/followers`
    );
    return response.data;
};
