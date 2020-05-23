import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import WithAnimation from "./index";

import { setupIntersectionObserverMock } from "../__mocks__/intersectionObserverMock";

const NoopComponent = () => <div />;

describe("WithProgressBar", () => {
  let wrapper;
  const observeSpy = jest.fn();
  const unobserveSpy = jest.fn();

  beforeAll(() => {
    setupIntersectionObserverMock({
      observe: observeSpy,
      unobserve: unobserveSpy,
    });
  });

  beforeEach(() => {
    const Component = WithAnimation(NoopComponent)();
    wrapper = shallow(<Component />);
  });

  test("should change isIntersecting state after observerCallback invoke", () => {
    const instance = wrapper.instance();
    instance.observerCallback({ isIntersecting: true });

    expect(wrapper.state("isIntersecting")).toBeTruthy();
  });

  test("should set animate variant to enter if isIntersecting state is truthy", () => {
    wrapper.setState({ isIntersecting: true });
    const animationVariant = wrapper
      .find("[data-test-id='animatedElement']")
      .prop("animate");

    expect(animationVariant).toEqual("enter");
  });

  test("should set animate variant to exit if isIntersecting state is falsy", () => {
    wrapper.setState({ isIntersecting: false });
    const animationVariant = wrapper
      .find("[data-test-id='animatedElement']")
      .prop("animate");

    expect(animationVariant).toEqual("exit");
  });

  test("should invoke observe function from IntersectionObserver after mounting component", () => {
    const instance = wrapper.instance();
    const mockRef = { current: true }

    instance.rootRef = mockRef;
    instance.componentDidMount();

    expect(observeSpy).toHaveBeenCalledWith(mockRef.current);
  });

  test("should invoke unobserve function from IntersectionObserver after unmounting component", () => {
    const instance = wrapper.instance();
    const mockRef = { current: true };

    instance.rootRef = mockRef;
    instance.componentWillUnmount();

    expect(unobserveSpy).toHaveBeenCalledWith(mockRef.current);
  });

  test("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
