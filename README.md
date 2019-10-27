# Spotify Web SDK

A JavaScript SDK for the [Spotify Web API](https://developer.spotify.com/documentation/web-api/).
Note that this project is still a BETA version.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Community](#community)
    -   [Suggest a new feature or report a bug](#suggest-a-new-feature-or-report-a-bug)
    -   [Do it yourself](#do-it-yourself)
    -   [Maintainers](#maintainers)
    -   [Hall of Fame](#hall-of-fame)
-   [License](#license)

## Features

### "Why should I use this?"

We want to handle the hard work for you.
Even to make simple requests, such as to get information on a track, you'd need to make a bunch of setups.
Here is how you could do the same thing with our aid:

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.init({ token: 'YOUR SPOTIFY TOKEN HERE!' }); // You should only need to run this once.
spotify.getTrack('3LOpHuEpjkL4T1Zcjhko8w'); // Or any other track id.
```

Yes, it's as simple as that!

### "I still think it's no hard work at all. Therefore, I don't see the point in using this."

How rude!
As you might have noticed, this is an open source project, which means that you can add or suggest your own features.
Of course, don't expect us to ever have a method such as `getTaylorSwiftBestTracks` pushed into our master branch.
(But if you ever thought on something like that, hey, let's be friends!)

What we really mean is: there's a lot of information that can be extracted from the data retrievable via Spotify's Web API.
If you think of something that could come in handy for you and also other people, that's it! Don't be shy, make it happen.
We'll gladly review your suggestion as soon as possible!

For instance, you can retrieve the duration of a track in milliseconds straight from the API, but know what'd more usual?
If you thought "displaying it in minutes", we're on the same page.
To do that, adding the following code to our Track model would do the trick:

```javascript
get formattedDuration() {
    const minutes = Math.floor(this.durationMs / 60000);
    const seconds = Math.floor((this.durationMs % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
```

This is already implemented, but do you get our point?
It might be something really simple, but we believe that such little things can save a lot of time in the future.

### "You convinced me. Let's go!"

Even though I'm not certain you thought that right now, here's how to get started:

## Installation

Using Yarn:

```sh
yarn add spotify-web-sdk
```

Using NPM:

```sh
npm install spotify-web-sdk
```

Using CDN:

```html
<script src="https://unpkg.com/spotify-web-sdk/build/dist/spotify-web-sdk.min.js"></script>
```

## Usage

First of all, you will need a Spotify authorization token.
For that, check Spotify Web API's [Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/).
Please note that you might need some specific authorization scopes depending on the requests you'll be running.

And then you'll only need to import the function that implements the request you want to make.
Remember that you'll need to run the init function passing your authorization token to authorize making the requests.
There's an example of the usage at the [beginning of this README](#features).

## Community

As aforementioned, this project exists because we believe that we can support each other to create a better experience for everyone.
You can contribute in many ways.
Please, note that we have a [Code of Conduct](.github/CODE_OF_CONDUCT.md), which we expect to be strictly respected.

### Suggest a new feature or report a bug

If you notice any other bugs or you have any ideas to improve our SDK, feel free to create an issue. We'll be more than happy to discuss it! Check our [issue templates](.github/ISSUE_TEMPLATE).

### Do it yourself

Check out our [CONTRIBUTING](./CONTRIBUTING.md) file!

### Maintainers

[@JoseRenan](http://github.com/JoseRenan) and [@JRobsonJr](http://github.com/JRobsonJr)

### Hall of Fame

[![](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/images/0)](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/links/0)[![](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/images/1)](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/links/1)[![](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/images/2)](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/links/2)[![](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/images/3)](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/links/3)[![](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/images/4)](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/links/4)[![](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/images/5)](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/links/5)[![](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/images/6)](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/links/6)[![](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/images/7)](https://sourcerer.io/fame/JRobsonJr/calluswhatyouwant/spotify-web-sdk/links/7)

Made with [hall-of-fame](https://github.com/sourcerer-io/hall-of-fame).

## License

[MIT](./LICENSE)
