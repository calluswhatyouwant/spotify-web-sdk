import nock from 'nock';

import { categoryMock } from './mocks/browse/category.mock';
import { categoryPlaylistsMock } from './mocks/browse/category-playlists.mock';
import { categoriesMock } from './mocks/browse/categories.mock';
import {
    checkMatchingCategoryAttributes,
    checkMatchingPagingObjectAttributes,
    checkMatchingTrackSimplifiedAttributes,
    checkMatchingRecommendationSeedAttributes,
} from './common/matching-attributes.test';

import {
    init,
    getCategory,
    getCategoryPlaylists,
    getCategories,
    getFeaturedPlaylists,
    getNewReleases,
    getRecommendations,
} from '../src/lib';
import { featuredPlaylistsMock } from './mocks/browse/featured-playlists.mock';
import { newReleasesMock } from './mocks/browse/new-releases.mock';
import { recommendationsMock } from './mocks/browse/recommendations.mock';

describe('Browse requests', () => {
    beforeEach(() => {
        init({ token: 'SomeToken' });
    });

    describe('#getCategory()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/browse/categories/party')
                .reply(200, categoryMock);
        });

        it('response should match all category attributes', async () => {
            const categoryResponse = await getCategory('party');
            checkMatchingCategoryAttributes(categoryResponse, categoryMock);
        });
    });

    describe('#getCategoryPlaylists()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/browse/categories/party/playlists')
                .query({ country: 'BR', offset: 0, limit: 2 })
                .reply(200, categoryPlaylistsMock);
        });

        it('response should match all paging object attributes', async () => {
            const categoryPlaylistsResponse = await getCategoryPlaylists(
                'party',
                { country: 'BR', offset: 0, limit: 2 }
            );
            checkMatchingPagingObjectAttributes(
                categoryPlaylistsResponse,
                categoryPlaylistsMock.playlists
            );
        });
    });

    describe('#getCategories()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/browse/categories')
                .query({ offset: 0, limit: 5 })
                .reply(200, categoriesMock);
        });

        it('response should match all paging object attributes', async () => {
            const categoriesResponse = await getCategories({
                offset: 0,
                limit: 5,
            });
            checkMatchingPagingObjectAttributes(
                categoriesResponse,
                categoriesMock.categories
            );
        });
    });

    describe('#getFeaturedPlaylists()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/browse/featured-playlists')
                .query({ country: 'SE', offset: 0, limit: 2 })
                .reply(200, featuredPlaylistsMock);
        });

        it('response should match all paging object attributes', async () => {
            const featuredPlaylistsResponse = await getFeaturedPlaylists({
                country: 'SE',
                offset: 0,
                limit: 2,
            });
            checkMatchingPagingObjectAttributes(
                featuredPlaylistsResponse,
                featuredPlaylistsMock.playlists
            );
        });
    });

    describe('#getNewReleases()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/browse/new-releases')
                .query({ country: 'SE', offset: 0, limit: 20 })
                .reply(200, newReleasesMock);
        });

        it('response should match all paging object attributes', async () => {
            const newReleasesResponse = await getNewReleases({
                country: 'SE',
                offset: 0,
                limit: 20,
            });
            checkMatchingPagingObjectAttributes(
                newReleasesResponse,
                newReleasesMock.albums
            );
        });
    });

    describe('#getRecommendations()', () => {
        const params = {
            seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
            seed_tracks: '0c6xIDDpzE81m2q797ordA',
            min_energy: 0.4,
            min_popularity: 50,
            market: 'US',
        };

        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/recommendations')
                .query(params)
                .reply(200, recommendationsMock);
        });

        it('response should match all tracks attributes', async () => {
            const recommendationsResponse = await getRecommendations(params);
            for (let i = 0; i < recommendationsResponse.tracks.length; i++) {
                const trackResponse = recommendationsResponse.tracks[i];
                const trackMock = recommendationsMock.tracks[i];
                checkMatchingTrackSimplifiedAttributes(
                    trackResponse,
                    trackMock
                );
            }
        });

        it('response should match all seeds attributes', async () => {
            const recommendationsResponse = await getRecommendations(params);
            for (let i = 0; i < recommendationsResponse.seeds.length; i++) {
                const seedResponse = recommendationsResponse.seeds[i];
                const seedMock = recommendationsMock.seeds[i];
                checkMatchingRecommendationSeedAttributes(
                    seedResponse,
                    seedMock
                );
            }
        });
    });
});
