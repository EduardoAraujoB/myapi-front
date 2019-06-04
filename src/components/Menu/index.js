import React from "react";
import { Header, Title, MenuButton, Logo } from "./styles";

const Menu = () => {
  return (
    <Header>
      <Logo href="/">Logo</Logo>
      <Title>Nome do blog</Title>
      <MenuButton>Articles</MenuButton>
      <MenuButton href="/signup">SignUp</MenuButton>
      <MenuButton href="/signin">SignIn</MenuButton>
    </Header>
  );
};

export default Menu;
