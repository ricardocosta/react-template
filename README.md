<h1>react-template</h1>

Template for React applications.

## 🔌 Running

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

## 🧰 Development

Please read the [contributing guide](./CONTRIBUTING.md) for further details on how to develop on this app.

## 🚀 Publishing

To publish a new version of the project:

1. Create a branch for the release:

```
$ git checkout -b release_$(date -u +"%Y%m%d")
```

2. Preview the changes to `CHANGELOG` and predicted tag:

```
$ yarn run release:dry
```

3. Update the `CHANGELOG` file automatically based on the commits:

```
$ yarn run release
```

4. Open a Pull Request against `master` and have it merged.

5. Update your local `master` branch, generate the new tag and push it:

```
$ git checkout master
$ git pull
$ yarn release:tag
$ git push --tags
```
