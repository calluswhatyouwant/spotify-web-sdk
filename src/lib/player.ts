import { getAxiosSpotifyInstance } from './driver';
import { PlayHistory, CursorBasedPage, CurrentlyPlaying } from './models';

export const getCurrentUserRecentlyPlayedTracks = async (params?: {
    limit?: number;
    before?: string;
    after?: string;
}) => {
    if (params && params.before && params.after) {
        throw new Error("Only one of 'before' or 'after' should be specified");
    }
    const response = await getAxiosSpotifyInstance().get(
        '/me/player/recently-played',
        { params }
    );
    return new CursorBasedPage<PlayHistory>(response.data, PlayHistory);
};

export const getCurrentUserCurrentlyPlayingTrack = async (params?: {
    market?: string;
}) => {
    const response = await getAxiosSpotifyInstance().get(
        '/me/player/currently-playing',
        { params }
    );
    return new CurrentlyPlaying(response.data);
};
