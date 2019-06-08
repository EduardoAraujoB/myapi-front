import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Articles from "./pages/Articles";

class Routes extends Component {
  state = {
    authenticate: "",
    pages: {
      Home,
      Articles,
      SignIn,
      SignUp,
      Members: ""
    }
  };
  async componentWillMount() {
    const auth = await isAuthenticated();
    console.log(auth);
    this.setState({ authenticate: auth });
    console.log(this.state.authenticate);
    if (this.state.authenticate === true) {
      this.setState({ pages: { Members: Home } });
    } else {
      this.setState({ pages: { Members: SignIn } });
    }
  }
  render() {
    const { pages } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={pages.Home} />
          <Route path="/articles" component={pages.Articles} />
          <Route path="/signin" component={pages.SignIn} />
          <Route path="/signup" component={pages.SignUp} />
          <Route path="/members" component={pages.Members} />
          <Route exact path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
