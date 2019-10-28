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

import _ from 'lodash';

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
    expect(response.artists).to.have.lengthOf(mock.artists.length);
    expect(response.availableMarkets).to.be.eql(mock.available_markets);
    expect(response.discNumber).to.be.equal(mock.disc_number);
    expect(response.durationMs).to.be.equal(mock.duration_ms);
    expect(response.explicit).to.be.equal(mock.explicit);
    expect(response.externalUrls).to.be.eql(mock.external_urls);
    expect(response.href).to.be.equal(mock.href);
    expect(response.id).to.be.equal(mock.id);
    expect(response.isPlayable).to.be.equal(mock.is_playable);
    expect(response.linkedFrom).to.be.eql(mock.linked_from);
    expect(response.restrictions).to.be.eql(mock.restrictions);
    expect(response.name).to.be.equal(mock.name);
    expect(response.previewUrl).to.be.equal(mock.preview_url);
    expect(response.trackNumber).to.be.equal(mock.track_number);
    expect(response.type).to.be.equal(mock.type);
    expect(response.uri).to.be.equal(mock.uri);
    expect(response.isLocal).to.be.equal(mock.is_local);
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
    if (response.item) {
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
        const mockKey = _.snakeCase(responseKey);
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
    expect(response.href).to.be.equal(mock.href);
    expect(response.icons).to.be.eql(mock.icons);
    expect(response.id).to.be.equal(mock.id);
    expect(response.name).to.be.equal(mock.name);
};

export const checkMatchingRecommendationSeedAttributes = (
    response: RecommendationSeed,
    mock: any
) => {
    expect(response.initialPoolSize).to.be.equal(mock.initialPoolSize);
    expect(response.afterFilteringSize).to.be.equal(mock.afterFilteringSize);
    expect(response.afterRelinkingSize).to.be.equal(mock.afterRelinkingSize);
    expect(response.href).to.be.equal(mock.href);
    expect(response.id).to.be.equal(mock.id);
    expect(response.type).to.be.equal(mock.type);
};

export const checkMatchingPlaylistAttributes = (
    response: Category,
    mock: any
) => {
    expect(response.href).to.be.equal(mock.href);
    expect(response.icons).to.be.eql(mock.icons);
    expect(response.id).to.be.equal(mock.id);
    expect(response.name).to.be.equal(mock.name);
};
