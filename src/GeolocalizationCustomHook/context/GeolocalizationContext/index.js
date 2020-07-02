import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import { serializeGeolocalizationToObject } from "../../helpers";

export const GeolocalizationContext = createContext();

const defaultGeolocalizationState = {
  coords: {
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
  },
  timestamp: null,
};

function GeolocalizationProvider({ children }) {
  const [data, setData] = useState(defaultGeolocalizationState);
  const [isWatching, setWatching] = useState(false);
  const [error, setError] = useState(null);
  const watcherIdRef = useRef(null);

  const onSucceededChangePosition = useCallback((position) => {
    setData(serializeGeolocalizationToObject(position));
  }, []);

  const onFailedChangePosition = useCallback((error) => {
    setError(error.message);
  }, []);

  const toggleGeolocalizationListening = useCallback(() => {
    setWatching((prevWatchingState) => !prevWatchingState);
  }, []);

  useEffect(() => {
    const geolocalization = navigator.geolocation;
    if (!geolocalization) {
      setError("Geolocation is not supported");
      return;
    }
    if (error) setData(defaultGeolocalizationState);
    if (isWatching) {
      watcherIdRef.current = geolocalization.watchPosition(
        onSucceededChangePosition,
        onFailedChangePosition
      );
    } else {
      setData(defaultGeolocalizationState);
    }
    return () => geolocalization.clearWatch(watcherIdRef.current);
  }, [isWatching, error]);

  return (
    <GeolocalizationContext.Provider
      value={{
        geolocalizationData: {
          data,
          isWatching,
          error,
        },
        toggleGeolocalizationListening,
      }}
    >
      {children}
    </GeolocalizationContext.Provider>
  );
}

export default GeolocalizationProvider;
