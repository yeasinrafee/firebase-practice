import React from "react";

const Register = () => {
  return (
    <div>
      <h2>Please Register</h2>
      <form>
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
