import _ from 'lodash';

import { getAxiosSpotifyInstance } from './driver';
import {
    Category,
    PlaylistSimplified,
    Page,
    AlbumSimplified,
    Recommendations,
} from './models';
import { propertiesToSnakeCase } from './util';

export const getCategory = async (
    id: string,
    params?: {
        country?: string;
        locale?: string;
    }
) => {
    const response = await getAxiosSpotifyInstance().get(
        `/browse/categories/${id}`,
        { params }
    );
    return new Category(response.data);
};

export const getCategoryPlaylists = async (
    id: string,
    params?: {
        country?: string;
        limit?: number;
        offset?: number;
    }
) => {
    const response = await getAxiosSpotifyInstance().get(
        `/browse/categories/${id}/playlists`,
        { params }
    );
    return new Page<PlaylistSimplified>(
        response.data,
        PlaylistSimplified,
        'playlists'
    );
};

export const getCategories = async (params?: {
    country?: string;
    locale?: string;
    limit?: number;
    offset?: number;
}) => {
    const response = await getAxiosSpotifyInstance().get('/browse/categories', {
        params,
    });
    return new Page<Category>(response.data, Category, 'categories');
};

export const getFeaturedPlaylists = async (params?: {
    country?: string;
    locale?: string;
    timestamp?: string;
    limit?: number;
    offset?: number;
}) => {
    const response = await getAxiosSpotifyInstance().get(
        '/browse/featured-playlists',
        { params }
    );
    return new Page<PlaylistSimplified>(
        response.data,
        PlaylistSimplified,
        'playlists'
    );
};

export const getNewReleases = async (params?: {
    country?: string;
    limit?: number;
    offset?: number;
}) => {
    const response = await getAxiosSpotifyInstance().get(
        '/browse/new-releases',
        { params }
    );
    return new Page<AlbumSimplified>(response.data, AlbumSimplified, 'albums');
};

export const getRecommendations = async (params?: {
    limit?: number;
    market?: string;
    seedArtists?: string[];
    seedGenres?: string[];
    seedTracks?: string[];
    [rest: string]: any;
}) => {
    const updatedParams = propertiesToSnakeCase(params);
    const response = await getAxiosSpotifyInstance().get('/recommendations', {
        params: updatedParams,
    });
    return new Recommendations(response.data);
};
