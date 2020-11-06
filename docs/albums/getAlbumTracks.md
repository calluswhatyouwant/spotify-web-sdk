---
id: getAlbumTracks
title: getAlbumTracks
---

Use this function to get the informations of the tracks that are included in an album.  
You can actually use some parameters (the optional ones) to make the request more specific, check it out.  

## Parameters

Parameter  | Obligatoriness | Value
---------- |----------------|-------
id         | Required       | The ID of the album on Spotify's catalog
market     | Optional       | A country code that identifies a country
limit      | Optional       | Number that informs the maximum of tracks to return
offset     | Optional       | The index of the first track to be returned

## Return

The return of this function is a Page object. In this case, the page is made up of TrackSimplified objects. Basically, the return is a page full of tracks, using the simplified version of the tracks. For each one of the tracks in the page, you'll get its informations.  
Check Pagination section to see all the models used in this function:  
Page: click here.  
TrackSimplified: click here.  


## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getAlbumTracks('05c49JgPmL4Uz2ZeqRx5SP', 3, 5); // From the chosen album, this example shows informations of 5 tracks (limit), starting from track number 3 (offset). SHOWNED TRACKS: 3, 4, 5, 6, 7.
```