import nock from 'nock';

import { artistMock } from './mocks/artist.response';
import { severalArtistsMock } from './mocks/several-artists.response';
import { artistAlbumsMock } from './mocks/artist-albums.response';
import {
    checkMatchingArtistAttributes,
    checkMatchingPagingObjectAttributes,
} from './common/matching-attributes.test';

import { init, getArtist } from '../src/lib';
import { getSeveralArtists, getArtistAlbums } from './../src/lib/artists';

describe('Artist requests', () => {
    beforeEach(() => {
        init('SomeToken');
    });

    describe('#getArtist()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/artists/1WgXqy2Dd70QQOU7Ay074N')
                .reply(200, artistMock);
        });

        it('response should match all artist attributes', async () => {
            const artistResponse = await getArtist('1WgXqy2Dd70QQOU7Ay074N');
            checkMatchingArtistAttributes(artistResponse, artistMock);
        });
    });

    describe('#getSeveralArtists()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/artists')
                .query({
                    ids: ['5WUlDfRSoLAfcVSX1WnrxN', '1WgXqy2Dd70QQOU7Ay074N'],
                })
                .reply(200, severalArtistsMock);
        });

        it('response should match all artists attributes', async () => {
            const severalArtistsResponse = await getSeveralArtists([
                '5WUlDfRSoLAfcVSX1WnrxN',
                '1WgXqy2Dd70QQOU7Ay074N',
            ]);

            for (let i = 0; i < severalArtistsResponse.length; i++) {
                const artistResponse = severalArtistsResponse[i];
                const artistMock = severalArtistsMock.artists[i];
                checkMatchingArtistAttributes(artistResponse, artistMock);
            }
        });
    });

    describe('#getArtistAlbums()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/artists/1WgXqy2Dd70QQOU7Ay074N/albums')
                .reply(200, artistAlbumsMock);
        });

        it('response should match all artist attributes', async () => {
            const artistAlbumsResponse = await getArtistAlbums(
                '1WgXqy2Dd70QQOU7Ay074N'
            );
            checkMatchingPagingObjectAttributes(
                artistAlbumsResponse,
                artistAlbumsMock
            );
        });
    });
});
