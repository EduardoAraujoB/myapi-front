import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";
import Loading from "../../components/Loading";
import Menu from "../../components/Menu";

class Members extends Component {
  _isMounted = false;
  loading = false;
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      authenticated: false
    };
  }

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const auth = await isAuthenticated();
    if (this._isMounted) {
      this.loading = false;
      this.setState({ authenticated: auth });
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.loading) {
      return <Loading />;
    }
    if (this.state.authenticate === true) {
      return (
        <>
          <Menu auth={this.state.authenticate} />
          <h1>Autenticado</h1>
        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Members;
