import React from "react";

import Animated from "./Animated";

function SomeComponent() {
  return <div>some text asasfdsfasdgdg gdsf gdfsg sdf g</div>;
}

export default function index() {
  return (
    <div>
      <div style={{ height: "300vh"}}/>
      <Animated>
        <SomeComponent />
      </Animated>
    </div>
  );
}
