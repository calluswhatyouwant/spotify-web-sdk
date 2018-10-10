import Track from './models/track/track';
export declare const getSeveralTracks: (ids: (string | number)[]) => Promise<any>;
export declare const getTrack: (id: string | number) => Promise<Track>;
