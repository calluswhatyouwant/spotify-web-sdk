import { expect } from 'chai';
import nock from 'nock';

import { albumMock, AlbumMock } from './mocks/album.response';
import { severalAlbumsMock } from './mocks/several-albums.response';
import { albumTracksMock } from './mocks/album-tracks.response';
import { checkMatchingAlbumAttributes } from './common/matching-attributes.test';

import { init, getAlbum, getSeveralAlbums, getAlbumTracks } from '../src/lib';
import Album from '../src/lib/models/album/album';

describe('Album requests', () => {
    beforeEach(() => {
        init('SomeToken');
    });

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

    describe('#getAlbumTracks()', () => {
        beforeEach(() => {
            nock('https://api.spotify.com/v1')
                .get('/albums/3yGwYUrWqe6PHf0IcUdkbZ/tracks')
                .query({ offset: 0, limit: 2 })
                .reply(200, albumTracksMock);
        });

        it('response should match all paging object attributes', async () => {
            const albumTracksResponse = await getAlbumTracks(
                '3yGwYUrWqe6PHf0IcUdkbZ',
                0,
                2
            );
            expect(albumTracksResponse.href).to.be.equal(
                albumTracksMock.href.split('?')[0]
            );
            expect(albumTracksResponse.items).to.have.lengthOf(
                albumTracksMock.items.length
            );
            expect(albumTracksResponse.limit).to.be.equal(
                albumTracksMock.limit
            );
            expect(albumTracksResponse.offset).to.be.equal(
                albumTracksMock.offset
            );
            expect(albumTracksResponse.total).to.be.equal(
                albumTracksMock.total
            );
        });

        it('response should match all custom paging object attributes', async () => {
            const albumTracksResponse = await getAlbumTracks(
                '3yGwYUrWqe6PHf0IcUdkbZ',
                0,
                2
            );
            expect(albumTracksResponse.hasNext()).to.be.true;
            expect(albumTracksResponse.hasPrevious()).to.be.false;
        });
    });
});
