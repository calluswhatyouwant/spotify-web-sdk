---
id: getEpisode
title: getEpisode
---

This function can be used to get a single episode informations on Spotify's catalog, such as description, duration and language, using the episode identifier.

## Parameters

Parameter  | Obligatoriness | Value
---------- |----------------|-------
id         | Required       | The ID of the episode on Spotify's catalog
market     | Optional       | A country code that identifies a country

If you use the market field, the episode will be showned only if it's avaliable on the country specified on the field.   Also, your access token is already associated with a country.

## Return

The return of this function is a Episode object, with all its informations.  
Check Pagination section to see the Episode model and get more information about the model Episode and its fields, or use this link. 

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getEpisode('0ASSMnYfKKdTpsyUUPHbli');
```