---
id: getShow
title: getShow
---

This function can be used to get a single show informations on Spotify's catalog, such as description, copyrights and publisher, using the show identifier.

## Parameters

Parameter  | Obligatoriness | Value
---------- |----------------|-------
id         | Required       | The ID of the show on Spotify's catalog
market     | Optional       | A country code that identifies a country

If you use the market field, the show will be showned only if it's avaliable on the country specified on the field.   
Also, your access token is already associated with a country.

## Return

The return of this function is a Show object, with all its informations.  
Check Pagination section to see the Show model and get more information about the model Show and its fields, or use this link. 

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getShow('THE SHOW ID HERE');