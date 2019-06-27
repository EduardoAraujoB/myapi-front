import React from "react";

import { Header, Title, MenuButtonContainer, MenuButton, Logo } from "./styles";

const Menu = ({ auth }) => {
  if (auth.authenticated) {
    return (
      <Header>
        <Logo href="/">Logo</Logo>
        <Title>Nome do blog</Title>
        <MenuButtonContainer>
          <MenuButton href={`/members/${auth.member._id}`}>
            MyProfile
          </MenuButton>
          <MenuButton href="/members">Members</MenuButton>
          <MenuButton href="/logout">Logout</MenuButton>
        </MenuButtonContainer>
      </Header>
    );
  } else {
    return (
      <Header>
        <Logo href="/">Logo</Logo>
        <Title>Nome do blog</Title>
        <MenuButtonContainer>
          <MenuButton href="/articles">Articles</MenuButton>
          <MenuButton href="/signup">SignUp</MenuButton>
          <MenuButton href="/signin">SignIn</MenuButton>
        </MenuButtonContainer>
      </Header>
    );
  }
};

export default Menu;
