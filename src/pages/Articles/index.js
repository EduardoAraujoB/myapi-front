import React from "react";
import { withAuthentication } from "../../components/hocs/Authentication";
import Menu from "../../components/Menu";
import Loading from "../../components/Loading";

import {
  NewArticleContainer,
  NewArticleLink,
  ArticleContainer,
  ArticleStyle
} from "./styles";

const Articles = ({ authentication }) => {
  if (authentication.loading) {
    return <Loading />;
  }
  return (
    <>
      <Menu auth={authentication.authenticated} />
      <ArticleContainer>
        <ArticleStyle>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ArticleStyle>
        <ArticleStyle>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ArticleStyle>
        <ArticleStyle>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ArticleStyle>
        <ArticleStyle>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ArticleStyle>
        <ArticleStyle>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ArticleStyle>
        <ArticleStyle>
          <span>Teste</span>
          <p>
            Descrição Descrição Descrição Descrição Descrição Descrição
            Descrição Descrição Descrição Descrição
          </p>
          <a href="/articles">Acessar</a>
        </ArticleStyle>
      </ArticleContainer>
      {authentication.authenticated ? (
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
};

export default withAuthentication()(Articles);
