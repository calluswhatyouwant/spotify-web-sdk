export interface RawFollowers {
    href: string | null;
    total: number;
}

class Followers {
    href: string | null;
    total: number;

    constructor(raw: RawFollowers) {
        this.href = raw.href;
        this.total = raw.total;
    }
}

export default Followers;
