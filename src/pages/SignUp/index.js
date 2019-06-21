import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import { Form, Container } from "./styles";
import api from "../../services/api";
import { login } from "../../services/auth";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";
import { withAuthentication } from "../../components/hocs/Authentication";

class SignUp extends Component {
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

  handleSignUp = async e => {
    e.preventDefault();
    const { name, birthdate, email, password } = this.state;
    if (!name || !email || !birthdate || !password) {
      this.setState({ error: "Preencha todos os campos para se cadastrar" });
    } else {
      const send = { name, birthdate, email, password };
      try {
        const response = await api.post("/member", send);
        login(response.data.token);
        this.props.history.push("/");
      } catch (err) {
        console.log(err, send);
        this.setState({ error: "erro ao cadastrar" });
      }
    }
  };

  render() {
    if (this.props.authentication.loading) {
      return <Loading />;
    }
    if (!this.props.authentication.authenticated) {
      return (
        <>
          <Menu auth={this.props.authentication} />
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
              <Link to="/signin">Fazer Login</Link>
            </Form>
          </Container>
        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default withAuthentication()(withRouter(SignUp));
