/* eslint-disable */
import React from "react";
// import Text from "../../atoms/Text";
// import TextGroup from "../../atoms/TextGroup";
import "./style.css";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <form>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <Button type="Submit" value="Login">
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
