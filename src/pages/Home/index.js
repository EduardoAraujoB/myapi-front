import React, { Component } from "react";
import { Container, ContainerItem } from "./styles";
import Menu from "../../components/Menu";

class Home extends Component {
  render() {
    return (
      <>
        <Menu />
        <Container>
          <ContainerItem>
            <h1>Item</h1>
            <p>
              Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
              Texto Texto Texto Texto Texto
            </p>
            <button>Acessar</button>
          </ContainerItem>
          <ContainerItem>
            <h1>Item</h1>
            <p>
              Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
              Texto Texto Texto Texto Texto
            </p>
            <button>Acessar</button>
          </ContainerItem>
          <ContainerItem>
            <h1>Item</h1>
            <p>
              Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
              Texto Texto Texto Texto Texto
            </p>
            <button>Acessar</button>
          </ContainerItem>
          <ContainerItem>
            <h1>Item</h1>
            <p>
              Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
              Texto Texto Texto Texto Texto
            </p>
            <button>Acessar</button>
          </ContainerItem>
        </Container>
      </>
    );
  }
}

export default Home;
