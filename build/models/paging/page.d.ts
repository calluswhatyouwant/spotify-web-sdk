declare class Page<T> {
    private t;
    href: string;
    items: T[];
    limit: number;
    private next;
    offset: number;
    private previous;
    total: number;
    constructor(json: any, t: new (json: any) => T);
    private getAxiosPageInstance;
    hasNext(): boolean;
    hasPrevious(): boolean;
    getNextPage(): Promise<Page<T>>;
    getPreviousPage(forceLimit?: boolean): Promise<Page<T> | undefined>;
}
export default Page;
