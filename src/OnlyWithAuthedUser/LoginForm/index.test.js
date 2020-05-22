import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { LoginForm } from "./index";

describe("LoginForm", () => {
  const wrapper = shallow(<LoginForm />);

  test("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("should set proper input value after input change", () => {
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");

    emailInput.simulate("change", {
      target: { name: "email", value: "example@example.com" },
    });
    passwordInput.simulate("change", {
      target: { name: "password", value: "examplePassword" },
    });

    expect(emailInput.get(0).props.value).toEqual("example@example.com");
    expect(passwordInput.get(0).props.value).toEqual("examplePassword");
  });

  // test("should set width style based on progress state", () => {
  //   const progressBarStyle = wrapper
  //     .find("[data-test-id='progressBar']")
  //     .prop("style");
  //   expect(progressBarStyle).toHaveProperty("width", "50%");
  // });

  // test("should render correctly", () => {
  //   expect(toJson(wrapper)).toMatchSnapshot();
  // });
});
