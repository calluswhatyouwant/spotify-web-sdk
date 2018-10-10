import Image from '../common/image';

class Category {
    href: string;

    icons: Array<Image>;

    id: string;

    name: string;

    constructor(json: any) {
        this.href = json.href;
        this.icons = json.icons.map((iconJson: any) => new Image(iconJson));
        this.id = json.id;
        this.name = json.name;
    }
}

export default Category;
