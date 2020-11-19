---
id: getArtistTopTracks
title: getArtistTopTracks
---

This function can be used to get an artist top tracks on Spotify's catalog based on the artist ID. Top tracks can be defined as the tracks that are most listened by the users (trending). It's based on the popularity of the track.

## Parameters

Parameters | Obligatoriness | Value
-----------|----------------|-------
id         | Required       | The Spotify's artist identifier
market     | Required       | A country code that represents a country.

In this case, use the field market to see the top tracks of the artist on the specific country of your choice.

## Return

A list of tracks objects that represents the top tracks of the chosen artist in the request.
Check Pagination section to see more about the Track model and what fields it contains. Or use this link.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getArtistTopTracks('2KEqzdPS7M5YwGmiuPTdr5');
```