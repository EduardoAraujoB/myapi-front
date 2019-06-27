import React, { Component } from "react";

import {
  Header,
  Title,
  MenuBarOpen,
  MenuBarClose,
  MobileMenu,
  MenuButtonContainer,
  MenuButton,
  Logo
} from "./styles";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as MenuIconClose } from "../../assets/icons/menu_close.svg";

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
    return (
      <Header>
        <Logo href="/">Logo</Logo>
        <Title>Nome do blog</Title>
        {this.props.auth.authenticated ? (
          <MenuButtonContainer>
            <MenuButton href={`/members/${this.props.auth.member._id}`}>
              MyProfile
            </MenuButton>
            <MenuButton href="/members">Members</MenuButton>
            <MenuButton href="/logout">Logout</MenuButton>
          </MenuButtonContainer>
        ) : (
          <MenuButtonContainer>
            <MenuButton href={`/articles`}>Articles</MenuButton>
            <MenuButton href="/signin">SignIn</MenuButton>
            <MenuButton href="/signup">SignUp</MenuButton>
          </MenuButtonContainer>
        )}
        <MenuBarOpen>
          <button onClick={this.handleMenu}>
            <MenuIcon />
          </button>
        </MenuBarOpen>
        <MobileMenu active={this.state.menu_open}>
          <MenuBarClose>
            <button onClick={this.handleMenu}>
              <MenuIconClose />
            </button>
          </MenuBarClose>
        </MobileMenu>
      </Header>
    );
  }
}

export default Menu;
