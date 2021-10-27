export interface RawDevice {
    id: string;
    is_active: boolean;
    is_private_session: boolean;
    is_restricted: boolean;
    name: string;
    type: string;
    volume_percent: number;
}

class Device {
    id: string;
    isActive: boolean;
    isPrivateSession: boolean;
    isRestricted: boolean;
    name: string;
    type: string;
    volumePercent: number;

    constructor(raw: RawDevice) {
        this.id = raw.id;
        this.isActive = raw.is_active;
        this.isPrivateSession = raw.is_private_session;
        this.isRestricted = raw.is_restricted;
        this.name = raw.name;
        this.type = raw.type;
        this.volumePercent = raw.volume_percent;
    }
}

export default Device;
