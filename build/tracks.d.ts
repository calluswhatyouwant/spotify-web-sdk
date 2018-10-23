import Track from './models/track/track';
export declare const getSeveralTracks: (ids: number[] | string[]) => Promise<any>;
export declare const getTrack: (id: string | number) => Promise<Track>;
