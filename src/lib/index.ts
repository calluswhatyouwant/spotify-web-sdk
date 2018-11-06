import * as driver from './driver';
import * as tracks from './tracks';
import * as follow from './follow';
import * as artists from './artists';
import * as albums from './albums';
import * as playlists from './playlists';

export default {
    ...driver,
    ...tracks,
    ...follow,
    ...artists,
    ...playlists,
    ...albums,
};
