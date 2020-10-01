import { getAxiosSpotifyInstance } from './driver';
import { PrivateUser, PublicUser } from './models';

export const getCurrentUserProfile = async (): Promise<PrivateUser> => {
    const response = await getAxiosSpotifyInstance().get('/me');
    return new PrivateUser(response.data);
};

export const getUserProfile = async (id: string): Promise<PublicUser> => {
    const response = await getAxiosSpotifyInstance().get(`/users/${id}`);
    return new PublicUser(response.data);
};
