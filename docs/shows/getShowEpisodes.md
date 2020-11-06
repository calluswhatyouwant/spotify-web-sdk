---
id: getShowEpisodes
title: getShowEpisodes
---

Use this function to get the informations of the episodes that are included in a show.  
You can actually use some parameters (the optional ones) to make the request more specific, check it out.  

## Parameters

Parameter  | Obligatoriness | Value
---------- |----------------|-------
id         | Required       | The ID of the show on Spotify's catalog
market     | Optional       | A code that identifies a country
limit      | Optional       | Number that informs the maximum of episodes to return
offset     | Optional       | The index of the first episode to be returned

## Return

The return of this function is a Page object. In this case, the page is made up of EpisodeSimplified objects. Basically, the return is a page full of episodes, using the simplified version of the episodes. For each one of the episodes in the page, you'll get its informations.  
Check Pagination section to see all the models used in this function:  
Page: click here.  
EpisodeSimplified: click here.  


## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getShowEpisodes('THE SHOW ID HERE', 2, 8); // From the chosen show, this example shows informations of 8 episodes (limit), starting from episode number 2 (offset). SHOWNED EPISODES: 2, 3, 4, 5, 6, 7, 8, 9.
```