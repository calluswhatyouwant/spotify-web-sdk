import { getAxiosSpotifyInstance } from '../../driver';

class CursorBasedPage<T> {
    private t: new (json: any) => T;
    href: string;
    items: T[];
    limit: number;
    next: string;
    cursors: any;
    total: number;

    constructor(json: any, t: new (json: any) => T) {
        this.t = t;
        this.href = json.href;
        this.items = json.items.map((json: any) => new t(json));
        this.limit = json.limit;
        this.next = json.next ? json.next.split('?')[1] : null;
        this.cursors = json.cursors;
        this.total = json.total;
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

    async getNextPage() {
        if (!this.hasNext()) throw new Error('There are no more pages');
        const response = await this.getAxiosPageInstance().get(`?${this.next}`);
        return new CursorBasedPage<T>(response.data, this.t);
    }
}

export default CursorBasedPage;
