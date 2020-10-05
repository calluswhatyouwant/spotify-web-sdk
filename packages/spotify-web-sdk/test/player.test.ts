import nock from 'nock';

import { currentlyPlayingMock } from './mocks/player/currently-playing.mock';
import { recentlyPlayedTracksMock } from './mocks/player/recently-played-tracks.mock';
import {
    checkMatchingCurrentlyPlayingAttributes,
    checkMatchingCursorBasedPageAttributes,
} from './common/matching-attributes.test';

import {
    init,
    getCurrentUserRecentlyPlayedTracks,
    getCurrentUserCurrentlyPlayingTrack,
    seekToPositionInCurrentlyPlayingTrack,
    pauseUserPlayback,
    setRepeatModeOnUserPlayback,
    setVolumeForUserPlayback,
    startUserPlayback,
    toggleShuffleForUserPlayback,
    transferUserPlayback,
    skipUserPlaybackToNextTrack,
    skipUserPlaybackToPreviousTrack,
} from '../src/lib';
import { expect } from 'chai';

describe('Player requests', () => {
    beforeEach(() => {
        init({ token: 'SomeToken' });
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

    describe('#pauseUserPlayback()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .put('/me/player/pause')
                .query({ device_id: 'device' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const response = await pauseUserPlayback({
                deviceId: 'device',
            });
            expect(response).to.be.empty;
        });
    });

    describe('#seekToPositionInCurrentlyPlayingTrack()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .put('/me/player/seek')
                .query({ position_ms: 1234, device_id: 'device' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const response = await seekToPositionInCurrentlyPlayingTrack(1234, {
                deviceId: 'device',
            });
            expect(response).to.be.empty;
        });
    });

    describe('#setRepeatModeOnUserPlayback()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .put('/me/player/repeat')
                .query({ state: 'track', device_id: 'device' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const response = await setRepeatModeOnUserPlayback('track', {
                deviceId: 'device',
            });
            expect(response).to.be.empty;
        });
    });

    describe('#setVolumeForUserPlayback()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .put('/me/player/volume')
                .query({ volume_percent: 13, device_id: 'device' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const response = await setVolumeForUserPlayback(13, {
                deviceId: 'device',
            });
            expect(response).to.be.empty;
        });
    });

    describe('#startUserPlayback()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .put('/me/player/play', {
                    context_uri: 'spotify:album:1Je1IMUlBXcx1Fz0WE7oPT',
                    uris: [
                        'spotify:track:4iV5W9uYEdYUVa79Axb7Rh',
                        'spotify:track:1301WleyT98MSxVHPZCA6M',
                    ],
                    offset: { position: 5 },
                    position_ms: 1234,
                })
                .query({ device_id: 'device' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const response = await startUserPlayback({
                contextUri: 'spotify:album:1Je1IMUlBXcx1Fz0WE7oPT',
                uris: [
                    'spotify:track:4iV5W9uYEdYUVa79Axb7Rh',
                    'spotify:track:1301WleyT98MSxVHPZCA6M',
                ],
                offset: { position: 5 },
                positionMs: 1234,
                deviceId: 'device',
            });
            expect(response).to.be.empty;
        });
    });

    describe('#toggleShuffleForUserPlayback()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .put('/me/player/shuffle')
                .query({ state: true, device_id: 'device' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const response = await toggleShuffleForUserPlayback(true, {
                deviceId: 'device',
            });
            expect(response).to.be.empty;
        });
    });

    describe('#transferUserPlayback()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .put('/me/player', { device_ids: ['device1'], play: true })
                .reply(204);
        });

        it('response should be empty', async () => {
            const response = await transferUserPlayback(['device1'], {
                play: true,
            });
            expect(response).to.be.empty;
        });
    });

    describe('#skipUserPlaybackToNextTrack()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .post('/me/player/next')
                .query({ device_id: 'device' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const response = await skipUserPlaybackToNextTrack({
                deviceId: 'device',
            });
            expect(response).to.be.empty;
        });
    });

    describe('#skipUserPlaybackToPreviousTrack()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .post('/me/player/previous')
                .query({ device_id: 'device' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const response = await skipUserPlaybackToPreviousTrack({
                deviceId: 'device',
            });
            expect(response).to.be.empty;
        });
    });
});
