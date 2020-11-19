---
id: getFeaturedPlaylists
title: getFeaturedPlaylists
---

This function can be used to get multiple featured playlists and its informations.

## Parameters

Parameters | Type    | Obligatoriness | Value
-----------|---------|----------------|--------------
country    | String  | Optional       | A code that represents a country. 
locale     | String  | Optional       | A code that representar a language. Example: es_MX (Spanish from Mexico)
timestamp  | String  | Optional       | A code that represents the user’s local time.
limit      | Number  | Optional       | Represents the maximum number of items to return.
offset     | Number  | Optional       | The index of the first item to return.

## Implications

The parameter **timestamp** can be used to get results for that specific date and time in the day, given the user local time.  

## Return

The return is a `Page<PlaylistSimplified>` object, that contains an array of [Playlists]() objects in its simplified version. You can get the informations of each one of the playlists contained on the given [Page]().

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getFeaturedPlaylists(SE,sv_SE,1,10);
```