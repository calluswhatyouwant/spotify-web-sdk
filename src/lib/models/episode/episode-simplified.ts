import Image from '../common/image';

class EpisodeSimplified {
    audioPreviewUrl: string;

    description: string;

    durationMs: number;

    explicit: boolean;

    externalUrls: any;

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

    constructor(json: any) {
        this.audioPreviewUrl = json.audio_preview_url;
        this.description = json.description;
        this.durationMs = json.duration_ms;
        this.explicit = json.explicit;
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map((imageJson: any) => new Image(imageJson));
        this.isExternallyHosted = json.is_externally_hosted;
        this.isPlayable = json.is_playable;
        this.languages = json.languages;
        this.name = json.name;
        this.releaseDate = json.release_date;
        this.releaseDatePrecision = json.release_date_precision;
        if (json.resume_point) {
            this.resumePoint = new ResumePoint(json.resume_point);
        }
        this.type = json.type;
        this.uri = json.uri;
    }
}

class ResumePoint {
    fullyPlayed: boolean;
    resumePositionMs: number;

    constructor(json: any) {
        this.fullyPlayed = json.fully_played;
        this.resumePositionMs = json.resume_position_ms;
    }
}

export default EpisodeSimplified;
