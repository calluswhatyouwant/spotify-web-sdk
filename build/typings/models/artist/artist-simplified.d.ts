import ExternalUrl from '../common/external-url';
declare class ArtistSimplified {
    externalUrls: ExternalUrl;
    href: string;
    id: string;
    name: string;
    type: 'artist';
    uri: string;
    constructor(json: any);
}
export default ArtistSimplified;
