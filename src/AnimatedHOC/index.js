import React, { Fragment } from "react";

import Animated from "./Animated";
import WithAnimation from "./WithAnimation";

function SomeComponent({ isVisible }) {
  return <div>I was created by WithAnimation Higher order component</div>;
}

const SomeComponentWithAnimation = WithAnimation(SomeComponent);

export default function index() {
  return (
    <div>
      <div style={{ height: "300vh" }} />
      <SomeComponentWithAnimation />
      <Animated>
        <div>Example text</div>
      </Animated>
    </div>
  );
}
