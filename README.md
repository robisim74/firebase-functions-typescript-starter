# Firebase Functions TypeScript starter

>Create & test Firebase Cloud Functions in TypeScript

This starter allows you to create & test **Firebase Cloud Functions** in _TypeScript_.

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
    - **rollup.config.js** _Rollup_ configuration for building the ES bundle
    - **tsconfig.json** _TypeScript_ compiler options
    - **.mocharc.json** _Mocha_ options
    - **.eslintrc.json** _ESLint_ configuration
- **.firebaserc**: Firebase projects

## <a name="2"></a>2 Customizing
1. Update [Firebase CLI](https://github.com/firebase/firebase-tools).

2. Update `.firebaserc` with your `project-id`.

3. Add your Firebase Functions to `index.ts` and create different files for each one.

4. Update in `rollup.config.js` file external dependencies with those that actually you use to build the ES bundle.

5. Create unit tests in `tests` folder.

## <a name="3"></a>3 Testing
The following command runs unit tests using _Mocha_ that are in the `tests` folder: 
```Shell
npm test 
```

## <a name="4"></a>4 Building
#### Development
Start _tsc_ compiler with _watch_ option:
```Shell
npm run build:dev
```

Start the emulator _firebase emulators:start --only functions_
```Shell
npm run serve:dev
```

For the other supported emulators, please refer to the official documentation: [
Run Functions Locally](https://firebase.google.com/docs/functions/local-emulator)

#### Production
The following command:
```Shell
npm run build
```
creates `lib` folder with the file of distribution:
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
1. _Node.js_

    The engine in `package.json` is set to _Node.js 16_ 

2. ES Modules

    _Node.js 16_ supports ES Modules: so you have `"type": "module"` in `package.json`, `format: 'es'` in `rollup.config.js` and `tsconfig.js` used by _tsc_ compiler targets ES2021 with ES2020 modules

3. Bundling with _Rollup_

    _Firebase Cloud Functions_ do not require the deployment of a single bundle. In any case the building with _Rollup_ offers some advantages:
    * _Tree shaking_ of unused code
    * No request for other files at runtime

## License
MIT
