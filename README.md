# React Starter

:ram: A boilerplate for React, Material, Babel, Flow, and ReactiveX.

|    | Project Information |
|:--:|---------------------|
| Live Demo | [![Develop Demo][demo-develop-image]][demo-develop-link] [![Master Demo][demo-master-image]][demo-master-link] |
| Develop Branch | [![Build Status][develop-build-image]][develop-build-link] [![Coverage Status][develop-coverage-image]][develop-coverage-link] |
| Master Branch | [![Build Status][master-build-image]][master-build-link] [![Coverage Status][master-coverage-image]][master-coverage-link] |
| Npm Package | [![dependencies Status][package-dependencies-image]][package-dependencies-link] [![devDependencies Status][package-devDependencies-image]][package-devDependencies-link] |

[demo-develop-image]: https://img.shields.io/badge/link-develop-blue.svg
[demo-develop-link]: https://react-by-example-dev.web.app/
[demo-master-image]: https://img.shields.io/badge/link-master-blue.svg
[demo-master-link]: https://react-by-example-prod.web.app/

[develop-build-image]: https://img.shields.io/circleci/project/github/Shyam-Chen/React-Play/develop.svg
[develop-build-link]: https://circleci.com/gh/Shyam-Chen/workflows/React-Play
[develop-coverage-image]: https://img.shields.io/codecov/c/github/Shyam-Chen/React-Play/develop.svg
[develop-coverage-link]: https://codecov.io/gh/Shyam-Chen/React-Play

[master-build-image]: https://img.shields.io/circleci/project/github/Shyam-Chen/React-Play/master.svg
[master-build-link]: https://circleci.com/gh/Shyam-Chen/workflows/React-Play
[master-coverage-image]: https://img.shields.io/codecov/c/github/Shyam-Chen/React-Play/master.svg
[master-coverage-link]: https://codecov.io/gh/Shyam-Chen/React-Play

[package-dependencies-image]: https://img.shields.io/david/Shyam-Chen/React-Play.svg
[package-dependencies-link]: https://david-dm.org/Shyam-Chen/React-Play
[package-devDependencies-image]: https://img.shields.io/david/dev/Shyam-Chen/React-Play.svg
[package-devDependencies-link]: https://david-dm.org/Shyam-Chen/React-Play?type=dev

## Table of Contents

