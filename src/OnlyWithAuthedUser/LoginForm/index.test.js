import React from "react";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { LoginForm } from "./index";

describe("LoginForm", () => {
  const logInStartSpy = jest.fn();
  const logInSuccessSpy = jest.fn();
  const logInFailureSpy = jest.fn();
  const submitEventMock = { preventDefault: () => {}};

  const defaultProps = {
    logInStart: logInStartSpy,
    logInSuccess: logInSuccessSpy,
    logInFailure: logInFailureSpy,
  };

  const shallowWrapper = shallow(<LoginForm {...defaultProps} />);
  const mountWrapper = mount(<LoginForm {...defaultProps} />);
  const emailInput = mountWrapper.find("#email");
  const passwordInput = mountWrapper.find("#password");
  const form = mountWrapper.find("#login_form");

  test("should render correctly", () => {
    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });

  test("should set proper input value after input change", () => {
    emailInput.simulate("change", {
      target: { name: "email", value: "example@example.com" },
    });
    passwordInput.simulate("change", {
      target: { name: "password", value: "examplePassword" },
    });

    expect(emailInput.getDOMNode().value).toEqual("example@example.com");
    expect(passwordInput.getDOMNode().value).toEqual("examplePassword");
  });

  test("should invoke logInStart function", () => {

    form.simulate("submit", submitEventMock);

    expect(logInStartSpy).toHaveBeenCalled();
  });

  test("should invoke logInSuccess function if formValue state has correct structure", () => {
    emailInput.simulate("change", {
      target: { name: "email", value: "example@example.com" },
    });
    passwordInput.simulate("change", {
      target: { name: "password", value: "examplePassword" },
    });

    form.simulate("submit", submitEventMock);
    expect(logInSuccessSpy).toHaveBeenCalledWith({ email: "example@example.com", password: "examplePassword" });
  })

  test("should invoke logInFailure function if formValue state has not correct structure", () => {
    emailInput.simulate("change", {
      target: { name: "name", value: "examplName" },
    });
    passwordInput.simulate("change", {
      target: { name: "surname", value: "exampleSurname" },
    });

    form.simulate("submit", submitEventMock);
    expect(logInFailureSpy).toHaveBeenCalledWith({ error: "Payload doesn't match" });
  })
});
