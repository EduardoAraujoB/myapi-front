import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import { Form, Container } from "./styles";
import api from "../../services/api";
import { login } from "../../services/auth";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";
import { withAuthentication } from "../../components/hocs/Authentication";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleSignUp = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha todos os campos para se cadastrar" });
    } else {
      const send = { email, password };
      try {
        const response = await api.post("/members/authenticate", send);
        login(response.data.token);
        this.props.history.push("/");
      } catch (err) {
        console.log(err, send);
        this.setState({ error: "Erro ao logar, verifique suas credencias" });
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
              <span>SignIn</span>
              {this.state.error && <p>{this.state.error}</p>}
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
              <button type="submit">Fazer Login</button>
              <hr />
              <Link to="/signup">Cadastrar</Link>
            </Form>
          </Container>
        </>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default withAuthentication()(withRouter(SignIn));
