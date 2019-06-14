import React, { Component } from "react";

import { isAuthenticated } from "../../../services/auth";
import api from "../../../services/api";

export const withAuthentication = () => {
  return AuthComponent => {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          authenticated: false,
          member: null,
          loading: true
        };
      }
      _isMounted = false;

      componentWillMount = async () => {
        this._isMounted = true;
        const auth = await isAuthenticated();
        if (this._isMounted) {
          if (auth) {
            const member = await api.get("/member");
            this.setState({
              authenticated: auth,
              member: member.data,
              loading: false
            });
          } else {
            this.setState({ authenticated: auth, loading: false });
          }
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
};
