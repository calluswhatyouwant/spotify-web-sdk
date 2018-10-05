class Image {
    height: number;

    url: string;

    width: number;

    constructor(json: any) {
        this.height = json.height;
        this.url = json.url;
        this.width = json.width;
    }
}

export default Image;
