import { getAxiosSpotifyInstance } from '../../driver';

class Page<T> {
    private t: new (json: any) => T;

    href: string;

    items: T[];

    limit: number;

    private next: string;

    offset: number;

    private previous: string;

    total: number;

    wrapper?: string;

    constructor(json: any, t: new (json: any) => T, wrapper?: string) {
        this.wrapper = wrapper;
        let unwrappedJson = json;
        if (wrapper) unwrappedJson = unwrappedJson[wrapper];
        this.t = t;
        this.href = unwrappedJson.href;
        this.items = unwrappedJson.items.map((json: any) => new t(json));
        this.limit = unwrappedJson.limit;
        this.next = unwrappedJson.next
            ? unwrappedJson.next.split('?')[1]
            : null;
        this.offset = unwrappedJson.offset;
        this.previous = unwrappedJson.previous
            ? unwrappedJson.previous.split('?')[1]
            : null;
        this.total = unwrappedJson.total;
    }

    get queryParams(): any {
        const queryString = this.href.split('?')[1];
        const paramsString = queryString.split('&');
        const queryParams: any = {};

        for (const param of paramsString) {
            const [name, value] = param.split('=');
            queryParams[name] = value;
        }

        return queryParams;
    }

    private getAxiosPageInstance() {
        const instance = getAxiosSpotifyInstance();
        instance.defaults.baseURL = this.href.split('?')[0];
        return instance;
    }

    hasNext() {
        return Boolean(this.next);
    }

    hasPrevious() {
        return Boolean(this.previous);
    }

    async getNextPage() {
        if (!this.hasNext()) throw new Error('There are no more pages');
        const params = {
            ...this.queryParams,
            limit: this.limit,
            offset: this.offset + this.limit,
        };
        const response = await this.getAxiosPageInstance().get('/', { params });
        return new Page<T>(response.data, this.t, this.wrapper);
    }

    async getPreviousPage(includeRepeated = false) {
        if (!this.hasPrevious()) throw new Error('There are no more pages');
        let limit = this.limit;
        if (this.offset < this.limit && !includeRepeated) limit = this.offset;
        const offset = Math.max(this.offset - this.limit, 0);
        const params = { ...this.queryParams, limit, offset };
        const response = await this.getAxiosPageInstance().get('/', {
            params,
        });
        return new Page<T>(response.data, this.t, this.wrapper);
    }
}

export default Page;
