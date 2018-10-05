/* @flow */

class ExternalId {
    key: string;

    value: string;

    constructor(json: any) {
        this.key = json.key;
        this.value = json.value;
    }
}

export default ExternalId;
