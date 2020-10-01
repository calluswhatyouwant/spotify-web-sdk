import differenceBy from 'lodash.differenceby';
import intersectionBy from 'lodash.intersectionby';

import AlbumSimplified from '../album/album-simplified';
import ArtistSimplified from '../artist/artist-simplified';
import TrackSimplified from './track-simplified';

class Track extends TrackSimplified {
    album: AlbumSimplified;

    externalIds: any;

    popularity: number;

    constructor(json: any) {
        super(json);
        this.album = new AlbumSimplified(json.album);
        this.externalIds = json.external_ids;
        this.popularity = json.popularity;
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
