import { getAxiosSpotifyInstance } from './driver';
import { Episode } from './models';
import { RawEpisode } from './models/episode/episode';

export const getSeveralEpisodes = async (
    ids: string[],
    params?: { market?: string }
): Promise<Episode[]> => {
    const response = await getAxiosSpotifyInstance().get('/episodes', {
        params: { ids: ids.join(','), ...params },
    });
    return response.data.episodes.map(
        (episodeJson: RawEpisode) => new Episode(episodeJson)
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
