class AudioAnalysis {
    bars: TimeInterval[];
    beats: TimeInterval[];
    sections: Section[];
    segments: Segment[];
    tatums: TimeInterval[];
    track: TrackAnalysisData;

    constructor(json: any) {
        this.bars = json.bars.map((bar: any) => new TimeInterval(bar));
        this.beats = json.beats.map((beat: any) => new TimeInterval(beat));
        this.sections = json.sections.map(
            (section: any) => new Section(section)
        );
        this.segments = json.segments.map(
            (segment: any) => new Segment(segment)
        );
        this.tatums = json.tatums.map((tatum: any) => new TimeInterval(tatum));
        this.track = new TrackAnalysisData(json.track);
    }
}

class TimeInterval {
    start: number;
    duration: number;
    confidence: number;

    constructor(json: any) {
        this.start = json.start;
        this.duration = json.duration;
        this.confidence = json.confidence;
    }
}

class Section {
    start: number;
    duration: number;
    confidence: number;
    loudness: number;
    tempo: number;
    tempoConfidence: number;
    key: number;
    keyConfidence: number;
    mode: number;
    modeConfidence: number;
    timeSignature: number;
    timeSignatureConfidence: number;

    constructor(json: any) {
        this.start = json.start;
        this.duration = json.duration;
        this.confidence = json.confidence;
        this.loudness = json.loudness;
        this.tempo = json.tempo;
        this.tempoConfidence = json.tempo_confidence;
        this.key = json.key;
        this.keyConfidence = json.key_confidence;
        this.mode = json.mode;
        this.modeConfidence = json.mode_confidence;
        this.timeSignature = json.time_signature;
        this.timeSignatureConfidence = json.time_signature_confidence;
    }
}

class Segment {
    start: number;
    duration: number;
    confidence: number;
    loudnessStart: number;
    loudnessMaxTime: number;
    loudnessMax: number;
    loudnessEnd: number;
    pitches: number[];
    timbre: number[];

    constructor(json: any) {
        this.start = json.start;
        this.duration = json.duration;
        this.confidence = json.confidence;
        this.loudnessStart = json.loudness_start;
        this.loudnessMaxTime = json.loudness_max_time;
        this.loudnessMax = json.loudness_max;
        this.loudnessEnd = json.loudness_end;
        this.pitches = json.pitches;
        this.timbre = json.timbre;
    }
}

class TrackAnalysisData {
    duration: number;
    sampleMd5: string;
    offsetSeconds: number;
    windowSeconds: number;
    analysisSampleRate: number;
    analysisChannels: number;
    endOfFadeIn: number;
    startOfFadeOut: number;
    loudness: number;
    tempo: number;
    tempoConfidence: number;
    timeSignature: number;
    timeSignatureConfidence: number;
    key: number;
    keyConfidence: number;
    mode: number;
    modeConfidence: number;
    codeString: string;
    codeVersion: number;
    echoprintString: string;
    echoprintVersion: number;
    synchString: string;
    synchVersion: number;
    rhythmString: string;
    rhythmVersion: number;

    constructor(json: any) {
        this.duration = json.duration;
        this.sampleMd5 = json.sample_md5;
        this.offsetSeconds = json.offset_seconds;
        this.windowSeconds = json.window_seconds;
        this.analysisSampleRate = json.analysis_sample_rate;
        this.analysisChannels = json.analysis_channels;
        this.endOfFadeIn = json.end_of_fade_in;
        this.startOfFadeOut = json.start_of_fade_out;
        this.loudness = json.loudness;
        this.tempo = json.tempo;
        this.tempoConfidence = json.tempo_confidence;
        this.timeSignature = json.time_signature;
        this.timeSignatureConfidence = json.time_signature_confidence;
        this.key = json.key;
        this.keyConfidence = json.key_confidence;
        this.mode = json.mode;
        this.modeConfidence = json.mode_confidence;
        this.codeString = json.codestring;
        this.codeVersion = json.code_version;
        this.echoprintString = json.echoprintstring;
        this.echoprintVersion = json.echoprint_version;
        this.synchString = json.synchstring;
        this.synchVersion = json.synch_version;
        this.rhythmString = json.rhythmstring;
        this.rhythmVersion = json.rhythm_version;
    }
}

export default AudioAnalysis;
