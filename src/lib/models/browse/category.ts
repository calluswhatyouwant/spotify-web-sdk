import Image, { RawImage } from '../common/image';

export interface RawCategory {
    href: string;
    icons: RawImage[];
    id: string;
    name: string;
}

class Category {
    href: string;
    icons: Image[];
    id: string;
    name: string;

    constructor(raw: RawCategory) {
        this.href = raw.href;
        this.icons = raw.icons.map(rawIcon => new Image(rawIcon));
        this.id = raw.id;
        this.name = raw.name;
    }
}

export default Category;
