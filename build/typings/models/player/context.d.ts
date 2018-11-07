import ExternalUrl from '../common/external-url';
declare class Context {
    type: string;
    href: string;
    externalUrls: ExternalUrl;
    uri: string;
    constructor(json: any);
}
export default Context;
