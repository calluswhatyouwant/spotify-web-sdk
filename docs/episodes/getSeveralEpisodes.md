---
id: getSeveralEpisodes
title: getSeveralEpisodes
---

Use this function to get multiple episodes on Spotify's catalog based on their ID's.

## Parameters

Parameters | Obligatoriness | Value
-----------|----------------|-------
ids        | Required       | A list of episodes id's, separated by commas
market     | Optional       | A code that identifies a country

## Return

The return of this function is an array of episode objects.  
The requested objects in response will be returned in the requested order.

## Implications

If an object id is duplicated in the request, then we will have a duplicate object in the response.  
If an object id in the request is not found, then a null value will be returned in its exactly position.
If the episode is not avaliabe in your given market field, then a null value will be returned in its exactly position.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getSeveralEpisodes('6roJUCIX5Gqs8j4QkDHEWT,4rJtHmuKbCxN3X5t4Y3hAI,1cKApFkyeX3t81Sj6fNWoA');
```