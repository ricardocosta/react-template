# Contributing

This document includes some guidelines for contributing to the project.

## 💻 Development

Clone the repository and install all the dependencies:

```
$ git clone <git-remote-url>
$ cd <location>
$ yarn
```

You can run the application locally with:

```
$ yarn start
```

The application will be available at [http://localhost:3000/](http://localhost:3000/).

You can also run a production-ready build of the app locally (being available at [http://localhost:5000/](http://localhost:5000/)):

```
$ yarn build
$ npx serve -s build
```

## 💅 Linting

The project is configured with [ESLint](https://eslint.org/) for linting, which uses [Prettier](https://prettier.io/) under the hood. The Typescript compiler is also used during the linting stage to make sure the code compiles correctly after changes are made by the other linting tools. Check the `.eslintrc.json` file to see the used configurations and plugins.

Run `yarn lint` to lint the source code, or `yarn lint:dry` to run the linting tools without actually modifying the code.

## 🐛 Testing

The project uses [Jest](https://jestjs.io/) to run the tests, and it's already configured with [Testing Library](https://testing-library.com/).

The tests can be run with `yarn test` for interactive mode, or `yarn test:ci` for CI mode, where all the tests are run without user input.

You can also run `yarn test:coverage`, which will run the tests and generate a coverage report on the console and in HTML format (`coverage` directory).

## 🚧 Committing

This project uses the [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that commit messages must adhere to the specification, so that they stay consistent and can be used to automatically generate change logs when releasing new versions.

The following types of commits are supported:

- `build`: Changes that affect the build system or external dependencies.
- `ci`: Changes to the CI configuration files and scripts.
- `docs`: Documentation only changes.
- `chore`: Common tasks that do not need to be tracked, i.e. update dependencies.
- `feat`: A new feature.
- `fix`: A bug fix.
- `perf`: A code change that improves performance.
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `revert`: Revert a previous commit
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `test`: Adding missing tests or correcting existing tests.

Any breaking changes that are introduced during development need to be tracked in the commit message. To do so, we need to add a bang (`!`) to the type of commit (e.g. `feat!`) and `BREAKING CHANGES:` as part of the commit message:
```
feat!: Breaking something
BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

This will result in this changelog:
```
### ⚠ BREAKING CHANGES
* `extends` key in config file is now used for extending other config files.
### Features
* Breaking something
```

### Rules

The commits are checked and validated using [`commitlint`](https://github.com/conventional-changelog/commitlint). The linter can be configured to some extent but there are some things that need to be documented in order to keep the commit history as clean and as consistent as possible:

- Commits must be prefixed with a type. The supported types are listed in the above section.
- Breaking changes must be indicated in the type of a commit.
- Subjects must use sentence-case.
- Subjects must use imperative tense, as if issuing a command or making a request.
- Commits should have a body explaining why they are needed, what they are doing and how.
- Commits should have a reference to the JIRA issue, if one exists.

## 🔀 Pull Requests

Pull requests should have a clear scope and be concise. When applicable, include screenshots that better demonstrate the newly introduced features or bug fixes.
