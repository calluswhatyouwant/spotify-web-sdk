# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

-   Podcast-related (episodes and shows) retrieval and searching endpoints.
-   Episode, SimplifiedEpisode, Show, SimplifiedShow and SavedShow models.
-   actions to CurrentlyPlaying object.

### Changed

-   areSavedToCurrentUserLibrary supports shows.
-   getCurrentUserCurrentlyPlayingTrack and getUserPlaybackInformation support episodes.
-   saveAlbumsOrTracksForCurrentUser renamed into saveToCurrentUserLibrary to improve naming and saving shows.
-   removeAlbumsOrTracksForCurrentUser renamed into removeFromCurrentUserLibrary to improve naming and removing shows.
-   CurrentlyPlaying model supports an episode as its item.
-   SearchResults model supports episodes and shows as possible fields.

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
