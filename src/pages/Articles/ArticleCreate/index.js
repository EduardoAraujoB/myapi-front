import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";

import api from "../../../services/api";
import Menu from "../../../components/Menu";
import Loading from "../../../components/Loading";
import { withAuthentication } from "../../../components/hocs/Authentication";

import { Container, Form } from "./styles";

class ArticleCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      error: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { title, content } = this.state;
    if (!title || !content) {
      this.setState({ error: "Preencha todos os campos para se cadastrar" });
    } else {
      const send = { title, content };
      try {
        const response = await api.post("/articles", send);
        console.log(response);
        this.props.history.push("/");
      } catch (err) {
        console.log(err, send);
        this.setState({ error: "Erro ao cadastrar artigo" });
      }
    }
  };

  render() {
    if (this.props.authentication.loading) {
      return <Loading />;
    }
    if (this.props.authentication.authenticated) {
      return (
        <>
          <Menu auth={this.props.authentication} />
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <span>Título</span>
              {this.state.error && <p>{this.state.error}</p>}
              <input
                type="text"
                placeholder="Título aqui"
                onChange={e => this.setState({ title: e.target.value })}
              />
              <span>Descrição</span>
              <textarea
                placeholder="Descrição aqui"
                onChange={e => this.setState({ content: e.target.value })}
              />
              <button type="submit">Cadastrar Artigo</button>
            </Form>
          </Container>
        </>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default withAuthentication()(withRouter(ArticleCreate));
