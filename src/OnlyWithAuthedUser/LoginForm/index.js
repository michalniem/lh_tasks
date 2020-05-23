import React, { useState } from "react";
import { connect } from "react-redux";

import "./style.scss";

import { isMatchedObject } from "../helpers";
import authSlice from "../../modules/auth";

const initialState = {
  email: "",
  password: "",
};

export function LoginForm({ logInStart, logInSuccess, logInFailure }) {
  const [formValue, setFormValue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    logInStart();
    if (isMatchedObject(formValue, initialState)) {
      logInSuccess(formValue);
    } else {
      logInFailure({ error: "Payload doesn't match" });
    }
    setFormValue(initialState);
  };

  return (
    <form onSubmit={handleFormSubmit} id="login_form">
      <label className="form__label" htmlFor="email">
        email
      </label>
      <input
        name="email"
        id="email"
        type="email"
        className="form__input"
        value={formValue.email}
        onChange={handleInputChange}
      />
      <label className="form__label" htmlFor="password">
        password
      </label>
      <input
        name="password"
        id="password"
        type="password"
        className="form__input"
        value={formValue.password}
        onChange={handleInputChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logInStart: () => dispatch(authSlice.actions.logInStart()),
  logInSuccess: (payload) => dispatch(authSlice.actions.logInSuccess(payload)),
  logInFailure: (payload) => dispatch(authSlice.actions.logInFailure(payload)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
