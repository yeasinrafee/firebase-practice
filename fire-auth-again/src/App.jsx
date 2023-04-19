import { useState } from "react";
import "./App.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase/firebase.config";

function App() {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const auth = getAuth(app);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <button onClick={handleGithubSignIn}>GitHub Sign In</button>
      <button onClick={handleSignOut}>Sign Out</button>

      {user && (
        <div>
          <h3>Name: {user.displayName}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
