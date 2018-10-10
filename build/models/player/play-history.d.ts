import Context from './context';
import Track from '../track/track';
declare class PlaylistTrack {
    track: Track;
    playedAt: string;
    context: Context;
    constructor(json: any);
}
export default PlaylistTrack;
