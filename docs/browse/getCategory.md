---
id: getCategory
title: getCategory
---

This function can be used to get a single category and its informations. Categories are used to tag items in Spotify and have fields like name, id and icons.

## Parameters

Parameters | Type    | Obligatoriness | Value
-----------|---------|----------------|--------------
id         | String  | Required       | The Spotify's category identifier
country    | String  | Optional       | A code that represents a country. 
locale     | String  | Optional       | A code that representar a language. Example: es_MX (Spanish from Mexico)

## Implications

The default value for the field **locale** is the Spotify's default language, which is American English.  
The country field can be used to ensure that the given category exists for a particular country.  

## Return

The return is a single [Category]() object that matches the ID in the request, with all its informations.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getCategory('trending');
```