import _ from 'lodash';

import AlbumSimplified from './album-simplified';
import Page from '../paging/page';
import TrackSimplified from '../track/track-simplified';

class Album extends AlbumSimplified {
    copyrights: any[];

    externalIds: any;

    genres: string[];

    label: string;

    popularity: number;

    totalTracks: number;

    tracks: Page<TrackSimplified>;

    constructor(json: any) {
        super(json);
        this.copyrights = json.copyrights;
        this.externalIds = json.external_ids;
        this.genres = json.genres;
        this.label = json.label;
        this.popularity = json.popularity;
        this.totalTracks = json.total_tracks;
        this.tracks = new Page<TrackSimplified>(json.tracks, TrackSimplified);
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
        return _.sum(tracks.map(track => track.durationMs));
    }
}

export default Album;
