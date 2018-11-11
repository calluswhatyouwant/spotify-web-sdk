import { expect } from 'chai';
import nock from 'nock';

import { albumMock, AlbumMock } from './mocks/album.response';
import { severalAlbumsMock } from './mocks/several-albums.response';

import { init, getAlbum, getSeveralAlbums } from '../src/lib';
import Album from '../src/lib/models/album/album';

describe('Album requests', () => {
    beforeEach(() => {
        init('SomeToken');
    });

    const checkMatchingAlbumAttributes = (response: Album, mock: AlbumMock) => {
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

    describe('#getAlbum()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/albums/2iv4eCuGKJYsso1mDR48dt')
                .reply(200, albumMock);
        });

        it('response should match all album attributes', async () => {
            const albumResponse = await getAlbum('2iv4eCuGKJYsso1mDR48dt');
            checkMatchingAlbumAttributes(albumResponse, albumMock);
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

    describe('#getSeveralAlbums()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/albums')
                .query({ ids: '3yGwYUrWqe6PHf0IcUdkbZ,3dB0bCgmpEgCSr3aU1bOtv' })
                .reply(200, severalAlbumsMock);
        });

        it('response should match all albums attributes', async () => {
            const severalAlbumsResponse = await getSeveralAlbums([
                '3yGwYUrWqe6PHf0IcUdkbZ',
                '3dB0bCgmpEgCSr3aU1bOtv',
            ]);

            for (let i = 0; i < severalAlbumsResponse.length; i++) {
                const albumResponse: Album = severalAlbumsResponse[i];
                const albumMock: AlbumMock = severalAlbumsMock.albums[i];
                checkMatchingAlbumAttributes(albumResponse, albumMock);
            }
        });
    });
});
