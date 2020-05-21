import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import LoginForm from "../LoginForm";
import ErrorMessage from "../ErrorMessage";

export function WithAuthedUser(Component) {
  return ({ userAuthentication }) => {
    if (userAuthentication.hasIncorrectPayload) {
      return (
        <ErrorMessage
          message={`Component ${Component.name} has incorrect payload`}
        />
      );
    }
    return userAuthentication.isAuthed ? <Component /> : <LoginForm />;
  };
}

const mapStateToProps = ({ userAuthentication }) => ({
  userAuthentication,
});

const enhances = compose(connect(mapStateToProps), WithAuthedUser);

export default (Component) => enhances(Component);
