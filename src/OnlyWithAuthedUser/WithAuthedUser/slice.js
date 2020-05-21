import { createSlice } from "@reduxjs/toolkit";
import { isMatchedObject } from "../helpers";

const initialState = {
  user: {
    email: "",
    password: "",
  },
  isAuthed: false,
  hasIncorrectPayload: false,
};

const userAuthenticationSlice = createSlice({
  name: "userAuthentication",
  initialState,
  reducers: {
    logIn(state, { payload }) {
      if (isMatchedObject(payload, initialState.user)) {
        state.isAuthed = true;
      } else {
        state.hasIncorrectPayload = true;
      }
      state.user = payload;
    },
    logOut(state) {
      state.user = initialState.user;
      state.isAuthed = false;
    },
  },
});

export const { logIn, logOut } = userAuthenticationSlice.actions;

export default userAuthenticationSlice.reducer;
