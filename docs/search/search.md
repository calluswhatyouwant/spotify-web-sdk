---
id: search
title: search
---

Use this function to get the informations about tracks, albums, artists, playlists, shows and episodes in Spotify's catalog using a string to be searched. Any of the possible information that matches que string searched will be returned. 

## Parameters

Parameters | Type   | Obligatoriness | Value
-----------|--------|----------------|-------
query      | string | Required       | Query keyword of the search
type       | string | Required       | A list of item types to search, separated by comma
market     | string | Optional       | A code that identifies a country
limit      | number | Optional       | A field that represents the maximum number of results that will be returned
offset     | number | Optional       | The index of the first result to be returned

## Return

This function returns a SearchResults object, that holds a couple of Pages. Each page has its own type, like `Page<AlbumSimplified>` and `Page<Track>`. And each one of the pages got informations of tracks, albums, or any other types that matches the search query keyword, following the types specified on the field type.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.search('love');
```