import { expect } from 'chai';
import nock from 'nock';
import { init, getCurrentUserPlaylists } from '../src/lib';
import { userPlaylistsMock } from './mocks/playlist/user-playlist';
import {
    checkMatchingAlbumAttributes,
    checkMatchingPagingObjectAttributes,
} from './common/matching-attributes.test';

import Playlist from '../src/lib/models/playlist/playlist';

describe('Library requests', () => {
    beforeEach(() => {
        init({ token: 'SomeToken' });
    });

    describe('#getCurrentUserPlaylists()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me/playlists')
                .reply(200, userPlaylistsMock);
        });

        // it('response should match all album attributes', async () => {
        //     const playlistResponse = await getCurrentUserPlaylists();
        //     checkMatchingAlbumAttributes(playlistResponse, userPlaylistsMock);
        // });
    });
});
