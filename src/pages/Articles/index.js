import React from "react";
import { withAuthentication } from "../../components/hocs/Authentication";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";

import { Container, ContainerItem } from "./styles";

const ArticleCreate = ({ authentication }) => {
  if (authentication.loading) {
    return <Loading />;
  }
  return (
    <>
      <Menu auth={authentication.authenticated} />
      <Container>
        <ContainerItem>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ContainerItem>
        <ContainerItem>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ContainerItem>
        <ContainerItem>
          <span>Teste</span>
          <p>Descrição Descrição De</p>
          <a href="/articles">Acessar</a>
        </ContainerItem>
        <ContainerItem>
          <span>Teste</span>
          <p>Descrição Descrição</p>
          <a href="/articles">Acessar</a>
        </ContainerItem>
        <ContainerItem>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ContainerItem>
        <ContainerItem>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ContainerItem>
        <ContainerItem>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ContainerItem>
        <ContainerItem>
          <span>Teste</span>
          <p>Descrição Descrição Descrição De</p>
          <a href="/articles">Acessar</a>
        </ContainerItem>
      </Container>
    </>
  );
};

export default withAuthentication()(ArticleCreate);
