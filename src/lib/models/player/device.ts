class Device {
    id: string;

    isActive: boolean;

    isPrivateSession: boolean;

    isRestricted: boolean;

    name: string;

    type: string;

    volumePercent: number;

    constructor(json: any) {
        this.id = json.id;
        this.isActive = json.is_active;
        this.isPrivateSession = json.is_private_session;
        this.isRestricted = json.is_restricted;
        this.name = json.name;
        this.type = json.type;
        this.volumePercent = json.volume_percent;
    }
}

export default Device;
