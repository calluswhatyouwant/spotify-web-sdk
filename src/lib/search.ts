import { getAxiosSpotifyInstance } from './driver';

import AlbumSimplified from './models/album/album-simplified';
import Artist from './models/artist/artist';
import Page from './models/paging/page';
import PlaylistSimplified from './models/playlist/playlist-simplified';
import Track from './models/track/track';

const genericSearch = async (params: {
    q: string;
    type: string;
    market?: string;
    limit?: number;
    offset?: number;
}) => {
    console.log(params.type);
    return getAxiosSpotifyInstance().get(`/search`, { params });
};

export const searchAlbums = async (
    query: string,
    options?: { market?: string; limit?: number; offset?: number }
) => {
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
) => {
    const params = { q: query, type: 'artist', ...options };
    const searchResults = await genericSearch(params);
    return new Page<Artist>(searchResults.data, Artist, 'artists');
};

export const searchPlaylists = async (
    query: string,
    options?: { market?: string; limit?: number; offset?: number }
) => {
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
) => {
    const params = { q: query, type: 'track', ...options };
    const searchResults = await genericSearch(params);
    return new Page<Track>(searchResults.data, Track, 'tracks');
};
