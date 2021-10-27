import Page, { WrappedRawPage } from '../paging/page';
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

    constructor(raw: WrappedRawPage) {
        if (raw.albums) {
            this.albums = new Page<AlbumSimplified>(
                raw,
                AlbumSimplified,
                'albums'
            );
        }
        if (raw.artists) {
            this.artists = new Page<Artist>(raw, Artist, 'artists');
        }
        if (raw.playlists) {
            this.playlists = new Page<PlaylistSimplified>(
                raw,
                PlaylistSimplified,
                'playlists'
            );
        }
        if (raw.tracks) {
            this.tracks = new Page<Track>(raw, Track, 'tracks');
        }
        if (raw.episodes) {
            this.episodes = new Page<EpisodeSimplified>(
                raw,
                EpisodeSimplified,
                'episodes'
            );
        }
        if (raw.shows) {
            this.shows = new Page<ShowSimplified>(raw, ShowSimplified, 'shows');
        }
    }
}

export default SearchResults;
