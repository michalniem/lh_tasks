import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'

import userAuthenticationReducer from "../OnlyWithAuthedUser/WithAuthedUser/slice";

const rootReducer = combineReducers({
  userAuthentication: userAuthenticationReducer
});

export default configureStore({
  reducer: rootReducer
});
