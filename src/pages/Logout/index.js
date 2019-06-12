import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../services/auth";

export default class Logout extends Component {
  componentWillMount = () => {
    logout();
  };
  render() {
    return <Redirect to="/" />;
  }
}
