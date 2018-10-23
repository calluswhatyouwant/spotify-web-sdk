import ExternalUrl from '../common/external-url';
import Followers from '../common/followers';
import Image from '../common/image';
declare class PublicUser {
    birthdate: string;
    country: string;
    displayName: string;
    email: string;
    externalUrls: ExternalUrl;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: 'user';
    uri: string;
    constructor(json: any);
}
export default PublicUser;
