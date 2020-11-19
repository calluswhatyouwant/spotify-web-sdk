---
id: getUserProfile
title: getUserProfile
---

This function can be used to get the profile informations of the current user.

## Parameters

Parameter  | Type   | Obligatoriness | Value
-----------|--------|----------------|-------
id         | String | Required       | The Spotify user ID

## Return

The return of this function is a [PublicUser]() object, with all its informations. The public user has lass fields, considering that the owner of the account is using this function to see another user profile.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getUserProfile('User ID here');