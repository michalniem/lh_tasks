import React, { useState } from "react";
import { connect } from "react-redux";

import "./style.scss";

import { logIn } from "../WithAuthedUser/slice";

const initialState = {
  email: "",
  password: "",
};

export function LoginForm({ logIn }) {
  const [formValue, setFormValue] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    logIn(formValue);
    setFormValue(initialState);
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
        className="form__input"
        value={formValue.password}
        onChange={handleInputChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logIn: (payload) => dispatch(logIn(payload)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
