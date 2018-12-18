# Change Log

## v3.1 (December 18, 2018)

* Refactored dummy app templates for easier reading on demo site
* Bugfix - broken element in gauge demo

## v1.2.2 (November 26, 2018)

* Bumped Ember CLI

## v1.2.1 (November 18, 2018)

* Bugfix broccoli merge, empty vendor trees (resolves #90)

## v1.2.0 (November 11, 2018)

* Fixed issue with dtitle property

## v1.1.0 (November 10, 2018)

* Added dynamic title property (`dtitle`) so component can change title without manually using css
* Modified drill down example to show use of `dtitle`
* Added test for `dtitle`


All tags greater than 0.3.1 are internal to track changes to 1.0.0.  The last release prior to 1.0.0 is 0.3.1.  See issue [#77](https://github.com/Glavin001/ember-c3/issues/77) for details

## v1.0.0 (November 9, 2018)

* Upgrade from ember 1.13 to 3.4 LTS
* c3 and d3 latest versions
* Add c3 chart property for api access
* Add c3 title property
* Add interaction property (pr [#81](https://github.com/Glavin001/ember-c3/pull/81/files))
* Upgrade ember-cli-babel to v7
* Added integration tests for rendering and c3 events (prs [#79](https://github.com/Glavin001/ember-c3/pull/79/files) and [#82](https://github.com/Glavin001/ember-c3/pull/82/files))
* Removed c3 and d3 bower dependencies
* Document unloadDataBeforeChange
* Reworked dummy app examples and added additional examples
* Add logic to capture no data passed and provide dummy data to prevent c3 errors. See example (pr [#86](https://github.com/Glavin001/ember-c3/pull/86/files)
* fixed depreciation warnings
* fixed reload during destroy issue (pr [#64](https://github.com/Glavin001/ember-c3/pull/64/files))
* More details in readme


## [v0.3.1](https://github.com/Glavin001/ember-c3/releases/tag/untagged-f3a88022857d95a738fb)  Release (Oct 27, 2016)

* #61 clean up blueprints to avoid errors

## [v0.3.0](https://github.com/Glavin001/ember-c3/releases/tag/v0.3.0)  Release  (Sept 9, 2016)

* Rewrite of Ember-C3!
* Fix demo

## [v0.1.5](https://github.com/Glavin001/ember-c3/releases/tag/v0.1.5)  Release (July 14, 2015)

* Merge pull request [#15](https://github.com/Glavin001/ember-c3/pull/15/files) from aaronrenner/master

## [v0.1.4](https://github.com/Glavin001/ember-c3/releases/tag/v0.1.4)  Release (May 11, 2015)

* Merge pull request [#22](https://github.com/Glavin001/ember-c3/pull/22/files) from thefrontside/built-element-prop-bugfix

## [v0.1.3](https://github.com/Glavin001/ember-c3/releases/tag/v0.1.3)  Release (July 21, 2014)

* Merge pull request [#7](https://github.com/Glavin001/ember-c3/pull/7/files) from pitchtarget/remove-console-log

## [v0.1.2](https://github.com/Glavin001/ember-c3/releases/tag/v0.1.2)  Release (July 2, 2014)

* Update to support new versions of C3

## [v0.1.1](https://github.com/Glavin001/ember-c3/releases/tag/v0.1.1)  Release (May 26, 2014)

Bug Fix - bower should now work

* Fix typo that caused Bower not to parse bower.json

## [v0.1.0](https://github.com/Glavin001/ember-c3/releases/tag/v0.1.0)  Release (2014-05-26)

First working version

* Live updating on data change
* Support for setting all configuration attributes

