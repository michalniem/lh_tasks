import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import WithAnimation from "./index";

import { setupIntersectionObserverMock } from "../__mocks__/intersectionObserverMock";

const NoopComponent = () => <div />;

describe("WithProgressBar", () => {
  beforeEach(() => {
    setupIntersectionObserverMock();
  });

  test("should change isIntersecting state to true", () => {
    const Component = WithAnimation(NoopComponent)();
    const wrapper = shallow(<Component />);

    const instance = wrapper.instance();
    instance.observerCallback({ isIntersecting: true });

    expect(wrapper.state("isIntersecting")).toBeTruthy();
  });

  test("should change isIntersecting state after observerCallback invoke", () => {
    const Component = WithAnimation(NoopComponent)();
    const wrapper = shallow(<Component />);

    const instance = wrapper.instance();
    instance.observerCallback({ isIntersecting: true });

    expect(wrapper.state("isIntersecting")).toBeTruthy();
  });

  test("should set animate variant to enter if isIntersecting state is truthy", () => {
    const Component = WithAnimation(NoopComponent)();
    const wrapper = shallow(<Component />);
    wrapper.setState({ isIntersecting: true });
    const animationVariant = wrapper
      .find("[data-test-id='animated_element']")
      .prop("animate")

    expect(animationVariant).toEqual("enter");
  });

  test("should set animate variant to exit if isIntersecting state is falsy", () => {
    const Component = WithAnimation(NoopComponent)();
    const wrapper = shallow(<Component />);
    wrapper.setState({ isIntersecting: false });
    const animationVariant = wrapper
      .find("[data-test-id='animated_element']")
      .prop("animate")

    expect(animationVariant).toEqual("exit");
  });

  test("should render correctly", () => {
    const Component = WithAnimation(NoopComponent)();
    const wrapper = shallow(<Component />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