* [Getting Started](#getting-started)
* [Key Features](#key-features)
* [Dockerization](#dockerization)
* [Configuration](#configuration)
* [Directory Structure](#directory-structure)

## Getting Started

Follow steps to execute this boilerplate.

1. Clone this boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/React-Play <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install dependencies

```bash
$ yarn install
```

3. Start a local server

```bash
$ yarn start
```

4. Compile and bundle code

```bash
$ yarn build
```

5. Check code quality

```bash
$ yarn lint
```

6. Runs unit tests

```bash
$ yarn unit
```

7. Runs end-to-end tests

```bash
$ yarn e2e
```

## Key Features

This seed repository provides the following features:

* [x] [Web Fundamentals](https://developers.google.com/web/fundamentals/)
* [x] [Firebase Platform](https://firebase.google.com/)
* [x] [Google Cloud](https://cloud.google.com/)
* [x] [Docker](https://www.docker.com/)
* [x] [CircleCI](https://circleci.com/)
* [x] [Codecov](https://codecov.io/)
* ----------
* [x] [React](https://github.com/facebook/react)
* [x] [React Router](https://github.com/ReactTraining/react-router)
* [ ] [React Intl](https://github.com/yahoo/react-intl)
* [x] [Recompose](https://github.com/acdlite/recompose)
* [x] [Redux](https://github.com/reduxjs/redux)
* [x] [Redux Thunk](https://github.com/reduxjs/redux-thunk)
* [x] [Reselect](https://github.com/reduxjs/reselect)
* [x] [Material UI](https://github.com/mui-org/material-ui)
* [x] [Axios](https://github.com/axios/axios)
* [x] [Webpack](https://github.com/webpack/webpack)
* [x] [JSX](https://github.com/facebook/jsx)
* [x] [JSS](https://github.com/cssinjs/jss)
* [x] [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* ----------
* [x] [Yarn](https://github.com/yarnpkg/yarn)
* [ ] [Apollo GraphQL](https://github.com/apollographql)
* [x] [ReactiveX](https://github.com/ReactiveX/rxjs)
* [x] [Babel](https://github.com/babel/babel)
* [x] [ESLint](https://github.com/eslint/eslint)
* [x] [Jest](https://github.com/facebook/jest)

## Dockerization

Dockerize an application.

1. Build and run the container in the background

```bash
$ docker-compose up -d <SERVICE>
```

2. Run a command in a running container

```bash
$ docker-compose exec <SERVICE> <COMMAND>
```

3. Remove the old container before creating the new one

```bash
$ docker-compose rm -fs
```

4. Restart up the container in the background

```bash
$ docker-compose up -d --build <SERVICE>
```

5. Push images to Docker Cloud

```diff
# .gitignore

  .DS_Store
  node_modules
  npm
  public
  functions
  coverage
+ dev.Dockerfile
+ stage.Dockerfile
+ prod.Dockerfile
  *.log
```

```bash
$ docker login
$ docker build -f ./tools/<dev|stage|prod>.Dockerfile -t <IMAGE_NAME>:<IMAGE_TAG> .

# checkout
$ docker images

$ docker tag <IMAGE_NAME>:<IMAGE_TAG> <DOCKER_ID_USER>/<IMAGE_NAME>:<IMAGE_TAG>
$ docker push <DOCKER_ID_USER>/<IMAGE_NAME>:<IMAGE_TAG>

# remove
$ docker rmi <REPOSITORY>:<TAG>
# or
$ docker rmi <IMAGE_ID>
```

6. Pull images from Docker Cloud

```diff
# docker-compose.yml

  <dev|stage|prod>:
-   image: <dev|stage|prod>
-   build:
-     context: .
-     dockerfile: ./tools/<dev|stage|prod>.Dockerfile
+   image: <DOCKER_ID_USER>/<IMAGE_NAME>:<IMAGE_TAG>
    volumes:
      - yarn:/home/node/.cache/yarn
    tty: true
```

## Configuration

### Project environments

Change to your project.

```js
// .firebaserc
{
  "projects": {
    "development": "<PROJECT_NAME>",
    "staging": "<STAGE_PROJECT_NAME>",
    "production": "<PROJECT_NAME>"
  }
}
```

### Default environments

Set your local environment variables. (use `this.<ENV_NAME> = process.env.<ENV_NAME> || <LOCAL_ENV>;`)

```js
// env.js
function Environments() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.PROJECT_NAME = process.env.PROJECT_NAME || '<PROJECT_NAME>';

  this.HOST_NAME = process.env.HOST_NAME || '0.0.0.0';

  this.SITE_PORT = process.env.SITE_PORT || 8000;
  this.SITE_URL = process.env.SITE_URL || `http://${this.HOST_NAME}:${this.SITE_PORT}`;

  this.APP_BASE = process.env.APP_BASE || '/';

  this.GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS || '<GOOGLE_ANALYTICS>';

  this.SENTRY_DSN = process.env.SENTRY_DSN || null;
  this.RENDERTRON_URL = process.env.RENDERTRON_URL || null;
}
```

### Deployment environment

Set your deployment environment variables.

```dockerfile
# tools/<dev|stage|prod>.Dockerfile

# envs --
ENV SITE_URL <SITE_URL>
ENV FUNC_URL <FUNC_URL>
# -- envs
```

### CI environment

Add environment variables to the CircleCI build.

```yml
CODECOV_TOKEN
DOCKER_PASSWORD
DOCKER_USERNAME
FIREBASE_TOKEN
```

### SEO friendly

Enable billing on your Firebase Platform and Google Cloud the project by switching to the Blaze plan.

Serve dynamic content for bots.

```diff
// firebase.json
    "rewrites": [
      {
        "source": "**",
-       "destination": "/index.html"
+       "function": "app"
      }
    ],
```

Deploy rendertron instance to Google App Engine.

```bash
$ git clone https://github.com/GoogleChrome/rendertron
$ cd rendertron
$ gcloud auth login
$ gcloud app deploy app.yaml --project <RENDERTRON_NAME>
```

Set your rendertron instance in deployment environment.

```dockerfile
# tools/<dev|stage|prod>.Dockerfile

# envs --
ENV RENDERTRON_URL <RENDERTRON_URL>
# -- envs
```

### VS Code settings

The most basic configuration.

```js
{
  "window.zoomLevel": 1,
  "workbench.colorTheme": "Material Theme",
  "workbench.iconTheme": "material-icon-theme",
  "eslint.validate": [
    "javascript", {
      "language": "vue"
    },
    "javascriptreact",
    "html"
  ],
  "javascript.validate.enable": false,
  "vetur.validation.script": false
}
```

## Directory Structure

The structure follows the LIFT Guidelines.

```coffee
.
├── src
│   ├── api
│   │   ├── __tests__
│   │   │   └── ...
│   │   ├── _<THING>  -> api of private things
│   │   │   └── ...
│   │   ├── core  -> core feature module
│   │   │   └── ...
│   │   ├── <FEATURE>  -> feature modules
│   │   │   ├── __tests__
│   │   │   │   └── ...
│   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── <GROUP>  -> module group
│   │   │   └── <FEATURE>  -> feature modules
│   │   │       ├── __tests__
│   │   │       │   └── ...
│   │   │       ├── _<THING>  -> feature of private things
│   │   │       │   └── ...
│   │   │       └── ...
│   │   ├── graphql
│   │   │   ├── <FEATURE>  -> feature modules
│   │   │   │   ├── __tests__
│   │   │   │   │   └── ...
│   │   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   │   └── ...
│   │   │   │   └── ...
│   │   │   └── <GROUP>  -> module group
│   │   │       └── <FEATURE>  -> feature modules
│   │   │           ├── __tests__
│   │   │           │   └── ...
│   │   │           ├── _<THING>  -> feature of private things
│   │   │           │   └── ...
│   │   │           └── ...
│   │   ├── shared  -> shared feature module
│   │   │   └── ...
│   │   └── index.js
│   ├── app
│   │   ├── __tests__
│   │   │   └── ...
│   │   ├── _<THING>  -> app of private things
│   │   │   └── ...
│   │   ├── core  -> core feature module
│   │   │   └── ...
│   │   ├── <FEATURE>  -> feature modules
│   │   │   ├── __tests__
│   │   │   │   ├── actions.spec.js
│   │   │   │   ├── <FEATURE>.e2e-spec.js
│   │   │   │   ├── <FEATURE>.spec.js
│   │   │   │   ├── <epics|sagas>.spec.js
│   │   │   │   ├── reducer.spec.js
│   │   │   │   └── selectors.spec.js
│   │   │   ├── _<THING>  -> feature of private things
│   │   │   │   └── ...
│   │   │   ├── actions.js
│   │   │   ├── constants.js
│   │   │   ├── <FEATURE>.vue
│   │   │   ├── <epics|sagas>.js
│   │   │   ├── reducer.js
│   │   │   ├── selectors.js
│   │   │   └── types.js
│   │   ├── <GROUP>  -> module group
│   │   │   └── <FEATURE>  -> feature modules
│   │   │       ├── __tests__
│   │   │       │   ├── actions.spec.js
│   │   │       │   ├── <FEATURE>.e2e-spec.js
│   │   │       │   ├── <FEATURE>.spec.js
│   │   │       │   ├── <epics|sagas>.spec.js
│   │   │       │   ├── reducer.spec.js
│   │   │       │   └── selectors.spec.js
│   │   │       ├── _<THING>  -> feature of private things
│   │   │       │   └── ...
│   │   │       ├── actions.js
│   │   │       ├── constants.js
│   │   │       ├── <FEATURE>.js
│   │   │       ├── <epics|sagas>.js
│   │   │       ├── reducer.js
│   │   │       ├── selectors.js
│   │   │       └── types.js
│   │   ├── shared  -> shared feature module
│   │   │   └── ...
│   │   ├── actions.js
│   │   ├── App.js
│   │   ├── constants.js
│   │   ├── epics.js
│   │   ├── reducer.js
│   │   ├── sagas.js
│   │   ├── selectors.js
│   │   └── types.js
│   ├── assets  -> datas, fonts, images, medias
│   │   └── ...
│   ├── client.js
│   ├── index.html
│   └── server.js
├── tools
│   └── ...
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .firebaserc
├── .flowconfig
├── .gitignore
├── Dockerfile
├── LICENSE
├── README.md
├── circle.yml
├── docker-compose.yml
├── env.js
├── firebase.json
├── jest.config.js
├── package.json
├── webpack.config.js
└── yarn.lock
```
