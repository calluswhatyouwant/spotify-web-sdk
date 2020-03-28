# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

-   Podcast-related retrieval and searching endpoints: `getEpisode`, `getSeveralEpisodes`, `getCurrentUserSavedShows`, `searchShows`, `searchEpisodes`.
-   Podcast-related models: `EpisodeSimplified`, `Episode`, `SavedShow`, `Show`, `ShowSimplified`.
-   `actions` to `CurrentlyPlaying` and `Episode` as a possible `item` type.
-   `episodes` and `shows` as possible attributes in `SearchResults`.
-   `additionalTypes` to the query parameters of `getCurrentUserCurrentlyPlayingTrack` and `getUserPlaybackInformation` to allow considering an `Episode` as the currently playing media.
-   `'shows'` as a possible value for the `type` in `areSavedToCurrentUserLibrary`.

### Changed

-   `saveAlbumsOrTracksForCurrentUser` renamed to `saveToCurrentUserLibrary` and support to shows.
-   `removeAlbumsOrTracksForCurrentUser` renamed to `removeFromCurrentUserLibrary` and support to shows.

## [0.5.2] - 2019-10-27

### Added

-   Instanbul CLI to generate test coverage reports.
-   Create CHANGELOG, CONTRIBUTING and PR template.

### Changed

-   Simplify tests for checking matching attributes between API responses and the objects generated from custom classes.
-   Consider tests when linting.

### Fixed

-   Fix a bug with the start/resume user playback request.

## [0.5.1] - 2019-10-02

### Fixed

-   Fix a pagination bug when subsequent API calls are made.

### Security

-   Update the versions of several dependencies.
