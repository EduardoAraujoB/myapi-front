import React, { Component } from "react";
import { isAuthenticated } from "../../services/auth";

export const withAuthentication = AuthComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated: false,
        loading: true
      };
    }
    _isMounted = false;

    componentWillMount = async () => {
      this._isMounted = true;
      const auth = await isAuthenticated();
      if (this._isMounted) {
        this.setState({ authenticated: auth, loading: false });
      }
    };

    componentWillUnmount = () => {
      this._isMounted = false;
    };

    render() {
      return <AuthComponent authentication={this.state} {...this.props} />;
    }
  };
};
