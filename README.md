# Casdoor Firebase Example

[![Build](https://github.com/casdoor/casdoor-firebase-example/actions/workflows/build.yml/badge.svg)](https://github.com/casdoor/casdoor-firebase-example/actions/workflows/build.yml)
[![License](https://img.shields.io/github/license/casdoor/casdoor-firebase-example)](https://github.com/casdoor/casdoor-firebase-example/blob/master/LICENSE)
[![Discord](https://img.shields.io/discord/1022748306096537660?logo=discord&label=discord&color=5865F2)](https://discord.gg/5rPsrAzK7S)

An example React app that signs users in to [Firebase Authentication](https://firebase.google.com/docs/auth) with [Casdoor](https://casdoor.ai/) as an OpenID Connect provider.

## How it works

1. In Firebase, Casdoor is added as an OpenID Connect provider named `casdoor` (provider ID `oidc.casdoor`).
2. **signin** calls `signInWithPopup(auth, new OAuthProvider('oidc.casdoor'))` ([src/App.js](src/App.js)). Firebase opens the Casdoor sign-in page in a popup and does the OpenID Connect flow with Casdoor.
3. After signing in, Firebase creates (or finds) the Firebase user, and `onAuthStateChanged()` reports it to the app, also after a reload.
4. Your Firebase backend services (Firestore rules, Cloud Functions, ...) then see a normal Firebase user.

## Prerequisites

- Node.js 18+ and Yarn
- A Firebase project with [Identity Platform](https://cloud.google.com/identity-platform) enabled, which is needed for OpenID Connect providers. The example is preconfigured for our demo project, which uses the public Casdoor demo server https://door.casdoor.com, so it runs as is.

## Configuration

Skip this section to try the example with the demo project.

### 1. Add Casdoor as a provider in Firebase

In the [Firebase console](https://console.firebase.google.com/) -> Authentication -> Sign-in method, add a new provider and choose **OpenID Connect** under custom providers:

![provider](assets/provider.png)

| Field         | Description                                          | Example                                    |
|---------------|------------------------------------------------------|--------------------------------------------|
| Name          | Any name; the provider ID becomes `oidc.<name>`      | `casdoor`                                  |
| Client ID     | Client ID of the Casdoor application                 | `294b09fbc17f95daf2fe`                     |
| Issuer (URL)  | Casdoor server URL                                   | `https://door.casdoor.com`                 |
| Client secret | Client secret of the Casdoor application             | `dd8982f7046ccba1bbd7851d5c1ece4e52bf039d` |

![oidc_config0](assets/oidc_config0.png)

The values come from the application in Casdoor, for example https://door.casdoor.com/applications/casbin/app-vue-python-example:

![oidc_config1](assets/oidc_config1.png)

### 2. Add the callback URL of Firebase to Casdoor

Copy the callback URL shown by Firebase (`https://<project>.firebaseapp.com/__/auth/handler`) to the **Redirect URLs** of the Casdoor application:

![oidc_config2](assets/oidc_config2.png)

![oidc_config3](assets/oidc_config3.png)

### 3. Configure the web app

Create a **Web app** in the Firebase project settings:

![firebase_config0](assets/firebase_config0.png)

and copy its config to [src/setting.js](src/setting.js):

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

If you named the provider other than `casdoor`, change `oidc.casdoor` in [src/App.js](src/App.js).

## Run

```shell
git clone https://github.com/casdoor/casdoor-firebase-example
cd casdoor-firebase-example
yarn install
yarn start
```

Open http://localhost:3000 and click **signin**. On the demo server, sign in with username `admin` and password `123`.

## Resources

- [Casdoor documentation](https://casdoor.ai/docs/overview)
- [Firebase: authenticate using OpenID Connect](https://firebase.google.com/docs/auth/web/openid-connect)

## License

[Apache-2.0](LICENSE)
