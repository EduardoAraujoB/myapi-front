import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { withAuthentication } from "../../../components/hocs/Authentication";
import api from "../../../services/api";
import Loading from "../../../components/Loading";
import Menu from "../../../components/Menu";

class MemberProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: null
    };
  }
  _isMounted = false;
  loading = false;

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const member = await api.get(`/member`);
    if (this._isMounted) {
      this.loading = false;
      this.setState({ member: member.data });
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render() {
    if (this.props.authentication.loading || this.loading) {
      return <Loading />;
    }
    if (this.props.authentication.authenticated) {
      if (this.props.authentication.member._id === this.props.match.params.id) {
        return (
          <>
            <Menu auth={this.props.authentication} />
            <h1>Esse Perfil é seu</h1>
          </>
        );
      } else {
        return <Redirect to="/" />;
      }
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default withAuthentication()(MemberProfile);
