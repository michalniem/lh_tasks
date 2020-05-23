import React from "react";

import WithAuthedUser from "./WithAuthedUser";

function SomeComponent() {
  return <div>Some Component</div>;
}

export default WithAuthedUser(SomeComponent);
