import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { withAuthentication } from "../../../components/hocs/Authentication";
import api from "../../../services/api";
import { logout } from "../../../services/auth";
import Loading from "../../../components/Loading";
import Menu from "../../../components/Menu";
import { Container, Profile, ErrorContainer, ProfileActions } from "./styles";

class MemberProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: null,
      error: null
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

  handleDelete = async () => {
    if (this.props.authentication.member._id === this.props.match.params.id) {
      try {
        await api.delete("/member");
        logout();
        this.props.history.push("/");
      } catch (error) {
        console.log(error);
        this.setState({ error: "Erro ao apagar" });
      }
    }
  };

  render() {
    if (this.props.authentication.loading || this.loading) {
      return <Loading />;
    }
    if (this.props.authentication.authenticated) {
      if (this.props.authentication.member._id === this.props.match.params.id) {
        const { member } = this.state;
        return (
          <>
            <Menu auth={this.props.authentication} />
            <Container>
              <Profile>
                <strong>{member.name}</strong>
                <span>
                  Datade de Aniversário: <p>{member.birthdate}</p>
                </span>
                <span>
                  Email: <p>{member.email}</p>
                </span>
                <span>
                  Artigos: <p>{member.article.length}</p>
                </span>
                <span>
                  Comentários: <p>{member.comment.length}</p>
                </span>
                {this.state.error && (
                  <ErrorContainer>
                    <p>{this.state.error}</p>
                  </ErrorContainer>
                )}
                <ProfileActions>
                  <a
                    href={`/members/edit/${
                      this.props.authentication.member._id
                    }`}
                  >
                    Editar Perfil
                  </a>
                  <button onClick={this.handleDelete}>Deltar Perfil</button>
                </ProfileActions>
              </Profile>
            </Container>
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

export default withAuthentication()(withRouter(MemberProfile));
