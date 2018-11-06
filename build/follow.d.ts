import Artist from './models/artist/artist';
export declare const getFollowedArtists: (limit?: number, after?: string | undefined) => Promise<Artist[]>;
export declare const isFollowing: (type: string, ids: string[]) => Promise<boolean[]>;
export declare const checkUsersFollowingPlaylist: (playlistId: string, ids: string[]) => Promise<boolean[]>;
