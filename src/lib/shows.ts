import { getAxiosSpotifyInstance } from './driver';
import { Show, ShowSimplified, Page, EpisodeSimplified } from './models';

export const getSeveralShows = async (
    ids: string[],
    params?: { market?: string }
) => {
    const response = await getAxiosSpotifyInstance().get('/shows', {
        params: { ids: ids.join(','), ...params },
    });
    return response.data.shows.map(
        (showJson: any) => new ShowSimplified(showJson)
    );
};

export const getShow = async (id: string, params?: { market?: string }) => {
    const response = await getAxiosSpotifyInstance().get(`/shows/${id}`, {
        params,
    });
    return new Show(response.data);
};

export const getShowEpisodes = async (
    id: string,
    params?: {
        limit?: number;
        offset?: number;
        market?: string;
    }
) => {
    const response = await getAxiosSpotifyInstance().get(
        `/shows/${id}/episodes`,
        { params }
    );
    return new Page<EpisodeSimplified>(response.data, EpisodeSimplified);
};
