import SpotifyWebApiSdk from './lib';

const main = async () => {
    SpotifyWebApiSdk.driver.login('YOUR TOKEN HERE');
    const track = await SpotifyWebApiSdk.tracks
        .getTrack('11dFghVXANMlKmJXsNCbNl');
    console.log(track);
};

main();
