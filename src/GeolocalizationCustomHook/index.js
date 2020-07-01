import React from "react";

import useGeo from "../GeolocalizationCustomHook/hooks/useGeo"

function Index() {
  const [data, toggle] = useGeo();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>Geolocalization info: {JSON.stringify(data.data)}</span>
      <span>Is watching position: {JSON.stringify(data.isWatching)}</span>
      <span>Error message: {JSON.stringify(data.error)}</span>
      <button onClick={toggle} style={{ width: "150px" }}>Toggle listening</button>
    </div>
  );
}

export default Index;
