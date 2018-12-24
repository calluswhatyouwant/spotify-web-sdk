import Page from '../paging/page';
import AlbumSimplified from '../album/album-simplified';
import Artist from '../artist/artist';
import PlaylistSimplified from '../playlist/playlist-simplified';
import Track from '../track/track';

class SearchResults {
    albums?: Page<AlbumSimplified>;
    artists?: Page<Artist>;
    playlists?: Page<PlaylistSimplified>;
    tracks?: Page<Track>;

    constructor(json: any) {
        if (json.albums)
            this.albums = new Page<AlbumSimplified>(
                json,
                AlbumSimplified,
                'albums'
            );
        if (json.artists)
            this.artists = new Page<Artist>(json, Artist, 'artists');
        if (json.playlists)
            this.playlists = new Page<PlaylistSimplified>(
                json,
                PlaylistSimplified,
                'playlists'
            );
        if (json.tracks) this.tracks = new Page<Track>(json, Track, 'tracks');
    }
}

export default SearchResults;
