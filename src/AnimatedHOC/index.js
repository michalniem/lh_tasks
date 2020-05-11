import React from "react";

import "./index.css";

import Animated from "./Animated";
import WithAnimation from "./WithAnimation";

function SomeComponent() {
  return (
    <div className="animatedElement">
      I was created by WithAnimation Higher order component
    </div>
  );
}

const SomeComponentWithAnimation = WithAnimation(SomeComponent);

const fadeMotionOptions = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, delay: 0.5 },
};

export default function index() {
  return (
    <div style={{ height: "200vh" }}>
      <div style={{ height: "100vh" }} />
      <SomeComponentWithAnimation />
      <Animated
        options={{
          motion: fadeMotionOptions,
        }}
      >
        <div className="animatedElement">
          Fade from left. I was wrapped in Animated component and render as children.
        </div>
      </Animated>
      <Animated>
        <div className="animatedElement">
          I was wrapped in Animated component and render as children
        </div>
      </Animated>
    </div>
  );
}
