import { useEffect, useState } from 'react';
import { LocationType } from '../type';

const useGeoLocation = () => {
  const [location, setLocation] = useState<LocationType>({
    lat: null,
    lng: null,
  });

  const onSuccess: (location: GeolocationPosition) => void = (
    location: GeolocationPosition
  ) => {
    const { latitude, longitude } = location.coords;
    setLocation({
      lat: latitude,
      lng: longitude,
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess);
  }, []);

  return location;
};

export default useGeoLocation;
