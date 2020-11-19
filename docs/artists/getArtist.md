---
id: getArtist
title: getArtist
---

Use this function to get an artist informations on Spotify's catalog, using the artist unique ID.  
An artist object contains informations such as followers, genre and popularity.

## Parameters

Parameter  | Obligatoriness | Value
---------- |----------------|-------
id         | Required       | The ID of the artist on Spotify's catalog

## Return

This function returns an Artist object, with all its informations.  
You can check Pagination section to see the artist model and get more information about the model Artists and its fields, or you can use this link. 

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getArtist('163tK9Wjr9P9DmM0AVK7lm'); // Or any other artist Spotify's ID.
```