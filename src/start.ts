import * as spotify from './lib';

const main = async () => {
    spotify.init({
        token: 'YOUR TOKEN HERE',
    });
    const track = await spotify.getTrack('11dFghVXANMlKmJXsNCbNl');
    console.log(track);
};

main();
