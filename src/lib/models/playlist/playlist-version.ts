export interface RawPlaylistVersion {
    snapshot_id: string;
}

class PlaylistVersion {
    snapshotId: string;

    constructor(raw: RawPlaylistVersion) {
        this.snapshotId = raw.snapshot_id;
    }
}

export default PlaylistVersion;
