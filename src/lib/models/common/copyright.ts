export interface RawCopyright {
    text: string;
    type: 'C' | 'P';
}

class Copyright {
    text: string;
    type: 'C' | 'P';

    constructor(raw: Copyright) {
        this.text = raw.text;
        this.type = raw.type;
    }
}

export default Copyright;
