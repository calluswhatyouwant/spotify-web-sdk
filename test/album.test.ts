import { expect } from 'chai';
import nock from 'nock';

import { albumMock } from './mocks/album.response';
import { init, getAlbum } from '../src/lib';

describe('Album requests', () => {
    beforeEach(() => {
        init('SomeToken');
        nock('https://api.spotify.com/v1')
            .get('/albums/2iv4eCuGKJYsso1mDR48dt')
            .reply(200, albumMock);
    });

    describe('#getAlbum()', () => {
        it('response should match all album attributes', async () => {
            const albumResponse = await getAlbum('2iv4eCuGKJYsso1mDR48dt');
            expect(albumResponse.albumType).to.be.equal(albumMock.album_type);
            expect(albumResponse.artists).to.have.lengthOf(
                albumMock.artists.length
            );
            expect(albumResponse.availableMarkets).to.be.eql(
                albumMock.available_markets
            );
            expect(albumResponse.copyrights).to.have.lengthOf(
                albumMock.copyrights.length
            );
            expect(albumResponse.externalIds).to.be.eql(albumMock.external_ids);
            expect(albumResponse.externalUrls).to.be.eql(
                albumMock.external_urls
            );
            expect(albumResponse.genres).to.be.eql(albumMock.genres);
            expect(albumResponse.href).to.be.equal(albumMock.href);
            expect(albumResponse.id).to.be.equal(albumMock.id);
            expect(albumResponse.images).to.be.eql(albumMock.images);
            expect(albumResponse.label).to.be.equal(albumMock.label);
            expect(albumResponse.name).to.be.equal(albumMock.name);
            expect(albumResponse.popularity).to.be.equal(albumMock.popularity);
            expect(albumResponse.releaseDate).to.be.equal(
                albumMock.release_date
            );
            expect(albumResponse.releaseDatePrecision).to.be.equal(
                albumMock.release_date_precision
            );
            expect(albumResponse.totalTracks).to.be.equal(
                albumMock.total_tracks
            );
            expect(albumResponse.tracks.total).to.be.equal(
                albumMock.tracks.total
            );
            expect(albumResponse.type).to.be.equal(albumMock.type);
            expect(albumResponse.uri).to.be.equal(albumMock.uri);
        });

        it('response should match custom attributes', async () => {
            const albumResponse = await getAlbum('2iv4eCuGKJYsso1mDR48dt');
            expect(albumResponse.stringArtists).to.be.equal('AURORA');
            expect(albumResponse.releaseYear).to.be.equal(2018);
            expect(albumResponse.imageUrl).to.be.equal(
                albumResponse.images[0].url
            );
        });
    });
});
