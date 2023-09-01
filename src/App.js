import './App.css';
import {getAuth, getRedirectResult, OAuthProvider, signInWithRedirect, signOut} from "firebase/auth";
import {useEffect, useState} from "react";
import {app} from "./setting";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new OAuthProvider('oidc.casdoor');

  useEffect(() => {
    const auth = getAuth(app);
    getRedirectResult(auth).then((result) => {
      console.log(result)
      if (result) {
        // This is the signed-in user
        const user = result.user;
        setUser(user)
      }
      setLoading(false)
    });
  }, [user]);

  const signin = async () => {
    const auth = getAuth();
    setLoading(true)
    await signInWithRedirect(auth, provider);
    setLoading(false)
  }

  const signout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(null);
    })
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
    </div>
  );
}

export default App;
