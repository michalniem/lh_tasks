import React from "react";
import { mount } from "enzyme";
import { createMemoryHistory } from 'history'
import { Router } from "react-router-dom";

import RefLinkProvider, { useRefLink } from ".";

const refLink1 = "ABCDE";
const refLink2 = "FGHIJ";

const entries = {
  urlWithoututRefLink: "/urlWithoututRefLink",
  refLink1: `/*?ref=${refLink1}`,
  refLink2: `/*?ref=${refLink2}`,
};

const ComponentForHookTest = () => {
  const refLink = useRefLink();
  return <div data-test-id="refLink_container">{refLink}</div>;
};

const WrapperComponent = () => {
  const history = createMemoryHistory();
  const handleChangeRoute = (route) => {
    history.push(route)
  }
  return (
    <Router history={history}>
      <RefLinkProvider>
        <ComponentForHookTest />
        {Object.keys(entries).map((entryKey) => (
          <button
            key={entryKey}
            data-test-id={entryKey}
            onClick={() => handleChangeRoute(entries[entryKey])}
          ></button>
        ))}
        <div data-test-id="refLink_location">{history.location.pathname}</div>
      </RefLinkProvider>
    </Router>
  );
};

const wrapper = mount(<WrapperComponent />);

describe("useRefLink", () => {
  test("should return empty string if url does not match to the pattern", () => {
    wrapper.find("[data-test-id='urlWithoututRefLink']").simulate("click");
    expect(wrapper.find("[data-test-id='refLink_container']").text()).toEqual("");
  });

  test("should return refLink value if url is matching to the pattern", () => {
    wrapper.find("[data-test-id='refLink1']").simulate("click");
    expect(wrapper.find("[data-test-id='refLink_container']").text()).toEqual(refLink1);
  });
});

describe("RefLinkProvider", () => {
  beforeAll(() => {
    localStorage.clear();
  });

  test("should check existing refLink in localStorage on first load", () => {
    wrapper.update();
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith("refLink");
  });

  test("should set new refLink in localStorage and redirect to hommepage", () => {
    wrapper.find("[data-test-id='refLink2']").simulate("click");

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith("refLink", JSON.stringify(refLink2));
    expect(wrapper.find("[data-test-id='refLink_location']").text()).toEqual("/");
  });
});
