import { getAxiosSpotifyInstance } from '../../driver';

interface Cursors {
    after: string;
    before: string;
}

export interface RawCursorBasedPage {
    href: string;
    items: any[];
    limit: number;
    next: string;
    cursors: Cursors;
}

class CursorBasedPage<T> {
    private t: new (json: any) => T;
    href: string;
    items: T[];
    limit: number;
    next: string | null;
    cursors: Cursors;

    constructor(raw: RawCursorBasedPage, t: new (json: any) => T) {
        this.t = t;
        this.href = raw.href;
        this.items = raw.items.map(rawItem => new t(rawItem));
        this.limit = raw.limit;
        this.next = raw.next ? raw.next.split('?')[1] : null;
        this.cursors = raw.cursors;
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

    async getNextPage() {
        if (!this.hasNext()) throw new Error('There are no more pages');
        const response = await getAxiosSpotifyInstance().get(
            `${this.getPagingUrl()}?${this.next}`
        );
        return new CursorBasedPage<T>(response.data, this.t);
    }
}

export default CursorBasedPage;
