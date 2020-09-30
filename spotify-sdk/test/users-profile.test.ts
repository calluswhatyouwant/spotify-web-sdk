import nock from 'nock';

import { userProfileMock } from './mocks/users-profile/user-profile.mock';
import { currentUserProfileMock } from './mocks/users-profile/current-user-profile.mock';
import {
    checkMatchingPrivateUserAttributes,
    checkMatchingPublicUserAttributes,
} from './common/matching-attributes.test';

import { init, getCurrentUserProfile, getUserProfile } from '../../src/lib';

describe('Users profile requests', () => {
    beforeEach(() => {
        init({ token: 'SomeToken' });
    });

    describe('#getCurrentUserProfile()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/me')
                .reply(200, currentUserProfileMock);
        });

        it('response should match all user attributes', async () => {
            const currentUserProfileResponse = await getCurrentUserProfile();
            checkMatchingPrivateUserAttributes(
                currentUserProfileResponse,
                currentUserProfileMock
            );
        });
    });

    describe('#getUserProfile()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/users/12180557353')
                .reply(200, userProfileMock);
        });

        it('response should match all user attributes', async () => {
            const userProfileResponse = await getUserProfile('12180557353');
            checkMatchingPublicUserAttributes(
                userProfileResponse,
                userProfileMock
            );
        });
    });
});
