import React, { Component } from "react";
import { Container, ContainerItem } from "./styles";
import Menu from "../../components/Menu";

import api from "../../services/api";

class Home extends Component {
  state = {
    articles: []
  };
  async componentDidMount() {
    const response = await api.get("/articles");

    this.setState({ articles: response.data });
  }
  render() {
    const { articles } = this.state;

    return (
      <>
        <Menu />
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
