class PlaylistVersion {
    snapshotId: string;

    constructor(json: any) {
        this.snapshotId = json.snapshot_id;
    }
}

export default PlaylistVersion;
