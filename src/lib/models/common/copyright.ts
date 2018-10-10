class Copyright {
    text: string;

    type: 'C' | 'P';

    constructor(json: any) {
        this.text = json.text;
        this.type = json.type;
    }
}

export default Copyright;
