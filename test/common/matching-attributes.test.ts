import snakeCase from 'lodash.snakecase';
import { expect } from 'chai';

import {
    Album,
    AlbumSimplified,
    Artist,
    Track,
    TrackSimplified,
    Page,
    Playlist,
    CurrentlyPlaying,
    Context,
    CursorBasedPage,
    PrivateUser,
    PublicUser,
    ArtistSimplified,
    Category,
    RecommendationSeed,
} from '../../src/lib/models';

export const checkMatchingArtistSimplifiedAttributes = (
    response: ArtistSimplified,
    mock: any
) => {
    const attributes = ['externalUrls', 'href', 'id', 'name', 'type', 'uri'];
    checkMatchingObjectAttributes(response, mock, attributes);
};

export const checkMatchingAlbumAttributes = (response: Album, mock: any) => {
    const attributes = [
        'copyrights',
        'externalIds',
        'genres',
        'label',
        'popularity',
        'totalTracks',
    ];
    checkMatchingObjectAttributes(response, mock, attributes);
    checkMatchingAlbumSimplifiedAttributes(response, mock);
};

export const checkMatchingAlbumSimplifiedAttributes = (
    response: AlbumSimplified,
    mock: any
) => {
    const attributes = [
        'albumType',
        'availableMarkets',
        'externalUrls',
        'href',
        'id',
        'images',
        'name',
        'releaseDate',
        'releaseDatePrecision',
        'type',
        'uri',
    ];
    checkMatchingObjectAttributes(response, mock, attributes);
    checkMatchingArtistArrays(response.artists, mock.artists);
};

export const checkMatchingArtistAttributes = (response: Artist, mock: any) => {
    const attributes = [
        'externalUrls',
        'followers',
        'genres',
        'href',
        'id',
        'images',
        'name',
        'popularity',
        'type',
        'uri',
    ];
    checkMatchingObjectAttributes(response, mock, attributes);
};

export const checkMatchingTrackAttributes = (response: Track, mock: any) => {
    const attributes = [
        'availableMarkets',
        'discNumber',
        'durationMs',
        'explicit',
        'externalIds',
        'externalUrls',
        'href',
        'id',
        'isPlayable',
        'linkedFrom',
        'restrictions',
        'name',
        'popularity',
        'previewUrl',
        'trackNumber',
        'type',
        'uri',
        'isLocal',
    ];
    checkMatchingObjectAttributes(response, mock, attributes);
    checkMatchingAlbumSimplifiedAttributes(response.album, mock.album);
    checkMatchingArtistArrays(response.artists, mock.artists);
};

export const checkMatchingTrackSimplifiedAttributes = (
    response: TrackSimplified,
    mock: any
) => {
    const attributes = [
        'availableMarkets',
        'discNumber',
        'durationMs',
        'explicit',
        'externalUrls',
        'href',
        'id',
        'isPlayable',
        'linkedFrom',
        'restrictions',
        'name',
        'previewUrl',
        'trackNumber',
        'type',
        'uri',
        'isLocal',
    ];
    checkMatchingObjectAttributes(response, mock, attributes);
    checkMatchingArtistArrays(response.artists, mock.artists);
};

export const checkMatchingPagingObjectAttributes = (
    response: Page<any>,
    mock: any
) => {
    const attributes = ['href', 'limit', 'offset', 'total'];
    checkMatchingObjectAttributes(response, mock, attributes);
    expect(response.items).to.have.lengthOf(mock.items.length);
};

export const checkMatchingCurrentlyPlayingAttributes = (
    response: CurrentlyPlaying,
    mock: any
) => {
    if (response.context) {
        checkMatchingContextAttributes(response.context, mock.context);
    }
    if (response.item && response.item instanceof Track) {
        checkMatchingTrackAttributes(response.item, mock.item);
    }
    const attributes = [
        'currentlyPlayingType',
        'isPlaying',
        'progressMs',
        'timestamp',
    ];
    checkMatchingObjectAttributes(response, mock, attributes);
};

export const checkMatchingContextAttributes = (
    response: Context,
    mock: any
) => {
    const attributes = ['externalUrls', 'href', 'type', 'uri'];
    checkMatchingObjectAttributes(response, mock, attributes);
};

export const checkMatchingCursorBasedPageAttributes = (
    response: CursorBasedPage<any>,
    mock: any
) => {
    const attributes = ['cursors', 'href', 'limit', 'total'];
    checkMatchingObjectAttributes(response, mock, attributes);
    expect(response.items).to.have.lengthOf(mock.items.length);
    expect(response.next).to.be.equal(mock.next.split('?')[1]);
};

export const checkMatchingPrivateUserAttributes = (
    response: PrivateUser,
    mock: any
) => {
    const attributes = ['birthdate', 'country', 'email', 'product'];
    checkMatchingPublicUserAttributes(response, mock);
    checkMatchingObjectAttributes(response, mock, attributes);
};

export const checkMatchingPublicUserAttributes = (
    response: PublicUser,
    mock: any
) => {
    const attributes = [
        'displayName',
        'externalUrls',
        'followers',
        'href',
        'id',
        'images',
        'type',
        'uri',
    ];
    checkMatchingObjectAttributes(response, mock, attributes);
};

const checkMatchingObjectAttributes = (
    response: any,
    mock: any,
    attributes: string[]
) => {
    for (const responseKey of attributes) {
        const mockKey = snakeCase(responseKey);
        expect(response)
            .to.have.property(responseKey)
            .that.is.eql(mock[mockKey]);
    }
};

const checkMatchingArtistArrays = (
    responseArtists: ArtistSimplified[],
    mockArtists: any[]
) => {
    responseArtists.forEach((responseArtist, index) =>
        checkMatchingArtistSimplifiedAttributes(
            responseArtist,
            mockArtists[index]
        )
    );
};

export const checkMatchingCategoryAttributes = (
    response: Category,
    mock: any
) => {
    const attributes = ['href', 'icons', 'id', 'name'];
    checkMatchingObjectAttributes(response, mock, attributes);
};

export const checkMatchingRecommendationSeedAttributes = (
    response: RecommendationSeed,
    mock: any
) => {
    const attributes = ['href', 'id', 'type'];
    checkMatchingObjectAttributes(response, mock, attributes);
    expect(response.initialPoolSize).to.be.equal(mock.initialPoolSize);
    expect(response.afterFilteringSize).to.be.equal(mock.afterFilteringSize);
    expect(response.afterRelinkingSize).to.be.equal(mock.afterRelinkingSize);
};

export const checkMatchingPlaylistAttributes = (
    response: Category,
    mock: any
) => {
    const attributes = ['href', 'icons', 'id', 'name'];
    checkMatchingObjectAttributes(response, mock, attributes);
};
