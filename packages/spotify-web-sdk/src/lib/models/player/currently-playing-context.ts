import CurrentlyPlaying from './currently-playing';
import Device from './device';

class CurrentlyPlayingContext extends CurrentlyPlaying {
    device: Device;
    repeatState: string;
    shuffleState: boolean;

    constructor(json: any) {
        super(json);
        this.device = new Device(json.device);
        this.repeatState = json.repeat_state;
        this.shuffleState = json.shuffle_state;
    }
}

export default CurrentlyPlayingContext;
