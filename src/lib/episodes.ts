import { getAxiosSpotifyInstance } from './driver';
import { Episode } from './models';

export const getSeveralEpisodes = async (
    ids: string[],
    params?: { market?: string }
): Promise<Episode[]> => {
    const response = await getAxiosSpotifyInstance().get('/episodes', {
        params: { ids: ids.join(','), ...params },
    });
    return response.data.episodes.map(
        (episodeJson: any) => new Episode(episodeJson)
    );
};

export const getEpisode = async (
    id: string,
    params?: { market?: string }
): Promise<Episode> => {
    const response = await getAxiosSpotifyInstance().get(`/episodes/${id}`, {
        params,
    });
    return new Episode(response.data);
};
