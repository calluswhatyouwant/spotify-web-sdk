export const searchArtistsMock = {
    artists: {
        href:
            'https://api.spotify.com/v1/search?query=sia&type=artist&market=BR&offset=0&limit=2',
        items: [
            {
                external_urls: {
                    spotify:
                        'https://open.spotify.com/artist/5WUlDfRSoLAfcVSX1WnrxN',
                },
                followers: {
                    href: null,
                    total: 9001196,
                },
                genres: [
                    'australian dance',
                    'australian pop',
                    'dance pop',
                    'pop',
                ],
                href:
                    'https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN',
                id: '5WUlDfRSoLAfcVSX1WnrxN',
                images: [
                    {
                        height: 1333,
                        url:
                            'https://i.scdn.co/image/652b6bb0dfaf8aa444f4414ee018699260e74306',
                        width: 1000,
                    },
                    {
                        height: 853,
                        url:
                            'https://i.scdn.co/image/a82822ab211cbe28a0a1dbcb16902a1a8a2ea791',
                        width: 640,
                    },
                    {
                        height: 267,
                        url:
                            'https://i.scdn.co/image/dd3e336d456172bbda56b543c5389e1490903a30',
                        width: 200,
                    },
                    {
                        height: 85,
                        url:
                            'https://i.scdn.co/image/95a2aa98384b31336b8d56f8b470c45b12dcd550',
                        width: 64,
                    },
                ],
                name: 'Sia',
                popularity: 90,
                type: 'artist',
                uri: 'spotify:artist:5WUlDfRSoLAfcVSX1WnrxN',
            },
            {
                external_urls: {
                    spotify:
                        'https://open.spotify.com/artist/6vYYsmA7fdkIGOCPjAM7hM',
                },
                followers: {
                    href: null,
                    total: 628,
                },
                genres: [],
                href:
                    'https://api.spotify.com/v1/artists/6vYYsmA7fdkIGOCPjAM7hM',
                id: '6vYYsmA7fdkIGOCPjAM7hM',
                images: [],
                name: 'Sia Furler',
                popularity: 26,
                type: 'artist',
                uri: 'spotify:artist:6vYYsmA7fdkIGOCPjAM7hM',
            },
        ],
        limit: 2,
        next:
            'https://api.spotify.com/v1/search?query=sia&type=artist&market=BR&offset=2&limit=2',
        offset: 0,
        previous: null,
        total: 81,
    },
};
