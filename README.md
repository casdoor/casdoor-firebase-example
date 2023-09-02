# casdoor-firebase-example

This is a firebase project uses Casdoor as provider example.

## How to run

### 1. Create a firebase project

Go to [Firebase Console](https://console.firebase.google.com/) to create a project.

#### 1.1. Add Casdoor as provider

![provider](assets/provider.png)

You need to enable "Identity Platform" feature first to enable OIDC integration on Firebase.

Select `OpenID Connect` in Custom providers, fill in the following information:

| Name (in order) | Description                           | Example value                            |
|-----------------|---------------------------------------|------------------------------------------|
| Name            | Any be any string you would like      | casdoor                                  |
| Client ID       | Client ID for the Casdoor application | 294b09fbc17f95daf2fe                     |
| Issuer (URL)    | Casdoor server URL                    | https://door.casdoor.com                 |
| Client Secret   | Client secret for Casdoor application | dd8982f7046ccba1bbd7851d5c1ece4e52bf039d |

![oidc_config0](assets/oidc_config0.png)

The above examples values can be retrieved from Casdoor demo site: https://door.casdoor.com/applications/casbin/app-vue-python-example

![oidc_config1](assets/oidc_config1.png)

#### 1.2. Add callback url

Add Callback URL to Casdoor application Redirect URLs:

![oidc_config2](assets/oidc_config2.png)

![oidc_config3](assets/oidc_config3.png)

#### 1.3. Copy project config

Create a `Web app` first:

![firebase_config0](assets/firebase_config0.png)

Copy your project config in project settings to `src/setting.js`. (the following config is our demo site, which can be used for testing. Change it to your own for production use)

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyDG8HGY9ULBqXPMIkYEdcOSm2_Yls1E5yY",
  authDomain: "fb-casdoor.firebaseapp.com",
  projectId: "fb-casdoor",
  storageBucket: "fb-casdoor.appspot.com",
  messagingSenderId: "174511522903",
  appId: "1:174511522903:web:8649d465718acfac900f12",
  measurementId: "G-8N504216FH"
};
```

![firebase_config](assets/firebase_config.png)

### 2. Install dependencies

```shell
yarn install
```

### 3. Run

```shell
yarn start
```
