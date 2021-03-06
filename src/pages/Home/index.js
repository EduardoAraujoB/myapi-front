import React, { Component } from "react";
import { Container, ContainerItem, NewItemContainer } from "./styles";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";

import api from "../../services/api";
import { withAuthentication } from "../../components/hocs/Authentication";

class Home extends Component {
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
    const { articles } = this.state;

    if (this.loading || this.props.authentication.loading) {
      return <Loading />;
    }
    return (
      <>
        <Menu auth={this.props.authentication} />
        <Container>
          {articles.map(article => (
            <ContainerItem key={article._id}>
              <h1>{article.title}</h1>
              <p>{article.content}</p>
              <strong>Autor: {article.member.name}</strong>
              <a href={`articles/${article._id}`}>Acessar</a>
            </ContainerItem>
          ))}
          {this.props.authentication.authenticated ? (
            <NewItemContainer>
              <a href="/articles/create">Cadastrar um Novo Artigo</a>
            </NewItemContainer>
          ) : null}
        </Container>
      </>
    );
  }
}

export default withAuthentication()(Home);
