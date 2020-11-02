---
id: instalation
title: Instalation
---

## How to install

Here's how to install spotify-web-sdk library and use in your project:

### Using Yarn:
```sh
yarn add spotify-web-sdk
```
### Using NPM:
```sh
npm install spotify-web-sdk
```
### Using CDN:
```html
<script src="https://unpkg.com/spotify-web-sdk/build/dist/spotify-web-sdk.min.js"></script>
```

## Usage

To get started using spotify-web-sdk, you'll need a Spotify authorization token. Check Spotify's Web API's [Authorization Guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/) to get your token and then get started. Note that there are some specifics authorization scopes, they can be used in different situations, and will deppend of the requests you'll be running.  
Then, to make full use of the functions spotify-web-sdk makes avaliable, first you need to run the init function. To do that, you will need to use your authorization token, to "log in". After this, our library will use your token to make request of your choice.  
Here's an example of the usage, using the init() and getTrack() functions of the library:

```javascript
import * as spotify from 'spotify-web-sdk';
spotify.init({ token: 'YOUR SPOTIFY TOKEN HERE!' }); // You should only need to run this once.
spotify.getTrack('3LOpHuEpjkL4T1Zcjhko8w'); // Or any other track id.
```

Liked it?  
To see all functionalities of the SDK, check the next sections, where all of the functions will be presented and explained with all of its details and ways to use it. The functions are grouped by sections, which represents units of the Spotify system (such as Albums, Artists, Tracks).   
Use the button down below at the end of the page or click here to get to know more about our SDK functionalities, section by section.

## Community

As aforementioned, this project exists because we believe that we can support each other to create a better experience for everyone.  
You can contribute in many ways to this project.  
We actually have a [Code of Conduct](.github/CODE_OF_CONDUCT.md), which we expect to be strictly respected.  

### Suggest a new feature or report a bug

If you notice any other bugs or you have any ideas to improve our SDK, feel free to create an issue. We'll be more than happy to discuss it! Check our [issue templates](.github/ISSUE_TEMPLATE).

### Do it yourself

Check out our [CONTRIBUTING](./CONTRIBUTING.md) file!

## License

[MIT](./LICENSE)