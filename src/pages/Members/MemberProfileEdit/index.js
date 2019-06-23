import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { withAuthentication } from "../../../components/hocs/Authentication";
import Loading from "../../../components/Loading";
import Menu from "../../../components/Menu";
import { Container, Form } from "./styles";

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
              <Form>
                <span>Atualizar Perfil</span>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                  type="text"
                  placeholder="Nome do usuário"
                  defaultValue={member.name}
                />
                <input
                  type="date"
                  placeholder="Data de Aniversário"
                  defaultValue={birthdate}
                />
                <input
                  type="email"
                  placeholder="Endereço de email"
                  defaultValue={member.email}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  defaultValue={member.password}
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

export default withAuthentication()(MemberProfileEdit);
