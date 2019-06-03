import React, { Component } from "react";
import { Content } from "./styles";
import Menu from "../../components/Menu";

class Home extends Component {
  render() {
    return (
      <>
        <Menu />
        <Content>
          <h1>Testando</h1>
        </Content>
      </>
    );
  }
}

export default Home;
