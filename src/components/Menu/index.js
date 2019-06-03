import React from "react";
import { Header, Title, Item, Logo } from "./styles";

const Menu = () => {
  return (
    <Header>
      <Logo>Logo</Logo>
      <Title>Nome do blog</Title>
      <Item>Link1</Item>
      <Item>Link2</Item>
      <Item>Link3</Item>
    </Header>
  );
};

export default Menu;
