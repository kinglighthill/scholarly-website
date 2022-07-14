import { useEffect, useState } from "react";
import { getUserLocation } from "../services/userlocation.service";
import { UserLocation } from "../types/hooks/use_location";

export default function useLocation() {
  const [address, setAddress] = useState<string>("");
  const [userLocation, setUserLocation] = useState<UserLocation>({
    loaded: false,
    coordinates: { lat: 0, long: 0 }
  });

  // Get the longitude and latitude of user's current location
  useEffect(() => {
    // If geolocation is not supported on the user's device or user has denied access to location.
    if (!("geolocation" in navigator)) {
      console.log("Geolocation not supported");
      setUserLocation({ ...userLocation, loaded: false })
    }
    else {
      navigator.geolocation.getCurrentPosition(
        location => setUserLocation({
          loaded: true,
          coordinates: {
            lat: location.coords.latitude,
            long: location.coords.longitude
          }
        }),
        error => {
          console.log(error);
          setUserLocation({ ...userLocation, loaded: false })
        }
      )
    }
  }, [])
  
  // Reverse geocoding to convert user's location in coordinates to address format.
  useEffect(() => {
    if (userLocation.loaded) {
      getUserLocation(userLocation.coordinates.lat, userLocation.coordinates.long)
      .then(response => response.json())
      .then(info => {
          const { county: city, state, country } = info.results[0].components;
          setAddress(`${city}, ${state}, ${country}`);
      }).catch(error => console.log(error));
    }
  }, [userLocation])
  
  return ({
    address,
    setAddress
  })
}
