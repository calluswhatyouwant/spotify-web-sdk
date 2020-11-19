---
id: getCategoryPlaylists
title: getCategoryPlaylists
---

This function can be used to get a list of playlists in a single category and its informations.

## Parameters

Parameters | Type    | Obligatoriness | Value
-----------|---------|----------------|--------------
id         | String  | Required       | The Spotify's category identifier
country    | String  | Optional       | A code that represents a country. 
limit      | Number  | Optional       | Represents the maximum number of items to return.
offset     | Number  | Optional       | The index of the first item to return.  

## Return

The return is a `Page<PlaylistSimplified>` object, that contains an array of Simplified [Playlists]() objects. You can get the informations of each one of the playlists contained on the [Page]().

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getCategoryPlaylists('trending',BR); // trending playlists on Brazil.
```