---
id: getNewReleases
title: getNewReleases
---

This function can be used to get new album releases that are featured on Spotify and its informations.

Parameters | Type    | Obligatoriness | Value
-----------|---------|----------------|--------------
country    | String  | Optional       | A code that represents a country. 
limit      | Number  | Optional       | Represents the maximum number of items to return.
offset     | Number  | Optional       | The index of the first item to return.

## Return

The return is a `Page<AlbumSimplified>` object, that contains an array of [Album]() objects, in its simplified version. You can get the informations of each one of the albums contained on the [Page]().

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getNewReleases(BR,3,7);
```