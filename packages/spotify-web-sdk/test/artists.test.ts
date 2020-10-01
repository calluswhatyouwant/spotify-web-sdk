import nock from 'nock';

import { artistMock } from './mocks/artists/artist.mock';
import { severalArtistsMock } from './mocks/artists/several-artists.mock';
import { artistAlbumsMock } from './mocks/artists/artist-albums.mock';
import { artistRelatedArtistsMock } from './mocks/artists/artist-related-artists.mock';
import { artistTopTracksMock } from './mocks/artists/artist-top-tracks.mock';
import {
    checkMatchingArtistAttributes,
    checkMatchingPagingObjectAttributes,
    checkMatchingTrackAttributes,
} from './common/matching-attributes.test';

import {
    init,
    getArtist,
    getSeveralArtists,
    getArtistAlbums,
    getArtistRelatedArtists,
    getArtistTopTracks,
} from '../src/lib';
import Artist from '../src/lib/models/artist/artist';
import Track from '../src/lib/models/track/track';

describe('Artist requests', () => {
    beforeEach(() => {
        init({ token: 'SomeToken' });
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

            for (let i = 0; i < severalArtistsResponse.length; i += 1) {
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
                .query({ offset: 0, limit: 5, include_groups: '' })
                .reply(200, artistAlbumsMock);
        });

        it('response should match all albums attributes', async () => {
            const artistAlbumsResponse = await getArtistAlbums(
                '1WgXqy2Dd70QQOU7Ay074N',
                { offset: 0, limit: 5 }
            );
            checkMatchingPagingObjectAttributes(
                artistAlbumsResponse,
                artistAlbumsMock
            );
        });
    });

    describe('#getArtistRelatedArtists()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/artists/1WgXqy2Dd70QQOU7Ay074N/related-artists')
                .reply(200, artistRelatedArtistsMock);
        });

        it('response should match all artists attributes', async () => {
            const artistRelatedArtistsResponse = await getArtistRelatedArtists(
                '1WgXqy2Dd70QQOU7Ay074N'
            );

            for (let i = 0; i < artistRelatedArtistsResponse.length; i += 1) {
                const artistResponse: Artist = artistRelatedArtistsResponse[i];
                const artistMock: any = artistRelatedArtistsMock.artists[i];
                checkMatchingArtistAttributes(artistResponse, artistMock);
            }
        });
    });

    describe('#getArtistTopTracks()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/artists/1WgXqy2Dd70QQOU7Ay074N/top-tracks')
                .query({ market: 'BR' })
                .reply(200, artistTopTracksMock);
        });

        it('response should match all tracks attributes', async () => {
            const artistTopTracksResponse = await getArtistTopTracks(
                '1WgXqy2Dd70QQOU7Ay074N',
                'BR'
            );

            for (let i = 0; i < artistTopTracksResponse.length; i += 1) {
                const topTrackResponse: Track = artistTopTracksResponse[i];
                const topTrackMock = artistTopTracksMock.tracks[i];
                checkMatchingTrackAttributes(topTrackResponse, topTrackMock);
            }
        });
    });
});
