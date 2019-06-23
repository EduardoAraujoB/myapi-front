import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { withAuthentication } from "../../../components/hocs/Authentication";
import Loading from "../../../components/Loading";
import Menu from "../../../components/Menu";
import { Container, Form } from "./styles";
import api from "../../../services/api";

class MemberProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birthdate: "",
      email: "",
      password: "",
      error: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { name, birthdate, email, password } = this.state;
    const send = {
      name: "",
      birthdate: "",
      email: "",
      password
    };
    const { member } = this.props.authentication;
    if (!name) {
      send.name = member.name;
    } else {
      send.name = name;
    }
    if (!birthdate) {
      send.birthdate = member.birthdate;
    } else {
      send.birthdate = birthdate;
    }
    if (!email) {
      send.email = member.email;
    } else {
      send.email = email;
    }
    try {
      await api.put("/member", send);
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
      this.setState({ error: "Erro ao atualizar" });
    }
  };

  dateFormat = date => {
    let data = new Date(date);
    let year = data.getFullYear();
    let month = (data.getMonth() + 1).toString();
    let monthFormated = month.length === 1 ? `0${month}` : month;
    let day = data.getDate().toString();
    let dayFormated = day.length === 1 ? `0${day}` : day;
    return `${year}-${monthFormated}-${dayFormated}`;
  };

  render() {
    if (this.props.authentication.loading) {
      return <Loading />;
    }
    if (this.props.authentication.authenticated) {
      if (this.props.authentication.member._id === this.props.match.params.id) {
        const { member } = this.props.authentication;
        const birthdate = this.dateFormat(member.birthdate);
        return (
          <>
            <Menu auth={this.props.authentication} />
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <span>Atualizar Perfil</span>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                  type="text"
                  placeholder="Nome do usuário"
                  defaultValue={member.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
                <input
                  type="date"
                  placeholder="Data de Aniversário"
                  defaultValue={birthdate}
                  onChange={e => this.setState({ birthdate: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Endereço de email"
                  defaultValue={member.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  defaultValue={member.password}
                  onChange={e => this.setState({ password: e.target.value })}
                  required
                />
                <button type="submit">Atualizar</button>
              </Form>
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

export default withAuthentication()(withRouter(MemberProfileEdit));
