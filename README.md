# casdoor-react-only-example

This is a React-only example of Casdoor. Here use firebase as the example.

## How to run

### 1. Create a firebase project

Go to [Firebase Console](https://console.firebase.google.com/) to create a project.
Copy your project config to `src/setting.js`.

```javascript
const firebaseConfig = {
    apiKey: "×××",
    authDomain: "casdoor-react-only-example.firebaseapp.com",
    projectId: "casdoor-react-only-example",
    storageBucket: "casdoor-react-only-example.appspot.com",
    messagingSenderId: "×××",
    appId: "×××",
    measurementId: "×××"
};
```

### 2. Install dependencies

```shell
yarn install
```

### 3. Run

```shell
yarn start
```
