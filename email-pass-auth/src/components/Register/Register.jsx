import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import "./Register.css";

const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("Password should be more than 6 character");
      return;
    } else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      setError("Enter at least one special character");
      return;
    } else if (!/[1-9]/.test(password)) {
      setError("Enter at least one number");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Enter at least one Uppercase latter");
      return;
    }
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("Successfully Logged in.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p className="red">{error}</p>
      <p className="green">{success}</p>
    </div>
  );
};

export default Register;
