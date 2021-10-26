import omit from 'lodash.omit';
import pick from 'lodash.pick';

import { propertiesToSnakeCase } from './util';
import { getAxiosSpotifyInstance } from './driver';
import {
    PlayHistory,
    CursorBasedPage,
    CurrentlyPlaying,
    Device,
    CurrentlyPlayingContext,
} from './models';
import { RawDevice } from './models/player/device';

export const getCurrentUserRecentlyPlayedTracks = async (params?: {
    limit?: number;
    before?: string;
    after?: string;
}): Promise<CursorBasedPage<PlayHistory>> => {
    if (params && params.before && params.after) {
        throw new Error("Only one of 'before' or 'after' should be specified");
    }
    const response = await getAxiosSpotifyInstance().get(
        '/me/player/recently-played',
        { params }
    );
    return new CursorBasedPage<PlayHistory>(response.data, PlayHistory);
};

export const getCurrentUserCurrentlyPlayingTrack = async (params?: {
    market?: string;
    additionalTypes?: 'track' | 'episode' | ['track', 'episode'];
}): Promise<CurrentlyPlaying> => {
    const snakeCaseParams = propertiesToSnakeCase(params);
    const response = await getAxiosSpotifyInstance().get(
        '/me/player/currently-playing',
        { params: snakeCaseParams }
    );
    return new CurrentlyPlaying(response.data);
};

export const getUserAvailableDevices = async (): Promise<Device[]> => {
    const response = await getAxiosSpotifyInstance().get('/me/player/devices');
    return response.data.devices.map(
        (deviceJson: RawDevice) => new Device(deviceJson)
    );
};

export const getUserPlaybackInformation = async (params?: {
    market?: string;
    additionalTypes?: 'track' | 'episode' | ['track', 'episode'];
}): Promise<CurrentlyPlayingContext> => {
    const snakeCaseParams = propertiesToSnakeCase(params);
    const response = await getAxiosSpotifyInstance().get('/me/player/', {
        params: snakeCaseParams,
    });
    return new CurrentlyPlayingContext(response.data);
};

export const pauseUserPlayback = async (params?: {
    deviceId?: string;
}): Promise<string> => {
    const snakeCaseParams = propertiesToSnakeCase(params);
    const response = await getAxiosSpotifyInstance().put(
        '/me/player/pause',
        undefined,
        { params: snakeCaseParams }
    );
    return response.data;
};

export const seekToPositionInCurrentlyPlayingTrack = async (
    positionMs: number,
    params?: { deviceId?: string }
): Promise<string> => {
    const snakeCaseParams = propertiesToSnakeCase({ positionMs, ...params });
    const response = await getAxiosSpotifyInstance().put(
        '/me/player/seek',
        undefined,
        { params: snakeCaseParams }
    );
    return response.data;
};

export const setRepeatModeOnUserPlayback = async (
    state: 'track' | 'context' | 'off',
    params?: { deviceId?: string }
): Promise<string> => {
    const snakeCaseParams = propertiesToSnakeCase({ state, ...params });
    const response = await getAxiosSpotifyInstance().put(
        '/me/player/repeat',
        undefined,
        { params: snakeCaseParams }
    );
    return response.data;
};

export const setVolumeForUserPlayback = async (
    volumePercent: number,
    params?: { deviceId?: string }
): Promise<string> => {
    const snakeCaseParams = propertiesToSnakeCase({ volumePercent, ...params });
    const response = await getAxiosSpotifyInstance().put(
        '/me/player/volume',
        undefined,
        { params: snakeCaseParams }
    );
    return response.data;
};

type Offset = { position: number } | { uri: string };

export const startUserPlayback = async (params?: {
    deviceId?: string;
    contextUri?: string;
    uris?: string[];
    offset?: Offset;
    positionMs?: number;
}): Promise<string> => {
    const queryParams = propertiesToSnakeCase(pick(params, 'deviceId'));
    const bodyParams = propertiesToSnakeCase(omit(params, 'deviceId'), true);
    const response = await getAxiosSpotifyInstance().put(
        '/me/player/play',
        bodyParams,
        { params: queryParams }
    );
    return response.data;
};

export const resumeUserPlayback = async (params?: {
    deviceId?: string;
}): Promise<string> => {
    return startUserPlayback(params);
};

export const toggleShuffleForUserPlayback = async (
    state: boolean,
    params?: { deviceId?: string }
): Promise<string> => {
    const snakeCaseParams = propertiesToSnakeCase({ state, ...params });
    const response = await getAxiosSpotifyInstance().put(
        '/me/player/shuffle',
        undefined,
        { params: snakeCaseParams }
    );
    return response.data;
};

export const transferUserPlayback = async (
    deviceIds: string[],
    params?: { play?: boolean }
): Promise<string> => {
    const snakeCaseParams = propertiesToSnakeCase(
        {
            deviceIds,
            ...params,
        },
        true
    );
    const response = await getAxiosSpotifyInstance().put(
        '/me/player',
        snakeCaseParams
    );
    return response.data;
};

export const skipUserPlaybackToNextTrack = async (params?: {
    deviceId?: string;
}): Promise<string> => {
    const snakeCaseParams = propertiesToSnakeCase(params);
    const response = await getAxiosSpotifyInstance().post(
        '/me/player/next',
        undefined,
        { params: snakeCaseParams }
    );
    return response.data;
};

export const skipUserPlaybackToPreviousTrack = async (params?: {
    deviceId?: string;
}): Promise<string> => {
    const snakeCaseParams = propertiesToSnakeCase(params);
    const response = await getAxiosSpotifyInstance().post(
        '/me/player/previous',
        undefined,
        { params: snakeCaseParams }
    );
    return response.data;
};
