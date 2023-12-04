# MYOB BFF API

## Prerequisite

Before you can build and test this project, you must install and configure the
following products on your development machine:

- [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.

- [Node.js](http://nodejs.org), (version specified in the engines field of [`package.json`](package.json) which is used to run a development web server,
  run tests, and generate distributable files.


## Build
To build this project, run:
```shell
yarn install
```

## Run
To run this project, run:
```shell
yarn start
```
Last line in terminal should now show
```shell
🚀  Server ready at http://localhost:4000/
```
Head to browser on http://localhost:4000, this will bring up the graphql playground with autocomplete feature.

## Lint
To check linting, run:
```shell
yarn run lint
```

To fix auto-fixable linting, run:
```shell
yarn run lintfix
```

Project uses yarn-offline-mirror to cache and resolve dependencies offline. ".yarnrc" defines the path to cached files.
To clear cache at anytime run:
```shell
yarn cache clean
```
