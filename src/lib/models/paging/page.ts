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

    constructor(json: any, t: new (json: any) => T) {
        this.t = t;
        this.href = json.href.split('?')[0];
        this.items = json.items.map((json: any) => new t(json));
        this.limit = json.limit;
        this.next = json.next ? json.next.split('?')[1] : null;
        this.offset = json.offset;
        this.previous = json.previous ? json.previous.split('?')[1] : null;
        this.total = json.total;
    }

    private getAxiosPageInstance() {
        const instance = getAxiosSpotifyInstance();
        instance.defaults.baseURL = this.href;
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
        const params = { limit: this.limit, offset: this.offset + this.limit };
        const response = await this.getAxiosPageInstance().get('/', { params });
        return new Page<T>(response.data, this.t);
    }

    async getPreviousPage(forceLimit = false) {
        if (!this.hasPrevious()) throw new Error('There are no more pages');
        let limit = this.limit;
        if (this.offset < this.limit && !forceLimit) {
            limit = this.offset;
        }
        const params = { limit, offset: 0 };
        try {
            const response = await this.getAxiosPageInstance().get('/', {
                params,
            });
            return new Page<T>(response.data, this.t);
        } catch (e) {
            console.log(e);
        }
    }
}

export default Page;
