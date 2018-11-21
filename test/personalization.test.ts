import nock from 'nock';

import { topArtistsMock } from './mocks/personalization/top-artists.mock';
import { topTracksMock } from './mocks/personalization/top-tracks.mock';
import { checkMatchingPagingObjectAttributes } from './common/matching-attributes.test';

import {
    init,
    getCurrentUserTopArtists,
    getCurrentUserTopTracks,
} from '../src/lib';

describe('Personalization requests', () => {
    beforeEach(() => {
        init('SomeToken');
    });

    describe('#getCurrentUserTopArtists()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me/top/artists')
                .query({ limit: 2 })
                .reply(200, topArtistsMock);
        });

        it('response should match all paging object attributes', async () => {
            const topArtistsResponse = await getCurrentUserTopArtists({
                limit: 2,
            });
            checkMatchingPagingObjectAttributes(
                topArtistsResponse,
                topArtistsMock
            );
        });
    });

    describe('#getCurrentUserTopTracks()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me/top/tracks')
                .query({ limit: 2 })
                .reply(200, topTracksMock);
        });

        it('response should match all paging object attributes', async () => {
            const topTracksResponse = await getCurrentUserTopTracks({
                limit: 2,
            });
            checkMatchingPagingObjectAttributes(
                topTracksResponse,
                topTracksMock
            );
        });
    });
});
