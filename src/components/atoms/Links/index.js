import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default class Links extends Component {
  render() {
    return (
      <Link to={`/${this.props.destination}`} className={this.props.className}>
        {this.props.text}
      </Link>
    );
  }
}
