import { getAxiosSpotifyInstance } from './driver';

import Artist from './models/artist/artist';
import Page from './models/paging/page';

const genericSearch = async (params: {
    q: string;
    type: string;
    market?: string;
    limit?: number;
    offset?: number;
}) => {
    return getAxiosSpotifyInstance().get(`/search`, { params });
};

export const searchArtists = async (
    query: string,
    options?: { market?: string; limit?: number; offset?: number }
) => {
    const params = { q: query, type: 'artist', ...options };
    const searchResults = await genericSearch(params);
    return new Page<Artist>(searchResults.data, Artist, 'artists');
};
