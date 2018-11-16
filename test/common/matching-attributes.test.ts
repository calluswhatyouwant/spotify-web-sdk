import { expect } from 'chai';

import Album from '../../src/lib/models/album/album';
import Artist from '../../src/lib/models/artist/artist';
import { AlbumMock } from '../mocks/album.response';
import { ArtistMock } from './../mocks/artist.response';

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

export const checkMatchingPagingObjectAttributes = (
    response: any,
    mock: any
) => {
    expect(response.href).to.be.equal(mock.href.split('?')[0]);
    expect(response.items).to.have.lengthOf(mock.items.length);
    expect(response.limit).to.be.equal(mock.limit);
    expect(response.offset).to.be.equal(mock.offset);
    expect(response.total).to.be.equal(mock.total);
};
