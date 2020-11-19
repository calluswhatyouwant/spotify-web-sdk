---
id: getArtistRelatedArtists
title: getArtistRelatedArtists
---

Use this function to get some artists related to an artist on Spotify's catalog based on the artist ID.

## Parameters

Parameters | Obligatoriness | Value
-----------|----------------|-------
id         | Required       | The Spotify's artist identifier

## Return

A list of artists objects that are related to the chosen artist in the request.
Check Pagination section to see more about the Artist model and what fields it contains. Or use this link.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getArtistRelatedArtists('6sFIWsNpZYqfjUpaCgueju');
```