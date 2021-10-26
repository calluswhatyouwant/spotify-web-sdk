import CurrentlyPlaying, { RawCurrentlyPlaying } from './currently-playing';
import Device, { RawDevice } from './device';

export interface RawCurrentlyPlayingContext extends RawCurrentlyPlaying {
    device: RawDevice;
    repeat_state: string;
    shuffle_state: boolean;
}

class CurrentlyPlayingContext extends CurrentlyPlaying {
    device: Device;
    repeatState: string;
    shuffleState: boolean;

    constructor(raw: RawCurrentlyPlayingContext) {
        super(raw);
        this.device = new Device(raw.device);
        this.repeatState = raw.repeat_state;
        this.shuffleState = raw.shuffle_state;
    }
}

export default CurrentlyPlayingContext;
