import './App.css';
import {getAuth, OAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import {app} from "./setting";

const auth = getAuth(app);
// the ID of the OpenID Connect provider in Firebase: "oidc." + the name given in the Firebase console
const provider = new OAuthProvider('oidc.casdoor');

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Firebase keeps the user signed in across reloads, and reports it here
    return onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
  }, []);

  const signin = async () => {
    setError("");
    try {
      // opens the Casdoor sign-in page in a popup, Firebase handles the OpenID Connect flow
      await signInWithPopup(auth, provider);
    } catch (e) {
      if (e.code !== "auth/popup-closed-by-user" && e.code !== "auth/cancelled-popup-request") {
        setError(e.message);
      }
    }
  }

  const signout = async () => {
    await signOut(auth);
  }

  return (
    <div className="App"
         style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
      {loading ? <p>loading...</p> :
        (user ? <>
              <div>
                <p>user: {user.displayName}</p>
                <p>email: {user.email}</p>
              </div>
              <button onClick={signout}>signout</button>
            </> :
            <button onClick={signin}>signin</button>
        )
      }
      {error && <p style={{color: "red"}}>Failed to sign in: {error}</p>}
    </div>
  );
}

export default App;
