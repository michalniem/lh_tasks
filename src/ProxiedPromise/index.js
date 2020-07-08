import React, { useEffect } from "react";

import ProxiedPromise from "./proxiedPromise";

const proxiedPromise = new ProxiedPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

function Index() {
  useEffect(() => {
    proxiedPromise
      .beforeThen((data) => {
        console.log("dane z beforeThen", data);
      })
      .then((res) => {
        console.log(res);
        return res;
      });
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Proxied Promise</div>
    </div>
  );
}

export default Index;
