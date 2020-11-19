---
id: getTrack
title: getTrack
---

This function is used to get a track information on spotify catalog, using the track identifier.

## Parameters

Parameter  | Obligatoriness | Value
---------- |----------------|-------
id         | Required       | The id of the track on Spotify's catalog
market     | Optional       | A country code that identifies a country

## Return

The return of this function is a Track object, with all its informations.  
Check Pagination section to see the track model and get more information about the model Tracks and its fields, or use this link. 

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getTrack('3LOpHuEpjkL4T1Zcjhko8w'); // Or any other track id.
```

Just remember you'll need to run the init function first, using your authorization token. Only this way you can make use of the functions of the SDK, such as getTrack(), successfully.