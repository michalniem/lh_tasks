import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import Animated from "./index";

const NoopComponent = () => <div />;

describe("Animated", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Animated>
        <NoopComponent />
      </Animated>
    );
  });

  test("should render correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
