class Paging<T> {
    href: string;

    items: T[];

    limit: number;

    next: string;

    offset: number;

    previous: string;

    total: number;

    constructor(json: any) {
        this.href = json.href;
        this.items = json.items;
        this.limit = json.limit;
        this.next = json.next;
        this.offset = json.offset;
        this.previous = json.previous;
        this.total = json.total;
    }
}

export default Paging;
