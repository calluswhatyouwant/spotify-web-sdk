import * as spotify from './lib';

const main = async () => {
    spotify.init({
        token: 'YOUR TOKEN HERE',
        refreshToken: 'kikiki',
        refreshTokenFunction: () => Promise.resolve('YOUR TOKEN THERE'),
    });
    const track = await spotify.getTrack('11dFghVXANMlKmJXsNCbNl');
    console.log(track);
};

main();
