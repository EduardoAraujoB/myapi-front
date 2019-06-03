import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { Form, Container } from "./styles";
import api from "../../services/api";
import { login } from "../../services/auth";
import Menu from "../../components/Menu";

class SignUp extends Component {
  state = {
    name: "",
    birthdate: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, birthdate, email, password } = this.state;
    if (!name || !email || !birthdate || !password) {
      this.setState({ error: "Preencha todos os campos para se cadastrar" });
    } else {
      const send = { name, birthdate, email, password };
      try {
        const response = await api.post(
          "http://127.0.0.1:3100/api/member",
          send
        );
        login(response.data.token);
        this.props.history.push("/app");
      } catch (err) {
        console.log(err, send);
        this.setState({ error: "erro ao cadastrar" });
      }
    }
  };

  render() {
    return (
      <>
        <Menu />
        <Container>
          <Form onSubmit={this.handleSignUp}>
            <span>SignUp</span>
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="text"
              placeholder="Nome do usuário"
              onChange={e =>
                this.setState({
                  name: e.target.value
                })
              }
            />
            <input
              type="date"
              placeholder="Data de Aniversário"
              onChange={e =>
                this.setState({
                  birthdate: e.target.value
                })
              }
            />
            <input
              type="email"
              placeholder="Endereço de email"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit">Cadastrar-se</button>
            <hr />
            <Link to="/">Fazer Login</Link>
          </Form>
        </Container>
      </>
    );
  }
}

export default withRouter(SignUp);
