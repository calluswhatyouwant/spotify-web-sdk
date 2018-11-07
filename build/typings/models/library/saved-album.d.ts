import Album from '../album/album';
declare class SavedAlbum {
    addedAt: string;
    album: Album;
    constructor(json: any);
}
export default SavedAlbum;
