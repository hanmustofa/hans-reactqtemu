import React, { Component } from "react";
import Links from "../../atoms/Links";
import TextGroup from "../../atoms/TextGroup";
import "./style.css";
// import login from "../Login";

export default class NavbarQTemu extends Component {
  render() {
    return (
      <TextGroup className="Navbar">
        <Links destination="qtemu" text="QTemu" className="nav-logo nav-left" />
        <Links
          destination="create-meetup"
          text="Create Meetup"
          className="nav-left"
        />
        <Links destination="explore" text="Explore" className="nav-left" />
        <Links destination="login" text="Login" className="nav-right" />
      </TextGroup>
    );
  }
}
