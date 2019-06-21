import React from "react";

import { Header, Title, MenuButton, Logo } from "./styles";

const Menu = ({ auth }) => {
  if (auth.authenticated) {
    return (
      <Header>
        <Logo href="/">Logo</Logo>
        <Title>Nome do blog</Title>
        <MenuButton href={`/members/${auth.member._id}`}>MyProfile</MenuButton>
        <MenuButton href="/members">Members</MenuButton>
        <MenuButton href="/logout">Logout</MenuButton>
      </Header>
    );
  } else {
    return (
      <Header>
        <Logo href="/">Logo</Logo>
        <Title>Nome do blog</Title>
        <MenuButton href="/articles">Articles</MenuButton>
        <MenuButton href="/signup">SignUp</MenuButton>
        <MenuButton href="/signin">SignIn</MenuButton>
      </Header>
    );
  }
};

export default Menu;
