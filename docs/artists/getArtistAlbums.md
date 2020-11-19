---
id: getArtistAlbums
title: getArtistAlbums
---

This function can be used to get infomations about an artist albums (or collections, like singles and compilations).

## Parameters

Parameter    | Obligatoriness | Value
-------------|----------------|-------
id           | Required       | The ID of the artist on Spotify's catalog
offset       | Optional       | The index of the first track to be returned
limit        | Optional       | Number that informs the maximum of tracks to return
includeGroups| Optional       | A list of keywords that filters the response
market       | Optional       | A country code that identifies a country

The parameter includeGroups can be used to specify the response, returning only the album type you want. For that, we'll need to consider singles, compilations and the tracks the artist appears on as albums too.  
Valid values of this field are:
``` 
album // the artist albums
``` 
``` 
single // the artist singles
``` 
```
appears_on // the tracks the artist appears on
```
``` 
compilation
```

## Return

The return of this function is a Page object. In this case, the page is made up of AlbumSimplified objects. Basically, the return is a page full of albums, made by the same artist, using its simplified version. For each one of the albums in the page, you'll get its informations.  
Check Pagination section to see all the models used in this function:  
Page: click here.  
AlbumSimplified: click here. 

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getArtistAlbums('163tK9Wjr9P9DmM0AVK7lm', 0, 1, include_groups=album,single); // From the chosen artist, this example shows informations of an artist albums, starting on album number 0 (offset), returning 1 album (limit). Include group fields points that albums and singles should be considered.
```

