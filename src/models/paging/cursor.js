/* @flow */

class Cursor {
    after: string;

    constructor(json: any) {
        this.after = json.after;
    }
}

export default Cursor;
