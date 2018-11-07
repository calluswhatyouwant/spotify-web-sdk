import Track from '../track/track';
import PublicUser from '../user/user-public';
declare class PlaylistTrack {
    addedAt: string;
    addedBy: PublicUser;
    isLocal: boolean;
    track: Track;
    constructor(json: any);
}
export default PlaylistTrack;
