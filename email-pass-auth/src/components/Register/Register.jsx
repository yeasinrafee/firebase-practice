import React from "react";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
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
    </div>
  );
};

export default Register;
