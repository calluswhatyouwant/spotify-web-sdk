import { getAxiosSpotifyInstance } from './driver';
import Artist from './models/artist/artist';

export const getFollowedArtists = async (
    limit: number = 20,
    after?: string
): Promise<Artist[]> => {
    if (limit < 1 || limit > 50) {
        const exceptionLink =
            'https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/';
        throw new Error(
            `The limit must be between 1 and 50 (inclusive). See ${exceptionLink} for details`
        );
    }

    const afterQuery = after ? after : null;
    const params = { params: { limit, type: 'artist', after: afterQuery } };
    const response = await getAxiosSpotifyInstance().get(
        '/me/following',
        params
    );

    return response.data.artists.items.map(
        (artistJson: any) => new Artist(artistJson)
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

    const params = { params: { type, ids: ids.join() } };
    const response = await getAxiosSpotifyInstance().get(
        '/me/following/contains',
        params
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

    const params = { params: { ids: ids.join() } };
    const response = await getAxiosSpotifyInstance().get(
        `/playlists/${playlistId}/followers/contains`,
        params
    );

    return response.data;
};
