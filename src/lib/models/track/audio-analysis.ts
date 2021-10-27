export interface RawAudioAnalysis {
    bars: RawTimeInterval[];
    beats: RawTimeInterval[];
    sections: RawSection[];
    segments: RawSegment[];
    tatums: RawTimeInterval[];
    track: RawTrackAnalysisData;
}

class AudioAnalysis {
    bars: TimeInterval[];
    beats: TimeInterval[];
    sections: Section[];
    segments: Segment[];
    tatums: TimeInterval[];
    track: TrackAnalysisData;

    constructor(raw: RawAudioAnalysis) {
        this.bars = raw.bars.map(bar => new TimeInterval(bar));
        this.beats = raw.beats.map(beat => new TimeInterval(beat));
        this.sections = raw.sections.map(section => new Section(section));
        this.segments = raw.segments.map(segment => new Segment(segment));
        this.tatums = raw.tatums.map(tatum => new TimeInterval(tatum));
        this.track = new TrackAnalysisData(raw.track);
    }
}

interface RawTimeInterval {
    start: number;
    duration: number;
    confidence: number;
}

class TimeInterval {
    start: number;
    duration: number;
    confidence: number;

    constructor(raw: RawTimeInterval) {
        this.start = raw.start;
        this.duration = raw.duration;
        this.confidence = raw.confidence;
    }
}

interface RawSection {
    start: number;
    duration: number;
    confidence: number;
    loudness: number;
    tempo: number;
    tempo_confidence: number;
    key: number;
    key_confidence: number;
    mode: number;
    mode_confidence: number;
    time_signature: number;
    time_signature_confidence: number;
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

    constructor(raw: RawSection) {
        this.start = raw.start;
        this.duration = raw.duration;
        this.confidence = raw.confidence;
        this.loudness = raw.loudness;
        this.tempo = raw.tempo;
        this.tempoConfidence = raw.tempo_confidence;
        this.key = raw.key;
        this.keyConfidence = raw.key_confidence;
        this.mode = raw.mode;
        this.modeConfidence = raw.mode_confidence;
        this.timeSignature = raw.time_signature;
        this.timeSignatureConfidence = raw.time_signature_confidence;
    }
}

interface RawSegment {
    start: number;
    duration: number;
    confidence: number;
    loudness_start: number;
    loudness_max_time: number;
    loudness_max: number;
    loudness_end: number;
    pitches: number[];
    timbre: number[];
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

    constructor(raw: RawSegment) {
        this.start = raw.start;
        this.duration = raw.duration;
        this.confidence = raw.confidence;
        this.loudnessStart = raw.loudness_start;
        this.loudnessMaxTime = raw.loudness_max_time;
        this.loudnessMax = raw.loudness_max;
        this.loudnessEnd = raw.loudness_end;
        this.pitches = raw.pitches;
        this.timbre = raw.timbre;
    }
}

interface RawTrackAnalysisData {
    duration: number;
    sample_md5: string;
    offset_seconds: number;
    window_seconds: number;
    analysis_sample_rate: number;
    analysis_channels: number;
    end_of_fade_in: number;
    start_of_fade_out: number;
    loudness: number;
    tempo: number;
    tempo_confidence: number;
    time_signature: number;
    time_signature_confidence: number;
    key: number;
    key_confidence: number;
    mode: number;
    mode_confidence: number;
    codestring: string;
    code_version: number;
    echoprintstring: string;
    echoprint_version: number;
    synchstring: string;
    synch_version: number;
    rhythmstring: string;
    rhythm_version: number;
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

    constructor(raw: RawTrackAnalysisData) {
        this.duration = raw.duration;
        this.sampleMd5 = raw.sample_md5;
        this.offsetSeconds = raw.offset_seconds;
        this.windowSeconds = raw.window_seconds;
        this.analysisSampleRate = raw.analysis_sample_rate;
        this.analysisChannels = raw.analysis_channels;
        this.endOfFadeIn = raw.end_of_fade_in;
        this.startOfFadeOut = raw.start_of_fade_out;
        this.loudness = raw.loudness;
        this.tempo = raw.tempo;
        this.tempoConfidence = raw.tempo_confidence;
        this.timeSignature = raw.time_signature;
        this.timeSignatureConfidence = raw.time_signature_confidence;
        this.key = raw.key;
        this.keyConfidence = raw.key_confidence;
        this.mode = raw.mode;
        this.modeConfidence = raw.mode_confidence;
        this.codeString = raw.codestring;
        this.codeVersion = raw.code_version;
        this.echoprintString = raw.echoprintstring;
        this.echoprintVersion = raw.echoprint_version;
        this.synchString = raw.synchstring;
        this.synchVersion = raw.synch_version;
        this.rhythmString = raw.rhythmstring;
        this.rhythmVersion = raw.rhythm_version;
    }
}

export default AudioAnalysis;
