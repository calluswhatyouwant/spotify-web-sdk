import differenceBy from 'lodash.differenceby';
import intersectionBy from 'lodash.intersectionby';

import AlbumSimplified, { RawAlbumSimplified } from '../album/album-simplified';
import ArtistSimplified from '../artist/artist-simplified';
import ExternalIds, { RawExternalIds } from '../common/externalIds';
import TrackSimplified, { RawTrackSimplified } from './track-simplified';

export interface RawTrack extends RawTrackSimplified {
    album: RawAlbumSimplified;
    external_ids: RawExternalIds;
    popularity: number;
}

class Track extends TrackSimplified {
    album: AlbumSimplified;
    externalIds: ExternalIds;
    popularity: number;

    constructor(raw: RawTrack) {
        super(raw);
        this.album = new AlbumSimplified(raw.album);
        this.externalIds = raw.external_ids;
        this.popularity = raw.popularity;
    }

    get albumName() {
        return this.album.name;
    }

    get mainArtists(): ArtistSimplified[] {
        return intersectionBy(this.artists, this.album.artists, 'id');
    }

    get featuredArtists(): ArtistSimplified[] {
        return differenceBy(this.artists, this.album.artists, 'id');
    }

    get releaseYear() {
        return this.album.releaseYear;
    }
}

export default Track;
