import { getAxiosSpotifyInstance } from './driver';

import PrivateUser from './models/user/user-private';
import PublicUser from './models/user/user-public';

export const getCurrentUserProfile = async () => {
    const response = await getAxiosSpotifyInstance().get('/me');
    return new PrivateUser(response.data);
};

export const getUserProfile = async (id: string) => {
    const response = await getAxiosSpotifyInstance().get(`/users/${id}`);
    return new PublicUser(response.data);
};
