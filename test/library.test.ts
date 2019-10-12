import { expect } from 'chai';
import nock from 'nock';

import {
    checkMatchingPagingObjectAttributes,
    checkMatchingAlbumAttributes,
    checkMatchingTrackAttributes,
} from './common/matching-attributes.test';

import {
    init,
    getCurrentUserSavedAlbums,
    SavedAlbum,
    getCurrentUserSavedTracks,
    SavedTrack,
} from '../src/lib';
import { savedAlbumsMock } from './mocks/library/saved-albums.mock';
import { savedTracksMock } from './mocks/library/saved-tracks.mock';

describe('Library requests', () => {
    beforeEach(() => {
        init({ token: 'SomeToken' });
    });

    describe('#getCurrentUserSavedAlbums()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me/albums')
                .reply(200, savedAlbumsMock);
        });

        it('response should match all paging object attributes', async () => {
            const savedAlbumsResponse = await getCurrentUserSavedAlbums();
            checkMatchingPagingObjectAttributes(
                savedAlbumsResponse,
                savedAlbumsMock
            );
        });

        it('response should match all album attributes', async () => {
            const savedAlbumsResponse = await getCurrentUserSavedAlbums();
            for (let i = 0; i < savedAlbumsResponse.items.length; i++) {
                const albumResponse: SavedAlbum = savedAlbumsResponse.items[i];
                const albumMock = savedAlbumsMock.items[i].album;
                checkMatchingAlbumAttributes(albumResponse.album, albumMock);
            }
        });

        it('response should match custom attributes', async () => {
            const savedAlbumsResponse = await getCurrentUserSavedAlbums();
            for (let i = 0; i < savedAlbumsResponse.items.length; i++) {
                const albumResponse: SavedAlbum = savedAlbumsResponse.items[i];
                const savedAlbumMock = savedAlbumsMock.items[i];
                expect(albumResponse.addedAt).to.be.equal(
                    savedAlbumMock.added_at
                );
            }
        });
    });

    describe('#getCurrentUserSavedTracks()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me/tracks')
                .reply(200, savedTracksMock);
        });

        it('response should match all paging object attributes', async () => {
            const savedTracksResponse = await getCurrentUserSavedTracks();
            checkMatchingPagingObjectAttributes(
                savedTracksResponse,
                savedTracksMock
            );
        });

        it('response should match all track attributes', async () => {
            const savedTracksResponse = await getCurrentUserSavedTracks();
            for (let i = 0; i < savedTracksResponse.items.length; i++) {
                const trackResponse: SavedTrack = savedTracksResponse.items[i];
                const trackMock = savedTracksMock.items[i].track;
                checkMatchingTrackAttributes(trackResponse.track, trackMock);
            }
        });

        it('response should match custom attributes', async () => {
            const savedTracksResponse = await getCurrentUserSavedTracks();
            for (let i = 0; i < savedTracksResponse.items.length; i++) {
                const trackResponse: SavedTrack = savedTracksResponse.items[i];
                const savedTrackMock = savedTracksMock.items[i];
                expect(trackResponse.addedAt).to.be.equal(
                    savedTrackMock.added_at
                );
            }
        });
    });
});
