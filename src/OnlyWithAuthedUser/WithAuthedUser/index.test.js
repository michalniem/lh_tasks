import React from "react";
import { shallow } from "enzyme";

import { WithAuthedUser } from "./index";
import authSlice from "../../modules/auth";

const NoopComponent = () => <div />;

const { reducer, actions, initialState } = authSlice;

const testCases = {
  withAuthedUser: [
    {
      description:
        "should render wrapped component if data structure is correct and user is authed",
      props: {
        auth: {
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
        auth: initialState,
      },
      searchItem: "Connect(LoginForm)",
    },
    {
      description:
        "should render ErrorMessage component if data structure is not correct",
      props: {
        auth: {
          ...initialState,
          error: true,
        },
      },
      searchItem: "ErrorMessage",
    },
  ],
  authSlice: [
    {
      description:
        "should return initial state if action is unknown",
      action: () => ({ type: "auth/unknownAction" }),
      payload: null,
      expectedState: initialState,
    },
    {
      description:
        "should set isLoading flag to true, after dispatch logInStart action",
      action: actions.logInStart,
      payload: null,
      expectedState: {
        ...initialState,
        isLoading: true,
      },
    },
    {
      description:
        "should set isAuthed flag to true, after dispatch logInSuccess action with correct payload",
      action: actions.logInSuccess,
      payload: {
        email: "exampleEmail",
        password: "examplePassword"
      },
      expectedState: {
        ...initialState,
        user: {
          email: "exampleEmail",
          password: "examplePassword"
        },
        isAuthed: true,
      },
    },
    {
      description:
        "should set message error, after dispatch logInFailure action",
      action: actions.logInFailure,
      payload: {
        error: "exampleErrorMessage",
      },
      expectedState: {
        ...initialState,
        error: "exampleErrorMessage",
      },
    },
    {
      description:
        "should set isAuthed flag to false, after dispatch logOut action",
      action: actions.logOut,
      payload: null,
      expectedState: initialState,
    },
  ],
};

describe("WithAuthedUser", () => {
  const Component = WithAuthedUser(NoopComponent);
  testCases.withAuthedUser.forEach(({ description, props, searchItem }) => {
    test(description, () => {
      const wrapper = shallow(
        <Component auth={props.auth} />
      );
      expect(wrapper.find(searchItem)).toHaveLength(1);
    });
  });
});

describe("authSlice", () => {
  testCases.authSlice.forEach(
    ({ description, action, payload, expectedState }) => {
      test(description, () => {
        expect(reducer(initialState, action(payload))).toEqual(expectedState);
      });
    }
  );
});
