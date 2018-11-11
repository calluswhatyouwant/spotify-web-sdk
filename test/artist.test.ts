import nock from 'nock';

import { artistMock } from './mocks/artist.response';
import { checkMatchingArtistAttributes } from './common/matching-attributes.test';

import { init, getArtist } from '../src/lib';

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
});
