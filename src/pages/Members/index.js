import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Loading from "../../components/Loading";
import Menu from "../../components/Menu";
import { withAuthentication } from "../../components/hocs/Authentication";
import api from "../../services/api";

import { Container, MemberTable } from "./styles";

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null
    };
  }
  _isMounted = false;
  loading = false;

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    try {
      const members = await api.get("/members");
      console.log(members.data);
      if (this._isMounted) {
        this.loading = false;
        this.setState({ members: members.data });
      }
    } catch (err) {
      console.log(err);
      this.loading = false;
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
      const { members } = this.state;
      return (
        <>
          <Menu auth={this.props.authentication} />
          <Container>
            <MemberTable>
              <strong>Lista de Membros</strong>
              <hr />
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Birthdate</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map(item => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.birthdate}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </MemberTable>
          </Container>
        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default withAuthentication()(Members);
