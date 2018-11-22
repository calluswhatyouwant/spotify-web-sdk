import nock from 'nock';

import { searchAlbumsMock } from './mocks/search/search-albums.mock';
import { searchArtistsMock } from './mocks/search/search-artists.mock';
import { searchPlaylistsMock } from './mocks/search/search-playlists.mock';
import { searchTracksMock } from './mocks/search/search-tracks.mock';
import { checkMatchingPagingObjectAttributes } from './common/matching-attributes.test';

import {
    init,
    searchAlbums,
    searchArtists,
    searchPlaylists,
    searchTracks,
} from '../src/lib';

describe('Search requests', () => {
    beforeEach(() => {
        init('SomeToken');
    });

    describe('#searchAlbums()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/search')
                .query({ q: 'sia', type: 'album', market: 'BR', limit: 2 })
                .reply(200, searchAlbumsMock);
        });

        it('response should match all paging object attributes', async () => {
            const searchAlbumsResponse = await searchAlbums('sia', {
                market: 'BR',
                limit: 2,
            });
            checkMatchingPagingObjectAttributes(
                searchAlbumsResponse,
                searchAlbumsMock.albums
            );
        });
    });

    describe('#searchArtists()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/search')
                .query({ q: 'sia', type: 'artist', market: 'BR', limit: 2 })
                .reply(200, searchArtistsMock);
        });

        it('response should match all paging object attributes', async () => {
            const searchArtistsResponse = await searchArtists('sia', {
                market: 'BR',
                limit: 2,
            });
            checkMatchingPagingObjectAttributes(
                searchArtistsResponse,
                searchArtistsMock.artists
            );
        });
    });

    describe('#searchPlaylists()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/search')
                .query({ q: 'sia', type: 'playlist', market: 'BR', limit: 2 })
                .reply(200, searchPlaylistsMock);
        });

        it('response should match all paging object attributes', async () => {
            const searchPlaylistsResponse = await searchPlaylists('sia', {
                market: 'BR',
                limit: 2,
            });
            checkMatchingPagingObjectAttributes(
                searchPlaylistsResponse,
                searchPlaylistsMock.playlists
            );
        });
    });

    describe('#searchTracks()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/search')
                .query({ q: 'sia', type: 'track', market: 'BR', limit: 2 })
                .reply(200, searchTracksMock);
        });

        it('response should match all paging object attributes', async () => {
            const searchTracksResponse = await searchTracks('sia', {
                market: 'BR',
                limit: 2,
            });
            checkMatchingPagingObjectAttributes(
                searchTracksResponse,
                searchTracksMock.tracks
            );
        });
    });
});
