import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'

import authSlice from "./modules/auth";

const rootReducer = combineReducers({
  auth: authSlice.reducer
});

export default configureStore({
  reducer: rootReducer
});
