---
id: getRecommendations
title: getRecommendations
---

Use this function to get recommendations of tracks in a playlist style, based on seeds.  
Seeds are generated from the artists, genres and tracks you listen the most.  
This function matches the seeds with similar artists and tracks.

## Parameters

Parameters | Type     | Obligatoriness | Value
-----------|----------|----------------|--------------
limit      | Number   | Optional       | Represents the maximum number of items to return
market     | String   | Optional       | A code that represents a country
seedArtists| String[] | Optional       | A list of Spotify IDs for seed artists, separated by commas
seedGenres | String[] | Optional       | A list of any genres, separated by commas
seedTracks | String[] | Optional       | A list of Spotify IDs for a seed track, separated by commas

## Implications

The parameter **seedGenres** has predefined valid values.

## Return

The return of this function is a [Recommendation]() object, with some tracks that gives the user a listening experience, based on the given seeds in the request.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getRecommendations('EXEMPLO AQUI');
```