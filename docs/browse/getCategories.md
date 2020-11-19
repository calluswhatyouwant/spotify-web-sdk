---
id: getCategories
title: getCategories
---

This function can be used to get multiple categories and its informations, such as icons, name and their respectives ids.

## Parameters

Parameters | Type    | Obligatoriness | Value
-----------|---------|----------------|--------------
country    | String  | Optional       | A code that represents a country. 
locale     | String  | Optional       | A code that representar a language. Example: es_MX (Spanish from Mexico)
limit      | Number  | Optional       | Represents the maximum number of items to return.
offset     | Number  | Optional       | The index of the first item to return.

## Implications

The default value for the field **locale** is the Spotify's default language, which is American English.  
The country field can be used to ensure that the given category exists for a particular country.  

## Return

The return is a `Page<Category>` object, that contains an array of [Category]() objects. You can get the informations of each one of the categories contained on the [Page]().

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getCategories(SE,sv_SE,1,10);
```