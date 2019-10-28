import { expect } from 'chai';
import nock from 'nock';

import { followedArtistsMock } from './mocks/follow/followed-artists.mock';
import { checkMatchingArtistAttributes } from './common/matching-attributes.test';

import {
    init,
    isFollowing,
    checkUsersFollowingPlaylist,
    getFollowedArtists,
    followArtistsOrUsers,
    followPlaylist,
    unfollowArtistsOrUsers,
    unfollowPlaylist,
} from '../src/lib';

describe('Follow requests', () => {
    beforeEach(() => {
        init({ token: 'SomeToken' });
    });

    describe('#isFollowing()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me/following/contains')
                .query({ type: 'user', ids: '12180557353' })
                .reply(200, [true]);
        });

        it('response should be true if user is followed', async () => {
            const followingResponse = await isFollowing('user', [
                '12180557353',
            ]);
            expect(followingResponse).to.be.eql([true]);
        });
    });

    describe('#checkUsersFollowingPlaylist()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/playlists/5D0F6KQtqd5HuAVX2sOouy/followers/contains')
                .query({ ids: '12180557353' })
                .reply(200, [true]);
        });

        it('response should be true if playlist is followed', async () => {
            const followingPlaylistResponse = await checkUsersFollowingPlaylist(
                '5D0F6KQtqd5HuAVX2sOouy',
                ['12180557353']
            );
            expect(followingPlaylistResponse).to.be.eql([true]);
        });
    });

    describe('#getFollowedArtists()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me/following')
                .query({ type: 'artist', limit: 20 })
                .reply(200, followedArtistsMock);
        });

        it('response should match all followed artists attributes', async () => {
            const followedArtistsResponse = await getFollowedArtists({
                limit: 20,
            });
            for (let i = 0; i < followedArtistsResponse.length; i += 1) {
                const artistResponse = followedArtistsResponse[i];
                const artistMock = followedArtistsMock.artists.items[i];
                checkMatchingArtistAttributes(artistResponse, artistMock);
            }
        });
    });

    describe('#followArtistsOrUsers()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .put('/me/following', { ids: ['12180557353'] })
                .query({ type: 'user' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const followArtistOrUsersResponse = await followArtistsOrUsers(
                ['12180557353'],
                'user'
            );
            expect(followArtistOrUsersResponse).to.be.empty;
        });
    });

    describe('#followPlaylist()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .put('/playlists/5D0F6KQtqd5HuAVX2sOouy/followers', {
                    public: true,
                })
                .reply(200);
        });

        it('response should be empty', async () => {
            const followPlaylistResponse = await followPlaylist(
                '5D0F6KQtqd5HuAVX2sOouy',
                true
            );
            expect(followPlaylistResponse).to.be.empty;
        });
    });

    describe('#unfollowArtistsOrUsers()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .delete('/me/following', { ids: ['12180557353'] })
                .query({ type: 'user' })
                .reply(204);
        });

        it('response should be empty', async () => {
            const unfollowArtistOrUsersResponse = await unfollowArtistsOrUsers(
                ['12180557353'],
                'user'
            );
            expect(unfollowArtistOrUsersResponse).to.be.empty;
        });
    });

    describe('#unfollowPlaylist()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .delete('/playlists/5D0F6KQtqd5HuAVX2sOouy/followers')
                .reply(200);
        });

        it('response should be empty', async () => {
            const unfollowPlaylistResponse = await unfollowPlaylist(
                '5D0F6KQtqd5HuAVX2sOouy'
            );
            expect(unfollowPlaylistResponse).to.be.empty;
        });
    });
});
