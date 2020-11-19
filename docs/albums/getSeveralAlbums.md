---
id: getSeveralAlbums
title: getSeveralAlbums
---

Use this function to get multiple albums on Spotify's catalog based on their ID's.

## Parameters

Parameters | Obligatoriness | Value
-----------|----------------|-------
ids        | Required       | A list of albums id's, separated by commas. 
market     | Optional       | A country code that identifies a country

20 are the maximum number of albums this function can get in one request.
If you put more than 20 albums id's on the parameter ids, the system will throw you an Error.

## Return

The return is an array of albums objects.  
The requested objects in response will be returned in the requested order.

## Implications

If an object id is duplicated in the request, then we will have a duplicate object in the response.  
If an object id in the request is not found, then a null value will be returned in its exactly position.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getSeveralAlbums('05c49JgPmL4Uz2ZeqRx5SP,4yP0hdKOZPNshxUOjY0cZj,7fJJK56U9fHixgO0HQkhtI,7xV2TzoaVc0ycW7fwBwAml,2CMlkzFI2oDAy5MbyV7OV5');
```

