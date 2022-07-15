import { getRequest } from "./default.service";

export const getUserLocation = (lat: number, long: number) => {
  const encodedURL = encodeURIComponent(`${lat},${long}`);
  return getRequest(`https://api.opencagedata.com/geocode/v1/json?q=${encodedURL}&key=81235eaee3b340a2a988ff1c474afde3`);
}