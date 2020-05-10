import React from "react";

import { WithAnimation, Animated } from "./Animated";

function SomeComponent({ props }) {
  console.log(props);
  return <p>Blah Blah Blah</p>
}

const SomeComponentWithAnimation = WithAnimation(SomeComponent)

export default function index() {
  return (
    <div>
      <div style={{ height: "300vh"}}/>
      {/* <SomeComponentWithAnimation /> */}
      <Animated>
        <SomeComponent />
      </Animated>
    </div>
  );
}
