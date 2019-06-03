import React from "react";
import { Header, Title, MenuButton, Logo } from "./styles";

const Menu = () => {
  return (
    <Header>
      <Logo>Logo</Logo>
      <Title>Nome do blog</Title>
      <MenuButton>Articles</MenuButton>
      <MenuButton>SignUp</MenuButton>
      <MenuButton>SignIn</MenuButton>
    </Header>
  );
};

export default Menu;
