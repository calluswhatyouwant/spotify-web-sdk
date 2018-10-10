import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';
declare class Artist {
    externalUrls: ExternalUrl;
    followers: Followers;
    genres: Array<string>;
    href: string;
    id: string;
    images: Array<Image>;
    name: string;
    popularity: number;
    type: 'artist';
    uri: string;
    constructor(json: any);
}
export default Artist;
