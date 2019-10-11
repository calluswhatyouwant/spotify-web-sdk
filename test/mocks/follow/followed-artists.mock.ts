export const followedArtistsMock = {
    artists: {
        items: [
            {
                external_urls: {
                    spotify:
                        'https://open.spotify.com/artist/1WgXqy2Dd70QQOU7Ay074N',
                },
                followers: {
                    href: null,
                    total: 546647,
                },
                genres: ['norwegian pop', 'pop'],
                href:
                    'https://api.spotify.com/v1/artists/1WgXqy2Dd70QQOU7Ay074N',
                id: '1WgXqy2Dd70QQOU7Ay074N',
                images: [
                    {
                        height: 640,
                        url:
                            'https://i.scdn.co/image/f9f57b4d695b28329f953ece8fbc7fa34dfac344',
                        width: 640,
                    },
                    {
                        height: 320,
                        url:
                            'https://i.scdn.co/image/117b00c6648ddf9ad47eb725df89b717295018d2',
                        width: 320,
                    },
                    {
                        height: 160,
                        url:
                            'https://i.scdn.co/image/7a8e60f50717664f33e8649127c4574b8fc0b293',
                        width: 160,
                    },
                ],
                name: 'AURORA',
                popularity: 68,
                type: 'artist',
                uri: 'spotify:artist:1WgXqy2Dd70QQOU7Ay074N',
            },
        ],
        next:
            'https://api.spotify.com/v1/users/jrobsonjr/following?type=artist&after=0aV6DOiouImYTqrR5YlIqx&limit=20',
        total: 183,
        cursors: {
            after: '0aV6DOiouImYTqrR5YlIqx',
        },
        limit: 20,
        href:
            'https://api.spotify.com/v1/users/jrobsonjr/following?type=artist&limit=20',
    },
};
