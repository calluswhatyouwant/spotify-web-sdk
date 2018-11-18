export const searchPlaylistsMock = {
    playlists: {
        href:
            'https://api.spotify.com/v1/search?query=sia&type=playlist&market=BR&offset=0&limit=2',
        items: [
            {
                collaborative: false,
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/37i9dQZF1DX7wWaJYweK28',
                },
                href:
                    'https://api.spotify.com/v1/playlists/37i9dQZF1DX7wWaJYweK28',
                id: '37i9dQZF1DX7wWaJYweK28',
                images: [
                    {
                        height: 300,
                        url:
                            'https://i.scdn.co/image/4422bab7cebb64aeeefcb9f738a3c7402351138c',
                        width: 300,
                    },
                ],
                name: 'This Is Sia',
                owner: {
                    display_name: 'Spotify',
                    external_urls: {
                        spotify: 'https://open.spotify.com/user/spotify',
                    },
                    href: 'https://api.spotify.com/v1/users/spotify',
                    id: 'spotify',
                    type: 'user',
                    uri: 'spotify:user:spotify',
                },
                primary_color: null,
                public: null,
                snapshot_id:
                    'MTUzMzg2MzU1MiwwMDAwMDAwZjAwMDAwMTY1MjE2NDY1ZWUwMDAwMDE2MmYyYjBlOGQ4',
                tracks: {
                    href:
                        'https://api.spotify.com/v1/playlists/37i9dQZF1DX7wWaJYweK28/tracks',
                    total: 50,
                },
                type: 'playlist',
                uri: 'spotify:user:spotify:playlist:37i9dQZF1DX7wWaJYweK28',
            },
            {
                collaborative: false,
                external_urls: {
                    spotify:
                        'https://open.spotify.com/playlist/05T1KuTCkjxifLHkawRNVX',
                },
                href:
                    'https://api.spotify.com/v1/playlists/05T1KuTCkjxifLHkawRNVX',
                id: '05T1KuTCkjxifLHkawRNVX',
                images: [
                    {
                        height: null,
                        url:
                            'https://pl.scdn.co/images/pl/default/b15fb9124d86e7a027b9a66f09a58fc00d056a65',
                        width: null,
                    },
                ],
                name: 'Sia Discography',
                owner: {
                    display_name: 'Sia',
                    external_urls: {
                        spotify: 'https://open.spotify.com/user/siaofficial',
                    },
                    href: 'https://api.spotify.com/v1/users/siaofficial',
                    id: 'siaofficial',
                    type: 'user',
                    uri: 'spotify:user:siaofficial',
                },
                primary_color: null,
                public: null,
                snapshot_id:
                    'MTY1LDc4YzVhY2MwYTAzMWIxNjhmNWFlMWI4OTE3MmVlZjM1ZmE5ZTViZjQ=',
                tracks: {
                    href:
                        'https://api.spotify.com/v1/playlists/05T1KuTCkjxifLHkawRNVX/tracks',
                    total: 263,
                },
                type: 'playlist',
                uri: 'spotify:user:siaofficial:playlist:05T1KuTCkjxifLHkawRNVX',
            },
        ],
        limit: 2,
        next:
            'https://api.spotify.com/v1/search?query=sia&type=playlist&market=BR&offset=2&limit=2',
        offset: 0,
        previous: null,
        total: 27596,
    },
};
