import Cursor from './cursor';
declare class CursorPaging<T> {
    href: string;
    items: T[];
    limit: number;
    next: string;
    cursors: Cursor;
    total: number;
    constructor(json: any);
}
export default CursorPaging;
