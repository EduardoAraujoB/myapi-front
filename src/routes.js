import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Articles from "./pages/Articles";
import Members from "./pages/Members";

class Routes extends Component {
  this_isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      pages: {
        Home,
        Articles,
        SignIn,
        SignUp,
        Members
      }
    };
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
