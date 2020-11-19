---
id: getAudioFeaturesForSeveralTracks
title: getAudioFeaturesForSeveralTracks
---

Use this function to get multiple tracks audio features on Spotify's catalog based on their ID's.

## Parameters

Parameters | Obligatoriness | Value
-----------|----------------|-------
ids        | Required       | A list of tracks id's, separated by commas. 100 are the maximum number of id's this function can get in one request.

## Return

The return is an array of audio features objects.  
The requested objects in response will be returned in the requested order.

## Implications

If an object id is duplicated in the request, then we will have a duplicate object in the response.  
If an object id in the request is not found, then a null value will be returnet in its exactly position.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getAudioFeaturesForSeveralTracks('3LOpHuEpjkL4T1Zcjhko8w,46lFttIf5hnUZMGvjK0Wxo,1FlYPPzFJUNh3KRE36pYbe,1Dp7JGFNjvg8Nk0CtMCcnr,4y5bvROuBDPr5fuwXbIBZR,61UQzeiIluhpzpMdY4ag3q,5ahNnBifspeXOi1sMbiXHT');
```