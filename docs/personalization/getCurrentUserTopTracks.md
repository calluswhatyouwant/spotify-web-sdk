---
id: getCurrentUserTopTracks
title: getCurrentUserTopTracks
---

Use this function to get the user current top tracks in a certain range of time.

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

The return is a `Page<Track>` object, that contains an array of [Track]() objects that represents the tracks you've listened the most in the given range of time. You can get the informations of each one of the tracks contained on the [Page]().

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getCurrentUserTopTracks(1,9,'short_term'); 
```