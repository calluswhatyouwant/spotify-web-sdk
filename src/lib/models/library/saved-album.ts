import Album, { RawAlbum } from '../album/album';

export interface RawSavedAlbum {
    added_at: string;
    album: RawAlbum;
}

class SavedAlbum {
    addedAt: string;
    album: Album;

    constructor(raw: RawSavedAlbum) {
        this.addedAt = raw.added_at;
        this.album = new Album(raw.album);
    }
}

export default SavedAlbum;
