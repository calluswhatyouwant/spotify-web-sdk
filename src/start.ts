import SpotifyWebApi from './lib';

const main = async () => {
    SpotifyWebApi.init('YOUR TOKEN HERE');
    const track = await SpotifyWebApi.getTrack('11dFghVXANMlKmJXsNCbNl');
    console.log(track);
};

main();
