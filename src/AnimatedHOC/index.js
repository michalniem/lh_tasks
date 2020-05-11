import React from "react";

import "./index.css";

import Animated from "./Animated";
import WithAnimation from "./WithAnimation";

function SomeComponent() {
  return (
    <div className="animatedElement">
      I'm created by WithAnimation Higher Order Component.
    </div>
  );
}

const SomeComponentWithAnimation = WithAnimation(SomeComponent);

const fadeMotionOptions = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 30, opacity: 0 },
  transition: { duration: 1 } 
};

export default function index() {
  return (
    <div style={{ height: "200vh" }}>
      <div style={{ height: "100vh" }} />
      <SomeComponentWithAnimation />
      <Animated
        options={{
          animation: fadeMotionOptions,
          intersection: {
            rootMargin: "0px 0px -100px 0px",
          },
        }}
      >
        <div className="animatedElement">
          I'm wrapped into Animated component and render as children. I have
          fade in from left, fade out from right animation.
        </div>
      </Animated>
      <Animated
        options={{
          intersection: {
            rootMargin: "0px 0px -100px 0px",
          },
        }}
      >
        <div className="animatedElement">
          I'm wrapped into Animated component and render as children. I have
          default animation.
        </div>
      </Animated>
    </div>
  );
}
