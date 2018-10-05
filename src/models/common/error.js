/* @flow */

class Error {
    status: number;

    message: string;

    constructor(json: any) {
        this.status = json.status;
        this.message = json.message;
    }
}

export default Error;
