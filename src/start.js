/* @flow */

import spotifyWebApiSdk from './lib';

const main = async () => {
    spotifyWebApiSdk.driver.login('YOUR TOKEN HERE');
    const track = await spotifyWebApiSdk.tracks
        .getTrack('11dFghVXANMlKmJXsNCbNl');
    console.log(track);
};

main();
