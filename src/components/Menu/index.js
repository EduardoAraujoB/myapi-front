import React, { Component } from "react";
import { Header, Title, MenuButton, Logo } from "./styles";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: this.props.auth
    };
  }

  render() {
    if (this.state.authenticated) {
      return (
        <Header>
          <Logo href="/">Logo</Logo>
          <Title>Nome do blog</Title>
          <MenuButton href="/articles">Articles</MenuButton>
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
  }
}

export default Menu;
