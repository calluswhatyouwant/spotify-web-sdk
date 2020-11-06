---
id: getAudioAnalysisForTrack
title: getAudioAnalysisForTrack
---

Basically, audio analysis is a collection of technical informations about the track structure. It's used mainly by music technicians to get more details about the musical content, such as timbre, tempo and key.  
You can get audio analysis for a track with this function, using the track ID.

## Parameters

Parameter  | Obligatoriness | Value
---------- |----------------|-------
id         | Required       | The ID of the track on Spotify's catalog

## Return

An audio analysis object with all its features and informations.  
Check Pagination section to see the audio analysis model and get more information about the model Audio Analysis and its fields, or use this link.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getAudioAnalysisForTrack('1Dp7JGFNjvg8Nk0CtMCcnr'); // Or any other track id.
```