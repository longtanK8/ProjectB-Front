import axios from "axios";

const FACILITIES_BASE_API_URL = "http://localhost:8080/api/hotel/v1";
export function getRooms() {
  return axios.get(FACILITIES_BASE_API_URL + "/rooms");
}
export function getServices() {
  return axios.get(FACILITIES_BASE_API_URL + "/services");
}
