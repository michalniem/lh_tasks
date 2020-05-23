import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import LoginForm from "../LoginForm";
import ErrorMessage from "../ErrorMessage";

export function WithAuthedUser(Component) {
  return ({ auth }) => {
    if (auth.error) return <ErrorMessage target={Component.name} />
    return auth.isAuthed ? <Component /> : <LoginForm />;
  };
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

const enhances = compose(connect(mapStateToProps), WithAuthedUser);

export default (Component) => enhances(Component);
