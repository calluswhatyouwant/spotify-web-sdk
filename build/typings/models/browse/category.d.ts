import Image from '../common/image';
declare class Category {
    href: string;
    icons: Image[];
    id: string;
    name: string;
    constructor(json: any);
}
export default Category;
