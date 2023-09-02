# casdoor-firebase-example

This is a firebase project uses Casdoor as provider example.

## How to run

### 1. Create a firebase project

Go to [Firebase Console](https://console.firebase.google.com/) to create a project.

#### 1.1. Add Casdoor as provider

![provider](assets/provider.png)

Select OpenID Connect in Custom providers, fill in the following information:

| Name (in order) | Description                                         |
|-----------------|-----------------------------------------------------|
| Issuer (URL)    | Casdoor Server Url, such as `http://localhost:8000` |
| Client ID       | Client ID for the Casdoor application               |
| Client Secret   | Client secret for the Casdoor application           |

![oidc_config1](assets/oidc_config1.png)

#### 1.2. Add callback url

Add Callback URL to Casdoor application Redirect URLs:

![oidc_config2](assets/oidc_config2.png)

#### 1.3. Copy project config

![firebase_config](assets/firebase_config.png)

Copy your project config in project settings to `src/setting.js`.

```javascript
const firebaseConfig = {
    apiKey: "×××",
    authDomain: "casdoor-firebase-example.firebaseapp.com",
    projectId: "casdoor-firebase-example",
    storageBucket: "casdoor-firebase-example.appspot.com",
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
