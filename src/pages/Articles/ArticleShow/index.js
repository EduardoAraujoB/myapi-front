import React, { Component } from "react";

import { withAuthentication } from "../../../components/hocs/Authentication";
import Loading from "../../../components/Loading";
import Menu from "../../../components/Menu";
import api from "../../../services/api";

import { Container, Article, CommentContainer, Comment } from "./styles";

class ArticleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
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

  render() {
    const { article } = this.state;
    if (this.loading || this.props.authentication.loading) {
      return <Loading />;
    }
    if (this.props.authentication.authenticated) {
      this.loggedMember = this.props.authentication.member._id;
    }
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
            <Comment>
              <strong>Cleiton Rasta</strong>
              <p>
                Cabeça de gelo, fogo na babilônia Cabeça de gelo, fogo na
                babilônia Cabeça de gelo, fogo na babilônia Cabeça de gelo, fogo
                na babilônia Cabeça de gelo, fogo na babilônia Cabeça de gelo,
                fogo na babilônia Cabeça de gelo, fogo na babilônia Cabeça de
                gelo, fogo na babilônia Cabeça de gelo, fogo na babilônia Cabeça
                de gelo, fogo na babilônia Cabeça de gelo, fogo na babilônia
                Cabeça de gelo, fogo na babilônia
              </p>
            </Comment>
            <Comment>
              <strong>Cleiton Rasta</strong>
              <p>
                Cabeça de gelo, fogo na babilônia Cabeça de gelo, fogo na
                babilônia Cabeça de gelo, fogo na babilônia Cabeça de gelo, fogo
                na babilônia Cabeça de gelo, fogo na babilônia Cabeça de gelo,
                fogo na babilônia Cabeça de gelo, fogo na babilônia Cabeça de
                gelo, fogo na babilônia Cabeça de gelo, fogo na babilônia Cabeça
                de gelo, fogo na babilônia Cabeça de gelo, fogo na babilônia
                Cabeça de gelo, fogo na babilônia
              </p>
            </Comment>
          </CommentContainer>
        </Container>
      </>
    );
  }
}

export default withAuthentication()(ArticleShow);
