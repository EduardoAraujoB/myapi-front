import React, { Component } from "react";

import {
  Header,
  Title,
  MenuBar,
  MobileMenu,
  MenuButtonContainer,
  MenuButton,
  Logo
} from "./styles";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_open: false
    };
  }

  handleMenu = () => {
    this.setState({ menu_open: !this.state.menu_open });
  };

  render() {
    if (this.props.auth.authenticated) {
      return (
        <Header>
          <Logo href="/">Logo</Logo>
          <Title>Nome do blog</Title>
          <MenuButtonContainer>
            <MenuButton href={`/members/${this.props.auth.member._id}`}>
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
            <MenuButton href={`/articles`}>Articles</MenuButton>
            <MenuButton href="/signin">SignIn</MenuButton>
            <MenuButton href="/signup">SignUp</MenuButton>
          </MenuButtonContainer>
          {this.state.menu_open ? (
            <MobileMenu />
          ) : (
            <MenuBar>
              <button onClick={this.handleMenu}>
                <MenuIcon />
              </button>
            </MenuBar>
          )}
        </Header>
      );
    }
  }
}

export default Menu;
