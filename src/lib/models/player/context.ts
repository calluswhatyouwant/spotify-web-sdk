class Context {
    type: string;

    href: string;

    externalUrls: any;

    uri: string;

    constructor(json: any) {
        this.type = json.type;
        this.href = json.href;
        this.externalUrls = json.external_urls;
        this.uri = json.uri;
    }
}

export default Context;
