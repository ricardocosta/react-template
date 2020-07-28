<h1>bank-vault</h1>

UI shell for microfrontends of Bank.

- [Development](#development)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
    - [`yarn lint`](#yarn-lint)
    - [`yarn build`](#yarn-build)
    - [`yarn storybook`](#yarn-storybook)
    - [`yarn storybook:build`](#yarn-storybookbuild)

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

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn storybook`

Runs Storybook to showcase the application's code and components. Open [http://localhost:9009](http://localhost:9009) to view it.

#### `yarn storybook:build`

Builds Storybook in order to be deployable in a server.
