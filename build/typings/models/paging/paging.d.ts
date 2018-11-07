declare class Paging<T> {
    href: string;
    items: T[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    constructor(json: any);
}
export default Paging;
