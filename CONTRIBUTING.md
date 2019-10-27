# Contributing to spotify-web-sdk

So apparently you want to contribute with our project or you stumbled upon this file at random. Welcome, anyway!

Before anything else, please note that we have a [Code of Conduct](.github/CODE_OF_CONDUCT.md), which we expect to be strictly respected.

## Tests

Our tests are currently written with [nock](https://github.com/nock/nock) + [Chai](https://www.chaijs.com/) + [Mocha](https://mochajs.org/). All tests are placed under the `test` folder, and there is (or should be) one `name.test.ts` file for each `name.ts` file under the root of `src/lib`.

Our current implementation of tests uses nock for mocking HTTP request responses, so the tests work similarly. Reading one of them might be the best way to understand how the process works.

In the future, edge cases and other strategies should be considered to build a stronger test environment.

## Documentation

This project is still lacking a lot documentation-wise; we rely on the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/), but we think it's important to bring it closer to the code in the near future.

## Implementation

Currently, we're successfully covering all possible endpoints in the Spotify Web API! However, we can certainly improve our code further!

## Styleguide

We use `tslint` to check if everything is tidy around here; because of `prettier`, which is run every time before a commit is completed, you shouldn't have to worry a lot about our styles. However, we encourage you to always write the best code you can!

Our continuous integration setup runs `tslint` and it'll break if there are remaining errors. Run `yarn lint` to check for errors and fix them before you send a PR!

## Creating a PR

We have a simple PR template that should appear once you create a PR. Try to be the most descriptive you can when creating your PR so that we have an easier and more complete overview of what you've made.

Be aware that all PRs should be made to the most recent version branch (currently, `v0.5.x`). Only the repository maintainers can send PRs straight to the `master` branch, as it reflects on the most recent version published to npm.

Thank you for contributing to our project!
