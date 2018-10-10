import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';
declare class PublicUser {
    displayName: string;
    externalUrls: ExternalUrl;
    followers: Followers;
    href: string;
    id: string;
    images: Array<Image>;
    type: 'user';
    uri: string;
    constructor(json: any);
}
export default PublicUser;
