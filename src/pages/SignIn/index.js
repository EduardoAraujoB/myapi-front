import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";

import { Form, Container } from "./styles";
import api from "../../services/api";
import { login, logout } from "../../services/auth";
import Menu from "../../components/Menu";
import { isAuthenticated } from "../../services/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      email: "",
      password: "",
      error: ""
    };
  }
  _isMounted = false;
  loading = false;

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const auth = await isAuthenticated();
    if (this._isMounted) {
      this.loading = false;
      this.setState({ authenticated: auth });
    }
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha todos os campos para se cadastrar" });
    } else {
      const send = { email, password };
      try {
        const response = await api.post("/members/authenticate", send);
        logout();
        login(response.data.token);
        this.props.history.push("/");
      } catch (err) {
        console.log(err, send);
        this.setState({ error: "Erro ao logar, verifique suas credencias" });
      }
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.loading) {
      return <h1>Carregando</h1>;
    }
    if (!this.state.authenticated) {
      return (
        <>
          <Menu />
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

export default withRouter(SignIn);
