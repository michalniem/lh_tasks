import React from "react";
import { mount } from "enzyme";

import WithOutsideClick from "./index";

const ComponentForHocTest = ({ toggleWaitingOnClick, waitingOnClickOutside }) => {
  return (
    <div>
      <button data-test-id="outsideClick__trigger" onClick={toggleWaitingOnClick}>waitingOnClickOutside trigger</button>
      {waitingOnClickOutside && <div data-test-id="outsideClick__component">I should be visible if waitingOnClickOutside is truthy</div>}
    </div>
  )
}

describe("WithOutsideClick", () => {
  const Component = WithOutsideClick(ComponentForHocTest);
  const wrapper = mount(<Component />);
  const triggerButton = wrapper.find("[data-test-id='outsideClick__trigger']");

  test("should render component without overlay in first load", () => {
    expect(wrapper.find("[data-test-id='outsideClick__overlay']").exists()).toBeFalsy();
  });

  test("should render conditional component and overlay after invoke toggleWaitingOnClick function", () => {
    triggerButton.simulate("click");

    expect(wrapper.find("[data-test-id='outsideClick__component']").exists()).toBeTruthy();
    expect(wrapper.find("[data-test-id='outsideClick__overlay']").exists()).toBeTruthy();
  });

  test("should not render conditional component and overlay after after invoking the toggleWaitingOnClick function again", () => {
    wrapper.find("[data-test-id='outsideClick__overlay']").simulate("click");

    expect(wrapper.find("[data-test-id='outsideClick__component']").exists()).toBeFalsy();
    expect(wrapper.find("[data-test-id='outsideClick__overlay']").exists()).toBeFalsy();
  });
});
