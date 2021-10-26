export interface RawImage {
    height: number | null;
    url: string;
    width: number | null;
}

class Image {
    height: number | null;
    url: string;
    width: number | null;

    constructor(raw: RawImage) {
        this.height = raw.height;
        this.url = raw.url;
        this.width = raw.width;
    }
}

export default Image;
