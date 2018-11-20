import nock from 'nock';

import { currentlyPlayingMock } from './mocks/currently-playing.mock';
import { recentlyPlayedTracksMock } from './mocks/recently-played-tracks.mock';
import {
    checkMatchingCurrentlyPlayingAttributes,
    checkMatchingCursorBasedPageAttributes,
} from './common/matching-attributes.test';

import {
    init,
    getCurrentUserRecentlyPlayedTracks,
    getCurrentUserCurrentlyPlayingTrack,
} from '../src/lib';

describe('Player requests', () => {
    beforeEach(() => {
        init('SomeToken');
    });

    describe('#getCurrentUserRecentlyPlayedTracks()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me/player/recently-played')
                .query({ limit: 2 })
                .reply(200, recentlyPlayedTracksMock);
        });

        it('response should match all cursor-based paging attributes', async () => {
            const recentlyPlayedTracksResponse = await getCurrentUserRecentlyPlayedTracks(
                { limit: 2 }
            );
            checkMatchingCursorBasedPageAttributes(
                recentlyPlayedTracksResponse,
                recentlyPlayedTracksMock
            );
        });
    });

    describe('#getCurrentUserCurrentlyPlayingTrack()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me/player/currently-playing')
                .query({ market: 'BR' })
                .reply(200, currentlyPlayingMock);
        });

        it('response should match all currently playing object attributes', async () => {
            const currentlyPlayingResponse = await getCurrentUserCurrentlyPlayingTrack(
                { market: 'BR' }
            );
            checkMatchingCurrentlyPlayingAttributes(
                currentlyPlayingResponse,
                currentlyPlayingMock
            );
        });
    });
});
