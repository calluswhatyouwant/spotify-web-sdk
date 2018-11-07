import ExternalUrl from '../common/external-url';
declare class TrackLink {
    externalUrls: ExternalUrl;
    href: string;
    id: string;
    type: 'track';
    uri: string;
    constructor(json: any);
}
export default TrackLink;
