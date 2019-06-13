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
      <NewArticleContainer>
        <NewArticleLink>Cadastrar um Novo Artigo</NewArticleLink>
      </NewArticleContainer>
    </>
  );
};

export default withAuthentication()(Articles);
