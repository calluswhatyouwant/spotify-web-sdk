---
id: getCurrentUserTopArtists
title: getCurrentUserTopArtists
---

This function can be used to get the user current top artists in a certain range of time.

Parameters | Type    | Obligatoriness | Value
-----------|---------|----------------|--------------
limit      | Number  | Optional       | Represents the maximum number of items to return.
offset     | Number  | Optional       | The index of the first item to return.
range      | String  | Optional       | The time to search the top tracks in the range.

## Implications

The parameter **range** has predefined valid values:  
1. `short_term` = last 4 weeks  
2. `medium_term` = last 6 months  
3. `long_term` = several years  

The default value for this parameter is `medium_term`.

## Return

The return is a `Page<Artist>` object, that contains an array of [Artist]() objects that represents the artists you've listened the most in the given range of time. You can get the informations of each one of the artists contained on the [Page]().

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getCurrentUserTopArtists(1,9,'long_term'); 
```