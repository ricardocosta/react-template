<h1>react-template</h1>

Template for React applications.

- [Development](#development)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
    - [`yarn lint`](#yarn-lint)
    - [`yarn build`](#yarn-build)
    - [`yarn storybook`](#yarn-storybook)
    - [`yarn storybook:build`](#yarn-storybookbuild)
    - [`yarn release`](#yarn-release)
  - [docker-compose services](#docker-compose-services)
    - [`lint`](#lint)
    - [`tests`](#tests)
    - [`dev`](#dev)
    - [`production`](#production)
    - [`storybook`](#storybook)

## Development

This project was bootstrapped with [Create React App](https://create-react-app.dev/). Check the documentation for advanced features and update instructions.

### Available Scripts

In the project directory, you can run:

#### `yarn start`


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Run `yarn test:ci` to run tests in CI mode (non-interactive).

#### `yarn lint`

Runs linting tasks on top of the app's code. It combines three other scripts:

- `yarn lint:format`: Formats the code using [Prettier](https://prettier.io/).
- `yarn lint:eslint`: Runs ESLint on the code. Check the `.eslintrc.json` file to see the used configurations and plugins.
- `yarn lint:tsc`: Compiles the Typescript code.

Run `yarn lint:dry` to perform the linting tasks without changing the code. It replaces `yarn lint:format` with `yarn lint:format:dry`, that only checks the code instead of modifying it.

#### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. Open [http://localhost:5000](http://localhost:5000) to view it.

The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn storybook`

Runs Storybook to showcase the application's code and components. Open [http://localhost:9009](http://localhost:9009) to view it.

#### `yarn storybook:build`

Builds Storybook in order to be deployable in a server.

#### `yarn release`

Generates a new release by using [standard-version](https://github.com/conventional-changelog/standard-version). It will:

1. Retrieve the current version.
2. Bump the version based on the commits.
3. Generate a changelog based on the commits.
4. Create a new commit including the updated version and CHANGELOG.
5. Create a new tag with the new version number.

### docker-compose services

#### `lint`

Runs linting tasks without modifying the code (`yarn lint:dry`).

`$ docker-compose run --rm lint`

#### `tests`

Runs tests in CI mode (`yarn test:ci`).

`$ docker-compose run --rm tests`

#### `dev`

Runs the application with development build (`yarn start`). Available at [http://localhost:3000](http://localhost:3000).

`$ docker-compose up dev`

#### `production`

Runs the application with production build (`yarn build && serve -s build`). Available at [http://localhost:5000](http://localhost:5000).

`$ docker-compose up production`

#### `storybook`

Runs the application's Storybook (`yarn storybook`). Available at [http://localhost:9009](http://localhost:9009).

`$ docker-compose up storybook`
