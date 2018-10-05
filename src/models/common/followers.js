/* @flow */

class Followers {
    href: string;

    total: number;

    constructor(json: any) {
        this.href = json.href;
        this.total = json.total;
    }
}

export default Followers;
