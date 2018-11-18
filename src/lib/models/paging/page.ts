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
        if (wrapper) json = json[wrapper];
        this.t = t;
        this.href = json.href;
        this.items = json.items.map((json: any) => new t(json));
        this.limit = json.limit;
        this.next = json.next ? json.next.split('?')[1] : null;
        this.offset = json.offset;
        this.previous = json.previous ? json.previous.split('?')[1] : null;
        this.total = json.total;
    }

    get queryParams(): any {
        const queryString = this.href.split('?')[1];
        const paramsString = queryString.split('&');
        let queryParams: any = {};

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

    async getPreviousPage(forceLimit = false) {
        if (!this.hasPrevious()) throw new Error('There are no more pages');
        let limit = this.limit;
        if (this.offset < this.limit && !forceLimit) {
            limit = this.offset;
        }
        const params = { ...this.queryParams, limit, offset: 0 };
        const response = await this.getAxiosPageInstance().get('/', {
            params,
        });
        return new Page<T>(response.data, this.t, this.wrapper);
    }
}

export default Page;
