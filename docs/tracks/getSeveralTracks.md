---
id: getSeveralTracks
title: getSeveralTracks
---

Use this function to get multiple tracks on Spotify's catalog based on their ID's.

## Parameters

Parameters | Obligatoriness | Value
-----------|----------------|-------
ids        | Required       | A list of tracks id's, separated by commas. 50 are the maximum number of id's this function can get in one request.
market     | Optional       | A country code that identifies a country

If you put more than 50 tracks id's on the parameter ids, the system will throw you an Error.

## Return

The return of this function is an array of track objects.  
The requested objects in response will be returned in the requested order.

## Implications

If an object id is duplicated in the request, then we will have a duplicate object in the response.  
If an object id in the request is not found, then a null value will be returned in its exactly position.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getSeveralTracks('3LOpHuEpjkL4T1Zcjhko8w,46lFttIf5hnUZMGvjK0Wxo,1FlYPPzFJUNh3KRE36pYbe,1Dp7JGFNjvg8Nk0CtMCcnr,4y5bvROuBDPr5fuwXbIBZR,61UQzeiIluhpzpMdY4ag3q,5ahNnBifspeXOi1sMbiXHT');
```

