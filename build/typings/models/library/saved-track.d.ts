import Track from '../track/track';
declare class SavedTrack {
    addedAt: string;
    track: Track;
    constructor(json: any);
}
export default SavedTrack;
