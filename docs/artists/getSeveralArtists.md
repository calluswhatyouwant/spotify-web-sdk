---
id: getSeveralArtists
title: getSeveralArtists
---

Use this function to get multiple artist on Spotify's catalog based on their ID's.

## Parameters

Parameters | Obligatoriness | Value
-----------|----------------|-------
ids        | Required       | A list of artists id's, separated by commas. 

50 are the maximum number of artists this function can get in one request.
If you put more than 20 artists id's on the parameter ids, the system will throw you an Error.

## Return

This function returns a list of artist objects.  
The requested objects in response will be returned in the requested order.

## Implications

If an object id is duplicated in the request, then we will have a duplicate object in the response.  
If an object id in the request is not found, then a null value will be returned in its exactly position.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getSeveralArtists('163tK9Wjr9P9DmM0AVK7lm,1KP6TWI40m7p3QBTU6u2xo,6sFIWsNpZYqfjUpaCgueju,1HY2Jd0NmPuamShAr6KMms,6nB0iY1cjSY1KyhYyuIIKH,41MozSoPIsD1dJM0CLPjZF');
```