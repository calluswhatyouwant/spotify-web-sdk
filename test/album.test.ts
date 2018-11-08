import { expect } from 'chai';
import nock from 'nock';

import { albumResponse } from './mocks/album.response';
import { init, getAlbum } from '../src/lib';

describe('Album tests', () => {
    beforeEach(() => {
        init('SomeToken');
        nock('https://api.spotify.com/v1')
            .get('/albums/2iv4eCuGKJYsso1mDR48dt')
            .reply(200, albumResponse);
    });

    describe('getAlbum tests', () => {
        it('response should match all album attributes', () => {
            return getAlbum('2iv4eCuGKJYsso1mDR48dt').then(response => {
                expect(response.albumType).to.be.equal(
                    albumResponse.album_type
                );
                expect(response.artists).to.have.lengthOf(
                    albumResponse.artists.length
                );
                expect(response.availableMarkets).to.be.eql(
                    albumResponse.available_markets
                );
                expect(response.copyrights).to.have.lengthOf(
                    albumResponse.copyrights.length
                );
                expect(response.externalIds).to.be.eql(
                    albumResponse.external_ids
                );
                expect(response.externalUrls).to.be.eql(
                    albumResponse.external_urls
                );
                expect(response.genres).to.be.eql(albumResponse.genres);
                expect(response.href).to.be.equal(albumResponse.href);
                expect(response.id).to.be.equal(albumResponse.id);
                expect(response.images).to.be.eql(albumResponse.images);
                expect(response.label).to.be.equal(albumResponse.label);
                expect(response.name).to.be.equal(albumResponse.name);
                expect(response.popularity).to.be.equal(
                    albumResponse.popularity
                );
                expect(response.releaseDate).to.be.equal(
                    albumResponse.release_date
                );
                expect(response.releaseDatePrecision).to.be.equal(
                    albumResponse.release_date_precision
                );
                expect(response.totalTracks).to.be.equal(
                    albumResponse.total_tracks
                );
                expect(response.tracks.total).to.be.equal(
                    albumResponse.tracks.total
                );
                expect(response.type).to.be.equal(albumResponse.type);
                expect(response.uri).to.be.equal(albumResponse.uri);
            });
        });

        it('response should match custom attributes', () => {
            return getAlbum('2iv4eCuGKJYsso1mDR48dt').then(response => {
                expect(response.stringArtists).to.be.equal('AURORA');
                expect(response.releaseYear).to.be.equal(2018);
                expect(response.imageUrl).to.be.equal(response.images[0].url);
            });
        });
    });
});
