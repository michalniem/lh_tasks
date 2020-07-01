import React, { useContext } from 'react'
import { GeolocalizationContext } from "../../context/GeolocalizationContext";

function useGeo() {
  const { geolocalizationData, toggleGeolocalizationListening } = useContext(GeolocalizationContext);
  return [geolocalizationData, toggleGeolocalizationListening]
}

export default useGeo;
