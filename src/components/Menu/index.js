import React, { Component } from "react";
import { Header, Title, MenuButton, Logo } from "./styles";
import { isAuthenticated } from "../../services/auth";
import Loading from "../Loading";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }
  _isMounted = false;
  loading = false;

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const auth = await isAuthenticated();
    if (this._isMounted) {
      this.loading = false;
      this.setState({ authenticated: auth });
    }
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.loading) {
      return <Loading />;
    }
    if (this.state.authenticated) {
      return (
        <Header>
          <Logo href="/">Logo</Logo>
          <Title>Nome do blog</Title>
          <MenuButton href="/articles">Articles</MenuButton>
          <MenuButton href="/members">Members</MenuButton>
          <MenuButton href="/">Logout</MenuButton>
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
