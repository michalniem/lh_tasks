import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
  },
  isAuthed: false,
  isLoading: false,
  error: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logInStart(state) {
      state.isLoading = true;
    },
    logInSuccess(state, action) {
      const { email, password } = action.payload;

      state.user = { email, password };
      state.isLoading = false;
      state.isAuthed = true;
    },
    logInFailure(state, action) {
      const { error } = action.payload;

      state.error = error;
      state.user = {
        email: "",
        password: "",
      };
      state.isLoading = false;
      state.isAuthed = false;
    },
    logOut(state) {
      state.user = {
        email: "",
        password: "",
      };
      state.isLoading = false;
      state.isAuthed = false;
    },
  },
});

const selectors = {
  selectLoadingState: state => state.isLoading,
  selectAuthedState: state => state.isAuthed,
  selectError: state => state.error,
  selectUser: state => state.user,
}

export default {
  initialState,
  reducer: auth.reducer,
  actions: auth.actions,
  selectors
}

