import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';
declare class Artist {
    externalUrls: ExternalUrl;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: 'artist';
    uri: string;
    constructor(json: any);
}
export default Artist;
