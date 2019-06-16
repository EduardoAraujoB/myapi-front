import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withAuthentication } from "../../../components/hocs/Authentication";
import api from "../../../services/api";

import Loading from "../../../components/Loading";
import Menu from "../../../components/Menu";
import { Container, Form } from "./styles";

class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      title: "",
      content: ""
    };
  }
  _isMounted = false;
  loading = false;

  componentDidMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const article = await api.get(`/articles/${this.props.match.params.id}`);
    if (this._isMounted) {
      this.loading = false;
      this.setState({
        article: article.data,
        title: article.data.title,
        content: article.data.content
      });
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { title, content } = this.state;
    if (!title || !content) {
      this.setState({ error: "Preencha todos os campos para se cadastrar" });
    } else {
      const send = { title, content };
      try {
        const response = await api.put(
          `/articles/${this.props.match.params.id}`,
          send
        );
        console.log(response);
        this.props.history.push("/");
      } catch (err) {
        console.log(err, send);
        this.setState({ error: "Erro ao atualizar o artigo" });
      }
    }
  };

  render() {
    const { article } = this.state;
    if (this.props.authentication.loading || this.loading) {
      return <Loading />;
    }
    if (this.props.authentication.authenticated) {
      if (article.member._id === this.props.authentication.member._id) {
        return (
          <>
            <Menu auth={this.props.authentication.authenticated} />
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <span>Título</span>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                  type="text"
                  placeholder="Título aqui"
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
                <span>Descrição</span>
                <textarea
                  placeholder="Descrição aqui"
                  value={this.state.content}
                  onChange={e => this.setState({ content: e.target.value })}
                />
                <button type="submit">Atualizar Artigo</button>
              </Form>
            </Container>
          </>
        );
      } else {
        return <Redirect to="/" />;
      }
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default withAuthentication()(ArticleEdit);
