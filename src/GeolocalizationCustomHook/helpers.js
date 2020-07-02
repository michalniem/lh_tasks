export const serializeGeolocalizationToObject = ({ coords, timestamp }) => ({
  coords: {
    accuracy: coords.accuracy,
    altitude: coords.altitude,
    altitudeAccuracy: coords.altitudeAccuracy,
    heading: coords.heading,
    latitude: coords.latitude,
    longitude: coords.longitude,
    speed: coords.speed,
  },
  timestamp,
});
