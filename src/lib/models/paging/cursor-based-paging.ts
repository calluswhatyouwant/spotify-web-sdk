import Cursor from './cursor';

class CursorPaging<T> {
    href: string;

    items: T[];

    limit: number;

    next: string;

    cursors: Cursor;

    total: number;

    constructor(json: any) {
        this.href = json.href;
        this.items = json.items;
        this.limit = json.limit;
        this.next = json.next;
        this.cursors = new Cursor(json.cursors);
        this.total = json.total;
    }
}

export default CursorPaging;
