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
    Category,
    RecommendationSeed,
} from '../../src/lib/models';

import { AlbumMock } from '../mocks/albums/album.mock';
import { ArtistMock } from '../mocks/artists/artist.mock';
import { TrackMock } from '../mocks/artists/artist-top-tracks.mock';

export const checkMatchingAlbumAttributes = (
    response: Album,
    mock: AlbumMock
) => {
    expect(response.albumType).to.be.equal(mock.album_type);
    expect(response.artists).to.have.lengthOf(mock.artists.length);
    expect(response.availableMarkets).to.be.eql(mock.available_markets);
    expect(response.copyrights).to.be.eql(mock.copyrights);
    expect(response.externalIds).to.be.eql(mock.external_ids);
    expect(response.externalUrls).to.be.eql(mock.external_urls);
    expect(response.genres).to.be.eql(mock.genres);
    expect(response.href).to.be.equal(mock.href);
    expect(response.id).to.be.equal(mock.id);
    expect(response.images).to.be.eql(mock.images);
    expect(response.label).to.be.equal(mock.label);
    expect(response.name).to.be.equal(mock.name);
    expect(response.popularity).to.be.equal(mock.popularity);
    expect(response.releaseDate).to.be.equal(mock.release_date);
    expect(response.releaseDatePrecision).to.be.equal(
        mock.release_date_precision
    );
    expect(response.totalTracks).to.be.equal(mock.total_tracks);
    expect(response.tracks.total).to.be.equal(mock.tracks.total);
    expect(response.type).to.be.equal(mock.type);
    expect(response.uri).to.be.equal(mock.uri);
};

export const checkMatchingAlbumSimplifiedAttributes = (
    response: AlbumSimplified,
    mock: any
) => {
    expect(response.albumType).to.be.equal(mock.album_type);
    expect(response.artists).to.have.lengthOf(mock.artists.length);
    expect(response.externalUrls).to.be.eql(mock.external_urls);
    expect(response.href).to.be.equal(mock.href);
    expect(response.id).to.be.equal(mock.id);
    expect(response.images).to.be.eql(mock.images);
    expect(response.name).to.be.equal(mock.name);
    expect(response.releaseDate).to.be.equal(mock.release_date);
    expect(response.releaseDatePrecision).to.be.equal(
        mock.release_date_precision
    );
    expect(response.type).to.be.equal(mock.type);
    expect(response.uri).to.be.equal(mock.uri);
};

export const checkMatchingArtistAttributes = (
    response: Artist,
    mock: ArtistMock
) => {
    expect(response.externalUrls).to.be.eql(mock.external_urls);
    expect(response.followers).to.be.eql(mock.followers);
    expect(response.genres).to.be.eql(mock.genres);
    expect(response.href).to.be.equal(mock.href);
    expect(response.id).to.be.equal(mock.id);
    expect(response.images).to.be.eql(mock.images);
    expect(response.name).to.be.equal(mock.name);
    expect(response.popularity).to.be.equal(mock.popularity);
    expect(response.type).to.be.equal(mock.type);
    expect(response.uri).to.be.equal(mock.uri);
};

export const checkMatchingTrackAttributes = (
    response: Track,
    mock: TrackMock
) => {
    checkMatchingAlbumSimplifiedAttributes(response.album, mock.album);
    expect(response.artists).to.have.lengthOf(mock.artists.length);
    expect(response.discNumber).to.be.equal(mock.disc_number);
    expect(response.durationMs).to.be.equal(mock.duration_ms);
    expect(response.explicit).to.be.equal(mock.explicit);
    expect(response.externalIds).to.be.eql(mock.external_ids);
    expect(response.externalUrls).to.be.eql(mock.external_urls);
    expect(response.href).to.be.equal(mock.href);
    expect(response.id).to.be.equal(mock.id);
    expect(response.isLocal).to.be.equal(mock.is_local);
    expect(response.isPlayable).to.be.equal(mock.is_playable);
    expect(response.name).to.be.equal(mock.name);
    expect(response.popularity).to.be.equal(mock.popularity);
    expect(response.previewUrl).to.be.equal(mock.preview_url);
    expect(response.trackNumber).to.be.equal(mock.track_number);
    expect(response.type).to.be.equal(mock.type);
    expect(response.uri).to.be.equal(mock.uri);
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
    expect(response.href).to.be.equal(mock.href);
    expect(response.items).to.have.lengthOf(mock.items.length);
    expect(response.limit).to.be.equal(mock.limit);
    expect(response.offset).to.be.equal(mock.offset);
    expect(response.total).to.be.equal(mock.total);
};

export const checkMatchingCurrentlyPlayingAttributes = (
    response: CurrentlyPlaying,
    mock: any
) => {
    if (response.context)
        checkMatchingContextAttributes(response.context, mock.context);
    expect(response.currentlyPlayingType).to.be.equal(
        mock.currently_playing_type
    );
    expect(response.isPlaying).to.be.equal(mock.is_playing);
    if (response.item) checkMatchingTrackAttributes(response.item, mock.item);
    expect(response.progressMs).to.be.equal(mock.progress_ms);
    expect(response.timestamp).to.be.equal(mock.timestamp);
};

export const checkMatchingContextAttributes = (
    response: Context,
    mock: any
) => {
    expect(response.externalUrls).to.be.eql(mock.external_urls);
    expect(response.href).to.be.equal(mock.href);
    expect(response.type).to.be.equal(mock.type);
    expect(response.uri).to.be.equal(mock.uri);
};

export const checkMatchingCursorBasedPageAttributes = (
    response: CursorBasedPage<any>,
    mock: any
) => {
    expect(response.cursors).to.be.eql(mock.cursors);
    expect(response.href).to.be.equal(mock.href);
    expect(response.items).to.have.lengthOf(mock.items.length);
    expect(response.limit).to.be.equal(mock.limit);
    expect(response.next).to.be.equal(mock.next.split('?')[1]);
    expect(response.total).to.be.equal(mock.total);
};

export const checkMatchingPrivateUserAttributes = (
    response: PrivateUser,
    mock: any
) => {
    expect(response.birthdate).to.be.equal(mock.birthdate);
    expect(response.country).to.be.equal(mock.country);
    expect(response.displayName).to.be.equal(mock.display_name);
    expect(response.email).to.be.equal(mock.email);
    expect(response.externalUrls).to.be.eql(mock.external_urls);
    expect(response.followers).to.be.eql(mock.followers);
    expect(response.href).to.be.equal(mock.href);
    expect(response.id).to.be.equal(mock.id);
    expect(response.images).to.be.eql(mock.images);
    expect(response.product).to.be.equal(mock.product);
    expect(response.type).to.be.equal(mock.type);
    expect(response.uri).to.be.equal(mock.uri);
};

export const checkMatchingPublicUserAttributes = (
    response: PublicUser,
    mock: any
) => {
    expect(response.displayName).to.be.equal(mock.display_name);
    expect(response.externalUrls).to.be.eql(mock.external_urls);
    expect(response.followers).to.be.eql(mock.followers);
    expect(response.href).to.be.equal(mock.href);
    expect(response.id).to.be.equal(mock.id);
    expect(response.images).to.be.eql(mock.images);
    expect(response.type).to.be.equal(mock.type);
    expect(response.uri).to.be.equal(mock.uri);
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
