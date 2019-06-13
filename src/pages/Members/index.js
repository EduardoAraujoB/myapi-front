import React from "react";
import { Redirect } from "react-router-dom";
import Loading from "../../components/Loading";
import Menu from "../../components/Menu";
import { withAuthentication } from "../../components/hocs/Authentication";

const Members = ({ authentication }) => {
  if (authentication.loading) {
    return <Loading />;
  }
  if (authentication.authenticated) {
    return (
      <>
        <Menu auth={authentication.authenticated} />
        <h1>Autenticado</h1>
      </>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default withAuthentication()(Members);
