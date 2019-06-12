import React, { Component } from "react";
import { Container, ContainerItem } from "./styles";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";

import api from "../../services/api";
import { isAuthenticated } from "../../services/auth";

class Home extends Component {
  state = {
    articles: [],
    authenticated: false
  };
  _isMounted = false;
  loading = false;

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;

    const articles = await api.get("/articles");
    const auth = await isAuthenticated();

    if (this._isMounted) {
      this.loading = false;
      this.setState({ articles: articles.data, authenticated: auth });
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render() {
    const { articles } = this.state;

    if (this.loading) {
      return <Loading />;
    }
    return (
      <>
        <Menu auth={this.state.authenticated} />
        <Container>
          {articles.map(article => (
            <ContainerItem key={article._id}>
              <h1>{article.title}</h1>
              <p>{article.content}</p>
              <a href={`articles/${article._id}`}>Acessar</a>
            </ContainerItem>
          ))}
        </Container>
      </>
    );
  }
}

export default Home;
