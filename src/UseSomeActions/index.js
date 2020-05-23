import React from "react";

import authSlice from "../modules/auth"
import useSomeActions from "./hooks/useSomeActions";

const { logInStart, logInSuccess, logInFailure } = authSlice.actions;

function SomeComponent() {
  const actions = useSomeActions([ logInStart, logInSuccess, logInFailure ]);
  console.log(actions);
  return <div>Some Component</div>;
}

export default SomeComponent;
