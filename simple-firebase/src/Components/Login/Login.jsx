import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignOut = () => {
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
    <div>
      {user ? (
        <button onClick={handleGoogleSignOut}>Log out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google login</button>
      )}

      {user && (
        <div>
          <h3>Name: {user.displayName}</h3>
          <h4>Email: {user.email}</h4>
        </div>
      )}
    </div>
  );
};

export default Login;
