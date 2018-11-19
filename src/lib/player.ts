import { getAxiosSpotifyInstance } from './driver';

import PlayHistory from './models/player/play-history';
import CursorBasedPage from './models/paging/cursor-based-page';

export const getCurrentUserRecentlyPlayedTracks = async (params?: {
    limit?: number;
    before?: string;
    after?: string;
}) => {
    if (params && params.before && params.after)
        throw new Error("Only one of 'before' or 'after' should be specified");
    const response = await getAxiosSpotifyInstance().get(
        `/me/player/recently-played`,
        { params }
    );
    return new CursorBasedPage<PlayHistory>(response.data, PlayHistory);
};
