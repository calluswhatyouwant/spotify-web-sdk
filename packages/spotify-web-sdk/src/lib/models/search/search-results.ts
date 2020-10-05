import Page from '../paging/page';
import AlbumSimplified from '../album/album-simplified';
import Artist from '../artist/artist';
import EpisodeSimplified from '../episode/episode-simplified';
import PlaylistSimplified from '../playlist/playlist-simplified';
import ShowSimplified from '../show/show-simplified';
import Track from '../track/track';

class SearchResults {
    albums?: Page<AlbumSimplified>;
    artists?: Page<Artist>;
    playlists?: Page<PlaylistSimplified>;
    tracks?: Page<Track>;
    episodes?: Page<EpisodeSimplified>;
    shows?: Page<ShowSimplified>;

    constructor(json: any) {
        if (json.albums) {
            this.albums = new Page<AlbumSimplified>(
                json,
                AlbumSimplified,
                'albums'
            );
        }
        if (json.artists) {
            this.artists = new Page<Artist>(json, Artist, 'artists');
        }
        if (json.playlists) {
            this.playlists = new Page<PlaylistSimplified>(
                json,
                PlaylistSimplified,
                'playlists'
            );
        }
        if (json.tracks) {
            this.tracks = new Page<Track>(json, Track, 'tracks');
        }
        if (json.episodes) {
            this.episodes = new Page<EpisodeSimplified>(
                json,
                EpisodeSimplified,
                'episodes'
            );
        }
        if (json.shows) {
            this.shows = new Page<ShowSimplified>(
                json,
                ShowSimplified,
                'shows'
            );
        }
    }
}

export default SearchResults;
