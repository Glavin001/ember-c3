# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [4.0.2](https://github.com/Glavin001/ember-c3/compare/v4.0.0...v4.0.2) (2022-06-16)


### Bug Fixes

* Update incorrect CLI version in README ([611d7f8](https://github.com/Glavin001/ember-c3/commit/611d7f8d723100a8cc1d9a283ebe4efbf1d09992))

### [4.0.1](https://github.com/Glavin001/ember-c3/compare/v4.0.0...v4.0.1) (2022-06-16)

## [4.0.0](https://github.com/Glavin001/ember-c3/compare/v3.0.2...v4.0.0) (2022-06-15)


### ⚠ BREAKING CHANGES

* Consuming apps must have ember-auto-import >= 2
* Addon component is now colocated requiring Ember v3.13 or above
* Drop support for Node v8, v10

### Features

* Convert to a glimmer component ([d54e91f](https://github.com/Glavin001/ember-c3/commit/d54e91f392b923a5faa8e1a0c11bc50174fc0e34))
* Modernize dummy app examples ([daf8e3c](https://github.com/Glavin001/ember-c3/commit/daf8e3c2235c1436bd557ffc69ba4163e6b705aa))
* Upgrade to ember-auto-import v2 ([c190b7f](https://github.com/Glavin001/ember-c3/commit/c190b7f77540e753ea8b99f8b627ecb778c38d83))


### Bug Fixes

* **Events example:** Correct value used in myClick if statement ([58942f8](https://github.com/Glavin001/ember-c3/commit/58942f8361e92142b9160854a7f58d3fe682a069))
* Fix assignment of empty data labels ([027256e](https://github.com/Glavin001/ember-c3/commit/027256e71a8ea06052c5db47ff77bf35990c39ab))
* Fix chart to properly handle missing data sources ([4a57dc1](https://github.com/Glavin001/ember-c3/commit/4a57dc18d5652eee5b7a399ce92219dc5ad094d8))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

#### [v3.0.2](https://github.com/Glavin001/ember-c3/compare/v3.0.1...v3.0.2)

> 14 March 2021

### Bug Fixes

* Remove duplicate onresize event ([80982ab](https://github.com/Glavin001/ember-c3/commit/80982ab8dc88e29ab3e80896f57e5e80ca4e4878))
* Templates pointing to the incorrect snippets ([9e5c540](https://github.com/Glavin001/ember-c3/commit/9e5c540b3eb5540fd9796c02309c6db1942ebd5f))

#### [v3.0.1](https://github.com/Glavin001/ember-c3/compare/v3.0.0...v3.0.1)

> 22 November 2019

- Refactor dummy app to remove the need for @classic [`3647c9d`](https://github.com/Glavin001/ember-c3/commit/3647c9d2b4b1a0c5589fba7187f72e69d93a8b75)
- Documentation - convert all README examples to native classes [`d043985`](https://github.com/Glavin001/ember-c3/commit/d04398515d9860b4bdd92c4a468e73f7421933bd)
- Removed unneeded constructor from readme example [`6f4a9f2`](https://github.com/Glavin001/ember-c3/commit/6f4a9f25b1b2eb447d0e623dcac4210f9fa91ce6)
- Remove .vscode from npm package [`e3c84c5`](https://github.com/Glavin001/ember-c3/commit/e3c84c533827b125905dc5e25036dba695a60f46)

### [v3.0.0](https://github.com/Glavin001/ember-c3/compare/v2.0.1...v3.0.0)

> 22 November 2019

- Ember 3.12 [`#105`](https://github.com/Glavin001/ember-c3/pull/105)

#### [v2.0.1](https://github.com/Glavin001/ember-c3/compare/v2.0.0...v2.0.1)

> 28 July 2019

- Document angle-bracket and Ember bug [`6879294`](https://github.com/Glavin001/ember-c3/commit/687929405f2c3dd59bf50065d0cc52306d3cdafc)

### [v2.0.0](https://github.com/Glavin001/ember-c3/compare/v1.3.1...v2.0.0)

> 11 July 2019

- c3/d3 latest version, bumped all deps [`#100`](https://github.com/Glavin001/ember-c3/pull/100)

#### [v1.3.1](https://github.com/Glavin001/ember-c3/compare/v1.2.4...v1.3.1)

> 23 May 2019

- Use require.resolve to find c3 path [`#97`](https://github.com/Glavin001/ember-c3/pull/97)
- Add ability to access D3 in applications [`#96`](https://github.com/Glavin001/ember-c3/pull/96)
- minor readme updates [`6df8f0f`](https://github.com/Glavin001/ember-c3/commit/6df8f0f8c6ea090b11ffb0a1520bb008d38b007e)
- updated change log [`9d479cc`](https://github.com/Glavin001/ember-c3/commit/9d479ccc6d0e6710614bda681f350246e946b3f7)

#### [v1.2.4](https://github.com/Glavin001/ember-c3/compare/v1.2.2...v1.2.4)

> 18 December 2018

- Bugfix/guage template [`#93`](https://github.com/Glavin001/ember-c3/pull/93)
- improve readability of sample app templates [`#92`](https://github.com/Glavin001/ember-c3/pull/92)
- removed double version key [`476f216`](https://github.com/Glavin001/ember-c3/commit/476f2161602db19109010348fa4fe47f39c80ceb)

#### [v1.2.2](https://github.com/Glavin001/ember-c3/compare/v1.2.1...v1.2.2)

> 30 November 2018

- Bumps ember-cli to fix npm audit warnings [`#91`](https://github.com/Glavin001/ember-c3/pull/91)
- bumped lock files [`7ddcb51`](https://github.com/Glavin001/ember-c3/commit/7ddcb51d77eead7a5bec4ae1d780213b8412679c)

#### [v1.2.1](https://github.com/Glavin001/ember-c3/compare/v1.2.0...v1.2.1)

> 21 November 2018

- bugfix handle empty vendor tree [`4ea62b5`](https://github.com/Glavin001/ember-c3/commit/4ea62b54c935c0c59340683d4748bdab26458ff4)

#### [v1.2.0](https://github.com/Glavin001/ember-c3/compare/v1.0.1...v1.2.0)

> 12 November 2018

- Feat/dynamic title [`#89`](https://github.com/Glavin001/ember-c3/pull/89)
- fixed issue with refresh dynamic title refresh logic [`c0552bb`](https://github.com/Glavin001/ember-c3/commit/c0552bbd82c43ae723ed39b3cc4500ee0f86c43f)
- pies -&gt; pie segments [`ce73f8a`](https://github.com/Glavin001/ember-c3/commit/ce73f8aa04305be51d34374ba6b09791b93317cd)

### [v1.0.1](https://github.com/Glavin001/ember-c3/compare/v0.3.1...v1.0.1)

> 10 November 2018

- R/1.0.0 [`#88`](https://github.com/Glavin001/ember-c3/pull/88)
- catch no data errors [`#87`](https://github.com/Glavin001/ember-c3/pull/87)
- Catch data errors [`#86`](https://github.com/Glavin001/ember-c3/pull/86)
- update tags [`#85`](https://github.com/Glavin001/ember-c3/pull/85)
- Convert imports to broccoli [`#84`](https://github.com/Glavin001/ember-c3/pull/84)
- Upgrade to ember 3.4 lts [`#83`](https://github.com/Glavin001/ember-c3/pull/83)
- c3 event action tests [`#82`](https://github.com/Glavin001/ember-c3/pull/82)
- added c3 interaction property [`#81`](https://github.com/Glavin001/ember-c3/pull/81)
- Fixed merge errors, improved readme [`#80`](https://github.com/Glavin001/ember-c3/pull/80)
-  update ember/ember-cli versions  [`#75`](https://github.com/Glavin001/ember-c3/pull/75)
- Demonstrate Fix [`#1`](https://github.com/Glavin001/ember-c3/pull/1)
- Fix reload [`#64`](https://github.com/Glavin001/ember-c3/pull/64)
- Prevent reload when component is being destroyed [`#69`](https://github.com/Glavin001/ember-c3/pull/69)
- Use dev-enabled bower assets in development and test envs [`#63`](https://github.com/Glavin001/ember-c3/pull/63)
- added bootstrap for updated dummy app [`9fb28ff`](https://github.com/Glavin001/ember-c3/commit/9fb28ff9873c9c28197e0e0874874f1f809277e9)
- updated deps [`9d56df3`](https://github.com/Glavin001/ember-c3/commit/9d56df351551756d59a40da422a0c0350eecc65b)
- switched npm test [`5ba4638`](https://github.com/Glavin001/ember-c3/commit/5ba46382262d488e96c72246937bfc76e60f0eb4)
- added ember-code-snippet addon [`98549ff`](https://github.com/Glavin001/ember-c3/commit/98549ff6c7d2946c2a7bc078e081206b89927d4b)
- updated lock files [`a80335e`](https://github.com/Glavin001/ember-c3/commit/a80335e2342fda15c1b0b0a68d414075089663ee)
- updated deps [`7f2d5b7`](https://github.com/Glavin001/ember-c3/commit/7f2d5b73d04f0db4816d7c512826315c7cd5c75d)
- ember-auto-import remove bower [`15b5084`](https://github.com/Glavin001/ember-c3/commit/15b5084368d988c398cffed6b7f854a8c0ba1282)
- updated demos [`a6cb5a5`](https://github.com/Glavin001/ember-c3/commit/a6cb5a556e11e0c782d4ffc1fe8f84ebd74c150d)
- update ember/ember-cli versions [`dca4c04`](https://github.com/Glavin001/ember-c3/commit/dca4c049212b1f85961fb589d3c2a2963c083971)
- ember-cli-update [`d555ac9`](https://github.com/Glavin001/ember-c3/commit/d555ac9ccbcd9c875c4e2495b97bd5df4235e821)
- updated sample graphs [`0dce973`](https://github.com/Glavin001/ember-c3/commit/0dce97336d26157f5e9f28164d77e91745f5e2e8)
- es5 getters [`763f099`](https://github.com/Glavin001/ember-c3/commit/763f099651bf7bb48b9a58b04c0433f379706883)
- removed ember-d3 - not used in dummy app [`9a97b4f`](https://github.com/Glavin001/ember-c3/commit/9a97b4f4b860229dac19fb713b2c5263dde0aa6f)
- upgraded to 3.1 [`5c9aa71`](https://github.com/Glavin001/ember-c3/commit/5c9aa711f4d2f4f25bdec9f04b263c055500d71a)
- prettified js files [`63a9b81`](https://github.com/Glavin001/ember-c3/commit/63a9b816d28fad812456ebced8ec0d4e2aaa954f)
- added tests for basic chart types [`66906dd`](https://github.com/Glavin001/ember-c3/commit/66906dd8851d94e2c175ecfb0f452fa4ee3b06d9)
- refactored code [`2e731fa`](https://github.com/Glavin001/ember-c3/commit/2e731faca92d8caf0729add5c4436ae15d5dc92a)
- updated readme [`04c6e2f`](https://github.com/Glavin001/ember-c3/commit/04c6e2f60933c3aea6ccd6cb6fa53951bc5bfe50)
- drilldown demo graph [`e890f3b`](https://github.com/Glavin001/ember-c3/commit/e890f3bd5741870d620dca986fdf7b1be1d36908)
- added c3 event handling [`6aaea9f`](https://github.com/Glavin001/ember-c3/commit/6aaea9f23e16a01a0bee29067ac16a7bd33de454)
- updated dummy app [`dcc05f9`](https://github.com/Glavin001/ember-c3/commit/dcc05f951ef90ce941c57e7fc801beadb8c68150)
- upgrade to 3.3 [`7ebf154`](https://github.com/Glavin001/ember-c3/commit/7ebf154e1940f15cd0e1ae4e665ffa2dbe78ab97)
- added d3 to squash ember-d3 error msg [`c2af098`](https://github.com/Glavin001/ember-c3/commit/c2af0987b47fb9e59c57513acd815aaa53cead3d)
- refactored self=this [`bebd427`](https://github.com/Glavin001/ember-c3/commit/bebd42752a816fbe83cf6057dd300ad5edbf5e22)
- prettified [`9ce40ec`](https://github.com/Glavin001/ember-c3/commit/9ce40ec685374ce774a5d24a9033e03ea3046602)
- added c3 events to readme [`17207e1`](https://github.com/Glavin001/ember-c3/commit/17207e1101a6040c5dd2eaae8d6a6f29dc03a6d4)
- graph display component [`b6eac45`](https://github.com/Glavin001/ember-c3/commit/b6eac4539cf4a4f51cedd2bdc9883076f6eb0c7d)
- refactored to simplify [`8def266`](https://github.com/Glavin001/ember-c3/commit/8def2667fdfb54344a2cf754a88295d695b79b16)
- fixed travis enviroment [`52fd891`](https://github.com/Glavin001/ember-c3/commit/52fd89161a486900d4989b92a1e1c9221d73fb09)
- minor fixes to demos, updated readme [`f3c1a75`](https://github.com/Glavin001/ember-c3/commit/f3c1a756bd299d33d0958e0e8769b315804701a3)
- updated readme [`30bff35`](https://github.com/Glavin001/ember-c3/commit/30bff35d011a4a68d3e36db0a77d0833b96bf18a)
- examples and docs updates [`73a578f`](https://github.com/Glavin001/ember-c3/commit/73a578fe94567c8258ee5acd5d19f37c820d7317)
- cleaned up controllers [`a3c832b`](https://github.com/Glavin001/ember-c3/commit/a3c832b162ef53b36faa9b3251c035309d5b374d)
- upgrade imports, added error handler [`9e43304`](https://github.com/Glavin001/ember-c3/commit/9e43304d551f44eb17cdd00ea4f4e7ae48a1a788)
- updated travis tests for node 5 [`29bccba`](https://github.com/Glavin001/ember-c3/commit/29bccba8103f516762c3871fe1cfdef8cb18ff2d)
- fixed conflicts [`cfad259`](https://github.com/Glavin001/ember-c3/commit/cfad259b8dfd27319233e96b9e9abd4d1945b9b1)
- refactored gets/sets [`e210e59`](https://github.com/Glavin001/ember-c3/commit/e210e59b9343132aa1642ad0a6f0e65f467a8f8b)
- default integration test [`ba6118c`](https://github.com/Glavin001/ember-c3/commit/ba6118c1d2a9e95351249919faef432010196eb0)
- new index controller [`9327906`](https://github.com/Glavin001/ember-c3/commit/9327906e235d44f2b112e0f2f38282a309836a78)
- changed demo links to buttons to work with gh-pages [`f8f92ce`](https://github.com/Glavin001/ember-c3/commit/f8f92ce3b251c3eb2f069bf2dcd6909c15bb692b)
- added basic integration test - needs much more [`7a46e5c`](https://github.com/Glavin001/ember-c3/commit/7a46e5c1a8432dce696978c62ef353950f81e133)
- fixed conflicts [`cea40fe`](https://github.com/Glavin001/ember-c3/commit/cea40fed9be98a678a03dfbbcda093941aa0d890)
- updated property documention in readme [`2e05c39`](https://github.com/Glavin001/ember-c3/commit/2e05c39e0edaa30162633a7f2a9fbce2ec70b3d6)
- use dev-enabled bower assets in development and production envs [`2e38b06`](https://github.com/Glavin001/ember-c3/commit/2e38b062c6c0df73b1c80e1538d7cdb7d7de47b1)
- added pjson version number to dummy app header [`2f6af23`](https://github.com/Glavin001/ember-c3/commit/2f6af23477c62f4ec0f9a196944d9223ee1eccdc)
- bumped c3 and d3 versions [`a719dc6`](https://github.com/Glavin001/ember-c3/commit/a719dc6fe952c12f95bfde914cf7bdc660ea8851)
- replace ember-browserify with ember-cli-cjs-transform [`9e2f2a7`](https://github.com/Glavin001/ember-c3/commit/9e2f2a7eb2e5bc4836dc051e84092a1dae22060e)
- updates to demos [`ec74576`](https://github.com/Glavin001/ember-c3/commit/ec7457658f2bb2fa48d556311a42596d1fb94b46)
- adding auto import options [`b068c97`](https://github.com/Glavin001/ember-c3/commit/b068c97950423d7d051f258eaeb8e3c12d77de51)
- rmoved content security policy [`2291519`](https://github.com/Glavin001/ember-c3/commit/22915198d23aa8e5cab319a048370b1f1011a7c8)
- removed ember [`6936d90`](https://github.com/Glavin001/ember-c3/commit/6936d90993ddab56f9f0126c3d09bb2400c6605e)
- fixed lint error in guage demo [`eb25409`](https://github.com/Glavin001/ember-c3/commit/eb254090dd446e58e625297bb5f1206d560db3db)
- code background css [`e00fa03`](https://github.com/Glavin001/ember-c3/commit/e00fa03173afe10d995c570dfbc42a2d5b341fac)
- delete bower.json [`534f955`](https://github.com/Glavin001/ember-c3/commit/534f955dffd84c95c460fb5412fcf29528e656f3)
- fixed this._super [`0f2f8ba`](https://github.com/Glavin001/ember-c3/commit/0f2f8ba8e144ac873e446315007d969ab447c67c)
- fixed broken link in readme [`8a51876`](https://github.com/Glavin001/ember-c3/commit/8a518765e2591910254627239b8a37082f43e06c)
- updated demo links in readme [`5e51412`](https://github.com/Glavin001/ember-c3/commit/5e51412ca40122056b316e3fa31c2fd1e31708c7)
- Update _reload per pr #7  @dipil-saud [`d956305`](https://github.com/Glavin001/ember-c3/commit/d956305d03d1a52ff83c37d781b2b2ee9dcdfc50)
- fixed issue with _transition and transition [`0d2a13a`](https://github.com/Glavin001/ember-c3/commit/0d2a13ace7dcd2fb387ee77889f35e2abf495548)
- refactored dead code [`d334d19`](https://github.com/Glavin001/ember-c3/commit/d334d19943e0c44bddb44b44199500e10971f105)
- added cd title property to component [`97b81b1`](https://github.com/Glavin001/ember-c3/commit/97b81b1f74ad34ea5c43f92b3accf8064f96c094)
- added bower [`ce4ea22`](https://github.com/Glavin001/ember-c3/commit/ce4ea222f6fe153bf6fabc49c28466a82a8eb253)
- removed computed from guage demo to pass test [`d8837e6`](https://github.com/Glavin001/ember-c3/commit/d8837e6094c34bf6024de4fee0ebe4d05d112a16)
- added info on gh-pages deplo to readme [`59d05c6`](https://github.com/Glavin001/ember-c3/commit/59d05c6a255344eab6194f85f2bd3e354a179e0a)
- added ember gh-pages config [`7a197d7`](https://github.com/Glavin001/ember-c3/commit/7a197d7130617356ec35a3aa403252ccdfc9b2db)
- bumped version [`b104d2c`](https://github.com/Glavin001/ember-c3/commit/b104d2ce2bdf80265540905d6809bc38fc43b24e)
- bumped version [`dfb1460`](https://github.com/Glavin001/ember-c3/commit/dfb146001622ff6ec9f133da94cf07f750c8fcc4)
- added version disclaimer to readme [`517e09b`](https://github.com/Glavin001/ember-c3/commit/517e09b8df025b8853e8fd5aa192d34382d3d96c)
- bumped version [`9c36c87`](https://github.com/Glavin001/ember-c3/commit/9c36c875fbdd4e3c3b6d13a8dd9924eecb14e43d)
- fixed included to make ember-auto-import work in addon [`b5107f0`](https://github.com/Glavin001/ember-c3/commit/b5107f02b4462458a33c386b4ffc3b39af59179e)
- updated travis-ci test [`9d9bf96`](https://github.com/Glavin001/ember-c3/commit/9d9bf9635756366a27dc8c0bdf35ef6d8cbc51fa)
- fixed this.get [`52174a5`](https://github.com/Glavin001/ember-c3/commit/52174a5d60e9775a9d962813fe16acacb5a7280f)
- updated c3 version to latest [`fb87679`](https://github.com/Glavin001/ember-c3/commit/fb87679b948d0d2de135eeb72830726ab4869e3c)
- dropped shim version [`6845537`](https://github.com/Glavin001/ember-c3/commit/68455370f4e74950d7e766689362b16f98180183)
- es6 [`92f4d66`](https://github.com/Glavin001/ember-c3/commit/92f4d66a60b1375be31cbd3eca5696e26a2c2c59)
- removed debug [`6558045`](https://github.com/Glavin001/ember-c3/commit/65580455ff35e5bc45514c504246199e45e1533c)
- dropped hbs test from travis [`12407fb`](https://github.com/Glavin001/ember-c3/commit/12407fb5a6cd65a2ff49d0d25ebd049eeca75e8d)
- add idea files to git ignore [`ea41b15`](https://github.com/Glavin001/ember-c3/commit/ea41b152a13042ad3282f61e46024b27785c3d70)
- added ember logo for dummy app [`0f20930`](https://github.com/Glavin001/ember-c3/commit/0f209301b18d231d650ff1339e3ac55465340b04)

#### [v0.3.1](https://github.com/Glavin001/ember-c3/compare/v0.3.0...v0.3.1)

> 27 October 2016

- Clean up blueprints to avoid errors [`#61`](https://github.com/Glavin001/ember-c3/pull/61)
- update package to 0.3.0 [`4880ce5`](https://github.com/Glavin001/ember-c3/commit/4880ce50ebd89ae8afaf44691a5a424fe4c2575f)

#### [v0.3.0](https://github.com/Glavin001/ember-c3/compare/v0.1.5...v0.3.0)

> 10 September 2016

- Fix ember-c3-shim dependency [`#59`](https://github.com/Glavin001/ember-c3/pull/59)
- c3 rewrite [`#52`](https://github.com/Glavin001/ember-c3/pull/52)
- Updated to Ember CLI 1.13.13 [`#39`](https://github.com/Glavin001/ember-c3/pull/39)
- Add callback options as Ember actions [`#38`](https://github.com/Glavin001/ember-c3/pull/38)
- Add gauge to README as an attribute [`#33`](https://github.com/Glavin001/ember-c3/pull/33)
- Add support for updating groups [`#11`](https://github.com/Glavin001/ember-c3/pull/11)
- Added missing component property 'point' [`#27`](https://github.com/Glavin001/ember-c3/pull/27)
- Add Gitter badge to README [`#35`](https://github.com/Glavin001/ember-c3/issues/35)
- Closes #32. Add screenshots of demos to README [`#32`](https://github.com/Glavin001/ember-c3/issues/32)
- Closes #31. Add point, line, area options [`#31`](https://github.com/Glavin001/ember-c3/issues/31)
- Closes #30. Controller.notifyPropertyChange will update component [`#30`](https://github.com/Glavin001/ember-c3/issues/30)
- Fix #29. Update version number to 0.1.5 [`#29`](https://github.com/Glavin001/ember-c3/issues/29)
- Fix #29. Update version number to 0.1.5 [`#29`](https://github.com/Glavin001/ember-c3/issues/29)
- See #14. Implement up-to-date Ember-CLI addon [`deb2951`](https://github.com/Glavin001/ember-c3/commit/deb295136720f5929572f58de5ff80167d0a2ad8)
- overhaul [`d915dd3`](https://github.com/Glavin001/ember-c3/commit/d915dd362294f73dbba3ca6039d6dca5c9513ff8)
- Updated to Ember CLI 1.13.12 [`cfcf3ba`](https://github.com/Glavin001/ember-c3/commit/cfcf3baa5b249f1c2754452aef192df11d9fbf56)
- Improve README with installation and usage instruction [`f255cdb`](https://github.com/Glavin001/ember-c3/commit/f255cdbe084158bc37f4e84f7bd11b8175074a87)
- v3 [`508eb3f`](https://github.com/Glavin001/ember-c3/commit/508eb3f9b3ba54d5eb633f311a2d6bc10574dc7b)
- setup in runloop properly [`7105864`](https://github.com/Glavin001/ember-c3/commit/71058647c89f837256c38b460e52179861e01be6)
- Updated packages to latest EmberCLI [`2a54f8a`](https://github.com/Glavin001/ember-c3/commit/2a54f8a098c80d6e6becddae6879075b4653c9df)
- Remove dist/ [`b9a8ff3`](https://github.com/Glavin001/ember-c3/commit/b9a8ff384bf22edfe8a1e2f79d12fba873a2c0cc)
- Update c3-chart.js [`e6799db`](https://github.com/Glavin001/ember-c3/commit/e6799db7d7435893fdc5658c6074a32d7db01958)
- Fix demo [`05fc30e`](https://github.com/Glavin001/ember-c3/commit/05fc30e9abb0d78e8a89ff60670a7c71a8024034)
- shim imports [`9258a63`](https://github.com/Glavin001/ember-c3/commit/9258a63e8077c2e8fa623621b6fcfedcf0c5dbaf)
- Bind events [`311b9d6`](https://github.com/Glavin001/ember-c3/commit/311b9d68bb85e3d1a78d4aede4a2231faff49e82)
- Update package.json for release 0.1.0 [`09d9e70`](https://github.com/Glavin001/ember-c3/commit/09d9e706fcd28aac68e45a6ead6dbe8d112eb4bb)
- Add keywords for improved discoverability in npm searches [`f84d4c2`](https://github.com/Glavin001/ember-c3/commit/f84d4c27736b74e7ee3be9338a016014dc3f62d4)
- Setup ember-cli-github-pages [`0c95bae`](https://github.com/Glavin001/ember-c3/commit/0c95bae9f53e581faf50f89cc07bf66643fe68bc)
- Update chart.js [`5b64ccc`](https://github.com/Glavin001/ember-c3/commit/5b64cccea3e218ddb83a36c9aae22dbcc066f52e)
- add in d3 resolution [`77198b3`](https://github.com/Glavin001/ember-c3/commit/77198b3f72b90db685efe0d2995d1994f2f18994)
- make sure ember-c3-shim is installed on project [`4d65158`](https://github.com/Glavin001/ember-c3/commit/4d65158dfdd3f5262ac0897f6b1a7a03d0679b04)
- Add helpful links section to README [`c1a3771`](https://github.com/Glavin001/ember-c3/commit/c1a377109d75e6d5fa0cd56fc073f04a52dddd8a)
- Add demo links to examples in Usage section [`be08f02`](https://github.com/Glavin001/ember-c3/commit/be08f02d5a98539abb6aa3a3857ba53aebf18a3f)
- Add bower resolution for qunit-notifications [`2a50da0`](https://github.com/Glavin001/ember-c3/commit/2a50da0f1404b7c728a1d0820029fd9d763d2c33)
- add in ember-c3-shim and it's dependency ember-d3 [`7f7609a`](https://github.com/Glavin001/ember-c3/commit/7f7609a6bf492d331b12c681f1e7a80af649202e)
- Force URL type to be hash [`50af258`](https://github.com/Glavin001/ember-c3/commit/50af25870162ac8f7fa7855513eff728fdcde3a1)
- Add npm version badge to README [`27782c6`](https://github.com/Glavin001/ember-c3/commit/27782c6a8d86e42537de4bb546c281383907bce1)
- Remove dist/ path from live demo link [`7dbd25e`](https://github.com/Glavin001/ember-c3/commit/7dbd25e9f7a72e9688dd7e3638e9e4fe5f074deb)
- Update version to v0.2.0 [`c87905c`](https://github.com/Glavin001/ember-c3/commit/c87905c540d13578d38e9df9360263ab1de65cab)

#### [v0.1.5](https://github.com/Glavin001/ember-c3/compare/v0.1.4...v0.1.5)

> 14 July 2015

- Allow for handlebars 2.0 [`#15`](https://github.com/Glavin001/ember-c3/pull/15)
- Check in build of lib.js and updated README [`#23`](https://github.com/Glavin001/ember-c3/pull/23)
- Update from master [`#1`](https://github.com/Glavin001/ember-c3/pull/1)
- Add ability to specify point settings [`#20`](https://github.com/Glavin001/ember-c3/pull/20)
- Getting dummy app to run [`1afecc3`](https://github.com/Glavin001/ember-c3/commit/1afecc30b0a2acb051d92e42dbdf8f25fa2356a5)
- Publishing to github pages [`fd5390c`](https://github.com/Glavin001/ember-c3/commit/fd5390c6043b44253c69c64c0546a23a10d08d5f)
- Got addon working with out prototype extensions [`4711d8d`](https://github.com/Glavin001/ember-c3/commit/4711d8d040febc71fadf2d02c5b4e7d0838fc216)
- Checking built lib.js and updated README [`43daab6`](https://github.com/Glavin001/ember-c3/commit/43daab6a6c4c906afa3ba4b595f13d5a5d9e5213)
- Publishing to github pages [`0a2bb65`](https://github.com/Glavin001/ember-c3/commit/0a2bb658c5321b01030bd7d876a0e3a5e632da1a)
- Publishing to github pages [`9ad66c6`](https://github.com/Glavin001/ember-c3/commit/9ad66c66b5fa70bf7474623bc7a18a7680814135)
- Update CLI & gh-pages addon [`0558535`](https://github.com/Glavin001/ember-c3/commit/05585350195e0a21037ac37ae2ff572edeeffdac)
- Update shell script [`1270142`](https://github.com/Glavin001/ember-c3/commit/12701425cd998f770bb6a5e862a0e3667494118a)
- update shell script [`76b4844`](https://github.com/Glavin001/ember-c3/commit/76b484446f46c401130d6d7a60465cedbe3e8fc4)

#### [v0.1.4](https://github.com/Glavin001/ember-c3/compare/v0.1.3...v0.1.4)

> 11 May 2015

- check in new built library [`#22`](https://github.com/Glavin001/ember-c3/pull/22)
- No update element with property [`#21`](https://github.com/Glavin001/ember-c3/pull/21)
- Correct Ember CLI import instructions [`#13`](https://github.com/Glavin001/ember-c3/pull/13)
- Updating to Ember CLI [`b496a08`](https://github.com/Glavin001/ember-c3/commit/b496a08623f66e134d4c7b87c7cde0482ff6b5f7)
- WIP: need to get json-editor to work [`707d757`](https://github.com/Glavin001/ember-c3/commit/707d7578d4e93461ab6e82197e1adeab3f0c1460)
- Updated readme and added blue print [`7c83c59`](https://github.com/Glavin001/ember-c3/commit/7c83c59f8e63afa240cf4f9bbff0d51cede80dd1)
- Update grunt-ember-templates to allow building templates with handlebars 2.0.0 [`af2433a`](https://github.com/Glavin001/ember-c3/commit/af2433ad1859851517b420382061da1f3f409cd3)
- Little bit of code clean up, got jsoneditor to work [`40d9c1b`](https://github.com/Glavin001/ember-c3/commit/40d9c1b4e1e53aa80f1cef0694e3e311b5fe0201)
- Update package.json [`fd88c0d`](https://github.com/Glavin001/ember-c3/commit/fd88c0d3e74009e0ae1909af161b3592e6daa3d9)
- Updated to latest ember and added gh-pages addon [`fb890a0`](https://github.com/Glavin001/ember-c3/commit/fb890a0ee5cd96f784b22429299fbb4ee86b490e)
- See #8. Add Ember-CLI instructions [`743d2e1`](https://github.com/Glavin001/ember-c3/commit/743d2e1eda40dff6a0efa309cf9f6b4e7f515307)
- Add ability to specify point settings [`3586cad`](https://github.com/Glavin001/ember-c3/commit/3586cadb4b032fdeacfcee232a3a0c211f8d29ed)
- Adding the possibility of updating groups [`3e3e8ff`](https://github.com/Glavin001/ember-c3/commit/3e3e8ff692636098563746abab73ac82e83c265b)
- built file and fixed jshint error [`ecc16e5`](https://github.com/Glavin001/ember-c3/commit/ecc16e54aa9fca484bbe621994008cfa4bd6d79e)
- typo [`70f0445`](https://github.com/Glavin001/ember-c3/commit/70f04454574c3967c14b22afada67295c6827637)
- Remove handlebars version restriction to allow upgrading ember to 1.9.0+ [`e8ba7bb`](https://github.com/Glavin001/ember-c3/commit/e8ba7bbfbe18dfc992d48ce5a269e4afed577152)

#### [v0.1.3](https://github.com/Glavin001/ember-c3/compare/v0.1.2...v0.1.3)

> 21 July 2014

- Remove console.log statement [`#7`](https://github.com/Glavin001/ember-c3/pull/7)
- Recognise gauge component [`#5`](https://github.com/Glavin001/ember-c3/pull/5)
- See #4. Update dependencies and bumped version. [`4630501`](https://github.com/Glavin001/ember-c3/commit/46305015d483071f375c7e5d26d90602bd1d9985)
- Update README.md [`eaa6021`](https://github.com/Glavin001/ember-c3/commit/eaa6021de74fed8f350c979fa979a2c77a9b1ec8)

#### [v0.1.2](https://github.com/Glavin001/ember-c3/compare/v0.1.1...v0.1.2)

> 2 June 2014

- Update README with c3 js/css links [`0e254eb`](https://github.com/Glavin001/ember-c3/commit/0e254eb942c7d3cf3bf0ba94a1e3b9dc4a9f9749)
- Update version number. [`5d8315f`](https://github.com/Glavin001/ember-c3/commit/5d8315ff3f56bc4db883497936a33999df1246df)
- Updated version number. [`61599f9`](https://github.com/Glavin001/ember-c3/commit/61599f9166dba76a3b5f9076a13a8fe8d255512a)
- Updated C3 dependency so it supports up to next major release. [`c3fbb27`](https://github.com/Glavin001/ember-c3/commit/c3fbb27108681e53bda97be82fb5f19cbb4b1d83)
- Update README.md [`caf6609`](https://github.com/Glavin001/ember-c3/commit/caf66093c02ebdec0e33d818f364911f3aeebc37)

#### [v0.1.1](https://github.com/Glavin001/ember-c3/compare/v0.1.0...v0.1.1)

> 26 May 2014

- Fix typo that caused Bower not to parse bower.json [`d50fd8d`](https://github.com/Glavin001/ember-c3/commit/d50fd8d69b8fe40f0fb9b0e52d188a9980986c12)

#### v0.1.0

> 26 May 2014

- Initial commit. Used generator-ember-plugin to get started. [`45d6f87`](https://github.com/Glavin001/ember-c3/commit/45d6f879a269bb5947388d2a8033326bd2678de6)
- First working version. [`5063d52`](https://github.com/Glavin001/ember-c3/commit/5063d52a42b703ac00af22b7247f61933212ca09)
- See #1. Add dependencies, more foundational work. [`46c9a7c`](https://github.com/Glavin001/ember-c3/commit/46c9a7c130b509e17f9d2d46d396feee1abd23fa)
- Initial commit [`d38b540`](https://github.com/Glavin001/ember-c3/commit/d38b54053d13fc2b97d491f012a3217306760376)
- Built static code for GitHub pages. [`465066c`](https://github.com/Glavin001/ember-c3/commit/465066c1693df784feb3d76e10e5c6c0bc9a084f)
