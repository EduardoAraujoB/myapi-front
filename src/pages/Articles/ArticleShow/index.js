import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withAuthentication } from "../../../components/hocs/Authentication";
import Loading from "../../../components/Loading";
import Menu from "../../../components/Menu";
import api from "../../../services/api";

import {
  Container,
  Article,
  CommentContainer,
  Comment,
  CommentForm
} from "./styles";

class ArticleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      newComment: "",
      error: ""
    };
  }
  _isMounted = false;
  loading = false;
  loggedMember = null;

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const article = await api.get(`/articles/${this.props.match.params.id}`);
    if (this._isMounted) {
      this.loading = false;
      this.setState({ article: article.data });
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.props.authentication.authenticated) {
      if (!this.state.newComment) {
        this.setState({ error: "Não posso mandar um comentário vazio =D" });
      } else {
        const send = {
          content: this.state.newComment,
          article: this.state.article._id
        };
        try {
          await api.post("/comments", send);
          window.location.reload();
        } catch (error) {
          console.log(error, send);
          this.setState({ error: "Erro ao cadastrar comentário" });
        }
      }
    } else {
      this.setState({
        error: "Você prcisa estar logado para fazer um comentário"
      });
    }
  };

  render() {
    const { article } = this.state;
    if (this.loading || this.props.authentication.loading) {
      return <Loading />;
    }
    if (this.props.authentication.authenticated) {
      this.loggedMember = this.props.authentication.member._id;
    }
    const { comment } = article;
    console.log(article);
    return (
      <>
        <Menu auth={this.props.authentication.authenticated} />
        <Container>
          <Article>
            <strong>{article.title}</strong>
            <p>{article.content}</p>
            <span>Autor: {article.member.name}</span>
          </Article>
          <CommentContainer>
            <strong>Comentários</strong>
            {!comment === null || !comment === 0 ? (
              comment.map(item => (
                <Comment>
                  <strong>Pessoa</strong>
                  <p>Comentário</p>
                </Comment>
              ))
            ) : (
              <Comment>
                <p>
                  Não há comentários nesse artigo, seja o primeiro a comentar!
                </p>
              </Comment>
            )}
            <CommentForm onSubmit={this.handleSubmit}>
              <span>Faça seu Comentário</span>
              {this.state.error && <p>{this.state.error}</p>}
              <textarea
                onChange={e => this.setState({ newComment: e.target.value })}
              />
              <button type="submit">Enviar</button>
            </CommentForm>
          </CommentContainer>
        </Container>
      </>
    );
  }
}

export default withAuthentication()(withRouter(ArticleShow));
