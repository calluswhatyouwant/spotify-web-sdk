import { getAxiosSpotifyInstance } from '../../driver';

export interface RawPage {
    href: string;
    items: any[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}

export interface WrappedRawPage {
    [wrapper: string]: RawPage;
}

class Page<T> {
    private t: new (json: any) => T;
    href: string;
    items: T[];
    limit: number;
    private next: string | null;
    offset: number;
    private previous: string | null;
    total: number;
    wrapper?: string;

    constructor(
        raw: RawPage | WrappedRawPage,
        t: new (json: any) => T,
        wrapper?: string
    ) {
        this.wrapper = wrapper;

        let unwrappedRaw: RawPage;

        if (wrapper) {
            unwrappedRaw = (raw as WrappedRawPage)[wrapper];
        } else {
            unwrappedRaw = raw as RawPage;
        }

        this.t = t;
        this.href = unwrappedRaw.href;
        this.items = unwrappedRaw.items.map(rawItem => new t(rawItem));
        this.limit = unwrappedRaw.limit;
        this.next = unwrappedRaw.next ? unwrappedRaw.next.split('?')[1] : null;
        this.offset = unwrappedRaw.offset;
        this.previous = unwrappedRaw.previous
            ? unwrappedRaw.previous.split('?')[1]
            : null;
        this.total = unwrappedRaw.total;
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

    private getPagingUrl() {
        return this.href.split('?')[0];
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
        const response = await getAxiosSpotifyInstance().get(
            `${this.getPagingUrl()}/`,
            { params }
        );
        return new Page<T>(response.data, this.t, this.wrapper);
    }

    async getPreviousPage(includeRepeated = false) {
        if (!this.hasPrevious()) throw new Error('There are no more pages');
        let limit = this.limit;
        if (this.offset < this.limit && !includeRepeated) limit = this.offset;
        const offset = Math.max(this.offset - this.limit, 0);
        const params = { ...this.queryParams, limit, offset };
        const response = await getAxiosSpotifyInstance().get(
            `${this.getPagingUrl()}/`,
            {
                params,
            }
        );
        return new Page<T>(response.data, this.t, this.wrapper);
    }
}

export default Page;
