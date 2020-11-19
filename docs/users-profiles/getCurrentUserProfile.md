---
id: getCurrentUserProfile
title: getCurrentUserProfile
---

This function can be used to get the profile informations of the current user.

## Return

The return of this function is a [PrivateUser]() object, with all its informations. The private user has more fields, specially more personal ones like `email`, considering that the owner of the account is using this function to see his profile.

## Use Example

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.getCurrentUserProfile();