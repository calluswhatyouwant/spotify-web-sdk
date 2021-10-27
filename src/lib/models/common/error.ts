export interface RawError {
    status: number;
    message: string;
}

class Error {
    status: number;
    message: string;

    constructor(raw: RawError) {
        this.status = raw.status;
        this.message = raw.message;
    }
}

export default Error;
