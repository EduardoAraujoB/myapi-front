import React, { Component } from "react";

import Menu from "../../components/Menu";
import Loading from "../../components/Loading";

import api from "../../services/api";
import { withAuthentication } from "../../components/hocs/Authentication";

import {
  NewArticleContainer,
  NewArticleLink,
  ArticleContainer,
  ArticleStyle
} from "./styles";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  _isMounted = false;
  loading = false;

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const articles = await api.get("/articles");
    if (this._isMounted) {
      this.loading = false;
      this.setState({ articles: articles.data });
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render() {
    if (this.props.authentication.loading || this.loading) {
      return <Loading />;
    }
    const { articles } = this.state;
    console.log(articles);
    return (
      <>
        <Menu auth={this.props.authentication.authenticated} />
        <ArticleContainer>
          {articles.map(article => (
            <ArticleStyle key={article._id}>
              <span>{article.title}</span>
              <p>{article.content}</p>
              <strong>Autor: {article.member.name}</strong>
              <a href={`articles/${article._id}`}>Acessar</a>
            </ArticleStyle>
          ))}
        </ArticleContainer>
        {this.props.authentication.authenticated ? (
          <NewArticleContainer>
            <NewArticleLink href="/articles/create">
              Cadastrar um Novo Artigo
            </NewArticleLink>
          </NewArticleContainer>
        ) : (
          <h4 style={{ textAlign: "center", marginBottom: 10 }}>
            Faça Seu Cadastro Para Poder Publicar Artigos
          </h4>
        )}
      </>
    );
  }
}

export default withAuthentication()(Articles);
