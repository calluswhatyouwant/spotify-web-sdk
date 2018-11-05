declare const _default: {
    getArtist: (id: string | number) => Promise<import("./models/artist/artist").default>;
    getSeveralArtists: (ids: number[] | string[]) => Promise<any>;
    getArtistAlbums: (id: string | number) => Promise<any>;
    getRelatedArtists: (id: string | number) => Promise<any>;
    getSeveralTracks: (ids: number[] | string[]) => Promise<any>;
    getTrack: (id: string | number) => Promise<import("./models/track/track").default>;
    init: (token: string) => void;
    getToken: () => string;
    getAxiosSpotifyInstance: () => import("axios").AxiosInstance;
};
export default _default;
