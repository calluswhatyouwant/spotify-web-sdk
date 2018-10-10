import Image from '../common/image';
declare class Category {
    href: string;
    icons: Array<Image>;
    id: string;
    name: string;
    constructor(json: any);
}
export default Category;
