import React from "react";
import { shallow } from "enzyme";

import { WithAuthedUser } from "./index";
import reducer, { logIn, logOut } from "./slice";

const NoopComponent = () => <div />;

const initialState = {
  user: {
    email: "",
    password: "",
  },
  isAuthed: false,
  hasIncorrectPayload: false,
};

const testCases = {
  withAuthedUser: [
    {
      description:
        "should render wrapped component if data structure is correct and user is authed",
      props: {
        userAuthentication: {
          ...initialState,
          user: {
            email: "exampleEmail",
            password: "examplePassword",
          },
          isAuthed: true,
        },
      },
      searchItem: "NoopComponent",
    },
    {
      description:
        "should render LoginForm component if data structure is correct and user is not authed",
      props: {
        userAuthentication: initialState,
      },
      searchItem: "Connect(LoginForm)",
    },
    {
      description:
        "should render ErrorMessage component if data structure is not correct",
      props: {
        userAuthentication: {
          ...initialState,
          hasIncorrectPayload: true,
        },
      },
      searchItem: "ErrorMessage",
    },
  ],
  userAuthenticationSlice: [
    {
      description:
        "should return state with truthy isAuthed flag flag after dispatch logIn action with correct payload structure",
      action: logIn,
      payload: {
        email: "exampleEmail",
        password: "examplePassword",
      },
      expectedState: {
        user: {
          email: "exampleEmail",
          password: "examplePassword",
        },
        isAuthed: true,
        hasIncorrectPayload: false,
      },
    },
    {
      description:
        "should return state with truthy hasIncorrectPayload flag after dispatch logIn action with incorrect payload structure",
      action: logIn,
      payload: {
        name: "exampleName",
        surname: "exampleSurname",
      },
      expectedState: {
        user: {
          name: "exampleName",
          surname: "exampleSurname",
        },
        isAuthed: false,
        hasIncorrectPayload: true,
      },
    },
    {
      description:
        "should return state with falsy isAuthed flag after dispatch logOut action",
      action: logOut,
      payload: {},
      expectedState: initialState
    },
  ],
};

describe("WithAuthedUser", () => {
  const Component = WithAuthedUser(NoopComponent);
  testCases.withAuthedUser.forEach(({ description, props, searchItem }) => {
    test(description, () => {
      const wrapper = shallow(
        <Component userAuthentication={props.userAuthentication} />
      );
      expect(wrapper.find(searchItem)).toHaveLength(1);
    });
  });
});

describe("userAuthenticationSlice", () => {
  testCases.userAuthenticationSlice.forEach(
    ({ description, action, payload, expectedState }) => {
      test(description, () => {
        expect(reducer(initialState, action(payload))).toEqual(expectedState);
      });
    }
  );
});
