import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

class Members extends Component {
  _isMounted = false;
  loading = false;
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      authenticate: false
    };
  }

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const auth = await isAuthenticated();
    if (this._isMounted) {
      this.loading = false;
      this.setState({ authenticate: auth });
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
    console.log(this._isMounted);
  }

  render() {
    if (this.loading) {
      return <h1>Carregando</h1>;
    }
    console.log(this.state.authenticate);
    if (this.state.authenticate === true) {
      return <h1>Autenticado</h1>;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Members;
