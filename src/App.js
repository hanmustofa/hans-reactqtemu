import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Login from "./components/organisms/Login";
import NavbarQTemu from "./components/organisms/NavbarQTemu";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Link exact to="/">
            Home
          </Link>
          <Link to="/about">About</Link> */}
          <NavbarQTemu />
          <Route exact path="/" component={Home} />

          <Route path="/qtemu" component={Home} />
          <Route path="/login" component={Login} />
          {/* <Route path="/about" render={() => <div>Hello About</div>} /> */}
        </div>
      </Router>
    );
  }
}
