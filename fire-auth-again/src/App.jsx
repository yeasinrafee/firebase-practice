import { useState } from "react";
import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.config";

function App() {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
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

  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>

      {user && (
        <div>
          <h3>Name: {user.displayName}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
