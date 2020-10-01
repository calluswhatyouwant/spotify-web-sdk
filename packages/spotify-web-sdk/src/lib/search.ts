import { getAxiosSpotifyInstance } from './driver';
import {
    AlbumSimplified,
    Artist,
    Page,
    PlaylistSimplified,
    Track,
    SearchResults,
    ShowSimplified,
    EpisodeSimplified,
} from './models';

const genericSearch = async (params: {
    q: string;
    type: string;
    market?: string;
    limit?: number;
    offset?: number;
}) => {
    return getAxiosSpotifyInstance().get(`/search`, { params });
};

export const search = async (
    query: string,
    type: string,
    options?: { market?: string; limit?: number; offset?: number }
): Promise<SearchResults> => {
    const params = { type, q: query, ...options };
    const searchResults = await genericSearch(params);
    return new SearchResults(searchResults.data);
};

export const searchAlbums = async (
    query: string,
    options?: { market?: string; limit?: number; offset?: number }
): Promise<Page<AlbumSimplified>> => {
    const params = { q: query, type: 'album', ...options };
    const searchResults = await genericSearch(params);
    return new Page<AlbumSimplified>(
        searchResults.data,
        AlbumSimplified,
        'albums'
    );
};

export const searchArtists = async (
    query: string,
    options?: { market?: string; limit?: number; offset?: number }
): Promise<Page<Artist>> => {
    const params = { q: query, type: 'artist', ...options };
    const searchResults = await genericSearch(params);
    return new Page<Artist>(searchResults.data, Artist, 'artists');
};

export const searchPlaylists = async (
    query: string,
    options?: { market?: string; limit?: number; offset?: number }
): Promise<Page<PlaylistSimplified>> => {
    const params = { q: query, type: 'playlist', ...options };
    const searchResults = await genericSearch(params);
    return new Page<PlaylistSimplified>(
        searchResults.data,
        PlaylistSimplified,
        'playlists'
    );
};

export const searchTracks = async (
    query: string,
    options?: { market?: string; limit?: number; offset?: number }
): Promise<Page<Track>> => {
    const params = { q: query, type: 'track', ...options };
    const searchResults = await genericSearch(params);
    return new Page<Track>(searchResults.data, Track, 'tracks');
};

export const searchShows = async (
    query: string,
    options?: { market?: string; limit?: number; offset?: number }
): Promise<Page<ShowSimplified>> => {
    const params = { q: query, type: 'show', ...options };
    const searchResults = await genericSearch(params);
    return new Page<ShowSimplified>(
        searchResults.data,
        ShowSimplified,
        'shows'
    );
};

export const searchEpisodes = async (
    query: string,
    options?: { market?: string; limit?: number; offset?: number }
): Promise<Page<EpisodeSimplified>> => {
    const params = { q: query, type: 'episode', ...options };
    const searchResults = await genericSearch(params);
    return new Page<EpisodeSimplified>(
        searchResults.data,
        EpisodeSimplified,
        'episodes'
    );
};
