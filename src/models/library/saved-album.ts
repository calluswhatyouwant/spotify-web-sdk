import Album from '../album/album';

class SavedAlbum {
    addedAt: string;

    // Timestamp
    album: Album;

    constructor(json: any) {
        this.addedAt = json.added_at;
        this.album = new Album(json.album);
    }
}

export default SavedAlbum;
