import L from "leaflet";

// Devices Data
export const API_URL =
  "https://mocki.io/v1/779f4db1-1093-4cec-af8b-c79312a42d22";

// Map icons

export const iconUnavailable = new L.icon({
  iconUrl: require("../assets/iconred.png"),
  iconSize: [35, 40],
});
export const iconAvailable = new L.icon({
  iconUrl: require("../assets/iconblue.png"),
  iconSize: [35, 40],
});
