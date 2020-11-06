---
id: getAudioFeaturesForTrack
title: getAudioFeaturesForTrack
---

Audio features are more specifics detais about the tracks, such as danceability, energy and loudness. Use this function to get the audio features of a track, using the track ID.

## Parameters

Parameter  | Obligatoriness | Value
---------- |----------------|-------
id         | Required       | The ID of the track on Spotify's catalog

## Return

An audio features object, which contains all feature informations of the audio track.  
Check Pagination section to see the audio features model and get more information about the model Audio Features and its fields, or use this link.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getAudioFeaturesForTrack('1Dp7JGFNjvg8Nk0CtMCcnr'); // Or any other track id.
```