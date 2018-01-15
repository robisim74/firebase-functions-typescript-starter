# Firebase Functions TypeScript starter

>Create & test Firebase Cloud Functions in TypeScript.

This starter allows you to create & test **Firebase Cloud Functions** in TypeScript.

Get the [Changelog](https://github.com/robisim74/firebase-functions-typescript-starter/blob/master/CHANGELOG.md).

## Contents
* [1 Project structure](#1)
* [2 Customizing](#2)
* [3 Testing](#3)
* [4 Building](#4)
* [5 Publishing](#5)
* [6 What it is important to know](#6)

## <a name="1"></a>1 Project structure
- **functions**:
    - **src** folder for the Functions
        - **index.ts** entry point for all your Firebase Functions
    - **tests** folder for the _Mocha_ tests
    - **package.json** _npm_ options
    - **rollup.config.js** _Rollup_ configuration for building the _cjs_ bundle
    - **tsconfig.json** _tsc_ compiler options
    - **tsconfig-build.json** _tsc_ compiler options for production
- **.firebaserc**: Firebase projects

## <a name="2"></a>2 Customizing
1. Update [Firebase CLI](https://github.com/firebase/firebase-tools).

2. Update `.firebaserc` with your `project-id`.

3. Add your Firebase Functions to `index.ts`, and create different files for each one.

4. Update in `rollup.config.js` file external dependencies with those that actually you use to build the _cjs_ bundle.

5. Create unit tests in `tests` folder.

## <a name="3"></a>3 Testing
The following command runs unit tests using _Mocha_ that are in the `tests` folder: 
```Shell
npm test 
```
For the other supported tests, please refer to the official documentation: [
Run Functions Locally](https://firebase.google.com/docs/functions/local-emulator)

## <a name="4"></a>4 Building

#### Development
The following command:
```Shell
npm run serve:dev
```
- starts _tsc_ compiler with _watch_ option
- starts the emulator _firebase serve --only functions_

#### Production

The following command:
```Shell
npm run build
```
- creates `lib` folder with the file of distribution:
```
└── functions
    └──lib
        └── index.js
```

## <a name="5"></a>5 Publishing
```Shell
npm run deploy
```

## <a name="6"></a>6 What it is important to know
1. `commonjs` modules

    _NodeJs_ used by _Firebase Cloud Functions_ only supports _commonjs_ modules: so the `tsconfig.js` used by _tsc_ compiler targets _es2015_ with _commonjs_ modules

2. Bundling with _Rollup_

    _Firebase Cloud Functions_ does not require the deployment of a single bundle. In any case the building with _Rollup_ offers some advantages:
    * _Tree shaking_ of unused code
    * No request for other files at runtime
    
    Since _Rollup_ requires the _es2015_ modules, _tsc_ compilation is first performed using `tsconfig-build.js` with _es2015_ modules.

## License
MIT
