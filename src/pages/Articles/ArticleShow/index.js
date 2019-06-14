import React, { Component } from "react";

import { withAuthentication } from "../../../components/hocs/Authentication";
import Loading from "../../../components/Loading";
import Menu from "../../../components/Menu";
import api from "../../../services/api";

class ArticleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null
    };
  }
  _isMounted = false;
  loading = false;
  loggedMember = null;

  componentWillMount = async () => {
    this._isMounted = true;
    this.loading = true;
    const article = await api.get(`/articles/${this.props.match.params.id}`);
    if (this._isMounted) {
      this.loading = false;
      this.setState({ article: article.data });
    }
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render() {
    if (this.loading || this.props.authentication.loading) {
      return <Loading />;
    }
    if (this.props.authentication.authenticated) {
      this.loggedMember = this.props.authentication.member._id;
    }
    let author = this.state.article.member._id;
    return (
      <>
        <Menu auth={this.props.authentication.authenticated} />
        {this.loggedMember === author ? (
          <h1>Voce é o autor desse artigo</h1>
        ) : null}
      </>
    );
  }
}

export default withAuthentication()(ArticleShow);
