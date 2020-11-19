---
id: getAlbum
title: getAlbum
---

This function is used to get an album information on Spotify's catalog, such as genres, images and label, using the album identifier.

## Parameters

Parameter  | Obligatoriness | Value
---------- |----------------|-------
id         | Required       | The ID of the album on Spotify's catalog
market     | Optional       | A country code that identifies a country

## Return

The return of this function is a Album object, with all its informations.  
Check Pagination section to see the album model and get more information about the model Album and its fields, or use this link. 

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getAlbum('05c49JgPmL4Uz2ZeqRx5SP'); // Or any other album identifier.
```
