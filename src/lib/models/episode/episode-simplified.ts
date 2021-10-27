import ExternalUrls, { RawExternalUrls } from '../common/externalUrls';
import Image, { RawImage } from '../common/image';

export interface RawEpisodeSimplified {
    audio_preview_url: string;
    description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: RawExternalUrls;
    href: string;
    id: string;
    images: RawImage[];
    is_externally_hosted: boolean | null;
    is_playable: boolean;
    languages: string[];
    name: string;
    release_date: string;
    release_date_precision: 'year' | 'month' | 'day';
    resume_point?: RawResumePoint;
    type: 'episode';
    uri: string;
}

class EpisodeSimplified {
    audioPreviewUrl: string;
    description: string;
    durationMs: number;
    explicit: boolean;
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    isExternallyHosted: boolean | null;
    isPlayable: boolean;
    languages: string[];
    name: string;
    releaseDate: string;
    releaseDatePrecision: 'year' | 'month' | 'day';
    resumePoint?: ResumePoint;
    type: 'episode';
    uri: string;

    constructor(raw: RawEpisodeSimplified) {
        this.audioPreviewUrl = raw.audio_preview_url;
        this.description = raw.description;
        this.durationMs = raw.duration_ms;
        this.explicit = raw.explicit;
        this.externalUrls = raw.external_urls;
        this.href = raw.href;
        this.id = raw.id;
        this.images = raw.images.map(imageJson => new Image(imageJson));
        this.isExternallyHosted = raw.is_externally_hosted;
        this.isPlayable = raw.is_playable;
        this.languages = raw.languages;
        this.name = raw.name;
        this.releaseDate = raw.release_date;
        this.releaseDatePrecision = raw.release_date_precision;
        if (raw.resume_point) {
            this.resumePoint = new ResumePoint(raw.resume_point);
        }
        this.type = raw.type;
        this.uri = raw.uri;
    }
}

interface RawResumePoint {
    fully_played: boolean;
    resume_position_ms: number;
}

class ResumePoint {
    fullyPlayed: boolean;
    resumePositionMs: number;

    constructor(raw: RawResumePoint) {
        this.fullyPlayed = raw.fully_played;
        this.resumePositionMs = raw.resume_position_ms;
    }
}

export default EpisodeSimplified;
