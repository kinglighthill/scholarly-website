import { getRequest } from "./default.service";

export const getUserLocation = (lat: number, long: number) => {
  const encodedURL = encodeURIComponent(`${lat},${long}`);
  return getRequest(`https://api.opencagedata.com/geocode/v1/json?q=${encodedURL}&key=2906e0a8699c480baa0ea9c9d94e4015`);
}