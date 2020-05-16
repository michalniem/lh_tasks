import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import WithProgressBar from "./index";

const NoopComponent = () => <div />;

describe("WithProgressBar", () => {
  const Component = WithProgressBar(NoopComponent);
  const wrapper = shallow(<Component />);
  const instance = wrapper.instance();

  beforeEach(() => {
    const event = {
      target: {
        scrollTop: 1200,
        scrollHeight: 2800,
        clientHeight: 400,
      },
    };
    instance.handleScroll(event);
  });

  test("should change progress state with proper value", () => {
    expect(wrapper.state("progress")).toEqual(50);
  });

  test("should set width style based on progress state", () => {
    const progressBarStyle = wrapper
      .find("[data-test-id='progressBar']")
      .prop("style");
    expect(progressBarStyle).toHaveProperty("width", "50%");
  });

  test("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
