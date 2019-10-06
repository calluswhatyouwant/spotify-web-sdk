import nock from 'nock';

import { trackMock } from './mocks/tracks/track.mock';
import { severalTracksMock } from './mocks/tracks/several-tracks.mock';
import { checkMatchingTrackAttributes } from './common/matching-attributes.test';

import { init, getTrack, getSeveralTracks } from '../src/lib';

describe('Track requests', () => {
    beforeEach(() => {
        init({ token: 'SomeToken' });
    });

    describe('#getTrack()', () => {
        const trackId = '6HmBWGDgxHNlE3AvX5aNN5';
        const params = { market: 'BR' };

        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get(`/tracks/${trackId}`)
                .query(params)
                .reply(200, trackMock);
        });

        it('response should match all track attributes', async () => {
            const trackResponse = await getTrack(trackId, params);
            checkMatchingTrackAttributes(trackResponse, trackMock);
        });
    });

    describe('#getSeveralTracks()', () => {
        const tracks = ['6HmBWGDgxHNlE3AvX5aNN5', '1ppv75fAfo5i5vB3e7kp4l'];
        const params = { ids: tracks.join(','), market: 'BR' };

        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get(`/tracks`)
                .query(params)
                .reply(200, severalTracksMock);
        });

        it('response should match all tracks attributes', async () => {
            const tracksResponse = await getSeveralTracks(tracks, params);
            for (let i = 0; i < tracksResponse.length; i += 1) {
                const trackResponse = tracksResponse[i];
                const trackMock = severalTracksMock.tracks[i];
                checkMatchingTrackAttributes(trackResponse, trackMock);
            }
        });
    });
});
