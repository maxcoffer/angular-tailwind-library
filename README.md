# Angular Component Library

Test Angular Library used for components. Project contains testing environment for local development and e2e tests.

Component libarary styled with [TailwindCSS](https://tailwindcss.com).

## Emulation

To run emulation (or rather an example) of the module resolution please run this, once you've cloned project to your machine:

```bash
npm install
npm run build:library
npm start
```

See more about module resolutions here: <https://www.typescriptlang.org/docs/handbook/module-resolution.html>

### Example

In a browser you'll have an example of two types of resolution of the same angular library of components (which is resolved as NodeJS modules):

1. For e2e test and documentation purposes, which pointing to `./projects/library` forlder with raw sources of the angular library.

2. Emulation of the production build of the same library, pointing to `./dist/library`, which is the same code you'll incude as NPM package.

### Components

First and second components of the library are absolutely the same components, they just created for the purpose of different dirrective namespace to avoid mixing the source of the library.

## Development

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Build for Production

Run `npm run build` or `ng build` to build the entire project. The build artifacts will be stored in the `dist/` directory.

To build just Angular library, run `npm run build:library` or `ng build library`.

## Testing

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io).

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
