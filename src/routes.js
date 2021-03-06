import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Articles from "./pages/Articles";
import ArticleCreate from "./pages/Articles/ArticleCreate";
import ArticleShow from "./pages/Articles/ArticleShow";
import ArticleEdit from "./pages/Articles/ArticleEdit";
import Members from "./pages/Members";
import MemberProfile from "./pages/Members/MemberProfile";
import MemberProfileEdit from "./pages/Members/MemberProfileEdit";
import Logout from "./pages/Logout";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={Articles} />
      <Route path="/articles/create" component={ArticleCreate} />
      <Route exact path="/articles/:id" component={ArticleShow} />
      <Route path="/articles/edit/:id" component={ArticleEdit} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/logout" component={Logout} />
      <Route exact path="/members" component={Members} />
      <Route exact path="/members/:id" component={MemberProfile} />
      <Route exact path="/members/edit/:id" component={MemberProfileEdit} />
      <Route exact path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
