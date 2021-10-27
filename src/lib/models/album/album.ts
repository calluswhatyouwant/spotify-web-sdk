import AlbumSimplified, { RawAlbumSimplified } from './album-simplified';
import Page, { RawPage } from '../paging/page';
import TrackSimplified from '../track/track-simplified';
import Copyright, { RawCopyright } from '../common/copyright';
import ExternalIds, { RawExternalIds } from '../common/externalIds';

export interface RawAlbum extends RawAlbumSimplified {
    copyrights: RawCopyright[];
    external_ids: RawExternalIds;
    genres: string[];
    label: string;
    popularity: number;
    total_tracks: number;
    tracks: RawPage;
}

class Album extends AlbumSimplified {
    copyrights: Copyright[];
    externalIds: ExternalIds;
    genres: string[];
    label: string;
    popularity: number;
    totalTracks: number;
    tracks: Page<TrackSimplified>;

    constructor(raw: RawAlbum) {
        super(raw);
        this.copyrights = raw.copyrights;
        this.externalIds = raw.external_ids;
        this.genres = raw.genres;
        this.label = raw.label;
        this.popularity = raw.popularity;
        this.totalTracks = raw.total_tracks;
        this.tracks = new Page<TrackSimplified>(raw.tracks, TrackSimplified);
    }

    async getAllTracks(): Promise<TrackSimplified[]> {
        return this.getAllTracksRecursive([], this.tracks);
    }

    private async getAllTracksRecursive(
        tracks: TrackSimplified[],
        page: Page<TrackSimplified>
    ): Promise<TrackSimplified[]> {
        if (page.hasNext()) {
            const nextPage = await page.getNextPage();
            return this.getAllTracksRecursive(
                tracks.concat(page.items),
                nextPage
            );
        }

        return tracks.concat(page.items);
    }

    async getDurationMs(): Promise<number> {
        const tracks = await this.getAllTracks();
        return tracks
            .map(track => track.durationMs)
            .reduce((duration1, duration2) => duration1 + duration2, 0);
    }
}

export default Album;
